'use strict';
var w = A;
(function (h, D) {
    var k = A, l = h();
    while (!![]) {
        try {
            var L = -parseInt(k(0x134)) / 0x1 + parseInt(k(0x125)) / 0x2 + parseInt(k(0x122)) / 0x3 * (-parseInt(k(0x152)) / 0x4) + parseInt(k(0x102)) / 0x5 * (-parseInt(k(0x10a)) / 0x6) + -parseInt(k(0x12a)) / 0x7 + parseInt(k(0x12d)) / 0x8 * (parseInt(k(0x156)) / 0x9) + parseInt(k(0xf4)) / 0xa;
            if (L === D) break; else l['push'](l['shift']());
        } catch (y) {
            l['push'](l['shift']());
        }
    }
}(I, 0xb19cd));

function A(h, D) {
    var l = I();
    return A = function (L, y) {
        L = L - 0xe6;
        var x = l[L];
        return x;
    }, A(h, D);
}

var __extends = this && this['__extends'] || (function () {
    var h = {
        'iGtxH': function (l, L) {
            return l instanceof L;
        }, 'tGArL': function (l, L, y) {
            return l(L, y);
        }, 'undrI': function (l, L) {
            return l != L;
        }, 'mFuZj': function (l, L) {
            return l !== L;
        }, 'kRmRv': function (l, L) {
            return l + L;
        }, 'uGGmy': function (l, L) {
            return l + L;
        }, 'khtFv': 'Class\x20extends\x20value\x20', 'xOjQi': function (l, L) {
            return l(L);
        }, 'flXPY': function (l, L) {
            return l === L;
        }
    }, D = function (l, L) {
        var M = A;
        return D = Object['setPrototypeOf'] || h[M(0x108)]({'__proto__': []}, Array) && function (y, x) {
            var j = M;
            y[j(0xee)] = x;
        } || function (y, x) {
            var r = M;
            for (var P in x) Object[r(0x15d)][r(0x11d)]['call'](x, P) && (y[P] = x[P]);
        }, h[M(0x144)](D, l, L);
    };
    return function (l, L) {
        var i = A;
        if (h[i(0xff)](i(0x10e), typeof L) && h['mFuZj'](null, L)) throw new TypeError(h[i(0x13f)](h['uGGmy'](h[i(0x15c)], h[i(0x133)](String, L)), i(0xfa)));

        function y() {
            var U = i;
            this[U(0x13d)] = l;
        }

        D(l, L), l[i(0x15d)] = h[i(0xe7)](null, L) ? Object[i(0x11f)](L) : (y[i(0x15d)] = L[i(0x15d)], new y());
    };
}());

function I() {
    var v = ['database', '/data/data/', 'getChatManager', 'undrI', 'setWakeLock', 'isKicked', '15SWQGCG', 'start', 'uTXhA', 'MgaMS', 'invite', 'fBuLU', 'iGtxH', 'enter', '1712670AmqHFJ', 'MSG', 'PvIcH', 'DBManager', 'function', 'leave', 'Runtime', 'MODIFY', 'PVuZL', 'stack', 'lang', 'setLanguageVersion', 'ChatManager', 'vWeCA', 'lineNumber', 'SQLiteDatabase', 'bind', 'getLastChat', 'origin', 'hasOwnProperty', 'oMmlm', 'create', 'foTvO', 'isFeed', '412689yIagIM', '/databases/KakaoTalk.db', 'waitFor', '785906ynjBSp', 'PARTIAL_WAKE_LOCK', 'getRuntime', 'AJPUQ', 'qzhPJ', '3684625OSrFVq', 'kOypy', 'stop', '5871728wPjUnu', 'newWakeLock', 'uwINH', 'BTHtD', 'call', 'MqARW', 'xOjQi', '483904gJglau', 'getInstance', 'VERSION_ES6', 'qzMKa', 'addChannel', 'hide', 'getPath', 'oigGX', 'message', 'constructor', 'EventEmitter', 'kRmRv', 'exec', 'defineProperty', '_instance', 'Tkrbc', 'tGArL', 'kick', 'DELMEM', 'join', 'emit', 'PowerManager', '-wal', 'CREATE_IF_NECESSARY', 'feedType', 'getChannelByID', 'obs', 'openDatabase', 'POWER_SERVICE', '_id', '24oKvLVj', 'delete', 'SYNCDLMSG', 'getSystemService', '9UuymtR', 'userKey', 'close', 'getChannelManager', 'euzwl', 'NEWMEM', 'khtFv', 'prototype', 'isWakeLock', 'chatManager', 'Context', '/databases/KakaoTalk2.db`\x20as\x20DB2', '../../ChatManger', 'File', 'deletedChatUser', 'raw', 'flXPY', 'startWatching', 'release', 'sqlite', 'oPKFw', 'packageName', '_lastID', '__proto__', 'onEvent', 'getChatStack', 'acquire', 'user', 'SYNCMEMT', '22925740XrWCZm', 'FileObserver', 'mozilla', 'ChannelManager', 'content', 'member_type_change', '\x20is\x20not\x20a\x20constructor\x20or\x20null', 'getCurrentContext'];
    I = function () {
        return v;
    };
    return I();
}

