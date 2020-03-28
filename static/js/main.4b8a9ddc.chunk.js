(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(18),u=t.n(c),i=t(9),l=t(10),s=t(24),o=t(25),d=t(2),m=t(3),p=t(12),f=t(5),E=t(53),y=t(54);function b(){var e=Object(d.a)(["\n  all: unset;\n"]);return b=function(){return e},e}function v(){var e=Object(d.a)(["\n  width: 100%;\n"]);return v=function(){return e},e}function O(){var e=Object(d.a)(["\n  display: inline-block;\n  padding: 0.5rem;\n  width: 10rem;\n  background: transparent;\n  border: 2px solid black;\n\n  &:hover {\n    font-weight: bold;\n  }\n"]);return O=function(){return e},e}var T=m.a.button(O()),g=Object(m.a)(T)(v()),A=m.a.button(b()),R=t(4);function S(){var e=Object(d.a)(["\n  outline: ",";\n  width: 8em;\n  height: 13em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return e},e}function h(){var e=Object(d.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 1em;\n  margin: 0;\n"]);return h=function(){return e},e}function j(){var e=Object(d.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3em;\n  margin: 0;\n"]);return j=function(){return e},e}var _=m.a.p(j()),C=m.a.p(h()),N=m.a.div(S(),(function(e){return e.isSelected?"2px solid #007fff":"1px solid grey"}));function I(e){var n=e.card;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,"J"),r.a.createElement(C,null,n.color))}function D(e){var n=e.card;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,n.rank),r.a.createElement(C,null,n.suit))}function k(e){var n=e.card,t=e.isSelected,a=void 0!==t&&t;return r.a.createElement(N,{isSelected:a},n.kind===f.JOKER_CARD_KIND?r.a.createElement(I,{card:n}):r.a.createElement(D,{card:n}))}function w(){var e=Object(d.a)(["\n   padding: 1em;\n"]);return w=function(){return e},e}function P(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return P=function(){return e},e}var M=m.a.div(P()),x=m.a.div(w());function L(e){var n=e.cards,t=e.handleSelect,a=n.map((function(e){return r.a.createElement(x,null,r.a.createElement(A,{onClick:function(){return t(e)}},r.a.createElement(k,{card:e,isSelected:e.isSelected})))}));return r.a.createElement(M,null,a)}function H(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]);return H=function(){return e},e}var U=m.a.div(H());function Y(e){var n=e.playCards,t=e.cardsInHand,c=e.isServerRequestingCards,u=Object(a.useState)([]),i=Object(p.a)(u,2),l=i[0],s=i[1];return Object(a.useEffect)((function(){var e=t.map((function(e){return Object(R.a)({},e,{isSelected:!1})}));s(e)}),[t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Hand"),r.a.createElement(L,{cards:l,handleSelect:function(e){s(l.map((function(n){return Object(f.cardEquals)(n,e)?Object(R.a)({},n,{isSelected:!n.isSelected}):n})))}}),r.a.createElement("br",null),r.a.createElement(U,null,c&&r.a.createElement(g,{type:"button",onClick:function(){var e=l.filter((function(e){return e.isSelected}));n(e)}},"Play Cards")))}function B(){var e=Object(d.a)(["\n  background-color: rgba(227, 38, 54, 0.9);\n  color: white;\n  border-radius: 0.2em;\n  font-size: 0.75em;\n  padding: 0.1rem;\n  font-weight: bold;\n"]);return B=function(){return e},e}function G(){var e=Object(d.a)(["\n  textDecorationLine: ",";\n"]);return G=function(){return e},e}var q=m.a.span(G(),(function(e){return e.isOut?"line-through":"none"})),W=m.a.span(B());function F(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{isOut:n.isOut},n.isServerRequestingCards&&r.a.createElement("span",null,"--\x3e")," ",n.id," ",r.a.createElement(W,null,"Penalty:",t)))}function J(){var e=Object(d.a)(["\n  padding: 0;\n  list-style-type: none;\n"]);return J=function(){return e},e}var K=m.a.ul(J());function Q(e){var n=e.players.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(F,{player:e}))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Players"),r.a.createElement(K,null,n))}function z(){var e=Object(d.a)(["\n   padding: 1em;\n"]);return z=function(){return e},e}function V(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return V=function(){return e},e}var $=m.a.div(V()),X=m.a.div(z());function Z(e){var n=e.cards.map((function(e){return r.a.createElement(X,null,r.a.createElement(k,{card:e}))}));return r.a.createElement($,null,n)}function ee(e){var n=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Stack"),r.a.createElement(Z,{cards:n}))}var ne=Object(i.b)((function(e,n){return{cardsInHand:e.game.cardsInHand,players:e.game.players,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)}}}))((function(e){var n=e.players,t=e.playedTurns,a=e.cardsInHand,c=e.playCards,u=e.playerState;return r.a.createElement("div",null,r.a.createElement(Q,{players:n}),r.a.createElement(ee,{playedTurns:t}),r.a.createElement(Y,{isServerRequestingCards:u.isServerRequestingCards,cardsInHand:a,playCards:c}))})),te=t(19),ae={isRunning:!1,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[]},re={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1};function ce(e,n){return e.filter((function(e){return e.playerId===n}))}function ue(e,n){return e.some((function(e){return e.id===n}))}function ie(e,n){return e.some((function(e){return e===n}))}function le(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(f.cardEquals)(e,n)}))}))}var se={players:[]};function oe(e){return e.next({name:f.MessageName.START_GAME})}function de(e,n){return e.next({name:f.MessageName.PLAY_CARDS,data:n})}function me(e,n){return e.next({name:f.MessageName.AUTHENTICATE,data:n})}function pe(e){var n=e.playerIds.map((function(e){return r.a.createElement("li",{key:e},e)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Players"),r.a.createElement(K,null,n))}var fe=Object(i.b)((function(e){return{isGameStarted:e.game.isRunning,players:e.lobby.players,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,c=e.isGameStarted,u=e.players,i=Object(a.useState)(Object(y.a)("wss://agurk-server.herokuapp.com")),l=Object(p.a)(i,1)[0],s=function(e){return{sendStartGame:oe.bind(null,e),sendPlayCards:de.bind(null,e)}}(l);return Object(a.useEffect)((function(){return l.subscribe((function(e){return function(e,n){switch(e.name){case f.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case f.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players));case f.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error}),n({type:"RESET_GAME"});case f.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case f.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case f.MessageName.BROADCAST_START_CYCLE:return n({type:"START_CYCLE",orderedPlayerIds:e.data.orderedPlayers});case f.MessageName.BROADCAST_END_CYCLE:return n((t=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:t}));case f.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case f.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case f.MessageName.REQUEST_CARDS:return n({type:"REQUEST_CARDS"});case f.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t}(e,n)})),function(){return l.complete()}}),[l,n]),Object(a.useEffect)((function(){return l.pipe(Object(E.a)((function(e){return e.name===f.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:me.bind(null,e)}})(l).sendAuthenticate(t)})),function(){return l.complete()}}),[l,t]),r.a.createElement("div",{className:"Lobby"},c?r.a.createElement(ne,{serverApi:s}):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{playerIds:u}),r.a.createElement(T,{type:"button",onClick:s.sendStartGame},"Start Game")))})),Ee=t(21),ye=t.n(Ee),be=t(29),ve=t(30),Oe=t.n(ve),Te={subject:"",isAuthenticated:!1,token:"",error:void 0};function ge(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function Ae(e){return{type:"AUTHENTICATION_ERROR",message:e}}function Re(e){return Oe()(e).sub}function Se(){var e=Object(d.a)(["\n  background-color: rgba(227, 38, 54, 0.9);\n  padding: 0.5rem;\n  color: white;\n"]);return Se=function(){return e},e}function he(){var e=Object(d.a)(["\n  display: block;\n  font-style: italic;\n"]);return he=function(){return e},e}function je(){var e=Object(d.a)(["\n  padding: 0.5rem;\n  width: 100%;\n  margin-bottom: 1rem;\n  display: block;\n"]);return je=function(){return e},e}var _e=m.a.input(je()),Ce=m.a.label(he()),Ne=m.a.div(Se());var Ie=Object(i.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,c=Object(a.useState)(""),u=Object(p.a)(c,2),i=u[0],l=u[1],s=Object(a.useState)(""),o=Object(p.a)(s,2),d=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:function(e){var t;n((t={name:i,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(be.a)(ye.a.mark((function n(t){var a,r,c;return ye.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:a=n.sent,r=a.jwt,c=Re(a.jwt),e(ge(r,c)),e({type:"SET_PLAYER_ID",playerId:c}),n.next=11;break;case 10:e(Ae("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(Ae("Could not contact server. Try again later..."))}))})),e.preventDefault()}},r.a.createElement(Ce,{htmlFor:"name"},"Player name"),r.a.createElement(_e,{id:"name",value:i,onChange:function(e){l(e.currentTarget.value)},type:"text",name:"name",required:!0}),r.a.createElement(Ce,{htmlFor:"name"},"Access token"),r.a.createElement(_e,{id:"token",value:d,onChange:function(e){m(e.currentTarget.value)},type:"password",name:"token",required:!0}),r.a.createElement(T,{type:"submit"},"Log in")),r.a.createElement("br",null),t&&r.a.createElement(Ne,null,t))}));function De(){var e=Object(d.a)(["\n  max-width: 764px;\n  margin: auto;\n  padding: 2rem;\n"]);return De=function(){return e},e}var ke=m.a.div(De());var we=Object(i.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return r.a.createElement(ke,{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Agurk")),r.a.createElement("main",null,n?r.a.createElement(fe,null):r.a.createElement(Ie,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=Object(l.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(R.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(R.a)({},e,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(R.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(R.a)({},e,{isRunning:!0,players:n.playerIds.map((function(e){return Object(R.a)({},re,{id:e})}))});case"END_GAME_SUCCESS":return Object(R.a)({},e,{players:e.players.map((function(e){return Object(R.a)({},e,{isGameWinner:e.id===n.winner,isServerRequestingCards:!1})})),validatedTurns:[],cardsInHand:[]});case"RESET_GAME":return Object(R.a)({},e,{validatedTurns:[],players:e.players.map((function(e){return Object(R.a)({},e,{isServerRequestingCards:!1})})),cardsInHand:[],isRunning:!1});case"END_GAME_ERROR":return e;case"SET_CARDS_IN_HAND":return Object(R.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(R.a)({},e,{validatedTurns:[].concat(Object(te.a)(e.validatedTurns),[n.turn]),cardsInHand:n.turn.playerId===e.playerId&&n.turn.valid?le(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return e;case"END_ROUND":return Object(R.a)({},e,{players:e.players.map((function(e){return Object(R.a)({},e,{penalties:[].concat(Object(te.a)(e.penalties),Object(te.a)(ce(n.penalties,e.id))),isOut:ue(n.outPlayers,e.id),isRoundWinner:e.id===n.winner})}))});case"START_CYCLE":return Object(R.a)({},e,{validatedTurns:[]});case"END_CYCLE":return Object(R.a)({},e,{players:e.players.map((function(e){return Object(R.a)({},e,{isCycleHighestTurnPlayer:ie(n.highestTurnPlayerIds,e.id),isOut:ue(n.outPlayers,e.id)})}))});case"REQUEST_CARDS":return e;case"START_PLAYER_TURN":return Object(R.a)({},e,{players:e.players.map((function(e){return Object(R.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(R.a)({},e,{players:n.playerIds});default:return e}}}),Me=(t(49),Object(l.createStore)(Pe,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(s.a))));u.a.render(r.a.createElement(i.a,{store:Me},r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.4b8a9ddc.chunk.js.map