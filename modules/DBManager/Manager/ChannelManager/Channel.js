'use strict';var q=u;function R(){var R3=['getMembersByRoomID','_open_link','XwQvI','_lastChat','filter','isOpenMultiChannel','create','OpenMultiChannel','isOpenDirectChannel','5802020mXAIzD','HsTvr','apply','user_id','yQKDF','NnRCo','ChatManager','markAsRead','28QKKODo','5RAfFLz','getChatUserByLogID','jKjaG','isMultiChat','ChannelSessionManager','kvkKx','EPmja','\x20is\x20not\x20a\x20constructor\x20or\x20null','last_log_id','DirectChannel','isGroupChannel','_roomInfo','send','replyRoom','Api','1084437rDhpfd','call','384356WOuEDw','openChatInfo','setPrototypeOf','OpenDirectChannel','1682904DciqZf','isOpenChat','IgPbc','lpTPm','Class\x20extends\x20value\x20','MHVnb','prototype','49803fuklkE','../ChatManger','getInstance','isGroupChat','3342704gJzyAV','MultiChannel','64wcQpzD','isOpenDirectChat','name','rejKR','NeuCc','getChannelByID','raw','UIxKT','type','__proto__','members','lastChat','SxjER','5220281XxOZXv','mUlJn','isDirectChannel','__extends','rwExT','MultiChat','meta','../ChannelSessionManager','yyyaZ','constructor','_members','isMultiChannel','_host','mJxGG','Channel','toJSON','oJvot','_name','KLpEO','CvaJX','isDirectChat','defineProperty','_id','FOnUf','read','74hqGXRn','content','isOpenChannel','AtPDk','njjNF'];R=function(){return R3;};return R();}function u(Y,F){var a=R();return u=function(Q,z){Q=Q-0xe9;var b=a[Q];return b;},u(Y,F);}(function(Y,F){var p=u,a=Y();while(!![]){try{var Q=-parseInt(p(0xfd))/0x1+-parseInt(p(0x134))/0x2*(parseInt(p(0x108))/0x3)+-parseInt(p(0x10c))/0x4*(-parseInt(p(0xec))/0x5)+-parseInt(p(0x101))/0x6*(parseInt(p(0xeb))/0x7)+-parseInt(p(0x10e))/0x8*(-parseInt(p(0xfb))/0x9)+parseInt(p(0x142))/0xa+parseInt(p(0x11b))/0xb;if(Q===F)break;else a['push'](a['shift']());}catch(z){a['push'](a['shift']());}}}(R,0xb32a8));var __extends=this&&this[q(0x11e)]||(function(){var c=q,Y={'UIxKT':function(a,Q){return a instanceof Q;},'yQKDF':function(a,Q,z){return a(Q,z);},'HsTvr':function(a,Q){return a!=Q;},'dPuAK':'function','mUlJn':function(a,Q){return a+Q;},'lpTPm':function(a,Q){return a+Q;},'rejKR':c(0x105),'EPmja':function(a,Q){return a(Q);},'XwQvI':c(0xf3),'RSxum':function(a,Q){return a===Q;}},F=function(a,Q){var g=c;return F=Object[g(0xff)]||Y[g(0x115)]({'__proto__':[]},Array)&&function(z,b){var G=g;z[G(0x117)]=b;}||function(z,b){var D=g;for(var v in b)Object[D(0x107)]['hasOwnProperty'][D(0xfc)](b,v)&&(z[v]=b[v]);},Y[g(0x146)](F,a,Q);};return function(a,Q){var i=c;if(Y[i(0x143)](Y['dPuAK'],typeof Q)&&null!==Q)throw new TypeError(Y[i(0x11c)](Y[i(0x104)](Y[i(0x111)],Y[i(0xf2)](String,Q)),Y[i(0x13b)]));function z(){var H=i;this[H(0x124)]=a;}F(a,Q),a[i(0x107)]=Y['RSxum'](null,Q)?Object[i(0x13f)](Q):(z[i(0x107)]=Q[i(0x107)],new z());};}());Object['defineProperty'](exports,'__esModule',{'value':!0x0}),exports[q(0x100)]=exports['OpenMultiChannel']=exports[q(0x10d)]=exports[q(0xf5)]=exports[q(0x129)]=void 0x0;var ChatManger_1=require(q(0x109)),ChannelSessionManager_1=require(q(0x122)),Channel=(function(){var y=q,Y={'IgPbc':function(a,Q){return a===Q;},'fkLUv':y(0x120),'jKjaG':function(a){return a();},'SxjER':function(a){return a();},'KtxmF':y(0x118),'njjNF':y(0x114),'AtPDk':y(0x119),'yyyaZ':'name'};function F(a){var w=y;this[w(0xf7)]=a,this[w(0x131)]=a['id'];}return Object['defineProperty'](F[y(0x107)],Y['KtxmF'],{'get':function(){var V=y;return this[V(0x125)]||(this[V(0x125)]=ChatManger_1[V(0xe9)][V(0x10a)]()[V(0x139)](this[V(0x131)])),this['_members'];},'enumerable':!0x1,'configurable':!0x0}),F['prototype'][y(0x102)]=function(){return!0x1;},F['prototype'][y(0x136)]=function(){var W=y;return this[W(0x102)]();},Object[y(0x130)](F[y(0x107)],Y[y(0x138)],{'get':function(){var j=y;return this[j(0xf7)];},'enumerable':!0x1,'configurable':!0x0}),F[y(0x107)]['toJSON']=function(){var P=y;return{'channel':this[P(0xf7)],'openLinkInfo':null};},Object[y(0x130)](F['prototype'],Y[y(0x137)],{'get':function(){var A=y;return this[A(0x13c)]||(this[A(0x13c)]=ChatManger_1['ChatManager']['getInstance']()[A(0xed)](this['_roomInfo'][A(0xf4)]),this[A(0x13c)]['channel']=this),this[A(0x13c)];},'enumerable':!0x1,'configurable':!0x0}),Object[y(0x130)](F[y(0x107)],Y[y(0x123)],{'get':function(){var E=y,a={'hJBoF':function(Q,z){var U=u;return Y[U(0x103)](Q,z);}};return Y[E(0x103)](Y['fkLUv'],this['_roomInfo'][E(0x116)])?this[E(0xf7)][E(0x121)][E(0x13d)](function(Q){return a['hJBoF'](0x3,Q['type']);})[0x0][E(0x135)]:this[E(0x12c)];},'set':function(a){var B=y;this[B(0x12c)]=a;},'enumerable':!0x1,'configurable':!0x0}),F['prototype'][y(0xf8)]=function(a){var N=y,Q=ChannelSessionManager_1[N(0xf0)][N(0x113)](this['_id']);return Q?Q[N(0xf8)](a):Y[N(0xee)](global)[N(0xfa)]?Api[N(0xf9)](this['name'],a):BotManager['getCurrentBot']()[N(0xf8)](this[N(0x110)],a);},F[y(0x107)][y(0x10b)]=function(){return!0x1;},F[y(0x107)][y(0xf6)]=function(){var n=y;return this[n(0x10b)]();},F['prototype'][y(0x133)]=function(){var Z=y,a=ChannelSessionManager_1[Z(0xf0)]['getChannelByID'](this[Z(0x131)]);return a?a[Z(0x133)]():Y[Z(0x11a)](global)[Z(0xfa)]?Api[Z(0xea)]():void 0x0;},Object['defineProperty'](F['prototype'],'id',{'get':function(){var r=y;return this[r(0x131)];},'enumerable':!0x1,'configurable':!0x0}),F[y(0x107)][y(0xef)]=function(){return!0x1;},F[y(0x107)][y(0x126)]=function(){var M=y;return this[M(0xef)]();},F[y(0x107)][y(0x12f)]=function(){return!0x1;},F[y(0x107)][y(0x11d)]=function(){var d=y;return this[d(0x12f)]();},F[y(0x107)]['isOpenMultiChat']=function(){return!0x1;},F[y(0x107)]['isOpenMultiChannel']=function(){var T=y;return this[T(0xef)]();},F[y(0x107)][y(0x10f)]=function(){return!0x1;},F[y(0x107)][y(0x141)]=function(){return this['isOpenDirectChat']();},F;}());exports[q(0x129)]=Channel;var DirectChannel=function(Y){var k=q,F={'sCtTj':function(Q,z){return Q!==z;},'FOnUf':function(Q,z,b){return Q(z,b);},'NnRCo':k(0x114)};function a(){var K=k;return F['sCtTj'](null,Y)&&Y[K(0x144)](this,arguments)||this;}return F[k(0x132)](__extends,a,Y),Object['defineProperty'](a['prototype'],F[k(0x147)],{'get':function(){var t=k;return this[t(0xf7)];},'enumerable':!0x1,'configurable':!0x0}),a[k(0x107)][k(0x12f)]=function(){return!0x0;},a;}(Channel);exports['DirectChannel']=DirectChannel;var MultiChannel=function(Y){var x=q,F={'HJHLv':function(Q,z,b){return Q(z,b);}};function a(){var o=u;return null!==Y&&Y[o(0x144)](this,arguments)||this;}return F['HJHLv'](__extends,a,Y),Object['defineProperty'](a['prototype'],x(0x114),{'get':function(){var C=x;return this[C(0xf7)];},'enumerable':!0x1,'configurable':!0x0}),a[x(0x107)]['isGroupChat']=function(){return!0x0;},a['prototype']['isGroupChannel']=function(){return!0x0;},a['prototype'][x(0xef)]=function(){return!0x0;},a;}(Channel);exports[q(0x10d)]=MultiChannel;var OpenChannel=function(Y){var I=q,F={'CvaJX':function(Q,z){return Q===z;},'kvkKx':function(Q,z){return Q===z;},'NeuCc':function(Q,z,b){return Q(z,b);},'KLpEO':'host','RnMza':I(0xfe)};function a(Q){var l=I;return Y[l(0xfc)](this,Q)||this;}return F[I(0x112)](__extends,a,Y),Object[I(0x130)](a[I(0x107)],F[I(0x12d)],{'get':function(){var h=I;return this['_host']||(this[h(0x127)]=ChatManger_1[h(0xe9)][h(0x10a)]()['getOneUserByID'](this[h(0x13a)][h(0x145)])),this[h(0x127)];},'enumerable':!0x1,'configurable':!0x0}),Object[I(0x130)](a[I(0x107)],I(0x114),{'get':function(){return this['_roomInfo'];},'enumerable':!0x1,'configurable':!0x0}),Object[I(0x130)](a[I(0x107)],F['RnMza'],{'get':function(){var O=I;return this[O(0x13a)];},'set':function(Q){var J=I;this[J(0x13a)]=Q;},'enumerable':!0x1,'configurable':!0x0}),a[I(0x107)]['isOpenChat']=function(){return!0x0;},a[I(0x107)]['isOpenChannel']=function(){return!0x0;},a[I(0x107)]['toJSON']=function(){var m=I;return{'channel':this[m(0xf7)],'openLinkInfo':this[m(0x13a)]};},a[I(0x107)]['isGroupChat']=function(){var X=I;return F[X(0x12e)]('OM',this[X(0x114)][X(0x116)]);},a[I(0x107)][I(0xf6)]=function(){var f=I;return F[f(0xf1)]('OM',this['raw']['type']);},a;}(Channel),OpenMultiChannel=function(Y){var e=q,F={'mJxGG':function(Q,z){return Q!==z;},'rwExT':function(Q,z,b){return Q(z,b);},'MHVnb':e(0x114)};function a(){var s=e;return F[s(0x128)](null,Y)&&Y[s(0x144)](this,arguments)||this;}return F[e(0x11f)](__extends,a,Y),Object[e(0x130)](a[e(0x107)],F[e(0x106)],{'get':function(){var S=e;return this[S(0xf7)];},'enumerable':!0x1,'configurable':!0x0}),a[e(0x107)]['isOpenMultiChat']=function(){return!0x0;},a[e(0x107)][e(0x13e)]=function(){return!0x0;},a['prototype'][e(0x12a)]=function(){var L=e;return{'channel':this[L(0xf7)],'openLinkInfo':this[L(0x13a)]};},a;}(OpenChannel);exports[q(0x140)]=OpenMultiChannel;var OpenDirectChannel=function(Y){var R1=q,F={'oJvot':function(Q,z,b){return Q(z,b);}};function a(){var R0=u;return null!==Y&&Y[R0(0x144)](this,arguments)||this;}return F[R1(0x12b)](__extends,a,Y),Object[R1(0x130)](a[R1(0x107)],'raw',{'get':function(){return this['_roomInfo'];},'enumerable':!0x1,'configurable':!0x0}),a['prototype'][R1(0x10f)]=function(){return!0x0;},a['prototype'][R1(0x141)]=function(){return!0x0;},a[R1(0x107)][R1(0x12a)]=function(){var R2=R1;return{'channel':this[R2(0xf7)],'openLinkInfo':this['_open_link']};},a;}(OpenChannel);exports[q(0x100)]=OpenDirectChannel;