Object[w(0x141)](exports, '__esModule', {'value': !0x0}), exports[w(0x10d)] = void 0x0;
var eventemitter_1 = require('./emitter/eventemitter'), ChatManger_1 = require(w(0x162)),
    ChannelManager_1 = require('../../ChannelManager'), FileObserver = android['os'][w(0xf5)],
    File = java['io'][w(0x163)], Context = android[w(0xf8)][w(0x160)], PowerManager = android['os'][w(0x149)],
    pm = Api['getContext']()[w(0x155)](Context[w(0x150)]), wakeLock = pm[w(0x12e)](PowerManager[w(0x126)], w(0x10d)),
    DBManager = function (h) {
        var p = w, D = {
            'kOypy': function (L, P) {
                return L + P;
            }, 'qzMKa': p(0xfd), 'QXgnD': p(0x123), 'foTvO': function (L, P) {
                return L | P;
            }, 'PvIcH': p(0x161), 'oigGX': p(0x14a), 'AJPUQ': function (L, P) {
                return L === P;
            }, 'BTHtD': function (L, P) {
                return L === P;
            }, 'bugTH': 'chmod\x20-R\x20777\x20/data/data/', 'MgaMS': function (L, P) {
                return L != P;
            }, 'XnMWs': function (L, P) {
                return L & P;
            }, 'TuOkb': function (L, P) {
                return L - P;
            }, 'oxMqM': function (L, P) {
                return L < P;
            }, 'vWeCA': p(0x10b), 'euzwl': 'CHATINFO', 'MqARW': p(0x13c), 'uwINH': p(0x15b), 'oPKFw': function (L, P) {
                return L === P;
            }, 'Tkrbc': p(0x145), 'fBuLU': function (L, P) {
                return L === P;
            }, 'PVuZL': p(0x10f), 'uTXhA': p(0x153), 'mAGxt': 'SYNCREWR', 'qzhPJ': p(0xf3), 'oMmlm': function (L, P) {
                return L + P;
            }
        };

        function l(L, y, x) {
            var d = p;
            void 0x0 === x && (x = !0x1);
            var P = h[d(0x131)](this) || this;
            return P[d(0x15e)] = !0x1, P[d(0xec)] = '', P['userKey'] = '', P[d(0xed)] = void 0x0, x && P['requestPermission'](), P[d(0xec)] = L, P[d(0x157)] = y, P['db'] = android[d(0xfc)][d(0xea)][d(0x119)][d(0x14f)](D[d(0x12b)](D[d(0x137)] + P['packageName'], D['QXgnD']), null, D[d(0x120)](android[d(0xfc)]['sqlite'][d(0x119)][d(0x14b)], android[d(0xfc)]['sqlite'][d(0x119)]['ENABLE_WRITE_AHEAD_LOGGING'])), P['db']['execSQL'](D[d(0x12b)](D[d(0x12b)]('Attach\x20`/data/data/', P[d(0xec)]), D[d(0x10c)]), []), P[d(0x15f)] = ChatManger_1[d(0x116)][d(0x135)](P['db'], P['userKey']), P[d(0x14e)] = new JavaAdapter(FileObserver, {'onEvent': P[d(0xef)][d(0x11a)](P)}, new File(P['db'][d(0x13a)]() + D[d(0x13b)])), P;
        }

        return __extends(l, h), l[p(0x135)] = function (L, y, x) {
            var T = p;
            return D[T(0x128)](void 0x0, x) && (x = !0x1), D[T(0x130)](null, l[T(0x142)]) && (l[T(0x142)] = new l(L, y, x)), l[T(0x142)];
        }, l['prototype']['requestPermission'] = function () {
            var q = p;
            java[q(0x114)]['Runtime'][q(0x127)]()[q(0x140)]('su'), java[q(0x114)][q(0x110)][q(0x127)]()['exec'](['su', '-c', D[q(0x12b)](D['bugTH'], this[q(0xec)])])[q(0x124)]();
        }, l[p(0x15d)][p(0xfe)] = function () {
            var z = p;
            return this[z(0x15f)];
        }, l['prototype'][p(0x159)] = function () {
            var t = p;
            return ChannelManager_1[t(0xf7)];
        }, l[p(0x15d)][p(0x138)] = function (L) {
            var R = p;
            ChannelManager_1[R(0xf7)][R(0x138)](L);
        }, l[p(0x15d)][p(0xef)] = function (L, y) {
            var W = p;
            if (D[W(0x105)](0x0, D['XnMWs'](L, FileObserver[W(0x111)]))) {
                var x = org[W(0xf6)]['javascript'][W(0x160)][W(0xfb)]();
                x[W(0x109)]()[W(0x115)](x[W(0x136)]);
                try {
                    var P = this[W(0xed)], Z = this['chatManager'][W(0xf0)](P), H = Z['length'];
                    if (0x0 === H) return;
                    this[W(0xed)] = Z[D['TuOkb'](H, 0x1)][W(0xe6)]['_id'];
                    for (var m = 0x0, S = Z; D['oxMqM'](m, S['length']); m++) {
                        var B = S[m], J = B[W(0xe6)]['v'], g = B[W(0xe6)]['chat_id'],
                            X = ChannelManager_1['ChannelManager'][W(0x14d)](g);
                        switch (null == J ? void 0x0 : J[W(0x11c)]) {
                            case D[W(0x117)]:
                            case D[W(0x15a)]:
                                this[W(0x148)](D[W(0x132)], B, X);
                                break;
                            case D[W(0x12f)]:
                                B[W(0x121)]() && (D[W(0xeb)](0x1, B[W(0x14c)]) ? this['emit'](W(0x106), B, X) : this['emit'](W(0x147), B, X));
                                break;
                            case W(0x146):
                                B[W(0x121)]() && (D[W(0x130)](0x6, B[W(0x14c)]) ? this[W(0x148)](D[W(0x143)], B, X) : D[W(0x107)](0x2, B['feedType']) && (B[W(0x101)]() ? this[W(0x148)](D[W(0x143)], B, X) : this[W(0x148)](D[W(0x112)], B, X)));
                                break;
                            case W(0x154):
                                var f = B;
                                f[W(0x164)] = f[W(0xf2)], this[W(0x148)](D[W(0x104)], f, X);
                                break;
                            case D['mAGxt']:
                                this[W(0x148)](W(0x139), B, X);
                                break;
                            case D[W(0x129)]:
                                this[W(0x148)](W(0xf9), B, X);
                        }
                    }
                } catch (F) {
                    Log['d'](D[W(0x12b)](D[W(0x11e)](D[W(0x12b)](F[W(0x118)], '\x0a'), F[W(0x13c)]), '\x0a') + F[W(0x113)]);
                }
            }
        }, l[p(0x15d)][p(0x103)] = function () {
            var K = p, L;
            return this[K(0x12c)](), this[K(0xed)] = null === (L = this[K(0x15f)][K(0x11b)](!0x1)) || D[K(0x130)](void 0x0, L) ? void 0x0 : L['raw'][K(0x151)], this[K(0x14e)][K(0xe8)](), !0x0;
        }, l[p(0x15d)][p(0x12c)] = function () {
            var Y = p;
            return this[Y(0x14e)]['stopWatching'](), !0x0;
        }, l[p(0x15d)][p(0x158)] = function () {
            var c = p;
            this['db'][c(0x158)]();
        }, l['prototype'][p(0x100)] = function (L) {
            var G = p;
            L && !this[G(0x15e)] ? (this[G(0x15e)] = !0x0, wakeLock[G(0xf1)]()) : !L && this[G(0x15e)] && (this[G(0x15e)] = !0x1, wakeLock[G(0xe9)]());
        }, l[p(0x142)] = null, l;
    }(eventemitter_1[w(0x13e)]);
exports[w(0x10d)] = DBManager;
