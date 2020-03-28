(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(18),u=t.n(c),i=t(9),l=t(10),s=t(24),o=t(25),d=t(1),m=t(2),f=t(12),p=t(5),E=t(53),y=t(54);function b(){var e=Object(d.a)(["\n  width: 100%;\n"]);return b=function(){return e},e}function v(){var e=Object(d.a)(["\n  display: inline-block;\n  padding: 0.5rem;\n  width: 10rem;\n  background: transparent;\n  border: 2px solid black;\n\n  &:hover {\n    font-weight: bold;\n    cursor: pointer;\n  }\n"]);return v=function(){return e},e}var O=m.a.button(v()),g=Object(m.a)(O)(b()),T=t(4);function A(){var e=Object(d.a)(["\n  outline: ",";\n  width: 7em;\n  height: 11em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return e},e}function h(){var e=Object(d.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 1em;\n  margin: 0;\n"]);return h=function(){return e},e}function R(){var e=Object(d.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3em;\n  margin: 0;\n"]);return R=function(){return e},e}var S=m.a.p(R()),j=m.a.p(h()),_=m.a.div(A(),(function(e){return e.isSelected?"2px solid #007fff":"1px solid grey"}));function C(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,"J"),a.a.createElement(j,null,n.color))}function N(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,n.rank),a.a.createElement(j,null,n.suit))}function I(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t;return a.a.createElement(_,{isSelected:r},n.kind===p.JOKER_CARD_KIND?a.a.createElement(C,{card:n}):a.a.createElement(N,{card:n}))}function w(){var e=Object(d.a)(["\n  all: unset;\n  cursor: pointer;\n"]);return w=function(){return e},e}function D(){var e=Object(d.a)(["\n   padding: 1em;\n"]);return D=function(){return e},e}function k(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return k=function(){return e},e}var P=m.a.div(k()),x=m.a.div(D()),M=m.a.button(w());function L(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(x,null,a.a.createElement(M,{onClick:function(){return t(e)}},a.a.createElement(I,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(P,null,r)}function H(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]);return H=function(){return e},e}var U=m.a.div(H());function Y(e){var n=e.playCards,t=e.cardsInHand,c=e.isServerRequestingCards,u=Object(r.useState)([]),i=Object(f.a)(u,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(T.a)({},e,{isSelected:!1})}));s(e)}),[t]),a.a.createElement("div",null,a.a.createElement("h2",null,"Hand"),a.a.createElement(L,{cards:l,handleSelect:function(e){s(l.map((function(n){return Object(p.cardEquals)(n,e)?Object(T.a)({},n,{isSelected:!n.isSelected}):n})))}}),a.a.createElement("br",null),a.a.createElement(U,null,c&&a.a.createElement(g,{type:"button",onClick:function(){var e=l.filter((function(e){return e.isSelected}));n(e)}},"Play Cards")))}function B(){var e=Object(d.a)(["\n  background-color: rgba(227, 38, 54, 0.9);\n  color: white;\n  border-radius: 0.2em;\n  font-size: 0.75em;\n  padding: 0.1rem;\n  font-weight: bold;\n"]);return B=function(){return e},e}function G(){var e=Object(d.a)(["\n  text-decoration-line: ",";\n"]);return G=function(){return e},e}var q=m.a.span(G(),(function(e){return e.isOut?"line-through":"none"})),W=m.a.span(B());function F(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{isOut:n.isOut},n.isServerRequestingCards&&a.a.createElement("span",null,"--\x3e")," ",n.id," ",a.a.createElement(W,null,"Penalty:",t)))}function J(){var e=Object(d.a)(["\n  padding: 0;\n  list-style-type: none;\n"]);return J=function(){return e},e}var K=m.a.ul(J());function Q(e){var n=e.players.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(F,{player:e}))}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement(K,null,n))}function z(){var e=Object(d.a)(["\n  text-align: center;\n"]);return z=function(){return e},e}function V(){var e=Object(d.a)(["\n   padding-right: 1em;\n"]);return V=function(){return e},e}function $(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return $=function(){return e},e}var X=m.a.div($()),Z=m.a.div(V()),ee=m.a.p(z());function ne(e){var n=e.turn,t=n.cards.map((function(e){return a.a.createElement(Z,null,a.a.createElement(I,{card:e}))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(X,null,t),a.a.createElement(ee,null,n.playerId))}function te(){var e=Object(d.a)(["\n   padding-right: 1em;\n"]);return te=function(){return e},e}function re(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return re=function(){return e},e}var ae=m.a.div(re()),ce=m.a.div(te());function ue(e){var n=e.turns.map((function(e){return a.a.createElement(ce,null,a.a.createElement(ne,{turn:e}))}));return a.a.createElement(ae,null,n)}function ie(e){var n=e.playedTurns.filter((function(e){return e.valid}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Stack"),a.a.createElement(ue,{turns:n}))}var le=Object(i.b)((function(e,n){return{cardsInHand:e.game.cardsInHand,players:e.game.players,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)}}}))((function(e){var n=e.players,t=e.playedTurns,r=e.cardsInHand,c=e.playCards,u=e.playerState;return a.a.createElement("div",null,a.a.createElement(Q,{players:n}),a.a.createElement(ie,{playedTurns:t}),a.a.createElement(Y,{isServerRequestingCards:u.isServerRequestingCards,cardsInHand:r,playCards:c}))})),se=t(19);function oe(e,n){return e.filter((function(e){return e.playerId===n}))}function de(e,n){return e.some((function(e){return e.id===n}))}function me(e,n){return e.some((function(e){return e===n}))}function fe(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(p.cardEquals)(e,n)}))}))}var pe={isRunning:!1,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[]},Ee={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1};var ye={players:[]};function be(e){return e.next({name:p.MessageName.START_GAME})}function ve(e,n){return e.next({name:p.MessageName.PLAY_CARDS,data:n})}function Oe(e,n){return e.next({name:p.MessageName.AUTHENTICATE,data:n})}function ge(e){var n=e.playerIds.map((function(e){return a.a.createElement("li",{key:e},e)}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement(K,null,n))}var Te=Object(i.b)((function(e){return{isGameStarted:e.game.isRunning,players:e.lobby.players,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,c=e.isGameStarted,u=e.players,i=Object(r.useState)(Object(y.a)("wss://agurk-server.herokuapp.com")),l=Object(f.a)(i,1)[0],s=function(e){return{sendStartGame:be.bind(null,e),sendPlayCards:ve.bind(null,e)}}(l);return Object(r.useEffect)((function(){return l.subscribe((function(e){return function(e,n){switch(e.name){case p.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case p.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players));case p.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error}),n({type:"RESET_GAME"});case p.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case p.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case p.MessageName.BROADCAST_START_CYCLE:return n({type:"START_CYCLE",orderedPlayerIds:e.data.orderedPlayers});case p.MessageName.BROADCAST_END_CYCLE:return n((t=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:t}));case p.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case p.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case p.MessageName.REQUEST_CARDS:return n({type:"REQUEST_CARDS"});case p.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t}(e,n)})),function(){return l.complete()}}),[l,n]),Object(r.useEffect)((function(){return l.pipe(Object(E.a)((function(e){return e.name===p.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:Oe.bind(null,e)}})(l).sendAuthenticate(t)})),function(){return l.complete()}}),[l,t]),a.a.createElement("div",{className:"Lobby"},c?a.a.createElement(le,{serverApi:s}):a.a.createElement(a.a.Fragment,null,a.a.createElement(ge,{playerIds:u}),a.a.createElement(O,{type:"button",onClick:s.sendStartGame},"Start Game")))})),Ae=t(21),he=t.n(Ae),Re=t(29),Se=t(30),je=t.n(Se),_e={subject:"",isAuthenticated:!1,token:"",error:void 0};function Ce(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function Ne(e){return{type:"AUTHENTICATION_ERROR",message:e}}function Ie(e){return je()(e).sub}function we(){var e=Object(d.a)(["\n  background-color: rgba(227, 38, 54, 0.9);\n  padding: 0.5rem;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n"]);return we=function(){return e},e}function De(){var e=Object(d.a)(["\n  display: block;\n  font-style: italic;\n  margin-bottom: 0.25rem;\n"]);return De=function(){return e},e}function ke(){var e=Object(d.a)(["\n  padding: 0.5rem;\n  width: 100%;\n  margin-bottom: 1rem;\n  display: block;\n"]);return ke=function(){return e},e}var Pe=m.a.input(ke()),xe=m.a.label(De()),Me=m.a.div(we());var Le=Object(i.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,c=Object(r.useState)(""),u=Object(f.a)(c,2),i=u[0],l=u[1],s=Object(r.useState)(""),o=Object(f.a)(s,2),d=o[0],m=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:function(e){var t;n((t={name:i,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(Re.a)(he.a.mark((function n(t){var r,a,c;return he.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,c=Ie(r.jwt),e(Ce(a,c)),e({type:"SET_PLAYER_ID",playerId:c}),n.next=11;break;case 10:e(Ne("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(Ne("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(xe,{htmlFor:"name"},"Player name"),a.a.createElement(Pe,{id:"name",value:i,onChange:function(e){l(e.currentTarget.value)},type:"text",name:"name",required:!0}),a.a.createElement(xe,{htmlFor:"name"},"Access token"),a.a.createElement(Pe,{id:"token",value:d,onChange:function(e){m(e.currentTarget.value)},type:"password",name:"token",required:!0}),a.a.createElement(g,{type:"submit"},"Log in")),a.a.createElement("br",null),t&&a.a.createElement(Me,null,t))}));function He(){var e=Object(d.a)(["\n  max-width: 50rem;\n  margin: auto;\n  padding: 2rem;\n"]);return He=function(){return e},e}var Ue=m.a.div(He());var Ye=Object(i.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(Ue,{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Agurk")),a.a.createElement("main",null,n?a.a.createElement(Te,null):a.a.createElement(Le,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=Object(l.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(T.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(T.a)({},e,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(T.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(T.a)({},e,{isRunning:!0,players:n.playerIds.map((function(e){return Object(T.a)({},Ee,{id:e})}))});case"END_GAME_SUCCESS":return Object(T.a)({},e,{players:e.players.map((function(e){return Object(T.a)({},e,{isGameWinner:e.id===n.winner,isServerRequestingCards:!1})})),validatedTurns:[],cardsInHand:[]});case"RESET_GAME":return Object(T.a)({},e,{players:e.players.map((function(e){return Object(T.a)({},e,{},Ee)}))},pe);case"END_GAME_ERROR":return e;case"SET_CARDS_IN_HAND":return Object(T.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(T.a)({},e,{validatedTurns:[].concat(Object(se.a)(e.validatedTurns),[n.turn]),cardsInHand:n.turn.playerId===e.playerId&&n.turn.valid?fe(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return e;case"END_ROUND":return Object(T.a)({},e,{players:e.players.map((function(e){return Object(T.a)({},e,{penalties:[].concat(Object(se.a)(e.penalties),Object(se.a)(oe(n.penalties,e.id))),isOut:de(n.outPlayers,e.id),isRoundWinner:e.id===n.winner})}))});case"START_CYCLE":return Object(T.a)({},e,{validatedTurns:[]});case"END_CYCLE":return Object(T.a)({},e,{players:e.players.map((function(e){return Object(T.a)({},e,{isCycleHighestTurnPlayer:me(n.highestTurnPlayerIds,e.id),isOut:de(n.outPlayers,e.id),isServerRequestingCards:!1})}))});case"REQUEST_CARDS":return e;case"START_PLAYER_TURN":return Object(T.a)({},e,{players:e.players.map((function(e){return Object(T.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(T.a)({},e,{players:n.playerIds});default:return e}}}),Ge=(t(49),Object(l.createStore)(Be,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(s.a))));u.a.render(a.a.createElement(i.a,{store:Ge},a.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6bbb5030.chunk.js.map