(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(18),c=t.n(u),i=t(10),l=t(11),o=t(24),s=t(25),d=t(1),m=t(2),f=t(9),p=t(5),b=t(53),E=t(54);function v(){var e=Object(m.a)(["\n  display: inline-block;\n  font-size: 1em;\n  height: 3em;\n  padding: 0.75em;\n  width: 100%;\n  background-color: transparent;\n  border: 2px solid ",";\n  font-weight: bold;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    cursor: pointer;\n  }\n"]);return v=function(){return e},e}var y=d.b.button(v(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),O=t(4);function g(){var e=Object(m.a)(["\n  outline: ",";\n  width: 4.5em;\n  height: 7em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return g=function(){return e},e}function T(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 0.7em;\n  margin: 0;\n"]);return T=function(){return e},e}function h(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3em;\n  margin: 0;\n"]);return h=function(){return e},e}var R=d.b.p(h()),j=d.b.p(T()),A=d.b.div(g(),(function(e){var n=e.isSelected,t=e.theme;return n?"2px solid ".concat(t.colors.accent):"1px solid ".concat(t.colors.text)}));function S(e){return e.kind===p.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function _(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,"J"),a.a.createElement(j,null,n.color))}function I(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,n.rank),a.a.createElement(j,null,n.suit))}function C(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t;return a.a.createElement(A,{isSelected:r},n.kind===p.JOKER_CARD_KIND?a.a.createElement(_,{card:n}):a.a.createElement(I,{card:n}))}function N(){var e=Object(m.a)(["\n  all: unset;\n  cursor: pointer;\n"]);return N=function(){return e},e}function k(){var e=Object(m.a)(["\n  padding: 0.75em;\n"]);return k=function(){return e},e}function w(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1em;\n"]);return w=function(){return e},e}var D=d.b.div(w()),M=d.b.div(k()),x=d.b.button(N());function L(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(M,{key:S(e)},a.a.createElement(x,{onClick:function(){return t(e)}},a.a.createElement(C,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(D,null,r)}function P(e){var n=e.timeoutInSeconds,t=Object(r.useState)(n),u=Object(f.a)(t,2),c=u[0],i=u[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return c-1<0?clearInterval(e):i(c-1)}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,c)}function H(){var e=Object(m.a)(["\n  color: ",";\n"]);return H=function(){return e},e}function U(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return U=function(){return e},e}var Y=d.b.div(U()),B=d.b.p(H(),(function(e){return e.theme.colors.muted}));function G(e){var n=e.handlePlayClick,t=e.turnTimeoutInMillis,r=e.turnRetriesLeft;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{type:"button",onClick:n},"Play Cards"," ",t&&a.a.createElement("span",null,"(",a.a.createElement(P,{timeoutInSeconds:t/1e3}),")")),a.a.createElement(B,null,r," ",1===r?"Retry left":"Retries left"))}function q(e){var n=e.playCards,t=e.cardsInHand,u=e.isServerRequestingCards,c=e.turnTimeoutInMillis,i=e.turnRetriesLeft,l=Object(r.useState)([]),o=Object(f.a)(l,2),s=o[0],d=o[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(O.a)({},e,{isSelected:!1})}));d(e)}),[t]),a.a.createElement("div",null,a.a.createElement("h2",null,"Hand"),a.a.createElement(L,{cards:s,handleSelect:function(e){d(s.map((function(n){return Object(p.cardEquals)(n,e)?Object(O.a)({},n,{isSelected:!n.isSelected}):n})))}}),u&&a.a.createElement(Y,null,a.a.createElement(G,{handlePlayClick:function(){var e=s.filter((function(e){return e.isSelected}));n(e)},turnTimeoutInMillis:c,turnRetriesLeft:i})))}function W(){var e=Object(m.a)(["\n  background-color: transparent;\n  border-radius: 0.25em;\n  font-size: 0.7em;\n  margin: 0 0.5em;\n  padding: 0.15em 0.25em;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return W=function(){return e},e}var F=d.b.span(W());function J(){var e=Object(m.a)(["\n  font-weight: normal;\n"]);return J=function(){return e},e}function K(){var e=Object(m.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return K=function(){return e},e}function z(){var e=Object(m.a)(["\n  text-decoration-line: ",";\n"]);return z=function(){return e},e}function Q(){var e=Object(m.a)(["\n  0% {\n    opacity: 0.7;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.7;\n  }\n"]);return Q=function(){return e},e}function V(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return V=function(){return e},e}var $=Object(d.b)(F)(V(),(function(e){return e.theme.colors.warn})),X=Object(d.c)(Q()),Z=d.b.span(z(),(function(e){return e.isOut?"line-through":"none"})),ee=Object(d.b)(Z)(K(),X),ne=Object(d.b)(Z)(J());function te(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,n.isServerRequestingCards?a.a.createElement(ee,{isOut:n.isOut},n.id):a.a.createElement(ne,{isOut:n.isOut},n.id),a.a.createElement($,null,"Penalty"," ",t))}function re(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return re=function(){return e},e}var ae=d.b.li(re());function ue(e){var n=e.players.map((function(e){return a.a.createElement(ae,{key:e.id},a.a.createElement(te,{player:e}))}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement("ul",null,n))}function ce(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  text-transform: uppercase;\n"]);return ce=function(){return e},e}function ie(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  text-transform: uppercase;\n"]);return ie=function(){return e},e}function le(){var e=Object(m.a)(["\n  text-align: center;\n"]);return le=function(){return e},e}function oe(){var e=Object(m.a)(["\n  padding: 1em;\n"]);return oe=function(){return e},e}function se(){var e=Object(m.a)(["\n  color: ",";\n"]);return se=function(){return e},e}function de(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return de=function(){return e},e}var me=d.b.div(de()),fe=Object(d.b)(me)(se(),(function(e){return e.theme.colors.muted})),pe=d.b.div(oe()),be=d.b.p(le()),Ee=Object(d.b)(F)(ie(),(function(e){return e.theme.colors.error})),ve=Object(d.b)(F)(ce(),(function(e){return e.theme.colors.success}));function ye(e){return e.playerId+e.valid}function Oe(e){var n=e.turn,t=n.cards.map((function(e){return a.a.createElement(pe,{key:S(e)},a.a.createElement(C,{card:e}))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null,t),a.a.createElement(be,null,n.playerId),a.a.createElement(be,null,a.a.createElement(ve,null,"Valid turn")))}function ge(e){var n=e.turn,t=Object(r.useState)(!0),u=Object(f.a)(t,2),c=u[0],i=u[1],l=n.cards.map((function(e){return a.a.createElement(pe,{key:S(e)},a.a.createElement(C,{card:e}))}));return Object(r.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){return clearTimeout(e)}})),c?a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null,l),a.a.createElement(be,null,n.playerId),a.a.createElement(be,null,a.a.createElement(Ee,null,n.invalidReason))):null}function Te(e){var n=e.turn;return n.valid?a.a.createElement(Oe,{turn:n}):a.a.createElement(ge,{turn:n})}function he(){var e=Object(m.a)(["\n  padding: 0 0.5em;\n"]);return he=function(){return e},e}function Re(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1em;\n"]);return Re=function(){return e},e}var je=d.b.div(Re()),Ae=d.b.div(he());function Se(e){var n=e.turns.map((function(e){return a.a.createElement(Ae,{key:ye(e)},a.a.createElement(Te,{turn:e}))}));return a.a.createElement(je,null,n)}function _e(e){var n=e.playedTurns;return a.a.createElement("div",null,a.a.createElement("h2",null,"Stack"),a.a.createElement(Se,{turns:n}))}var Ie=Object(i.b)((function(e,n){return{cardsInHand:e.game.cardsInHand,players:e.game.players,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)},turnTimeoutInMillis:e.game.turnTimeoutInMillis,turnRetriesLeft:e.game.turnRetriesLeft}}))((function(e){var n=e.players,t=e.playedTurns,r=e.cardsInHand,u=e.playCards,c=e.playerState,i=e.turnTimeoutInMillis,l=e.turnRetriesLeft;return a.a.createElement("div",null,a.a.createElement(ue,{players:n}),a.a.createElement(_e,{playedTurns:t}),a.a.createElement(q,{isServerRequestingCards:c.isServerRequestingCards,turnTimeoutInMillis:i,turnRetriesLeft:l,cardsInHand:r,playCards:u}))})),Ce=t(19);function Ne(e,n){return e.filter((function(e){return e.playerId===n}))}function ke(e,n){return e.some((function(e){return e.id===n}))}function we(e,n){return e.some((function(e){return e===n}))}function De(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(p.cardEquals)(e,n)}))}))}var Me={isRunning:!1,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[],turnTimeoutInMillis:void 0,turnRetriesLeft:0},xe={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1};var Le={players:[]};function Pe(e){return e.next({name:p.MessageName.START_GAME})}function He(e,n){return e.next({name:p.MessageName.PLAY_CARDS,data:n})}function Ue(e,n){return e.next({name:p.MessageName.AUTHENTICATE,data:n})}function Ye(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return Ye=function(){return e},e}var Be=d.b.li(Ye());function Ge(e){var n=e.playerIds.map((function(e){return a.a.createElement(Be,{key:e},e)}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement("ul",null,n))}var qe=t(21),We=t.n(qe),Fe=t(29),Je=t(30),Ke=t.n(Je);function ze(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function Qe(e){return{type:"AUTHENTICATION_ERROR",message:e}}function Ve(e){return Ke()(e).sub}var $e={subject:"",isAuthenticated:!1,token:"",error:void 0};var Xe=Object(i.b)((function(e){return{isGameStarted:e.game.isRunning,players:e.lobby.players,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,u=e.isGameStarted,c=e.players,i=Object(r.useState)(Object(E.a)("wss://agurk-server.herokuapp.com")),l=Object(f.a)(i,1)[0],o=function(e){return{sendStartGame:Pe.bind(null,e),sendPlayCards:He.bind(null,e)}}(l);return Object(r.useEffect)((function(){return l.subscribe((function(e){return function(e,n){switch(e.name){case p.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case p.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players));case p.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error}),n({type:"RESET_GAME"});case p.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case p.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case p.MessageName.BROADCAST_START_CYCLE:return n({type:"START_CYCLE",orderedPlayerIds:e.data.orderedPlayers});case p.MessageName.BROADCAST_END_CYCLE:return n((a=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:a}));case p.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case p.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case p.MessageName.REQUEST_CARDS:return n((t=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:t,turnRetriesLeft:r}));case p.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t,r,a}(e,n)}),(function(){return n({type:"UNAUTHENTICATE_WITH_ERROR",message:"Could not contact the game server. Try again later..."})})),function(){return l.complete()}}),[l,n]),Object(r.useEffect)((function(){return l.pipe(Object(b.a)((function(e){return e.name===p.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:Ue.bind(null,e)}})(l).sendAuthenticate(t)})),function(){return l.complete()}}),[l,t]),a.a.createElement("div",{className:"Lobby"},u?a.a.createElement(Ie,{serverApi:o}):a.a.createElement(a.a.Fragment,null,a.a.createElement(Ge,{playerIds:c}),a.a.createElement(y,{type:"button",onClick:o.sendStartGame},"Start Game")))}));function Ze(){var e=Object(m.a)(["\n  background-color: ",";\n  padding: 0.5em;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n"]);return Ze=function(){return e},e}function en(){var e=Object(m.a)(["\n  margin-bottom: 1em;\n"]);return en=function(){return e},e}function nn(){var e=Object(m.a)(["\n  padding: 0.5em;\n  width: 100%;\n  height: 3em;\n  margin-bottom: 1em;\n  display: block;\n  font-size: 1em;\n"]);return nn=function(){return e},e}var tn=d.b.input(nn()),rn=d.b.form(en()),an=d.b.div(Ze(),(function(e){return e.theme.colors.error}));var un=Object(i.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,u=Object(r.useState)(""),c=Object(f.a)(u,2),i=c[0],l=c[1],o=Object(r.useState)(""),s=Object(f.a)(o,2),d=s[0],m=s[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Login"),a.a.createElement(rn,{onSubmit:function(e){var t;n((t={name:i,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(Fe.a)(We.a.mark((function n(t){var r,a,u;return We.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,u=Ve(r.jwt),e(ze(a,u)),e({type:"SET_PLAYER_ID",playerId:u}),n.next=11;break;case 10:e(Qe("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(Qe("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(tn,{placeholder:"Player name",id:"name",value:i,onChange:function(e){l(e.currentTarget.value)},type:"text",name:"name",required:!0}),a.a.createElement(tn,{placeholder:"Access token",id:"token",value:d,onChange:function(e){m(e.currentTarget.value)},type:"password",name:"token",required:!0}),a.a.createElement(y,{type:"submit"},"Log in")),t&&a.a.createElement(an,null,t))}));function cn(){var e=Object(m.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return cn=function(){return e},e}function ln(){var e=Object(m.a)(["\n  margin-bottom: 2em;\n"]);return ln=function(){return e},e}function on(){var e=Object(m.a)(["\n  text-align: center;\n  margin-bottom: 2em;\n"]);return on=function(){return e},e}function sn(){var e=Object(m.a)(["\n  max-width: 800px;\n  margin: auto;\n  padding: 0 2em;\n"]);return sn=function(){return e},e}var dn=d.b.div(sn()),mn=d.b.footer(on()),fn=d.b.main(ln()),pn=d.b.a(cn(),(function(e){return e.theme.colors.muted}));var bn=Object(i.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(dn,{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Agurk")),a.a.createElement(fn,null,n?a.a.createElement(Xe,null):a.a.createElement(un,null)),a.a.createElement(mn,null,a.a.createElement(pn,{href:"https://github.com/SimonMueller/agurk-server#rules"},"Read the rules")))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var En=Object(l.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(O.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(O.a)({},e,{error:n.message});case"UNAUTHENTICATE_WITH_ERROR":return Object(O.a)({},e,{},$e,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(O.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(O.a)({},e,{isRunning:!0,players:n.playerIds.map((function(e){return Object(O.a)({},xe,{id:e})}))});case"END_GAME_SUCCESS":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{isGameWinner:e.id===n.winner,isServerRequestingCards:!1})})),validatedTurns:[],cardsInHand:[]});case"RESET_GAME":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{},xe)}))},Me,{playerId:e.playerId});case"END_GAME_ERROR":return e;case"SET_CARDS_IN_HAND":return Object(O.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(O.a)({},e,{validatedTurns:[].concat(Object(Ce.a)(e.validatedTurns),[n.turn]),players:e.players.map((function(e){return Object(O.a)({},e,{isServerRequestingCards:n.turn.playerId!==e.id&&e.isServerRequestingCards})})),cardsInHand:n.turn.playerId===e.playerId&&n.turn.valid?De(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return e;case"END_ROUND":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{penalties:[].concat(Object(Ce.a)(e.penalties),Object(Ce.a)(Ne(n.penalties,e.id))),isOut:ke(n.outPlayers,e.id),isRoundWinner:e.id===n.winner})}))});case"START_CYCLE":return Object(O.a)({},e,{validatedTurns:[]});case"END_CYCLE":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{isCycleHighestTurnPlayer:we(n.highestTurnPlayerIds,e.id),isOut:ke(n.outPlayers,e.id)})}))});case"REQUEST_CARDS":return Object(O.a)({},e,{turnTimeoutInMillis:n.turnTimeoutInMillis,turnRetriesLeft:n.turnRetriesLeft});case"START_PLAYER_TURN":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(O.a)({},e,{players:n.playerIds});default:return e}}}),vn=(t(49),{colors:{primary:"#007fff",accent:"#ff007f",muted:"#737373",text:"#000",error:"rgba(227, 38, 54, 0.9)",warn:"#ff4f00",success:"rgba(0, 140, 0, 0.9)"}}),yn=Object(l.createStore)(En,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(o.a)));c.a.render(a.a.createElement(i.a,{store:yn},a.a.createElement(d.a,{theme:vn},a.a.createElement(bn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b21b2f39.chunk.js.map