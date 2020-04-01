(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(18),c=t.n(u),i=t(10),l=t(11),o=t(24),s=t(25),d=t(1),m=t(2),f=t(9),b=t(5),p=t(53),E=t(54);function v(){var e=Object(m.a)(["\n  display: inline-block;\n  font-size: 1em;\n  height: 3em;\n  padding: 0.75em;\n  width: 100%;\n  background-color: transparent;\n  border: 2px solid ",";\n  font-weight: bold;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    cursor: pointer;\n  }\n"]);return v=function(){return e},e}var y=d.b.button(v(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),O=t(4);function g(){var e=Object(m.a)(["\n  border: ",";\n"]);return g=function(){return e},e}function T(){var e=Object(m.a)(["\n  border: ",";\n  border-radius: 4px;\n  width: 4.5em;\n  height: 7em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n"]);return T=function(){return e},e}function h(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 0.7em;\n  margin: 0;\n"]);return h=function(){return e},e}function j(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3em;\n  margin: 0;\n"]);return j=function(){return e},e}var R=d.b.p(j()),A=d.b.p(h()),S=d.b.div(T(),(function(e){var n=e.isSelected,t=e.theme;return"1px solid ".concat(n?t.colors.accent:t.colors.text)})),_=Object(d.b)(S)(g(),(function(e){var n=e.theme;return"1px dotted ".concat(n.colors.text)}));function I(e){return e.kind===b.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function C(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,"J"),a.a.createElement(A,null,n.color))}function N(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,n.rank),a.a.createElement(A,null,n.suit))}function k(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t;return a.a.createElement(S,{isSelected:r},n.kind===b.JOKER_CARD_KIND?a.a.createElement(C,{card:n}):a.a.createElement(N,{card:n}))}function w(){return a.a.createElement(_,{isSelected:!1})}function D(){var e=Object(m.a)(["\n  all: unset;\n  cursor: pointer;\n"]);return D=function(){return e},e}function M(){var e=Object(m.a)(["\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n"]);return M=function(){return e},e}function x(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1em;\n  justify-content: center;\n"]);return x=function(){return e},e}var L=d.b.div(x()),P=d.b.div(M()),H=d.b.button(D());function U(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(P,{key:I(e)},a.a.createElement(H,{onClick:function(){return t(e)}},a.a.createElement(k,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(L,null,r)}function Y(e){var n=e.timeoutInSeconds,t=Object(r.useState)(n),u=Object(f.a)(t,2),c=u[0],i=u[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return c-1<0?clearInterval(e):i(c-1)}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,c)}function B(){var e=Object(m.a)(["\n  color: ",";\n  text-align: center;\n"]);return B=function(){return e},e}var G=d.b.p(B(),(function(e){return e.theme.colors.muted}));function q(e){var n=e.handlePlayClick,t=e.turnTimeoutInMillis,r=e.turnRetriesLeft;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{type:"button",onClick:n},"Play Cards"," ",t&&a.a.createElement("span",null,"(",a.a.createElement(Y,{timeoutInSeconds:t/1e3}),")")),a.a.createElement(G,null,r," ",1===r?"Retry left":"Retries left"))}function W(e){var n=e.playCards,t=e.cardsInHand,u=e.isServerRequestingCards,c=e.turnTimeoutInMillis,i=e.turnRetriesLeft,l=Object(r.useState)([]),o=Object(f.a)(l,2),s=o[0],d=o[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(O.a)({},e,{isSelected:!1})}));d(e)}),[t]),a.a.createElement("div",null,a.a.createElement("h2",null,"Hand"),a.a.createElement(U,{cards:s,handleSelect:function(e){d(s.map((function(n){return Object(b.cardEquals)(n,e)?Object(O.a)({},n,{isSelected:!n.isSelected}):n})))}}),u&&a.a.createElement(q,{handlePlayClick:function(){var e=s.filter((function(e){return e.isSelected}));n(e)},turnTimeoutInMillis:c,turnRetriesLeft:i}))}function F(){var e=Object(m.a)(["\n  background-color: transparent;\n  border-radius: 0.25em;\n  font-size: 0.7em;\n  margin: 0 0.5em;\n  padding: 0.15em 0.25em;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return F=function(){return e},e}var J=d.b.span(F());function K(){var e=Object(m.a)(["\n  font-weight: normal;\n"]);return K=function(){return e},e}function z(){var e=Object(m.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return z=function(){return e},e}function Q(){var e=Object(m.a)(["\n  text-decoration-line: ",";\n"]);return Q=function(){return e},e}function V(){var e=Object(m.a)(["\n  0% {\n    opacity: 0.6;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.6;\n  }\n"]);return V=function(){return e},e}function $(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return $=function(){return e},e}var X=Object(d.b)(J)($(),(function(e){return e.theme.colors.warn})),Z=Object(d.c)(V()),ee=d.b.span(Q(),(function(e){return e.isOut?"line-through":"none"})),ne=Object(d.b)(ee)(z(),Z),te=Object(d.b)(ee)(K());function re(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,n.isServerRequestingCards?a.a.createElement(ne,{isOut:n.isOut},n.id):a.a.createElement(te,{isOut:n.isOut},n.id),a.a.createElement(X,null,"Penalty"," ",t))}function ae(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return ae=function(){return e},e}var ue=d.b.li(ae());function ce(e){var n=e.players.map((function(e){return a.a.createElement(ue,{key:e.id},a.a.createElement(re,{player:e}))}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement("ul",null,n))}function ie(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return ie=function(){return e},e}function le(){var e=Object(m.a)(["\n  text-align: center;\n"]);return le=function(){return e},e}function oe(){var e=Object(m.a)(["\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n"]);return oe=function(){return e},e}function se(){var e=Object(m.a)(["\n  color: ",";\n"]);return se=function(){return e},e}function de(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return de=function(){return e},e}var me=d.b.div(de()),fe=Object(d.b)(me)(se(),(function(e){return e.theme.colors.muted})),be=d.b.div(oe()),pe=d.b.div(le()),Ee=Object(d.b)(J)(ie(),(function(e){return e.theme.colors.error}));function ve(e){return e.playerId+e.valid}function ye(e){var n=e.turn,t=n.cards.map((function(e){return a.a.createElement(be,{key:I(e)},a.a.createElement(k,{card:e}))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null,t),a.a.createElement(pe,null,a.a.createElement("span",null,n.playerId)))}function Oe(e){var n=e.turn,t=Object(r.useState)(!0),u=Object(f.a)(t,2),c=u[0],i=u[1],l=n.cards.map((function(e){return a.a.createElement(be,{key:I(e)},a.a.createElement(k,{key:I(e),card:e}))}));return Object(r.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){return clearTimeout(e)}})),c?a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null,l),a.a.createElement(pe,null,n.playerId),a.a.createElement(pe,null,a.a.createElement(Ee,null,n.invalidReason))):null}function ge(e){var n=e.turn;return n.valid?a.a.createElement(ye,{turn:n}):a.a.createElement(Oe,{turn:n})}function Te(){var e=Object(m.a)(["\n  margin-right: 1em;\n  margin-bottom: 1em;\n"]);return Te=function(){return e},e}function he(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return he=function(){return e},e}var je=d.b.div(he()),Re=d.b.div(Te());function Ae(e){var n=e.turns.map((function(e){return a.a.createElement(Re,{key:ve(e)},a.a.createElement(ge,{turn:e}))}));return a.a.createElement(je,null,n)}function Se(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return Se=function(){return e},e}function _e(){var e=Object(m.a)(["\n  text-align: center;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(m.a)(["\n  margin-right: 1em;\n  margin-bottom: 1em;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Ne=function(){return e},e}var ke=d.b.div(Ne()),we=d.b.div(Ce()),De=Object(d.b)(J)(Ie(),(function(e){return e.theme.colors.success})),Me=d.b.div(_e()),xe=d.b.div(Se());function Le(e){var n=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards})),t=n.length>0?a.a.createElement(k,{card:n.reduce((function(e,n){return Object(b.compareRanks)(e,n)>0?e:n}))}):a.a.createElement(w,null);return a.a.createElement(a.a.Fragment,null,a.a.createElement(xe,null,t),a.a.createElement(Me,null,a.a.createElement(De,null,"Highest played card")))}function Pe(e){var n=e.playedTurns;return a.a.createElement("div",null,a.a.createElement("h2",null,"Stack"),a.a.createElement(ke,null,a.a.createElement(we,null,a.a.createElement(Le,{playedTurns:n})),a.a.createElement(we,null,a.a.createElement(Ae,{turns:n}))))}var He=Object(i.b)((function(e,n){return{cardsInHand:e.game.cardsInHand,players:e.game.players,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)},turnTimeoutInMillis:e.game.turnTimeoutInMillis,turnRetriesLeft:e.game.turnRetriesLeft}}))((function(e){var n=e.players,t=e.playedTurns,r=e.cardsInHand,u=e.playCards,c=e.playerState,i=e.turnTimeoutInMillis,l=e.turnRetriesLeft;return a.a.createElement("div",null,a.a.createElement(ce,{players:n}),a.a.createElement(Pe,{playedTurns:t}),a.a.createElement(W,{isServerRequestingCards:c.isServerRequestingCards,turnTimeoutInMillis:i,turnRetriesLeft:l,cardsInHand:r,playCards:u}))})),Ue=t(19);function Ye(e,n){return e.filter((function(e){return e.playerId===n}))}function Be(e,n){return e.some((function(e){return e.id===n}))}function Ge(e,n){return e.some((function(e){return e===n}))}function qe(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(b.cardEquals)(e,n)}))}))}var We={isRunning:!1,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[],turnTimeoutInMillis:void 0,turnRetriesLeft:0},Fe={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1};var Je={players:[]};function Ke(e){return e.next({name:b.MessageName.START_GAME})}function ze(e,n){return e.next({name:b.MessageName.PLAY_CARDS,data:n})}function Qe(e,n){return e.next({name:b.MessageName.AUTHENTICATE,data:n})}function Ve(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return Ve=function(){return e},e}var $e=d.b.li(Ve());function Xe(e){var n=e.playerIds.map((function(e){return a.a.createElement($e,{key:e},e)}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement("ul",null,n))}var Ze=t(21),en=t.n(Ze),nn=t(29),tn=t(30),rn=t.n(tn);function an(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function un(e){return{type:"AUTHENTICATION_ERROR",message:e}}function cn(e){return rn()(e).sub}var ln={subject:"",isAuthenticated:!1,token:"",error:void 0};var on=Object(i.b)((function(e){return{isGameStarted:e.game.isRunning,players:e.lobby.players,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,u=e.isGameStarted,c=e.players,i=Object(r.useState)(Object(E.a)("wss://agurk-server.herokuapp.com")),l=Object(f.a)(i,1)[0],o=function(e){return{sendStartGame:Ke.bind(null,e),sendPlayCards:ze.bind(null,e)}}(l);return Object(r.useEffect)((function(){return l.subscribe((function(e){return function(e,n){switch(e.name){case b.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case b.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players));case b.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error}),n({type:"RESET_GAME"});case b.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case b.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case b.MessageName.BROADCAST_START_CYCLE:return n({type:"START_CYCLE",orderedPlayerIds:e.data.orderedPlayers});case b.MessageName.BROADCAST_END_CYCLE:return n((a=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:a}));case b.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case b.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case b.MessageName.REQUEST_CARDS:return n((t=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:t,turnRetriesLeft:r}));case b.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t,r,a}(e,n)}),(function(){return n({type:"UNAUTHENTICATE_WITH_ERROR",message:"Could not contact the game server. Try again later..."})})),function(){return l.complete()}}),[l,n]),Object(r.useEffect)((function(){return l.pipe(Object(p.a)((function(e){return e.name===b.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:Qe.bind(null,e)}})(l).sendAuthenticate(t)})),function(){return l.complete()}}),[l,t]),a.a.createElement("div",{className:"Lobby"},u?a.a.createElement(He,{serverApi:o}):a.a.createElement(a.a.Fragment,null,a.a.createElement(Xe,{playerIds:c}),a.a.createElement(y,{type:"button",onClick:o.sendStartGame},"Start Game")))}));function sn(){var e=Object(m.a)(["\n  background-color: ",";\n  padding: 0.5em;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n"]);return sn=function(){return e},e}function dn(){var e=Object(m.a)(["\n  margin-bottom: 1em;\n"]);return dn=function(){return e},e}function mn(){var e=Object(m.a)(["\n  padding: 0.5em;\n  width: 100%;\n  height: 3em;\n  margin-bottom: 1em;\n  display: block;\n  font-size: 1em;\n"]);return mn=function(){return e},e}var fn=d.b.input(mn()),bn=d.b.form(dn()),pn=d.b.div(sn(),(function(e){return e.theme.colors.error}));var En=Object(i.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,u=Object(r.useState)(""),c=Object(f.a)(u,2),i=c[0],l=c[1],o=Object(r.useState)(""),s=Object(f.a)(o,2),d=s[0],m=s[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Login"),a.a.createElement(bn,{onSubmit:function(e){var t;n((t={name:i,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(nn.a)(en.a.mark((function n(t){var r,a,u;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,u=cn(r.jwt),e(an(a,u)),e({type:"SET_PLAYER_ID",playerId:u}),n.next=11;break;case 10:e(un("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(un("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(fn,{placeholder:"Player name",id:"name",value:i,onChange:function(e){l(e.currentTarget.value)},type:"text",name:"name",required:!0}),a.a.createElement(fn,{placeholder:"Access token",id:"token",value:d,onChange:function(e){m(e.currentTarget.value)},type:"password",name:"token",required:!0}),a.a.createElement(y,{type:"submit"},"Log in")),t&&a.a.createElement(pn,null,t))}));function vn(){var e=Object(m.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return vn=function(){return e},e}function yn(){var e=Object(m.a)(["\n  margin-bottom: 2em;\n"]);return yn=function(){return e},e}function On(){var e=Object(m.a)(["\n  text-align: center;\n  margin-bottom: 2em;\n"]);return On=function(){return e},e}function gn(){var e=Object(m.a)(["\n  max-width: 800px;\n  margin: auto;\n  padding: 0 2em;\n"]);return gn=function(){return e},e}var Tn=d.b.div(gn()),hn=d.b.footer(On()),jn=d.b.main(yn()),Rn=d.b.a(vn(),(function(e){return e.theme.colors.muted}));var An=Object(i.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(Tn,{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Agurk")),a.a.createElement(jn,null,n?a.a.createElement(on,null):a.a.createElement(En,null)),a.a.createElement(hn,null,a.a.createElement(Rn,{href:"https://github.com/SimonMueller/agurk-server#rules"},"Read the rules")))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Sn=Object(l.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(O.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(O.a)({},e,{error:n.message});case"UNAUTHENTICATE_WITH_ERROR":return Object(O.a)({},e,{},ln,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(O.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(O.a)({},e,{isRunning:!0,players:n.playerIds.map((function(e){return Object(O.a)({},Fe,{id:e})}))});case"END_GAME_SUCCESS":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{isGameWinner:e.id===n.winner,isServerRequestingCards:!1})})),validatedTurns:[],cardsInHand:[]});case"RESET_GAME":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{},Fe)}))},We,{playerId:e.playerId});case"END_GAME_ERROR":return e;case"SET_CARDS_IN_HAND":return Object(O.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(O.a)({},e,{validatedTurns:[].concat(Object(Ue.a)(e.validatedTurns),[n.turn]),players:e.players.map((function(e){return Object(O.a)({},e,{isServerRequestingCards:n.turn.playerId!==e.id&&e.isServerRequestingCards})})),cardsInHand:n.turn.playerId===e.playerId&&n.turn.valid?qe(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return e;case"END_ROUND":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{penalties:[].concat(Object(Ue.a)(e.penalties),Object(Ue.a)(Ye(n.penalties,e.id))),isOut:Be(n.outPlayers,e.id),isRoundWinner:e.id===n.winner})}))});case"START_CYCLE":return Object(O.a)({},e,{validatedTurns:[]});case"END_CYCLE":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{isCycleHighestTurnPlayer:Ge(n.highestTurnPlayerIds,e.id),isOut:Be(n.outPlayers,e.id)})}))});case"REQUEST_CARDS":return Object(O.a)({},e,{turnTimeoutInMillis:n.turnTimeoutInMillis,turnRetriesLeft:n.turnRetriesLeft});case"START_PLAYER_TURN":return Object(O.a)({},e,{players:e.players.map((function(e){return Object(O.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(O.a)({},e,{players:n.playerIds});default:return e}}}),_n=(t(49),{colors:{primary:"#007fff",accent:"#ff007f",muted:"#737373",text:"#000",error:"rgba(227, 38, 54, 0.9)",warn:"#ff4f00",success:"rgba(0, 140, 0, 0.9)"}}),In=Object(l.createStore)(Sn,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(o.a)));c.a.render(a.a.createElement(i.a,{store:In},a.a.createElement(d.a,{theme:_n},a.a.createElement(An,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.044e4a75.chunk.js.map