'use strict';function K(){var Kw=['temporary_message','FileChat','DB2.friends.','getString','MapChat','suWyC','moim_meta','Executors','171176DeSJUk','JMreZ','Channel','rBZDF','dawmk','cursorToUserInterface','text','IRgNp','split','ubcyk','EElku','openChatInfo','SqqGy','OpenChannel','\x20as\x20c_','enc','Cursor','suspended','getColumnCount','last_read_log_id','zwqco','DeleteFeed','database','image_url','Jvbik','last_log_id','FUsTR','../../../BigJSON','MAX_SAFE_INTEGER','MvAxu','getLong','VutBB','cursorToChannel','push','isOpenChannel','VrckC','JXvlB','rJVUf','moveToNext','CompletableFuture','OpenUser','FXcCZ','involved_chat_ids','last_message','DB2.friends','LeaveFeed','MJGhB','jeZeY','getInstance','getAlreadyInstance','hidden','./ChatClass','EmoticonChat','cursorToAll','icon_url','purged','User','omFfF','EPvNp','supplement','map','last_skey_token','select','defineProperty','45gdhYqa','attachment','new_badge_seen_at','HpudK','private_meta','UXhxd','getColumnNames','getChatByLogID','FIELD_TYPE_INTEGER','link_id','7576qNJhiG','message','iWBqm','MIQoh','includes','RkRBf','userInterfaceToUser','7|0|8|9|1|3|5|6|2|4','url','CLWYg','BgEWK','Chat','BigJSON','last_updated_at','SWyoM','Wxmch','ezjoq','get','Qboqz','byliL','FrOUw','cbETW','meta','Jvznq','invite_info','cursorToUser','vKbUb','jaRMt','feedType','CPsBo','active_members_count','OLrzZ','SDLUE','\x20as\x20u_','member_type','WHobQ','DB2.open_link.','chatInterfaceToChat','getNextChatID','parse','account_id','NsAjp','channel','304530jUjkZH','zVeUF','prototype','KRCuj','nKaqH','sYZik','cursorToOpenLinkInterface','GGaOv','_instance','ZSpgn','getColumnName','inbJB','chat_rooms.','ijAzo','SELECT\x20id\x20FROM\x20chat_logs\x20WHERE\x20prev_id\x20=\x20?','klPPW','322wycfGy','oIzKs','LUTyF','created_at','HandOverFeed','lDXbj','ZWgkY','SELECT\x20active_member_ids\x20FROM\x20chat_rooms\x20WHERE\x20id\x20=\x20?','10728UcbnWJ','pEnhK','yCRrt','chat_logs.','kwTTA','zhpWU','KliqY','type','cursorToChannelInterface','contact_id','JEPwl','ext','util','getMembersByRoomID','name','LcGtm','new_badge_updated_at','MultiChat','vHDIU','schat_token','WHiqo','SELECT\x20_id\x20\x20FROM\x20chat_logs\x20ORDER\x20BY\x20_id\x20DESC\x20LIMIT\x201','3832956FVlnGo','status_message','\x20as\x20o_','moveToFirst','IYcud','NPQBs','hGUxe','../decrypt','active_member_ids','chat_id','PromoteFeed','아직\x20없음','\x20FROM\x20DB2.friends\x20WHERE\x20id\x20=\x20?','replace','last_joined_log_id','length','description\x20','moveToLast','indAU','FeedChat','203644npPxeR','QOcAq','dOUJI','cursorToChatInterface','xQdWe','OldEmoticonChat','cursorToChatLog','user','2330BTZqlq','spHIL','active','blocked','close','fiNwV','rawQuery','SELECT\x20','supplyAsync','1012310bexawU','values','LfJFp','client_message_id','getPrevChatID','stgaf','mDVwx','../../UserManger','uhamy','WjmrU','join','full_profile_image_url','esPMB','nLvov','jVhUl','\x20\x20WHERE\x20c_id\x20=\x20?','2|3|1|4|0','BtzNP','DirectChat','getMultipleUsersByIDs','ReplyChat','GYiUA','getType','getFloat','profile_image_url','NQMeC','bjtSt','rJqSV','userKey','JDomN','gaNhv','PhotoChat','MyLMd','getNextChatByID','NormalChat','getOneUserByID','reduce','default','\x20WHERE\x20c__id\x20>\x20?\x20AND\x20c__id\x20<=\x20?\x20ORDER\x20BY\x20c__id','getChatStack','vHPzj','zUZnH','ChatManager','InviteFeed','prepare','shutdown','MultiPhotoChat','members','ARkFT','Bktzf','mute_until_at','CPjHm','newFixedThreadPool','mYzoW','gmGwm'];K=function(){return Kw;};return K();}var B=h;(function(o,U){var O=h,w=o();while(!![]){try{var Q=-parseInt(O(0x6e))/0x1+-parseInt(O(0x7f))/0x2+parseInt(O(0xfe))/0x3*(parseInt(O(0x108))/0x4)+parseInt(O(0x133))/0x5+parseInt(O(0x161))/0x6+-parseInt(O(0x143))/0x7*(-parseInt(O(0xbe))/0x8)+parseInt(O(0x14b))/0x9*(-parseInt(O(0x76))/0xa);if(Q===U)break;else w['push'](w['shift']());}catch(J){w['push'](w['shift']());}}}(K,0xb0f85));var __importDefault=this&&this['__importDefault']||function(o){return o&&o['__esModule']?o:{'default':o};};Object[B(0xfd)](exports,'__esModule',{'value':!0x0}),exports['ChatManager']=void 0x0;var CursorManager,ChatClass_1=require(B(0xf1)),BigJSON_1=require(B(0xd9)),UserManger_1=require(B(0x86)),ChannelManager_1=require('../../ChannelManager'),sql_bricks_1=__importDefault(require('../../../sql-bricks')),decrypt_1=__importDefault(require(B(0x168))),parse=BigJSON_1[B(0x114)][B(0x12f)],CompletableFuture=java[B(0x157)]['concurrent'][B(0xe5)],Executors=java[B(0x157)]['concurrent'][B(0xbd)],CHAT_COLUMN='id,_id,type,chat_id,user_id,message,attachment,created_at,prev_id,v',CHAT_COLUMN_ARRAY=CHAT_COLUMN['split'](','),CHAT_COLUMN_PREFIX=CHAT_COLUMN_ARRAY[B(0xfa)](function(o){var i=B,U={'SWyoM':function(w,Q){return w+Q;}};return U[i(0x116)](i(0x14e)+o+i(0xcc),o);})[B(0x89)](','),USER_COLUMN='id,_id,type,name,profile_image_url,full_profile_image_url,original_profile_image_url,status_message,blocked,v,board_v,user_type,account_id,member_type,enc,created_at',USER_COLUMN_ARRAY=USER_COLUMN['split'](','),USER_COLUMN_PREFIX=USER_COLUMN_ARRAY[B(0xfa)](function(o){var M=B,U={'omFfF':function(w,Q){return w+Q;},'NbKKi':function(w,Q){return w+Q;},'spHIL':M(0x129)};return U['omFfF'](U[M(0xf7)](U['NbKKi'](M(0xb8),o),U[M(0x77)]),o);})[B(0x89)](','),ROOM_COLUMN='id,_id,type,last_log_id,last_message,last_updated_at,unread_count,v,is_hint,active_members_count,meta,link_id,last_joined_log_id',ROOM_COLUMN_ARRAY=ROOM_COLUMN[B(0xc6)](','),ROOM_COLUMN_PREFIX=ROOM_COLUMN_ARRAY[B(0xfa)](function(o){var F=B,U={'FrOUw':function(w,Q){return w+Q;},'OPPTB':function(w,Q){return w+Q;},'KliqY':F(0x13f),'ZmTMi':'\x20as\x20r_'};return U[F(0x11c)](U[F(0x11c)](U['OPPTB'](U[F(0x151)],o),U['ZmTMi']),o);})[B(0x89)](','),OPEN_LINK_COLUMN='id,user_id,name,url,image_url,type,active,expired,created_at,v,description',OPEN_LINK_COLUMN_ARRAY=OPEN_LINK_COLUMN[B(0xc6)](','),OPEN_COLUM_PREFIX=OPEN_LINK_COLUMN_ARRAY[B(0xfa)](function(o){var s=B,U={'bjtSt':function(w,Q){return w+Q;},'hGUxe':s(0x12c),'Wxmch':s(0x163)};return U[s(0x99)](U[s(0x167)]+o,U[s(0x117)])+o;})[B(0x89)](','),ALL_COLUMN=CHAT_COLUMN_PREFIX+','+USER_COLUMN_PREFIX+','+ROOM_COLUMN_PREFIX+','+OPEN_COLUM_PREFIX,JOIN_COLUMN='\x20FROM\x20chat_logs\x20INNER\x20JOIN\x20DB2.friends\x20ON\x20c_user_id\x20=\x20u_id\x20INNER\x20JOIN\x20chat_rooms\x20ON\x20c_chat_id\x20=\x20r_id\x20LEFT\x20JOIN\x20DB2.open_link\x20ON\x20\x20\x20r_link_id\x20=\x20o_id',groupBy=function(o,U){var H=B;return o[H(0xa3)](function(w,Q){return w[Q[U]]=Q,w;},{});},ChatManager=(function(){var g=B,o={'IYcud':function(w,Q){return w===Q;},'ZWgkY':function(w,Q){return w===Q;},'EElku':g(0x16c),'vHPzj':function(w,Q){return w+Q;},'MyLMd':g(0x7d),'ADpAM':g(0x8e),'JDomN':function(w,Q){return w===Q;},'ezjoq':function(w,Q){return w===Q;},'LfJFp':function(w,Q){return w(Q);},'pEnhK':function(w,Q){return w===Q;},'jVhUl':function(w,Q){return w>Q;},'GtDVt':g(0x141),'zVeUF':function(w,Q){return w(Q);},'EPvNp':function(w,Q){return w===Q;},'CPjHm':function(w,Q){return w||Q;},'rzRMl':function(w,Q){return w+Q;},'JEPwl':g(0x160),'Gpjoc':function(w,Q){return w+Q;},'BgEWK':g(0x16d),'NQMeC':g(0x10f),'GYiUA':function(w,Q){return w<Q;},'stgaf':function(w,Q,J){return w(Q,J);},'UXhxd':function(w,Q){return w(Q);},'yipTZ':g(0xea),'LUTyF':g(0x14a),'ZSpgn':function(w,Q){return w!=Q;},'indAU':function(w,Q){return w===Q;},'JXvlB':function(w,Q){return w(Q);},'GGaOv':function(w,Q){return w===Q;},'suWyC':function(w,Q){return w(Q);}};function U(w,Q){var t=g;void 0x0===Q&&(Q=''),this['db']=w,this[t(0x9b)]=Q;}return U[g(0xee)]=function(w,Q){var a=g;if(o[a(0x165)](void 0x0,w)&&(w=null),void 0x0===Q&&(Q=''),o[a(0x165)]('',Q)||o[a(0x149)](null,w)){if(o['IYcud'](null,U[a(0x13b)]))throw new Error(o['EElku']);return U['_instance'];}return o[a(0x165)](null,U[a(0x13b)])&&(U[a(0x13b)]=new U(w,Q)),U['_instance'];},U[g(0xef)]=function(){var x=g;if(null===U[x(0x13b)])throw new Error(o[x(0xc8)]);return U['_instance'];},U[g(0x135)][g(0x105)]=function(w){var e=g,Q=o[e(0xa7)](o['vHPzj'](o['vHPzj'](o[e(0x9f)],ALL_COLUMN),JOIN_COLUMN),o['ADpAM']),J=this['db']['rawQuery'](Q,[w]);if(!J['moveToFirst']())return J[e(0x7a)](),null;var k=CursorManager[e(0xf3)](J,this[e(0x9b)]);return J[e(0x7a)](),k;},U['prototype'][g(0x83)]=function(w,Q){var A=g;o[A(0x9c)](void 0x0,w)&&(w=''),o[A(0x118)](void 0x0,Q)&&(Q=0x1);for(var J=w;Q>0x0;){var k=this['db'][A(0x7c)]('SELECT\x20prev_id\x20FROM\x20chat_logs\x20WHERE\x20id\x20=\x20?',[J]);if(!k[A(0x164)]())return k[A(0x7a)](),null;J=o['LfJFp'](String,k['getString'](0x0)),Q--;}return J;},U[g(0x135)][g(0x12e)]=function(w,Q){var S=g;o[S(0x14c)](void 0x0,Q)&&(Q=0x1);for(var J=w;o[S(0x8d)](Q,0x0);){var k=this['db'][S(0x7c)](o['GtDVt'],[J]);if(!k['moveToFirst']())return k[S(0x7a)](),null;J=o[S(0x134)](String,k[S(0xb9)](0x0)),Q--;}return J;},U[g(0x135)]['getPrevChatByID']=function(w,Q){var n=g;void 0x0===Q&&(Q=0x1);var J=this['getPrevChatID'](w,Q);return o[n(0x165)](null,J)?null:this[n(0x105)](J);},U[g(0x135)][g(0xa0)]=function(w,Q){var E=g;void 0x0===Q&&(Q=0x1);var J=this['getNextChatID'](w,Q);return o[E(0x149)](null,J)?null:this[E(0x105)](J);},U['prototype'][g(0xa6)]=function(w,Q){var V=g,J='1|3|2|4|0'[V(0xc6)]('|'),k=0x0;while(!![]){switch(J[k++]){case'0':return L[V(0x7a)](),Z;case'1':void 0x0===w&&(w=void 0x0),o[V(0xf8)](void 0x0,Q)&&(Q=void 0x0),w=o[V(0xb2)](w,'0'),Q=Q||o[V(0x81)](String,Number[V(0xda)]);continue;case'2':if(!L['moveToFirst']())return L[V(0x7a)](),[];continue;case'3':var D=o['rzRMl'](o[V(0xa7)](o['MyLMd'],ALL_COLUMN)+JOIN_COLUMN,V(0xa5)),L=this['db'][V(0x7c)](D,[w,Q]),Z=[];continue;case'4':do{var y=CursorManager[V(0xf3)](L,this[V(0x9b)]);Z[V(0xdf)](y);}while(L[V(0xe4)]());continue;}break;}},U[g(0x135)]['getLastID']=function(){var I=g,w=this['db'][I(0x7c)](o[I(0x155)],[]);if(w[I(0x164)]()){var Q=String(w[I(0xb9)](0x0));return w[I(0x7a)](),Q;}w[I(0x7a)]();},U[g(0x135)][g(0xa2)]=function(w){var R=g,Q=o['Gpjoc'](o[R(0xa7)](R(0x7d),USER_COLUMN),o[R(0x112)]),J=this['db'][R(0x7c)](Q,[w]);if(!J[R(0x172)]())return J[R(0x7a)](),null;var k=CursorManager[R(0x121)](J,this[R(0x9b)]);return J['close'](),k;},U['prototype'][g(0x92)]=function(w,Q){var u=g,J=o[u(0x98)][u(0xc6)]('|'),k=0x0;while(!![]){switch(J[k++]){case'0':o['ZWgkY'](void 0x0,Q)&&(Q=!0x1);continue;case'1':var D=[];continue;case'2':for(var L=0x0;o[u(0x94)](L,y['length']);L++){var Z=y[L][u(0x119)]();f[u(0xdf)](Z);}continue;case'3':do{D[u(0xdf)](CursorManager[u(0xc3)](m));}while(m['moveToNext']());continue;case'4':return N[u(0xac)](),Q?o[u(0x84)](groupBy,f,'id'):f;case'5':m['close']();continue;case'6':for(var y=[],N=Executors[u(0xb3)](0x5),b=function(j){var Y=u,X=CompletableFuture[Y(0x7e)](function(){var C=Y;return CursorManager[C(0x10e)](j,W[C(0x9b)]);},N);y['push'](X);},P=0x0,p=D;P<p['length'];P++){o[u(0x103)](b,L=p[P]);}continue;case'7':var W=this;continue;case'8':var f=[],v=sql_bricks_1[u(0xa4)][u(0xfc)](USER_COLUMN)['from'](o['yipTZ'])['where']({'id[^]':w})[u(0xab)](),m=this['db']['rawQuery'](v[u(0xc4)],v[u(0x80)]);continue;case'9':if(!m[u(0x164)]())return Q?{}:[];continue;}break;}},U[g(0x135)][g(0x158)]=function(w){var z=g,Q=this['db'][z(0x7c)](o[z(0x145)],[w]);if(!Q[z(0x172)]())return Q[z(0x7a)](),null;var J=parse(o['UXhxd'](String,Q[z(0xb9)](0x0)));return Q[z(0x7a)](),this[z(0x92)](J);},U[g(0x135)][g(0x7c)]=function(w,Q){var K0=g,J=[];try{var k=this['db']['rawQuery'](w,o[K0(0x13c)](null,Q)?Q:[]);if(!k[K0(0x164)]())return k[K0(0x7a)](),[];var D=+k[K0(0xd0)]();do{for(var L={},Z=0x0;Z<D;Z++){var y=o[K0(0x134)](String,k[K0(0x13d)](Z));switch(k[K0(0x95)](Z)){case android['database'][K0(0xce)]['FIELD_TYPE_FLOAT']:if(o[K0(0x173)](null,k[K0(0x96)](Z))){L[y]=null;continue;}L[y]=o[K0(0xe2)](Number,k['getFloat'](Z));break;case android[K0(0xd4)][K0(0xce)][K0(0x106)]:if(o[K0(0x165)](null,k['getLong'](Z))){L[y]=null;continue;}L[y]=o['UXhxd'](Number,k[K0(0xdc)](Z));break;default:if(o[K0(0x13a)](null,k['getString'](Z))){L[y]=null;continue;}L[y]=o[K0(0xbb)](String,k[K0(0xb9)](Z));}}J['push'](L);}while(k[K0(0xe4)]());return J;}catch(d){return J;}},U[g(0x13b)]=null,U;}());function h(o,U){var w=K();return h=function(Q,J){Q=Q-0x6e;var k=w[Q];return k;},h(o,U);}function isEmpty(o){var K1=B,U={'VutBB':function(w,Q){return w==Q;},'uhamy':function(w,Q){return w===Q;}};return U[K1(0xdd)](null,o)||U[K1(0x87)]('',o);}exports[B(0xa9)]=ChatManager,function(U){var K2=B,w={'VrckC':function(P,p){return P===p;},'rJVUf':function(P,p){return P<p;},'MIQoh':'_id','vKbUb':K2(0x146),'inbJB':'deleted_at','MJGhB':function(P,p){return P(p);},'cbETW':K2(0x152),'HpudK':function(P,p){return P(p);},'rBZDF':function(P,p){return P(p);},'nLvov':function(P,p){return P(p);},'zUZnH':function(P,p){return P==p;},'zhpWU':function(P,p){return P===p;},'rJqSV':function(P,p){return P!==p;},'dawmk':function(P,p){return P&p;},'JMreZ':function(P,p){return P===p;},'OLrzZ':function(P,p){return P===p;},'RJKgL':function(P,p){return P===p;},'WjmrU':function(P,p){return P(p);},'jlmcg':function(P,p,W){return P(p,W);},'SqqGy':function(P,p){return P<p;},'FUsTR':K2(0x115),'ubcyk':K2(0xfb),'Jvbik':K2(0x107),'vHDIU':K2(0x16f),'WHobQ':K2(0xb1),'aqzTx':K2(0x126),'zwqco':'last_chat_log_type','QOcAq':'is_hint','ijAzo':K2(0xb6),'iWBqm':K2(0xf9),'IRgNp':K2(0x156),'bfTat':K2(0xae),'nKaqH':'watermarks','mDVwx':K2(0x102),'coXHj':'last_pk_tokens','RkRBf':K2(0x120),'LcGtm':'blinded_member_ids','klPPW':K2(0x91),'NsAjp':K2(0x15c),'FXcCZ':function(P,p){return P(p);},'fiNwV':function(P,p,W,f){return P(p,W,f);},'Qboqz':function(P,p){return P===p;},'lDXbj':K2(0x154),'xQdWe':K2(0x16a),'jaRMt':'story_user_id','iBYTs':K2(0x130),'kwTTA':K2(0x15b),'mYzoW':K2(0x100),'NPQBs':'position','yCRrt':K2(0x12a),'WHiqo':function(P,p){return P(p);},'jeZeY':K2(0xf0),'gaNhv':K2(0xf5),'gmGwm':K2(0xcf),'ARkFT':function(P,p){return P(p);},'dOUJI':K2(0xe8),'KhMsH':function(P,p){return P(p);},'Jvznq':K2(0x8f),'BtzNP':function(P,p){return P!==p;},'esPMB':K2(0x159),'sYZik':K2(0x162),'Bktzf':function(P,p){return P!==p;},'KRCuj':function(P,p){return P===p;},'CLWYg':function(P,p,W){return P(p,W);},'byliL':function(P,p){return P<p;},'oIzKs':K2(0x110),'SDLUE':K2(0xf4),'lKAfq':K2(0x171),'CPsBo':function(P,p){return P(p);},'MvAxu':'expired','qqLKX':function(P,p){return P(p);},'lycLw':function(P,p){return P===p;}};function Q(P,p){var K3=K2;w[K3(0xe1)](void 0x0,p)&&(p='');for(var W={},f=P[K3(0x104)](),v=0x0;w[K3(0xe3)](v,f[K3(0x170)]);v++){var m=String(f[v])[K3(0x16e)](p,''),j=P[K3(0xb9)](v);switch(m){case w[K3(0x10b)]:case'id':case K3(0x16a):case'user_id':case w['vKbUb']:case w[K3(0x13e)]:case K3(0x82):case'prev_id':W[m]=w[K3(0xec)](String,j);break;case w[K3(0x11d)]:case'referer':W[m]=w['HpudK'](Number,j);break;case'v':W[m]=w[K3(0xc1)](parse,w[K3(0x8c)](String,j));break;default:CHAT_COLUMN_ARRAY[K3(0x10c)](m)&&(W[m]=j&&w['nLvov'](String,j));}}return W;}function J(P){var K4=K2,p,W,f=P['user_id'],v=null!==(W=null===(p=w[K4(0xa8)](null,P)?void 0x0:P['v'])||w[K4(0x150)](void 0x0,p)?void 0x0:p[K4(0xcd)])&&w['rJqSV'](void 0x0,W)?W:0x1e,m=(0x0,decrypt_1['default'])(f,v,P['attachment']),j=(0x0,decrypt_1[K4(0xa4)])(f,v,P['message']);switch(P[K4(0xff)]=isEmpty(m)?m:w[K4(0xc1)](parse,m),P[K4(0x109)]=j,w[K4(0xc2)](0xffffbfff,P[K4(0x152)])){case 0x0:return P[K4(0x109)]=parse(P[K4(0x109)]),0x1===P[K4(0x109)][K4(0x124)]?new ChatClass_1[(K4(0xaa))](P):0x2===P[K4(0x109)]['feedType']?new ChatClass_1[(K4(0xeb))](P):w[K4(0xe1)](0x4,P['message']['feedType'])?new ChatClass_1['OpenChatJoinedFeed'](P):w[K4(0xbf)](0x6,P[K4(0x109)][K4(0x124)])?new ChatClass_1['OpenChatKickedFeed'](P):w['OLrzZ'](0xb,P[K4(0x109)][K4(0x124)])?new ChatClass_1[(K4(0x16b))](P):0xc===P[K4(0x109)][K4(0x124)]?new ChatClass_1['DemoteFeed'](P):w[K4(0x127)](0xe,P['message'][K4(0x124)])?new ChatClass_1[(K4(0xd3))](P):w['RJKgL'](0xf,P[K4(0x109)][K4(0x124)])?new ChatClass_1[(K4(0x147))](P):new ChatClass_1[(K4(0x174))](P);case 0x1:return new ChatClass_1[(K4(0xa1))](P);case 0x2:return new ChatClass_1[(K4(0x9e))](P);case 0x3:return new ChatClass_1['VideoChat'](P);case 0x5:return new ChatClass_1['AudioChat'](P);case 0x6:return new ChatClass_1[(K4(0x73))](P);case 0xc:case 0x14:case 0x19:return new ChatClass_1[(K4(0xf2))](P);case 0x10:return new ChatClass_1[(K4(0xba))](P);case 0x12:return new ChatClass_1[(K4(0xb7))](P);case 0x1a:return new ChatClass_1[(K4(0x93))](P);case 0x1b:return new ChatClass_1[(K4(0xad))](P);default:return new ChatClass_1[(K4(0x113))](P);}}function k(P,p){var K5=K2;return void 0x0===p&&(p=''),w[K5(0x88)](J,w['jlmcg'](Q,P,p));}function D(P,p,W){var K6=K2;w['OLrzZ'](void 0x0,W)&&(W='');for(var f={},v=P[K6(0x104)](),m=0x0;w[K6(0xca)](m,v[K6(0x170)]);m++){var j=w[K6(0x101)](String,v[m])['replace'](W,''),X=P['getString'](m);switch(j){case w[K6(0x10b)]:case'id':case K6(0xd7):case K6(0xd1):case'last_update_seen_id':case w[K6(0xd8)]:case K6(0x15e):case w[K6(0xc7)]:case w[K6(0xd6)]:case w[K6(0x15d)]:case w[K6(0x12b)]:f[j]=X?String(X):null;break;case'unread_count':case w['aqzTx']:case w[K6(0xd2)]:f[j]=X?Number(X):null;break;case w[K6(0x6f)]:f[j]=X?w[K6(0xec)](Boolean,w[K6(0x8c)](Number,X)):null;break;case w[K6(0x140)]:case'v':case w[K6(0x10a)]:case w[K6(0xc5)]:case w['bfTat']:case K6(0x169):case w[K6(0x137)]:case K6(0x11e):case w[K6(0x85)]:case K6(0xbc):case w['coXHj']:case w[K6(0x10d)]:case w[K6(0x15a)]:f[j]=X&&parse(w[K6(0xc1)](String,X));break;default:if(ROOM_COLUMN_ARRAY['includes'](j)){f[j]=X&&String(X);break;}}}var q=f['v'][K6(0xcd)];return f[K6(0xe9)]=(0x0,decrypt_1['default'])(p,q,f[K6(0xe9)]),f;}function L(P){var K7=K2;return[w[K7(0x142)],w[K7(0x131)]][K7(0x10c)](P['type'])?new ChannelManager_1[(K7(0xc0))](P):new ChannelManager_1[(K7(0xcb))](P);}function Z(P,p,W){var K8=K2;void 0x0===W&&(W='');var f=w[K8(0xe7)](L,w['fiNwV'](D,P,p,W));if(f[K8(0xe0)]()){var v=w['fiNwV'](b,P,p,'o_');f[K8(0xc9)]=v,f[K8(0x159)]=v[K8(0x159)];}return f;}function y(P,p){var K9=K2;w[K9(0x11a)](void 0x0,p)&&(p='');for(var W={},f=P[K9(0x104)](),v=0x0;w[K9(0xe3)](v,f['length']);v++){var m=w[K9(0x101)](String,f[v])[K9(0x16e)](p,''),j=P[K9(0xb9)](v);switch(m){case w['MIQoh']:case w[K9(0x148)]:case'id':case w[K9(0x72)]:case w[K9(0x122)]:case w[K9(0x123)]:case w['iBYTs']:case w[K9(0x14f)]:case w[K9(0xb4)]:case'status_action_token':W[m]=j&&String(j);break;case K9(0x152):case'enc':case w[K9(0x166)]:case'user_type':case w[K9(0x14d)]:W[m]=w[K9(0x15f)](Number,j);break;case'brand_new':case K9(0x79):case'favorite':case w[K9(0xed)]:case w[K9(0x9d)]:case w[K9(0xb5)]:W[m]=w[K9(0xaf)](Boolean,Number(j));break;case w[K9(0x70)]:W[m]=w[K9(0x8c)](parse,w['KhMsH'](String,j));break;default:USER_COLUMN_ARRAY[K9(0x10c)](m)&&(W[m]=j&&String(j));}}return W;}function d(P,p){var KK=K2,W=w[KK(0x11f)]['split']('|'),f=0x0;while(!![]){switch(W[f++]){case'0':return P['v']=l&&w[KK(0xec)](parse,l),w[KK(0x90)](0x3e8,P[KK(0x152)])?new UserManger_1[(KK(0xf6))](P):new UserManger_1[(KK(0xe6))](P);case'1':P['board_v']=T&&w[KK(0x88)](parse,T);continue;case'2':for(var v,m=null!==(v=P[KK(0xcd)])&&w[KK(0x9a)](void 0x0,v)?v:0x1e,j=0x0,X=[w[KK(0x8b)],'original_profile_image_url',w[KK(0x138)],KK(0x97),KK(0x8a)];w[KK(0xe3)](j,X[KK(0x170)]);j++){var q=X[j];if(w[KK(0xb0)]('',P[q])){var G=P[q];P[q]=(0x0,decrypt_1[KK(0xa4)])(p,m,G);}}continue;case'3':var T=(0x0,decrypt_1[KK(0xa4)])(p,m,P['board_v']);continue;case'4':var l=(0x0,decrypt_1[KK(0xa4)])(p,m,P['v']);continue;}break;}}function N(P,p,W){var Kh=K2;return w[Kh(0x136)](void 0x0,W)&&(W=''),w['jlmcg'](d,w[Kh(0x111)](y,P,W),p);}function b(P,p,W){var Ko=K2;w[Ko(0xbf)](void 0x0,W)&&(W='');for(var f={},v=P[Ko(0x104)](),m=0x0;w[Ko(0x11b)](m,v[Ko(0x170)]);m++){var j=w[Ko(0xc1)](String,v[m])[Ko(0x16e)](W,''),X=P[Ko(0xb9)](m);switch(j){case w[Ko(0x10b)]:case'id':case w[Ko(0x8b)]:case w[Ko(0x144)]:case'user_id':case Ko(0xd5):case w[Ko(0x128)]:case w['lKAfq']:f[j]=X?w[Ko(0x125)](String,X):null;break;case w[Ko(0x122)]:case Ko(0x152):f[j]=X?w['HpudK'](Number,X):null;break;case Ko(0x78):case w[Ko(0xdb)]:f[j]=X?w[Ko(0x15f)](Boolean,w['qqLKX'](Number,X)):null;break;case'v':f[j]=X&&parse(String(X));break;default:if(OPEN_LINK_COLUMN_ARRAY[Ko(0x10c)](j)){f[j]=X&&String(X);break;}}}return f;}U[K2(0x71)]=Q,U[K2(0x12d)]=J,U[K2(0x74)]=k,U[K2(0x153)]=D,U['channelInterfaceToRoom']=L,U[K2(0xde)]=Z,U[K2(0xf3)]=function(P,p){var KU=K2,W=w['CLWYg'](k,P,'c_');W['user']=w[KU(0x7b)](N,P,p,'u_');var f=Z(P,p,'r_');return w['lycLw'](w[KU(0x142)],f['raw'][KU(0x152)])&&(f[KU(0x159)]=W[KU(0x75)][KU(0x159)]),W[KU(0x132)]=f,W;},U[K2(0xc3)]=y,U[K2(0x10e)]=d,U['cursorToUser']=N,U[K2(0x139)]=b;}(CursorManager||(CursorManager={}));