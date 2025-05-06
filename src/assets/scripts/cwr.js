/* CWR 1.17.0 */
/*! License information can be found in LICENSE and LICENSE-THIRD-PARTY */
!(function () {
  var e = {
      1446: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AwsCrc32 = void 0);
        var r = n(655),
          o = n(1359),
          i = n(4079),
          a = (function () {
            function e() {
              this.crc32 = new i.Crc32();
            }
            return (
              (e.prototype.update = function (e) {
                (0, o.isEmptyData)(e) || this.crc32.update((0, o.convertToBuffer)(e));
              }),
              (e.prototype.digest = function () {
                return r.__awaiter(this, void 0, void 0, function () {
                  return r.__generator(this, function (e) {
                    return [2, (0, o.numToUint8)(this.crc32.digest())];
                  });
                });
              }),
              (e.prototype.reset = function () {
                this.crc32 = new i.Crc32();
              }),
              e
            );
          })();
        t.AwsCrc32 = a;
      },
      4079: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AwsCrc32 = t.Crc32 = t.crc32 = void 0);
        var r = n(655),
          o = n(1359);
        t.crc32 = function (e) {
          return new i().update(e).digest();
        };
        var i = (function () {
          function e() {
            this.checksum = 4294967295;
          }
          return (
            (e.prototype.update = function (e) {
              var t, n;
              try {
                for (var o = r.__values(e), i = o.next(); !i.done; i = o.next()) {
                  var s = i.value;
                  this.checksum = (this.checksum >>> 8) ^ a[255 & (this.checksum ^ s)];
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              return this;
            }),
            (e.prototype.digest = function () {
              return (4294967295 ^ this.checksum) >>> 0;
            }),
            e
          );
        })();
        t.Crc32 = i;
        var a = (0, o.uint32ArrayFrom)([
            0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324,
            3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
            2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636,
            335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
            1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101,
            3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
            3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565,
            1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
            251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866,
            2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
            4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538,
            1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
            855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635,
            3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
            3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523,
            3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
            2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920,
            282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
            1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512,
            3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
            3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625,
            752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
            83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881,
            2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
            4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406,
            1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
            936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150,
            3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
            3272380065, 1510334235, 755167117,
          ]),
          s = n(1446);
        Object.defineProperty(t, "AwsCrc32", {
          enumerable: !0,
          get: function () {
            return s.AwsCrc32;
          },
        });
      },
      8229: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.convertToBuffer = void 0);
        var r = n(372),
          o =
            "undefined" != typeof Buffer && Buffer.from
              ? function (e) {
                  return Buffer.from(e, "utf8");
                }
              : r.fromUtf8;
        t.convertToBuffer = function (e) {
          return e instanceof Uint8Array
            ? e
            : "string" == typeof e
              ? o(e)
              : ArrayBuffer.isView(e)
                ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT)
                : new Uint8Array(e);
        };
      },
      1359: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.uint32ArrayFrom = t.numToUint8 = t.isEmptyData = t.convertToBuffer = void 0);
        var r = n(8229);
        Object.defineProperty(t, "convertToBuffer", {
          enumerable: !0,
          get: function () {
            return r.convertToBuffer;
          },
        });
        var o = n(701);
        Object.defineProperty(t, "isEmptyData", {
          enumerable: !0,
          get: function () {
            return o.isEmptyData;
          },
        });
        var i = n(6251);
        Object.defineProperty(t, "numToUint8", {
          enumerable: !0,
          get: function () {
            return i.numToUint8;
          },
        });
        var a = n(3340);
        Object.defineProperty(t, "uint32ArrayFrom", {
          enumerable: !0,
          get: function () {
            return a.uint32ArrayFrom;
          },
        });
      },
      701: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isEmptyData = void 0),
          (t.isEmptyData = function (e) {
            return "string" == typeof e ? 0 === e.length : 0 === e.byteLength;
          });
      },
      6251: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.numToUint8 = void 0),
          (t.numToUint8 = function (e) {
            return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]);
          });
      },
      3340: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.uint32ArrayFrom = void 0),
          (t.uint32ArrayFrom = function (e) {
            if (!Uint32Array.from) {
              for (var t = new Uint32Array(e.length), n = 0; n < e.length; ) (t[n] = e[n]), (n += 1);
              return t;
            }
            return Uint32Array.from(e);
          });
      },
      914: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.RawSha256 = void 0);
        var r = n(9945),
          o = (function () {
            function e() {
              (this.state = Int32Array.from(r.INIT)),
                (this.temp = new Int32Array(64)),
                (this.buffer = new Uint8Array(64)),
                (this.bufferLength = 0),
                (this.bytesHashed = 0),
                (this.finished = !1);
            }
            return (
              (e.prototype.update = function (e) {
                if (this.finished) throw new Error("Attempted to update an already finished hash.");
                var t = 0,
                  n = e.byteLength;
                if (((this.bytesHashed += n), 8 * this.bytesHashed > r.MAX_HASHABLE_LENGTH))
                  throw new Error("Cannot hash more than 2^53 - 1 bits");
                for (; n > 0; )
                  (this.buffer[this.bufferLength++] = e[t++]),
                    n--,
                    this.bufferLength === r.BLOCK_SIZE && (this.hashBuffer(), (this.bufferLength = 0));
              }),
              (e.prototype.digest = function () {
                if (!this.finished) {
                  var e = 8 * this.bytesHashed,
                    t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                    n = this.bufferLength;
                  if ((t.setUint8(this.bufferLength++, 128), n % r.BLOCK_SIZE >= r.BLOCK_SIZE - 8)) {
                    for (var o = this.bufferLength; o < r.BLOCK_SIZE; o++) t.setUint8(o, 0);
                    this.hashBuffer(), (this.bufferLength = 0);
                  }
                  for (o = this.bufferLength; o < r.BLOCK_SIZE - 8; o++) t.setUint8(o, 0);
                  t.setUint32(r.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0),
                    t.setUint32(r.BLOCK_SIZE - 4, e),
                    this.hashBuffer(),
                    (this.finished = !0);
                }
                var i = new Uint8Array(r.DIGEST_LENGTH);
                for (o = 0; o < 8; o++)
                  (i[4 * o] = (this.state[o] >>> 24) & 255),
                    (i[4 * o + 1] = (this.state[o] >>> 16) & 255),
                    (i[4 * o + 2] = (this.state[o] >>> 8) & 255),
                    (i[4 * o + 3] = (this.state[o] >>> 0) & 255);
                return i;
              }),
              (e.prototype.hashBuffer = function () {
                for (
                  var e = this.buffer,
                    t = this.state,
                    n = t[0],
                    o = t[1],
                    i = t[2],
                    a = t[3],
                    s = t[4],
                    u = t[5],
                    c = t[6],
                    l = t[7],
                    f = 0;
                  f < r.BLOCK_SIZE;
                  f++
                ) {
                  if (f < 16)
                    this.temp[f] =
                      ((255 & e[4 * f]) << 24) |
                      ((255 & e[4 * f + 1]) << 16) |
                      ((255 & e[4 * f + 2]) << 8) |
                      (255 & e[4 * f + 3]);
                  else {
                    var d = this.temp[f - 2],
                      p = ((d >>> 17) | (d << 15)) ^ ((d >>> 19) | (d << 13)) ^ (d >>> 10),
                      h = (((d = this.temp[f - 15]) >>> 7) | (d << 25)) ^ ((d >>> 18) | (d << 14)) ^ (d >>> 3);
                    this.temp[f] = ((p + this.temp[f - 7]) | 0) + ((h + this.temp[f - 16]) | 0);
                  }
                  var v =
                      ((((((s >>> 6) | (s << 26)) ^ ((s >>> 11) | (s << 21)) ^ ((s >>> 25) | (s << 7))) +
                        ((s & u) ^ (~s & c))) |
                        0) +
                        ((l + ((r.KEY[f] + this.temp[f]) | 0)) | 0)) |
                      0,
                    y =
                      ((((n >>> 2) | (n << 30)) ^ ((n >>> 13) | (n << 19)) ^ ((n >>> 22) | (n << 10))) +
                        ((n & o) ^ (n & i) ^ (o & i))) |
                      0;
                  (l = c), (c = u), (u = s), (s = (a + v) | 0), (a = i), (i = o), (o = n), (n = (v + y) | 0);
                }
                (t[0] += n), (t[1] += o), (t[2] += i), (t[3] += a), (t[4] += s), (t[5] += u), (t[6] += c), (t[7] += l);
              }),
              e
            );
          })();
        t.RawSha256 = o;
      },
      9945: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MAX_HASHABLE_LENGTH = t.INIT = t.KEY = t.DIGEST_LENGTH = t.BLOCK_SIZE = void 0),
          (t.BLOCK_SIZE = 64),
          (t.DIGEST_LENGTH = 32),
          (t.KEY = new Uint32Array([
            1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
            310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
            264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
            3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
            1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
            3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
            1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ])),
          (t.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
          (t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1);
      },
      1938: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), n(655).__exportStar(n(5430), t);
      },
      5430: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Sha256 = void 0);
        var r = n(655),
          o = n(9945),
          i = n(914),
          a = n(7658),
          s = (function () {
            function e(e) {
              if (((this.hash = new i.RawSha256()), e)) {
                this.outer = new i.RawSha256();
                var t = (function (e) {
                    var t = (0, a.convertToBuffer)(e);
                    if (t.byteLength > o.BLOCK_SIZE) {
                      var n = new i.RawSha256();
                      n.update(t), (t = n.digest());
                    }
                    var r = new Uint8Array(o.BLOCK_SIZE);
                    return r.set(t), r;
                  })(e),
                  n = new Uint8Array(o.BLOCK_SIZE);
                n.set(t);
                for (var r = 0; r < o.BLOCK_SIZE; r++) (t[r] ^= 54), (n[r] ^= 92);
                this.hash.update(t), this.outer.update(n);
                for (r = 0; r < t.byteLength; r++) t[r] = 0;
              }
            }
            return (
              (e.prototype.update = function (e) {
                if (!(0, a.isEmptyData)(e) && !this.error)
                  try {
                    this.hash.update((0, a.convertToBuffer)(e));
                  } catch (e) {
                    this.error = e;
                  }
              }),
              (e.prototype.digestSync = function () {
                if (this.error) throw this.error;
                return this.outer
                  ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest())
                  : this.hash.digest();
              }),
              (e.prototype.digest = function () {
                return r.__awaiter(this, void 0, void 0, function () {
                  return r.__generator(this, function (e) {
                    return [2, this.digestSync()];
                  });
                });
              }),
              e
            );
          })();
        t.Sha256 = s;
      },
      1106: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.convertToBuffer = void 0);
        var r = n(372),
          o =
            "undefined" != typeof Buffer && Buffer.from
              ? function (e) {
                  return Buffer.from(e, "utf8");
                }
              : r.fromUtf8;
        t.convertToBuffer = function (e) {
          return e instanceof Uint8Array
            ? e
            : "string" == typeof e
              ? o(e)
              : ArrayBuffer.isView(e)
                ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT)
                : new Uint8Array(e);
        };
      },
      7658: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.uint32ArrayFrom = t.numToUint8 = t.isEmptyData = t.convertToBuffer = void 0);
        var r = n(1106);
        Object.defineProperty(t, "convertToBuffer", {
          enumerable: !0,
          get: function () {
            return r.convertToBuffer;
          },
        });
        var o = n(4304);
        Object.defineProperty(t, "isEmptyData", {
          enumerable: !0,
          get: function () {
            return o.isEmptyData;
          },
        });
        var i = n(2174);
        Object.defineProperty(t, "numToUint8", {
          enumerable: !0,
          get: function () {
            return i.numToUint8;
          },
        });
        var a = n(1558);
        Object.defineProperty(t, "uint32ArrayFrom", {
          enumerable: !0,
          get: function () {
            return a.uint32ArrayFrom;
          },
        });
      },
      4304: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isEmptyData = void 0),
          (t.isEmptyData = function (e) {
            return "string" == typeof e ? 0 === e.length : 0 === e.byteLength;
          });
      },
      2174: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.numToUint8 = void 0),
          (t.numToUint8 = function (e) {
            return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]);
          });
      },
      1558: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.uint32ArrayFrom = void 0),
          (t.uint32ArrayFrom = function (e) {
            if (!Uint32Array.from) {
              for (var t = new Uint32Array(e.length), n = 0; n < e.length; ) (t[n] = e[n]), (n += 1);
              return t;
            }
            return Uint32Array.from(e);
          });
      },
      5330: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventStreamCodec = void 0);
        var o = r(n(6690)),
          i = r(n(9728)),
          a = n(4079),
          s = n(4212),
          u = n(9030),
          c = (function () {
            function e(t, n) {
              (0, o.default)(this, e),
                (this.headerMarshaller = new s.HeaderMarshaller(t, n)),
                (this.messageBuffer = []),
                (this.isEndOfStream = !1);
            }
            return (
              (0, i.default)(e, [
                {
                  key: "feed",
                  value: function (e) {
                    this.messageBuffer.push(this.decode(e));
                  },
                },
                {
                  key: "endOfStream",
                  value: function () {
                    this.isEndOfStream = !0;
                  },
                },
                {
                  key: "getMessage",
                  value: function () {
                    var e = this.messageBuffer.pop(),
                      t = this.isEndOfStream;
                    return {
                      getMessage: function () {
                        return e;
                      },
                      isEndOfStream: function () {
                        return t;
                      },
                    };
                  },
                },
                {
                  key: "getAvailableMessages",
                  value: function () {
                    var e = this.messageBuffer;
                    this.messageBuffer = [];
                    var t = this.isEndOfStream;
                    return {
                      getMessages: function () {
                        return e;
                      },
                      isEndOfStream: function () {
                        return t;
                      },
                    };
                  },
                },
                {
                  key: "encode",
                  value: function (e) {
                    var t = e.headers,
                      n = e.body,
                      r = this.headerMarshaller.format(t),
                      o = r.byteLength + n.byteLength + 16,
                      i = new Uint8Array(o),
                      s = new DataView(i.buffer, i.byteOffset, i.byteLength),
                      u = new a.Crc32();
                    return (
                      s.setUint32(0, o, !1),
                      s.setUint32(4, r.byteLength, !1),
                      s.setUint32(8, u.update(i.subarray(0, 8)).digest(), !1),
                      i.set(r, 12),
                      i.set(n, r.byteLength + 12),
                      s.setUint32(o - 4, u.update(i.subarray(8, o - 4)).digest(), !1),
                      i
                    );
                  },
                },
                {
                  key: "decode",
                  value: function (e) {
                    var t = (0, u.splitMessage)(e),
                      n = t.headers,
                      r = t.body;
                    return { headers: this.headerMarshaller.parse(n), body: r };
                  },
                },
                {
                  key: "formatHeaders",
                  value: function (e) {
                    return this.headerMarshaller.format(e);
                  },
                },
              ]),
              e
            );
          })();
        t.EventStreamCodec = c;
      },
      4212: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.HeaderMarshaller = void 0);
        var o,
          i = r(n(6690)),
          a = r(n(9728)),
          s = n(460),
          u = n(7776),
          c = (function () {
            function e(t, n) {
              (0, i.default)(this, e), (this.toUtf8 = t), (this.fromUtf8 = n);
            }
            return (
              (0, a.default)(e, [
                {
                  key: "format",
                  value: function (e) {
                    for (var t = [], n = 0, r = Object.keys(e); n < r.length; n++) {
                      var o = r[n],
                        i = this.fromUtf8(o);
                      t.push(Uint8Array.from([i.byteLength]), i, this.formatHeaderValue(e[o]));
                    }
                    for (
                      var a = new Uint8Array(
                          t.reduce(function (e, t) {
                            return e + t.byteLength;
                          }, 0),
                        ),
                        s = 0,
                        u = 0,
                        c = t;
                      u < c.length;
                      u++
                    ) {
                      var l = c[u];
                      a.set(l, s), (s += l.byteLength);
                    }
                    return a;
                  },
                },
                {
                  key: "formatHeaderValue",
                  value: function (e) {
                    switch (e.type) {
                      case "boolean":
                        return Uint8Array.from([e.value ? 0 : 1]);
                      case "byte":
                        return Uint8Array.from([2, e.value]);
                      case "short":
                        var t = new DataView(new ArrayBuffer(3));
                        return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
                      case "integer":
                        var n = new DataView(new ArrayBuffer(5));
                        return n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer);
                      case "long":
                        var r = new Uint8Array(9);
                        return (r[0] = 5), r.set(e.value.bytes, 1), r;
                      case "binary":
                        var o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                        o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, !1);
                        var i = new Uint8Array(o.buffer);
                        return i.set(e.value, 3), i;
                      case "string":
                        var a = this.fromUtf8(e.value),
                          c = new DataView(new ArrayBuffer(3 + a.byteLength));
                        c.setUint8(0, 7), c.setUint16(1, a.byteLength, !1);
                        var l = new Uint8Array(c.buffer);
                        return l.set(a, 3), l;
                      case "timestamp":
                        var f = new Uint8Array(9);
                        return (f[0] = 8), f.set(u.Int64.fromNumber(e.value.valueOf()).bytes, 1), f;
                      case "uuid":
                        if (!m.test(e.value)) throw new Error("Invalid UUID received: ".concat(e.value));
                        var d = new Uint8Array(17);
                        return (d[0] = 9), d.set((0, s.fromHex)(e.value.replace(/\-/g, "")), 1), d;
                    }
                  },
                },
                {
                  key: "parse",
                  value: function (e) {
                    for (var t = {}, n = 0; n < e.byteLength; ) {
                      var r = e.getUint8(n++),
                        o = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, r));
                      switch (((n += r), e.getUint8(n++))) {
                        case 0:
                          t[o] = { type: l, value: !0 };
                          break;
                        case 1:
                          t[o] = { type: l, value: !1 };
                          break;
                        case 2:
                          t[o] = { type: f, value: e.getInt8(n++) };
                          break;
                        case 3:
                          (t[o] = { type: d, value: e.getInt16(n, !1) }), (n += 2);
                          break;
                        case 4:
                          (t[o] = { type: p, value: e.getInt32(n, !1) }), (n += 4);
                          break;
                        case 5:
                          (t[o] = { type: h, value: new u.Int64(new Uint8Array(e.buffer, e.byteOffset + n, 8)) }),
                            (n += 8);
                          break;
                        case 6:
                          var i = e.getUint16(n, !1);
                          (n += 2),
                            (t[o] = { type: v, value: new Uint8Array(e.buffer, e.byteOffset + n, i) }),
                            (n += i);
                          break;
                        case 7:
                          var a = e.getUint16(n, !1);
                          (n += 2),
                            (t[o] = { type: y, value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, a)) }),
                            (n += a);
                          break;
                        case 8:
                          (t[o] = {
                            type: g,
                            value: new Date(new u.Int64(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf()),
                          }),
                            (n += 8);
                          break;
                        case 9:
                          var c = new Uint8Array(e.buffer, e.byteOffset + n, 16);
                          (n += 16),
                            (t[o] = {
                              type: b,
                              value: ""
                                .concat((0, s.toHex)(c.subarray(0, 4)), "-")
                                .concat((0, s.toHex)(c.subarray(4, 6)), "-")
                                .concat((0, s.toHex)(c.subarray(6, 8)), "-")
                                .concat((0, s.toHex)(c.subarray(8, 10)), "-")
                                .concat((0, s.toHex)(c.subarray(10))),
                            });
                          break;
                        default:
                          throw new Error("Unrecognized header type tag");
                      }
                    }
                    return t;
                  },
                },
              ]),
              e
            );
          })();
        (t.HeaderMarshaller = c),
          (function (e) {
            (e[(e.boolTrue = 0)] = "boolTrue"),
              (e[(e.boolFalse = 1)] = "boolFalse"),
              (e[(e.byte = 2)] = "byte"),
              (e[(e.short = 3)] = "short"),
              (e[(e.integer = 4)] = "integer"),
              (e[(e.long = 5)] = "long"),
              (e[(e.byteArray = 6)] = "byteArray"),
              (e[(e.string = 7)] = "string"),
              (e[(e.timestamp = 8)] = "timestamp"),
              (e[(e.uuid = 9)] = "uuid");
          })(o || (o = {}));
        var l = "boolean",
          f = "byte",
          d = "short",
          p = "integer",
          h = "long",
          v = "binary",
          y = "string",
          g = "timestamp",
          b = "uuid",
          m = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
      },
      7776: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Int64 = void 0);
        var o = r(n(6690)),
          i = r(n(9728)),
          a = n(460),
          s = (function () {
            function e(t) {
              if (((0, o.default)(this, e), (this.bytes = t), 8 !== t.byteLength))
                throw new Error("Int64 buffers must be exactly 8 bytes");
            }
            return (
              (0, i.default)(
                e,
                [
                  {
                    key: "valueOf",
                    value: function () {
                      var e = this.bytes.slice(0),
                        t = 128 & e[0];
                      return t && u(e), parseInt((0, a.toHex)(e), 16) * (t ? -1 : 1);
                    },
                  },
                  {
                    key: "toString",
                    value: function () {
                      return String(this.valueOf());
                    },
                  },
                ],
                [
                  {
                    key: "fromNumber",
                    value: function (t) {
                      if (t > 0x8000000000000000 || t < -0x8000000000000000)
                        throw new Error(
                          "".concat(t, " is too large (or, if negative, too small) to represent as an Int64"),
                        );
                      for (
                        var n = new Uint8Array(8), r = 7, o = Math.abs(Math.round(t));
                        r > -1 && o > 0;
                        r--, o /= 256
                      )
                        n[r] = o;
                      return t < 0 && u(n), new e(n);
                    },
                  },
                ],
              ),
              e
            );
          })();
        function u(e) {
          for (var t = 0; t < 8; t++) e[t] ^= 255;
          for (var n = 7; n > -1 && (e[n]++, 0 === e[n]); n--);
        }
        t.Int64 = s;
      },
      7852: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4763: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MessageDecoderStream = void 0);
        var o = r(n(4687)),
          i = r(n(6690)),
          a = r(n(9728)),
          s = r(n(6737)),
          u = r(n(8186));
        function c(e) {
          var t,
            n,
            r,
            o = 2;
          for ("undefined" != typeof Symbol && ((n = Symbol.asyncIterator), (r = Symbol.iterator)); o--; ) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new l(t.call(e));
            (n = "@@asyncIterator"), (r = "@@iterator");
          }
          throw new TypeError("Object is not async iterable");
        }
        function l(e) {
          function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function (e) {
              return { value: e, done: t };
            });
          }
          return (
            (l = function (e) {
              (this.s = e), (this.n = e.next);
            }),
            (l.prototype = {
              s: null,
              n: null,
              next: function () {
                return t(this.n.apply(this.s, arguments));
              },
              return: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.resolve({ value: e, done: !0 }) : t(n.apply(this.s, arguments));
              },
              throw: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments));
              },
            }),
            new l(e)
          );
        }
        var f = (function (e) {
          function t(e) {
            (0, i.default)(this, t), (this.options = e);
          }
          return (
            (0, a.default)(t, [
              {
                key: e,
                value: function () {
                  return this.asyncIterator();
                },
              },
              {
                key: "asyncIterator",
                value: function () {
                  var e = this;
                  return (0, u.default)(
                    o.default.mark(function t() {
                      var n, r, i, a, u, l, f;
                      return o.default.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = !1), (r = !1), (t.prev = 2), (a = c(e.options.inputStream));
                              case 4:
                                return (t.next = 6), (0, s.default)(a.next());
                              case 6:
                                if (!(n = !(u = t.sent).done)) {
                                  t.next = 14;
                                  break;
                                }
                                return (l = u.value), (f = e.options.decoder.decode(l)), (t.next = 11), f;
                              case 11:
                                (n = !1), (t.next = 4);
                                break;
                              case 14:
                                t.next = 20;
                                break;
                              case 16:
                                (t.prev = 16), (t.t0 = t.catch(2)), (r = !0), (i = t.t0);
                              case 20:
                                if (((t.prev = 20), (t.prev = 21), !n || null == a.return)) {
                                  t.next = 25;
                                  break;
                                }
                                return (t.next = 25), (0, s.default)(a.return());
                              case 25:
                                if (((t.prev = 25), !r)) {
                                  t.next = 28;
                                  break;
                                }
                                throw i;
                              case 28:
                                return t.finish(25);
                              case 29:
                                return t.finish(20);
                              case 30:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [2, 16, 20, 30],
                          [21, , 25, 29],
                        ],
                      );
                    }),
                  )();
                },
              },
            ]),
            t
          );
        })(Symbol.asyncIterator);
        t.MessageDecoderStream = f;
      },
      8529: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MessageEncoderStream = void 0);
        var o = r(n(4687)),
          i = r(n(6690)),
          a = r(n(9728)),
          s = r(n(6737)),
          u = r(n(8186));
        function c(e) {
          var t,
            n,
            r,
            o = 2;
          for ("undefined" != typeof Symbol && ((n = Symbol.asyncIterator), (r = Symbol.iterator)); o--; ) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new l(t.call(e));
            (n = "@@asyncIterator"), (r = "@@iterator");
          }
          throw new TypeError("Object is not async iterable");
        }
        function l(e) {
          function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function (e) {
              return { value: e, done: t };
            });
          }
          return (
            (l = function (e) {
              (this.s = e), (this.n = e.next);
            }),
            (l.prototype = {
              s: null,
              n: null,
              next: function () {
                return t(this.n.apply(this.s, arguments));
              },
              return: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.resolve({ value: e, done: !0 }) : t(n.apply(this.s, arguments));
              },
              throw: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments));
              },
            }),
            new l(e)
          );
        }
        var f = (function (e) {
          function t(e) {
            (0, i.default)(this, t), (this.options = e);
          }
          return (
            (0, a.default)(t, [
              {
                key: e,
                value: function () {
                  return this.asyncIterator();
                },
              },
              {
                key: "asyncIterator",
                value: function () {
                  var e = this;
                  return (0, u.default)(
                    o.default.mark(function t() {
                      var n, r, i, a, u, l, f;
                      return o.default.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = !1), (r = !1), (t.prev = 2), (a = c(e.options.messageStream));
                              case 4:
                                return (t.next = 6), (0, s.default)(a.next());
                              case 6:
                                if (!(n = !(u = t.sent).done)) {
                                  t.next = 14;
                                  break;
                                }
                                return (l = u.value), (f = e.options.encoder.encode(l)), (t.next = 11), f;
                              case 11:
                                (n = !1), (t.next = 4);
                                break;
                              case 14:
                                t.next = 20;
                                break;
                              case 16:
                                (t.prev = 16), (t.t0 = t.catch(2)), (r = !0), (i = t.t0);
                              case 20:
                                if (((t.prev = 20), (t.prev = 21), !n || null == a.return)) {
                                  t.next = 25;
                                  break;
                                }
                                return (t.next = 25), (0, s.default)(a.return());
                              case 25:
                                if (((t.prev = 25), !r)) {
                                  t.next = 28;
                                  break;
                                }
                                throw i;
                              case 28:
                                return t.finish(25);
                              case 29:
                                return t.finish(20);
                              case 30:
                                if (!e.options.includeEndFrame) {
                                  t.next = 33;
                                  break;
                                }
                                return (t.next = 33), new Uint8Array(0);
                              case 33:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [2, 16, 20, 30],
                          [21, , 25, 29],
                        ],
                      );
                    }),
                  )();
                },
              },
            ]),
            t
          );
        })(Symbol.asyncIterator);
        t.MessageEncoderStream = f;
      },
      2313: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SmithyMessageDecoderStream = void 0);
        var o = r(n(4687)),
          i = r(n(6690)),
          a = r(n(9728)),
          s = r(n(6737)),
          u = r(n(8186));
        function c(e) {
          var t,
            n,
            r,
            o = 2;
          for ("undefined" != typeof Symbol && ((n = Symbol.asyncIterator), (r = Symbol.iterator)); o--; ) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new l(t.call(e));
            (n = "@@asyncIterator"), (r = "@@iterator");
          }
          throw new TypeError("Object is not async iterable");
        }
        function l(e) {
          function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function (e) {
              return { value: e, done: t };
            });
          }
          return (
            (l = function (e) {
              (this.s = e), (this.n = e.next);
            }),
            (l.prototype = {
              s: null,
              n: null,
              next: function () {
                return t(this.n.apply(this.s, arguments));
              },
              return: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.resolve({ value: e, done: !0 }) : t(n.apply(this.s, arguments));
              },
              throw: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments));
              },
            }),
            new l(e)
          );
        }
        var f = (function (e) {
          function t(e) {
            (0, i.default)(this, t), (this.options = e);
          }
          return (
            (0, a.default)(t, [
              {
                key: e,
                value: function () {
                  return this.asyncIterator();
                },
              },
              {
                key: "asyncIterator",
                value: function () {
                  var e = this;
                  return (0, u.default)(
                    o.default.mark(function t() {
                      var n, r, i, a, u, l, f;
                      return o.default.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = !1), (r = !1), (t.prev = 2), (a = c(e.options.messageStream));
                              case 4:
                                return (t.next = 6), (0, s.default)(a.next());
                              case 6:
                                if (!(n = !(u = t.sent).done)) {
                                  t.next = 18;
                                  break;
                                }
                                return (l = u.value), (t.next = 10), (0, s.default)(e.options.deserializer(l));
                              case 10:
                                if (void 0 !== (f = t.sent)) {
                                  t.next = 13;
                                  break;
                                }
                                return t.abrupt("continue", 15);
                              case 13:
                                return (t.next = 15), f;
                              case 15:
                                (n = !1), (t.next = 4);
                                break;
                              case 18:
                                t.next = 24;
                                break;
                              case 20:
                                (t.prev = 20), (t.t0 = t.catch(2)), (r = !0), (i = t.t0);
                              case 24:
                                if (((t.prev = 24), (t.prev = 25), !n || null == a.return)) {
                                  t.next = 29;
                                  break;
                                }
                                return (t.next = 29), (0, s.default)(a.return());
                              case 29:
                                if (((t.prev = 29), !r)) {
                                  t.next = 32;
                                  break;
                                }
                                throw i;
                              case 32:
                                return t.finish(29);
                              case 33:
                                return t.finish(24);
                              case 34:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [2, 20, 24, 34],
                          [25, , 29, 33],
                        ],
                      );
                    }),
                  )();
                },
              },
            ]),
            t
          );
        })(Symbol.asyncIterator);
        t.SmithyMessageDecoderStream = f;
      },
      5880: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SmithyMessageEncoderStream = void 0);
        var o = r(n(4687)),
          i = r(n(6690)),
          a = r(n(9728)),
          s = r(n(6737)),
          u = r(n(8186));
        function c(e) {
          var t,
            n,
            r,
            o = 2;
          for ("undefined" != typeof Symbol && ((n = Symbol.asyncIterator), (r = Symbol.iterator)); o--; ) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new l(t.call(e));
            (n = "@@asyncIterator"), (r = "@@iterator");
          }
          throw new TypeError("Object is not async iterable");
        }
        function l(e) {
          function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function (e) {
              return { value: e, done: t };
            });
          }
          return (
            (l = function (e) {
              (this.s = e), (this.n = e.next);
            }),
            (l.prototype = {
              s: null,
              n: null,
              next: function () {
                return t(this.n.apply(this.s, arguments));
              },
              return: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.resolve({ value: e, done: !0 }) : t(n.apply(this.s, arguments));
              },
              throw: function (e) {
                var n = this.s.return;
                return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments));
              },
            }),
            new l(e)
          );
        }
        var f = (function (e) {
          function t(e) {
            (0, i.default)(this, t), (this.options = e);
          }
          return (
            (0, a.default)(t, [
              {
                key: e,
                value: function () {
                  return this.asyncIterator();
                },
              },
              {
                key: "asyncIterator",
                value: function () {
                  var e = this;
                  return (0, u.default)(
                    o.default.mark(function t() {
                      var n, r, i, a, u, l, f;
                      return o.default.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = !1), (r = !1), (t.prev = 2), (a = c(e.options.inputStream));
                              case 4:
                                return (t.next = 6), (0, s.default)(a.next());
                              case 6:
                                if (!(n = !(u = t.sent).done)) {
                                  t.next = 14;
                                  break;
                                }
                                return (l = u.value), (f = e.options.serializer(l)), (t.next = 11), f;
                              case 11:
                                (n = !1), (t.next = 4);
                                break;
                              case 14:
                                t.next = 20;
                                break;
                              case 16:
                                (t.prev = 16), (t.t0 = t.catch(2)), (r = !0), (i = t.t0);
                              case 20:
                                if (((t.prev = 20), (t.prev = 21), !n || null == a.return)) {
                                  t.next = 25;
                                  break;
                                }
                                return (t.next = 25), (0, s.default)(a.return());
                              case 25:
                                if (((t.prev = 25), !r)) {
                                  t.next = 28;
                                  break;
                                }
                                throw i;
                              case 28:
                                return t.finish(25);
                              case 29:
                                return t.finish(20);
                              case 30:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [2, 16, 20, 30],
                          [21, , 25, 29],
                        ],
                      );
                    }),
                  )();
                },
              },
            ]),
            t
          );
        })(Symbol.asyncIterator);
        t.SmithyMessageEncoderStream = f;
      },
      608: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(5330);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
        var o = n(4212);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
        var i = n(7776);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === i[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return i[e];
                },
              }));
        });
        var a = n(7852);
        Object.keys(a).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === a[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return a[e];
                },
              }));
        });
        var s = n(4763);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === s[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return s[e];
                },
              }));
        });
        var u = n(8529);
        Object.keys(u).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === u[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return u[e];
                },
              }));
        });
        var c = n(2313);
        Object.keys(c).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === c[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return c[e];
                },
              }));
        });
        var l = n(5880);
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === l[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return l[e];
                },
              }));
        });
      },
      9030: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.splitMessage = function (e) {
            var t = e.byteLength,
              n = e.byteOffset,
              o = e.buffer;
            if (t < 16) throw new Error("Provided message too short to accommodate event stream message overhead");
            var i = new DataView(o, n, t),
              a = i.getUint32(0, !1);
            if (t !== a) throw new Error("Reported message length does not match received message length");
            var s = i.getUint32(4, !1),
              u = i.getUint32(8, !1),
              c = i.getUint32(t - 4, !1),
              l = new r.Crc32().update(new Uint8Array(o, n, 8));
            if (u !== l.digest())
              throw new Error(
                "The prelude checksum specified in the message ("
                  .concat(u, ") does not match the calculated CRC32 checksum (")
                  .concat(l.digest(), ")"),
              );
            if ((l.update(new Uint8Array(o, n + 8, t - 12)), c !== l.digest()))
              throw new Error(
                "The message checksum (".concat(l.digest(), ") did not match the expected value of ").concat(c),
              );
            return { headers: new DataView(o, n + 8 + 4, s), body: new Uint8Array(o, n + 8 + 4 + s, a - s - 16) };
          });
        var r = n(4079);
      },
      7291: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FetchHttpHandler = void 0);
        var o = r(n(4687)),
          i = r(n(7156)),
          a = r(n(6690)),
          s = r(n(9728)),
          u = n(4146),
          c = n(590),
          l = n(778);
        function f(e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var i,
            a = !0,
            s = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (a = e.done), e;
            },
            e: function (e) {
              (s = !0), (i = e);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw i;
              }
            },
          };
        }
        function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var p = (function () {
          function e(t) {
            (0, a.default)(this, e),
              "function" == typeof t
                ? (this.configProvider = t().then(function (e) {
                    return e || {};
                  }))
                : ((this.config = null != t ? t : {}), (this.configProvider = Promise.resolve(this.config)));
          }
          var t;
          return (
            (0, s.default)(e, [
              { key: "destroy", value: function () {} },
              {
                key: "handle",
                value:
                  ((t = (0, i.default)(
                    o.default.mark(function e(t) {
                      var n,
                        r,
                        i,
                        a,
                        s,
                        d,
                        p,
                        h,
                        v,
                        y,
                        g,
                        b,
                        m,
                        w,
                        E,
                        _,
                        T,
                        P,
                        S = arguments;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = S.length > 1 && void 0 !== S[1] ? S[1] : {}), (r = n.abortSignal), this.config)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 4), this.configProvider;
                              case 4:
                                this.config = e.sent;
                              case 5:
                                if (((i = this.config.requestTimeout), null == r || !r.aborted)) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  ((a = new Error("Request aborted")).name = "AbortError"),
                                  e.abrupt("return", Promise.reject(a))
                                );
                              case 10:
                                return (
                                  (s = t.path),
                                  (d = (0, c.buildQueryString)(t.query || {})) && (s += "?".concat(d)),
                                  t.fragment && (s += "#".concat(t.fragment)),
                                  (p = ""),
                                  (null == t.username && null == t.password) ||
                                    ((y = null !== (h = t.username) && void 0 !== h ? h : ""),
                                    (g = null !== (v = t.password) && void 0 !== v ? v : ""),
                                    (p = "".concat(y, ":").concat(g, "@"))),
                                  (b = t.port),
                                  (m = t.method),
                                  (w = ""
                                    .concat(t.protocol, "//")
                                    .concat(p)
                                    .concat(t.hostname)
                                    .concat(b ? ":".concat(b) : "")
                                    .concat(s)),
                                  (E = "GET" === m || "HEAD" === m ? void 0 : t.body),
                                  (_ = { body: E, headers: new Headers(t.headers), method: m }),
                                  "undefined" != typeof AbortController && (_.signal = r),
                                  (T = new Request(w, _)),
                                  (P = [
                                    fetch(T).then(function (e) {
                                      var t,
                                        n = e.headers,
                                        r = {},
                                        o = f(n.entries());
                                      try {
                                        for (o.s(); !(t = o.n()).done; ) {
                                          var i = t.value;
                                          r[i[0]] = i[1];
                                        }
                                      } catch (e) {
                                        o.e(e);
                                      } finally {
                                        o.f();
                                      }
                                      return null != e.body
                                        ? {
                                            response: new u.HttpResponse({
                                              headers: r,
                                              reason: e.statusText,
                                              statusCode: e.status,
                                              body: e.body,
                                            }),
                                          }
                                        : e.blob().then(function (t) {
                                            return {
                                              response: new u.HttpResponse({
                                                headers: r,
                                                reason: e.statusText,
                                                statusCode: e.status,
                                                body: t,
                                              }),
                                            };
                                          });
                                    }),
                                    (0, l.requestTimeout)(i),
                                  ]),
                                  r &&
                                    P.push(
                                      new Promise(function (e, t) {
                                        r.onabort = function () {
                                          var e = new Error("Request aborted");
                                          (e.name = "AbortError"), t(e);
                                        };
                                      }),
                                    ),
                                  e.abrupt("return", Promise.race(P))
                                );
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            e
          );
        })();
        t.FetchHttpHandler = p;
      },
      3940: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(7291);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
        var o = n(8795);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
      },
      778: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.requestTimeout = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return new Promise(function (t, n) {
              e &&
                setTimeout(function () {
                  var t = new Error("Request did not complete within ".concat(e, " ms"));
                  (t.name = "TimeoutError"), n(t);
                }, e);
            });
          });
      },
      8795: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.streamCollector = void 0);
        var o = r(n(4687)),
          i = r(n(7156)),
          a = n(7847);
        function s() {
          return (s = (0, i.default)(
            o.default.mark(function e(t) {
              var n, r;
              return o.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), c(t);
                    case 2:
                      return (n = e.sent), (r = (0, a.fromBase64)(n)), e.abrupt("return", new Uint8Array(r));
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function u() {
          return (u = (0, i.default)(
            o.default.mark(function e(t) {
              var n, r, i, a, s, u, c;
              return o.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = new Uint8Array(0)), (r = t.getReader()), (i = !1);
                    case 3:
                      if (i) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 6), r.read();
                    case 6:
                      (a = e.sent),
                        (s = a.done),
                        (u = a.value) &&
                          ((c = n), (n = new Uint8Array(c.length + u.length)).set(c), n.set(u, c.length)),
                        (i = s),
                        (e.next = 3);
                      break;
                    case 13:
                      return e.abrupt("return", n);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function c(e) {
          return new Promise(function (t, n) {
            var r = new FileReader();
            (r.onloadend = function () {
              var e;
              if (2 !== r.readyState) return n(new Error("Reader aborted too early"));
              var o = null !== (e = r.result) && void 0 !== e ? e : "",
                i = o.indexOf(","),
                a = i > -1 ? i + 1 : o.length;
              t(o.substring(a));
            }),
              (r.onabort = function () {
                return n(new Error("Read aborted"));
              }),
              (r.onerror = function () {
                return n(r.error);
              }),
              r.readAsDataURL(e);
          });
        }
        t.streamCollector = function (e) {
          return "function" == typeof Blob && e instanceof Blob
            ? (function (e) {
                return s.apply(this, arguments);
              })(e)
            : (function (e) {
                return u.apply(this, arguments);
              })(e);
        };
      },
      4333: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.isArrayBuffer = void 0);
        t.isArrayBuffer = function (e) {
          return (
            ("function" == typeof ArrayBuffer && e instanceof ArrayBuffer) ||
            "[object ArrayBuffer]" === Object.prototype.toString.call(e)
          );
        };
      },
      6428: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Field = void 0);
        var o = r(n(6690)),
          i = r(n(9728)),
          a = n(3604),
          s = (function () {
            function e(t) {
              var n = t.name,
                r = t.kind,
                i = void 0 === r ? a.FieldPosition.HEADER : r,
                s = t.values,
                u = void 0 === s ? [] : s;
              (0, o.default)(this, e), (this.name = n), (this.kind = i), (this.values = u);
            }
            return (
              (0, i.default)(e, [
                {
                  key: "add",
                  value: function (e) {
                    this.values.push(e);
                  },
                },
                {
                  key: "set",
                  value: function (e) {
                    this.values = e;
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    this.values = this.values.filter(function (t) {
                      return t !== e;
                    });
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return this.values
                      .map(function (e) {
                        return e.includes(",") || e.includes(" ") ? '"'.concat(e, '"') : e;
                      })
                      .join(", ");
                  },
                },
                {
                  key: "get",
                  value: function () {
                    return this.values;
                  },
                },
              ]),
              e
            );
          })();
        t.Field = s;
      },
      3604: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FieldPosition = void 0),
          (t.FieldPosition = n),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(n || (t.FieldPosition = n = {}));
      },
      7244: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Fields = void 0);
        var o = r(n(6690)),
          i = r(n(9728)),
          a = (function () {
            function e(t) {
              var n = t.fields,
                r = void 0 === n ? [] : n,
                i = t.encoding,
                a = void 0 === i ? "utf-8" : i;
              (0, o.default)(this, e), (this.entries = {}), r.forEach(this.setField.bind(this)), (this.encoding = a);
            }
            return (
              (0, i.default)(e, [
                {
                  key: "setField",
                  value: function (e) {
                    this.entries[e.name.toLowerCase()] = e;
                  },
                },
                {
                  key: "getField",
                  value: function (e) {
                    return this.entries[e.toLowerCase()];
                  },
                },
                {
                  key: "removeField",
                  value: function (e) {
                    delete this.entries[e.toLowerCase()];
                  },
                },
                {
                  key: "getByType",
                  value: function (e) {
                    return Object.values(this.entries).filter(function (t) {
                      return t.kind === e;
                    });
                  },
                },
              ]),
              e
            );
          })();
        t.Fields = a;
      },
      9226: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      981: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpRequest = void 0);
        var o = r(n(861)),
          i = r(n(8698)),
          a = r(n(8416)),
          s = r(n(6690)),
          u = r(n(9728));
        function c(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), !0).forEach(function (t) {
                  (0, a.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : c(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        var f = (function () {
          function e(t) {
            (0, s.default)(this, e),
              (this.method = t.method || "GET"),
              (this.hostname = t.hostname || "localhost"),
              (this.port = t.port),
              (this.query = t.query || {}),
              (this.headers = t.headers || {}),
              (this.body = t.body),
              (this.protocol = t.protocol
                ? ":" !== t.protocol.slice(-1)
                  ? "".concat(t.protocol, ":")
                  : t.protocol
                : "https:"),
              (this.path = t.path ? ("/" !== t.path.charAt(0) ? "/".concat(t.path) : t.path) : "/"),
              (this.username = t.username),
              (this.password = t.password),
              (this.fragment = t.fragment);
          }
          return (
            (0, u.default)(
              e,
              [
                {
                  key: "clone",
                  value: function () {
                    var t,
                      n = new e(l(l({}, this), {}, { headers: l({}, this.headers) }));
                    return (
                      n.query &&
                        (n.query =
                          ((t = n.query),
                          Object.keys(t).reduce(function (e, n) {
                            var r = t[n];
                            return l(l({}, e), {}, (0, a.default)({}, n, Array.isArray(r) ? (0, o.default)(r) : r));
                          }, {}))),
                      n
                    );
                  },
                },
              ],
              [
                {
                  key: "isInstance",
                  value: function (e) {
                    if (!e) return !1;
                    var t = e;
                    return (
                      "method" in t &&
                      "protocol" in t &&
                      "hostname" in t &&
                      "path" in t &&
                      "object" === (0, i.default)(t.query) &&
                      "object" === (0, i.default)(t.headers)
                    );
                  },
                },
              ],
            ),
            e
          );
        })();
        t.HttpRequest = f;
      },
      724: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpResponse = void 0);
        var o = r(n(8698)),
          i = r(n(6690)),
          a = r(n(9728)),
          s = (function () {
            function e(t) {
              (0, i.default)(this, e),
                (this.statusCode = t.statusCode),
                (this.reason = t.reason),
                (this.headers = t.headers || {}),
                (this.body = t.body);
            }
            return (
              (0, a.default)(e, null, [
                {
                  key: "isInstance",
                  value: function (e) {
                    if (!e) return !1;
                    var t = e;
                    return "number" == typeof t.statusCode && "object" === (0, o.default)(t.headers);
                  },
                },
              ]),
              e
            );
          })();
        t.HttpResponse = s;
      },
      4146: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(6428);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
        var o = n(3604);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
        var i = n(7244);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === i[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return i[e];
                },
              }));
        });
        var a = n(9226);
        Object.keys(a).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === a[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return a[e];
                },
              }));
        });
        var s = n(981);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === s[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return s[e];
                },
              }));
        });
        var u = n(724);
        Object.keys(u).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === u[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return u[e];
                },
              }));
        });
        var c = n(8867);
        Object.keys(c).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === c[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return c[e];
                },
              }));
        });
      },
      8867: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isValidHostname = function (e) {
            return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
          });
      },
      590: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildQueryString = function (e) {
            var t,
              n = [],
              i = (function (e, t) {
                var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!n) {
                  if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                      if (!e) return;
                      if ("string" == typeof e) return o(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      "Object" === n && e.constructor && (n = e.constructor.name);
                      if ("Map" === n || "Set" === n) return Array.from(e);
                      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                  ) {
                    n && (e = n);
                    var r = 0,
                      i = function () {};
                    return {
                      s: i,
                      n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: i,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                }
                var a,
                  s = !0,
                  u = !1;
                return {
                  s: function () {
                    n = n.call(e);
                  },
                  n: function () {
                    var e = n.next();
                    return (s = e.done), e;
                  },
                  e: function (e) {
                    (u = !0), (a = e);
                  },
                  f: function () {
                    try {
                      s || null == n.return || n.return();
                    } finally {
                      if (u) throw a;
                    }
                  },
                };
              })(Object.keys(e).sort());
            try {
              for (i.s(); !(t = i.n()).done; ) {
                var a = t.value,
                  s = e[a];
                if (((a = (0, r.escapeUri)(a)), Array.isArray(s)))
                  for (var u = 0, c = s.length; u < c; u++) n.push("".concat(a, "=").concat((0, r.escapeUri)(s[u])));
                else {
                  var l = a;
                  (s || "string" == typeof s) && (l += "=".concat((0, r.escapeUri)(s))), n.push(l);
                }
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
            return n.join("&");
          });
        var r = n(8041);
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
      },
      7214: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SignatureV4 = void 0);
        var o = r(n(4687)),
          i = r(n(8698)),
          a = r(n(7156)),
          s = r(n(6690)),
          u = r(n(9728)),
          c = n(608),
          l = n(460),
          f = n(4854),
          d = n(1679),
          p = n(9069),
          h = n(9481),
          v = n(1078),
          y = n(6701),
          g = n(641),
          b = n(534),
          m = n(5296),
          w = n(5987),
          E = n(5100);
        function _(e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var i,
            a = !0,
            s = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (a = e.done), e;
            },
            e: function (e) {
              (s = !0), (i = e);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw i;
              }
            },
          };
        }
        function T(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var P = (function () {
          function e(t) {
            var n = t.applyChecksum,
              r = t.credentials,
              o = t.region,
              i = t.service,
              a = t.sha256,
              u = t.uriEscapePath,
              l = void 0 === u || u;
            (0, s.default)(this, e),
              (this.headerMarshaller = new c.HeaderMarshaller(d.toUtf8, d.fromUtf8)),
              (this.service = i),
              (this.sha256 = a),
              (this.uriEscapePath = l),
              (this.applyChecksum = "boolean" != typeof n || n),
              (this.regionProvider = (0, f.normalizeProvider)(o)),
              (this.credentialProvider = (0, f.normalizeProvider)(r));
          }
          var t, n, r, E, T, P, A, I;
          return (
            (0, u.default)(e, [
              {
                key: "presign",
                value:
                  ((I = (0, a.default)(
                    o.default.mark(function e(t) {
                      var n,
                        r,
                        i,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        y,
                        b,
                        E,
                        _,
                        T,
                        P,
                        A,
                        I,
                        x = arguments;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = x.length > 1 && void 0 !== x[1] ? x[1] : {}),
                                  (r = n.signingDate),
                                  (i = void 0 === r ? new Date() : r),
                                  (a = n.expiresIn),
                                  (s = void 0 === a ? 3600 : a),
                                  (u = n.unsignableHeaders),
                                  (c = n.unhoistableHeaders),
                                  (l = n.signableHeaders),
                                  (f = n.signingRegion),
                                  (d = n.signingService),
                                  (e.next = 4),
                                  this.credentialProvider()
                                );
                              case 4:
                                if (((y = e.sent), this.validateResolvedCredentials(y), null == f)) {
                                  e.next = 10;
                                  break;
                                }
                                (e.t0 = f), (e.next = 13);
                                break;
                              case 10:
                                return (e.next = 12), this.regionProvider();
                              case 12:
                                e.t0 = e.sent;
                              case 13:
                                if (
                                  ((b = e.t0),
                                  (E = S(i)),
                                  (_ = E.longDate),
                                  (T = E.shortDate),
                                  !(s > p.MAX_PRESIGNED_TTL))
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  Promise.reject(
                                    "Signature version 4 presigned URLs must have an expiration date less than one week in the future",
                                  ),
                                );
                              case 17:
                                return (
                                  (P = (0, h.createScope)(T, b, null != d ? d : this.service)),
                                  (A = (0, m.moveHeadersToQuery)((0, w.prepareRequest)(t), { unhoistableHeaders: c })),
                                  y.sessionToken && (A.query[p.TOKEN_QUERY_PARAM] = y.sessionToken),
                                  (A.query[p.ALGORITHM_QUERY_PARAM] = p.ALGORITHM_IDENTIFIER),
                                  (A.query[p.CREDENTIAL_QUERY_PARAM] = "".concat(y.accessKeyId, "/").concat(P)),
                                  (A.query[p.AMZ_DATE_QUERY_PARAM] = _),
                                  (A.query[p.EXPIRES_QUERY_PARAM] = s.toString(10)),
                                  (I = (0, v.getCanonicalHeaders)(A, u, l)),
                                  (A.query[p.SIGNED_HEADERS_QUERY_PARAM] = O(I)),
                                  (e.t1 = this),
                                  (e.t2 = _),
                                  (e.t3 = P),
                                  (e.t4 = this.getSigningKey(y, b, T, d)),
                                  (e.t5 = this),
                                  (e.t6 = A),
                                  (e.t7 = I),
                                  (e.next = 35),
                                  (0, g.getPayloadHash)(t, this.sha256)
                                );
                              case 35:
                                return (
                                  (e.t8 = e.sent),
                                  (e.t9 = e.t5.createCanonicalRequest.call(e.t5, e.t6, e.t7, e.t8)),
                                  (e.next = 39),
                                  e.t1.getSignature.call(e.t1, e.t2, e.t3, e.t4, e.t9)
                                );
                              case 39:
                                return (A.query[p.SIGNATURE_QUERY_PARAM] = e.sent), e.abrupt("return", A);
                              case 41:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return I.apply(this, arguments);
                  }),
              },
              {
                key: "sign",
                value:
                  ((A = (0, a.default)(
                    o.default.mark(function e(t, n) {
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("string" != typeof t) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return", this.signString(t, n));
                              case 4:
                                if (!t.headers || !t.payload) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt("return", this.signEvent(t, n));
                              case 8:
                                if (!t.message) {
                                  e.next = 12;
                                  break;
                                }
                                return e.abrupt("return", this.signMessage(t, n));
                              case 12:
                                return e.abrupt("return", this.signRequest(t, n));
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e, t) {
                    return A.apply(this, arguments);
                  }),
              },
              {
                key: "signEvent",
                value:
                  ((P = (0, a.default)(
                    o.default.mark(function e(t, n) {
                      var r, i, a, s, u, c, f, d, v, y, b, m, w, E, _, T;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.headers),
                                  (i = t.payload),
                                  (a = n.signingDate),
                                  (s = void 0 === a ? new Date() : a),
                                  (u = n.priorSignature),
                                  (c = n.signingRegion),
                                  (f = n.signingService),
                                  null == c)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                (e.t0 = c), (e.next = 9);
                                break;
                              case 6:
                                return (e.next = 8), this.regionProvider();
                              case 8:
                                e.t0 = e.sent;
                              case 9:
                                return (
                                  (d = e.t0),
                                  (v = S(s)),
                                  (y = v.shortDate),
                                  (b = v.longDate),
                                  (m = (0, h.createScope)(y, d, null != f ? f : this.service)),
                                  (e.next = 14),
                                  (0, g.getPayloadHash)({ headers: {}, body: i }, this.sha256)
                                );
                              case 14:
                                return (
                                  (w = e.sent),
                                  (E = new this.sha256()).update(r),
                                  (e.t1 = l.toHex),
                                  (e.next = 20),
                                  E.digest()
                                );
                              case 20:
                                return (
                                  (e.t2 = e.sent),
                                  (_ = (0, e.t1)(e.t2)),
                                  (T = [p.EVENT_ALGORITHM_IDENTIFIER, b, m, u, _, w].join("\n")),
                                  e.abrupt(
                                    "return",
                                    this.signString(T, { signingDate: s, signingRegion: d, signingService: f }),
                                  )
                                );
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e, t) {
                    return P.apply(this, arguments);
                  }),
              },
              {
                key: "signMessage",
                value:
                  ((T = (0, a.default)(
                    o.default.mark(function e(t, n) {
                      var r, i, a, s, u;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.signingDate),
                                  (i = void 0 === r ? new Date() : r),
                                  (a = n.signingRegion),
                                  (s = n.signingService),
                                  (u = this.signEvent(
                                    {
                                      headers: this.headerMarshaller.format(t.message.headers),
                                      payload: t.message.body,
                                    },
                                    {
                                      signingDate: i,
                                      signingRegion: a,
                                      signingService: s,
                                      priorSignature: t.priorSignature,
                                    },
                                  )),
                                  e.abrupt(
                                    "return",
                                    u.then(function (e) {
                                      return { message: t.message, signature: e };
                                    }),
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e, t) {
                    return T.apply(this, arguments);
                  }),
              },
              {
                key: "signString",
                value:
                  ((E = (0, a.default)(
                    o.default.mark(function e(t) {
                      var n,
                        r,
                        i,
                        a,
                        s,
                        u,
                        c,
                        f,
                        p,
                        h,
                        v = arguments;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                                  (r = n.signingDate),
                                  (i = void 0 === r ? new Date() : r),
                                  (a = n.signingRegion),
                                  (s = n.signingService),
                                  (e.next = 3),
                                  this.credentialProvider()
                                );
                              case 3:
                                if (((u = e.sent), this.validateResolvedCredentials(u), null == a)) {
                                  e.next = 9;
                                  break;
                                }
                                (e.t0 = a), (e.next = 12);
                                break;
                              case 9:
                                return (e.next = 11), this.regionProvider();
                              case 11:
                                e.t0 = e.sent;
                              case 12:
                                return (
                                  (c = e.t0),
                                  (f = S(i)),
                                  (p = f.shortDate),
                                  (e.t1 = this.sha256),
                                  (e.next = 17),
                                  this.getSigningKey(u, c, p, s)
                                );
                              case 17:
                                return (
                                  (e.t2 = e.sent),
                                  (h = new e.t1(e.t2)).update((0, d.toUint8Array)(t)),
                                  (e.t3 = l.toHex),
                                  (e.next = 23),
                                  h.digest()
                                );
                              case 23:
                                return (e.t4 = e.sent), e.abrupt("return", (0, e.t3)(e.t4));
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return E.apply(this, arguments);
                  }),
              },
              {
                key: "signRequest",
                value:
                  ((r = (0, a.default)(
                    o.default.mark(function e(t) {
                      var n,
                        r,
                        i,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        y,
                        m,
                        E,
                        _,
                        T,
                        P,
                        A,
                        I = arguments;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = I.length > 1 && void 0 !== I[1] ? I[1] : {}),
                                  (r = n.signingDate),
                                  (i = void 0 === r ? new Date() : r),
                                  (a = n.signableHeaders),
                                  (s = n.unsignableHeaders),
                                  (u = n.signingRegion),
                                  (c = n.signingService),
                                  (e.next = 3),
                                  this.credentialProvider()
                                );
                              case 3:
                                if (((l = e.sent), this.validateResolvedCredentials(l), null == u)) {
                                  e.next = 9;
                                  break;
                                }
                                (e.t0 = u), (e.next = 12);
                                break;
                              case 9:
                                return (e.next = 11), this.regionProvider();
                              case 11:
                                e.t0 = e.sent;
                              case 12:
                                return (
                                  (f = e.t0),
                                  (d = (0, w.prepareRequest)(t)),
                                  (y = S(i)),
                                  (m = y.longDate),
                                  (E = y.shortDate),
                                  (_ = (0, h.createScope)(E, f, null != c ? c : this.service)),
                                  (d.headers[p.AMZ_DATE_HEADER] = m),
                                  l.sessionToken && (d.headers[p.TOKEN_HEADER] = l.sessionToken),
                                  (e.next = 20),
                                  (0, g.getPayloadHash)(d, this.sha256)
                                );
                              case 20:
                                return (
                                  (T = e.sent),
                                  !(0, b.hasHeader)(p.SHA256_HEADER, d.headers) &&
                                    this.applyChecksum &&
                                    (d.headers[p.SHA256_HEADER] = T),
                                  (P = (0, v.getCanonicalHeaders)(d, s, a)),
                                  (e.next = 25),
                                  this.getSignature(
                                    m,
                                    _,
                                    this.getSigningKey(l, f, E, c),
                                    this.createCanonicalRequest(d, P, T),
                                  )
                                );
                              case 25:
                                return (
                                  (A = e.sent),
                                  (d.headers[p.AUTH_HEADER] =
                                    "".concat(p.ALGORITHM_IDENTIFIER, " ") +
                                    "Credential=".concat(l.accessKeyId, "/").concat(_, ", ") +
                                    "SignedHeaders=".concat(O(P), ", ") +
                                    "Signature=".concat(A)),
                                  e.abrupt("return", d)
                                );
                              case 28:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "createCanonicalRequest",
                value: function (e, t, n) {
                  var r = Object.keys(t).sort();
                  return ""
                    .concat(e.method, "\n")
                    .concat(this.getCanonicalPath(e), "\n")
                    .concat((0, y.getCanonicalQuery)(e), "\n")
                    .concat(
                      r
                        .map(function (e) {
                          return "".concat(e, ":").concat(t[e]);
                        })
                        .join("\n"),
                      "\n\n",
                    )
                    .concat(r.join(";"), "\n")
                    .concat(n);
                },
              },
              {
                key: "createStringToSign",
                value:
                  ((n = (0, a.default)(
                    o.default.mark(function e(t, n, r) {
                      var i, a;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (i = new this.sha256()).update((0, d.toUint8Array)(r)), (e.next = 4), i.digest();
                              case 4:
                                return (
                                  (a = e.sent),
                                  e.abrupt(
                                    "return",
                                    ""
                                      .concat(p.ALGORITHM_IDENTIFIER, "\n")
                                      .concat(t, "\n")
                                      .concat(n, "\n")
                                      .concat((0, l.toHex)(a)),
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e, t, r) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "getCanonicalPath",
                value: function (e) {
                  var t = e.path;
                  if (this.uriEscapePath) {
                    var n,
                      r = [],
                      o = _(t.split("/"));
                    try {
                      for (o.s(); !(n = o.n()).done; ) {
                        var i = n.value;
                        0 !== (null == i ? void 0 : i.length) && "." !== i && (".." === i ? r.pop() : r.push(i));
                      }
                    } catch (e) {
                      o.e(e);
                    } finally {
                      o.f();
                    }
                    var a = ""
                      .concat(null != t && t.startsWith("/") ? "/" : "")
                      .concat(r.join("/"))
                      .concat(r.length > 0 && null != t && t.endsWith("/") ? "/" : "");
                    return encodeURIComponent(a).replace(/%2F/g, "/");
                  }
                  return t;
                },
              },
              {
                key: "getSignature",
                value:
                  ((t = (0, a.default)(
                    o.default.mark(function e(t, n, r, i) {
                      var a, s;
                      return o.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.createStringToSign(t, n, i);
                              case 2:
                                return (a = e.sent), (e.t0 = this.sha256), (e.next = 6), r;
                              case 6:
                                return (
                                  (e.t1 = e.sent),
                                  (s = new e.t0(e.t1)).update((0, d.toUint8Array)(a)),
                                  (e.t2 = l.toHex),
                                  (e.next = 12),
                                  s.digest()
                                );
                              case 12:
                                return (e.t3 = e.sent), e.abrupt("return", (0, e.t2)(e.t3));
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e, n, r, o) {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: "getSigningKey",
                value: function (e, t, n, r) {
                  return (0, h.getSigningKey)(this.sha256, e, n, t, r || this.service);
                },
              },
              {
                key: "validateResolvedCredentials",
                value: function (e) {
                  if (
                    "object" !== (0, i.default)(e) ||
                    "string" != typeof e.accessKeyId ||
                    "string" != typeof e.secretAccessKey
                  )
                    throw new Error("Resolved credential object is not valid");
                },
              },
            ]),
            e
          );
        })();
        t.SignatureV4 = P;
        var S = function (e) {
            var t = (0, E.iso8601)(e).replace(/[\-:]/g, "");
            return { longDate: t, shortDate: t.slice(0, 8) };
          },
          O = function (e) {
            return Object.keys(e).sort().join(";");
          };
      },
      5267: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.cloneRequest = t.cloneQuery = void 0);
        var o = r(n(861)),
          i = r(n(8416)),
          a = r(n(215)),
          s = ["headers", "query"];
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  (0, i.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        t.cloneRequest = function (e) {
          var t = e.headers,
            n = e.query;
          return c(c({}, (0, a.default)(e, s)), {}, { headers: c({}, t), query: n ? l(n) : void 0 });
        };
        var l = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return c(c({}, t), {}, (0, i.default)({}, n, Array.isArray(r) ? (0, o.default)(r) : r));
          }, {});
        };
        t.cloneQuery = l;
      },
      9069: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UNSIGNED_PAYLOAD =
            t.UNSIGNABLE_PATTERNS =
            t.TOKEN_QUERY_PARAM =
            t.TOKEN_HEADER =
            t.SIGNED_HEADERS_QUERY_PARAM =
            t.SIGNATURE_QUERY_PARAM =
            t.SIGNATURE_HEADER =
            t.SHA256_HEADER =
            t.SEC_HEADER_PATTERN =
            t.REGION_SET_PARAM =
            t.PROXY_HEADER_PATTERN =
            t.MAX_PRESIGNED_TTL =
            t.MAX_CACHE_SIZE =
            t.KEY_TYPE_IDENTIFIER =
            t.HOST_HEADER =
            t.GENERATED_HEADERS =
            t.EXPIRES_QUERY_PARAM =
            t.EVENT_ALGORITHM_IDENTIFIER =
            t.DATE_HEADER =
            t.CREDENTIAL_QUERY_PARAM =
            t.AUTH_HEADER =
            t.AMZ_DATE_QUERY_PARAM =
            t.AMZ_DATE_HEADER =
            t.ALWAYS_UNSIGNABLE_HEADERS =
            t.ALGORITHM_QUERY_PARAM =
            t.ALGORITHM_IDENTIFIER_V4A =
            t.ALGORITHM_IDENTIFIER =
              void 0);
        t.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
        t.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
        var n = "X-Amz-Date";
        t.AMZ_DATE_QUERY_PARAM = n;
        t.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
        t.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
        var r = "X-Amz-Signature";
        t.SIGNATURE_QUERY_PARAM = r;
        var o = "X-Amz-Security-Token";
        t.TOKEN_QUERY_PARAM = o;
        t.REGION_SET_PARAM = "X-Amz-Region-Set";
        var i = "authorization";
        t.AUTH_HEADER = i;
        var a = n.toLowerCase();
        t.AMZ_DATE_HEADER = a;
        var s = "date";
        t.DATE_HEADER = s;
        var u = [i, a, s];
        t.GENERATED_HEADERS = u;
        var c = r.toLowerCase();
        t.SIGNATURE_HEADER = c;
        t.SHA256_HEADER = "x-amz-content-sha256";
        var l = o.toLowerCase();
        t.TOKEN_HEADER = l;
        t.HOST_HEADER = "host";
        t.ALWAYS_UNSIGNABLE_HEADERS = {
          authorization: !0,
          "cache-control": !0,
          connection: !0,
          expect: !0,
          from: !0,
          "keep-alive": !0,
          "max-forwards": !0,
          pragma: !0,
          referer: !0,
          te: !0,
          trailer: !0,
          "transfer-encoding": !0,
          upgrade: !0,
          "user-agent": !0,
          "x-amzn-trace-id": !0,
        };
        t.PROXY_HEADER_PATTERN = /^proxy-/;
        t.SEC_HEADER_PATTERN = /^sec-/;
        t.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
        t.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
        t.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
        t.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
        t.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
        t.MAX_CACHE_SIZE = 50;
        t.KEY_TYPE_IDENTIFIER = "aws4_request";
        t.MAX_PRESIGNED_TTL = 604800;
      },
      9481: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getSigningKey = t.createScope = t.clearCredentialCache = void 0);
        var o = r(n(4687)),
          i = r(n(7156)),
          a = n(460),
          s = n(1679),
          u = n(9069),
          c = {},
          l = [];
        t.createScope = function (e, t, n) {
          return "".concat(e, "/").concat(t, "/").concat(n, "/").concat(u.KEY_TYPE_IDENTIFIER);
        };
        var f = (function () {
          var e = (0, i.default)(
            o.default.mark(function e(t, n, r, i, s) {
              var f, p, h, v, y, g;
              return o.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), d(t, n.secretAccessKey, n.accessKeyId);
                    case 2:
                      if (
                        ((f = e.sent),
                        !(
                          (p = ""
                            .concat(r, ":")
                            .concat(i, ":")
                            .concat(s, ":")
                            .concat((0, a.toHex)(f), ":")
                            .concat(n.sessionToken)) in c
                        ))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return", c[p]);
                    case 6:
                      for (l.push(p); l.length > u.MAX_CACHE_SIZE; ) delete c[l.shift()];
                      (h = "AWS4".concat(n.secretAccessKey)), (v = 0), (y = [r, i, s, u.KEY_TYPE_IDENTIFIER]);
                    case 10:
                      if (!(v < y.length)) {
                        e.next = 18;
                        break;
                      }
                      return (g = y[v]), (e.next = 14), d(t, h, g);
                    case 14:
                      h = e.sent;
                    case 15:
                      v++, (e.next = 10);
                      break;
                    case 18:
                      return e.abrupt("return", (c[p] = h));
                    case 19:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, r, o, i) {
            return e.apply(this, arguments);
          };
        })();
        t.getSigningKey = f;
        t.clearCredentialCache = function () {
          (l.length = 0),
            Object.keys(c).forEach(function (e) {
              delete c[e];
            });
        };
        var d = function (e, t, n) {
          var r = new e(t);
          return r.update((0, s.toUint8Array)(n)), r.digest();
        };
      },
      1078: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCanonicalHeaders = void 0);
        var r = n(9069);
        function o(e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var a,
            s = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (s = e.done), e;
            },
            e: function (e) {
              (u = !0), (a = e);
            },
            f: function () {
              try {
                s || null == n.return || n.return();
              } finally {
                if (u) throw a;
              }
            },
          };
        }
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        t.getCanonicalHeaders = function (e, t, n) {
          var i,
            a = e.headers,
            s = {},
            u = o(Object.keys(a).sort());
          try {
            for (u.s(); !(i = u.n()).done; ) {
              var c = i.value;
              if (null != a[c]) {
                var l = c.toLowerCase();
                ((l in r.ALWAYS_UNSIGNABLE_HEADERS ||
                  (null != t && t.has(l)) ||
                  r.PROXY_HEADER_PATTERN.test(l) ||
                  r.SEC_HEADER_PATTERN.test(l)) &&
                  (!n || (n && !n.has(l)))) ||
                  (s[l] = a[c].trim().replace(/\s+/g, " "));
              }
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          return s;
        };
      },
      6701: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCanonicalQuery = void 0);
        var r = n(8041),
          o = n(9069);
        function i(e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var i,
            s = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (s = e.done), e;
            },
            e: function (e) {
              (u = !0), (i = e);
            },
            f: function () {
              try {
                s || null == n.return || n.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        t.getCanonicalQuery = function (e) {
          var t,
            n = e.query,
            a = void 0 === n ? {} : n,
            s = [],
            u = {},
            c = i(Object.keys(a).sort());
          try {
            var l = function () {
              var e = t.value;
              if (e.toLowerCase() === o.SIGNATURE_HEADER) return "continue";
              s.push(e);
              var n = a[e];
              "string" == typeof n
                ? (u[e] = "".concat((0, r.escapeUri)(e), "=").concat((0, r.escapeUri)(n)))
                : Array.isArray(n) &&
                  (u[e] = n
                    .slice(0)
                    .sort()
                    .reduce(function (t, n) {
                      return t.concat(["".concat((0, r.escapeUri)(e), "=").concat((0, r.escapeUri)(n))]);
                    }, [])
                    .join("&"));
            };
            for (c.s(); !(t = c.n()).done; ) l();
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
          return s
            .map(function (e) {
              return u[e];
            })
            .filter(function (e) {
              return e;
            })
            .join("&");
        };
      },
      641: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPayloadHash = void 0);
        var o = r(n(4687)),
          i = r(n(7156)),
          a = n(4333),
          s = n(460),
          u = n(1679),
          c = n(9069),
          l = (function () {
            var e = (0, i.default)(
              o.default.mark(function e(t, n) {
                var r, i, l, f, d, p;
                return o.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = t.headers), (i = t.body), (l = 0), (f = Object.keys(r));
                      case 2:
                        if (!(l < f.length)) {
                          e.next = 9;
                          break;
                        }
                        if ((d = f[l]).toLowerCase() !== c.SHA256_HEADER) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return", r[d]);
                      case 6:
                        l++, (e.next = 2);
                        break;
                      case 9:
                        if (null != i) {
                          e.next = 13;
                          break;
                        }
                        return e.abrupt("return", "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
                      case 13:
                        if ("string" != typeof i && !ArrayBuffer.isView(i) && !(0, a.isArrayBuffer)(i)) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (p = new n()).update((0, u.toUint8Array)(i)), (e.t0 = s.toHex), (e.next = 19), p.digest()
                        );
                      case 19:
                        return (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1));
                      case 21:
                        return e.abrupt("return", c.UNSIGNED_PAYLOAD);
                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        t.getPayloadHash = l;
      },
      534: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasHeader = t.getHeaderValue = t.deleteHeader = void 0);
        t.hasHeader = function (e, t) {
          e = e.toLowerCase();
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            if (e === r[n].toLowerCase()) return !0;
          }
          return !1;
        };
        t.getHeaderValue = function (e, t) {
          e = e.toLowerCase();
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            if (e === o.toLowerCase()) return t[o];
          }
        };
        t.deleteHeader = function (e, t) {
          e = e.toLowerCase();
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            e === o.toLowerCase() && delete t[o];
          }
        };
      },
      6703: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = {
          getCanonicalHeaders: !0,
          getCanonicalQuery: !0,
          getPayloadHash: !0,
          moveHeadersToQuery: !0,
          prepareRequest: !0,
        };
        Object.defineProperty(t, "getCanonicalHeaders", {
          enumerable: !0,
          get: function () {
            return i.getCanonicalHeaders;
          },
        }),
          Object.defineProperty(t, "getCanonicalQuery", {
            enumerable: !0,
            get: function () {
              return a.getCanonicalQuery;
            },
          }),
          Object.defineProperty(t, "getPayloadHash", {
            enumerable: !0,
            get: function () {
              return s.getPayloadHash;
            },
          }),
          Object.defineProperty(t, "moveHeadersToQuery", {
            enumerable: !0,
            get: function () {
              return u.moveHeadersToQuery;
            },
          }),
          Object.defineProperty(t, "prepareRequest", {
            enumerable: !0,
            get: function () {
              return c.prepareRequest;
            },
          });
        var o = n(7214);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(r, e) ||
              (e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
        var i = n(1078),
          a = n(6701),
          s = n(641),
          u = n(5296),
          c = n(5987),
          l = n(9481);
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(r, e) ||
              (e in t && t[e] === l[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return l[e];
                },
              }));
        });
      },
      5296: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.moveHeadersToQuery = void 0);
        var o = r(n(8416)),
          i = n(5267);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        t.moveHeadersToQuery = function (e) {
          for (
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = "function" == typeof e.clone ? e.clone() : (0, i.cloneRequest)(e),
              r = n.headers,
              o = n.query,
              a = void 0 === o ? {} : o,
              u = 0,
              c = Object.keys(r);
            u < c.length;
            u++
          ) {
            var l,
              f = c[u],
              d = f.toLowerCase();
            "x-amz-" !== d.slice(0, 6) ||
              (null !== (l = t.unhoistableHeaders) && void 0 !== l && l.has(d)) ||
              ((a[f] = r[f]), delete r[f]);
          }
          return s(s({}, e), {}, { headers: r, query: a });
        };
      },
      5987: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.prepareRequest = void 0);
        var r = n(5267),
          o = n(9069);
        t.prepareRequest = function (e) {
          e = "function" == typeof e.clone ? e.clone() : (0, r.cloneRequest)(e);
          for (var t = 0, n = Object.keys(e.headers); t < n.length; t++) {
            var i = n[t];
            o.GENERATED_HEADERS.indexOf(i.toLowerCase()) > -1 && delete e.headers[i];
          }
          return e;
        };
      },
      5100: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.toDate = t.iso8601 = void 0);
        t.iso8601 = function (e) {
          return n(e)
            .toISOString()
            .replace(/\.\d{3}Z$/, "Z");
        };
        var n = function (e) {
          return "number" == typeof e
            ? new Date(1e3 * e)
            : "string" == typeof e
              ? Number(e)
                ? new Date(1e3 * Number(e))
                : new Date(e)
              : e;
        };
        t.toDate = n;
      },
      4955: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.maxLetterValue = t.bitsPerLetter = t.bitsPerByte = t.alphabetByValue = t.alphabetByEncoding = void 0);
        var n = {};
        t.alphabetByEncoding = n;
        var r = new Array(64);
        t.alphabetByValue = r;
        for (var o = 0, i = "A".charCodeAt(0), a = "Z".charCodeAt(0); o + i <= a; o++) {
          var s = String.fromCharCode(o + i);
          (n[s] = o), (r[o] = s);
        }
        for (var u = 0, c = "a".charCodeAt(0), l = "z".charCodeAt(0); u + c <= l; u++) {
          var f = String.fromCharCode(u + c),
            d = u + 26;
          (n[f] = d), (r[d] = f);
        }
        for (var p = 0; p < 10; p++) {
          n[p.toString(10)] = p + 52;
          var h = p.toString(10),
            v = p + 52;
          (n[h] = v), (r[v] = h);
        }
        (n["+"] = 62), (r[62] = "+"), (n["/"] = 63), (r[63] = "/");
        t.bitsPerLetter = 6;
        t.bitsPerByte = 8;
        t.maxLetterValue = 63;
      },
      6500: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.fromBase64 = void 0);
        var r = n(4955);
        t.fromBase64 = function (e) {
          var t = (e.length / 4) * 3;
          "==" === e.slice(-2) ? (t -= 2) : "=" === e.slice(-1) && t--;
          for (var n = new ArrayBuffer(t), o = new DataView(n), i = 0; i < e.length; i += 4) {
            for (var a = 0, s = 0, u = i, c = i + 3; u <= c; u++)
              if ("=" !== e[u]) {
                if (!(e[u] in r.alphabetByEncoding))
                  throw new TypeError("Invalid character ".concat(e[u], " in base64 string."));
                (a |= r.alphabetByEncoding[e[u]] << ((c - u) * r.bitsPerLetter)), (s += r.bitsPerLetter);
              } else a >>= r.bitsPerLetter;
            var l = (i / 4) * 3;
            a >>= s % r.bitsPerByte;
            for (var f = Math.floor(s / r.bitsPerByte), d = 0; d < f; d++) {
              var p = (f - d - 1) * r.bitsPerByte;
              o.setUint8(l + d, (a & (255 << p)) >> p);
            }
          }
          return new Uint8Array(n);
        };
      },
      7847: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(6500);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
        var o = n(3156);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
      },
      3156: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.toBase64 = function (e) {
            for (var t = "", n = 0; n < e.length; n += 3) {
              for (var o = 0, i = 0, a = n, s = Math.min(n + 3, e.length); a < s; a++)
                (o |= e[a] << ((s - a - 1) * r.bitsPerByte)), (i += r.bitsPerByte);
              var u = Math.ceil(i / r.bitsPerLetter);
              o <<= u * r.bitsPerLetter - i;
              for (var c = 1; c <= u; c++) {
                var l = (u - c) * r.bitsPerLetter;
                t += r.alphabetByValue[(o & (r.maxLetterValue << l)) >> l];
              }
              t += "==".slice(0, 4 - u);
            }
            return t;
          });
        var r = n(4955);
      },
      460: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fromHex = function (e) {
            if (e.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
            for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2) {
              var o = e.slice(n, n + 2).toLowerCase();
              if (!(o in r)) throw new Error("Cannot decode unrecognized sequence ".concat(o, " as hexadecimal"));
              t[n / 2] = r[o];
            }
            return t;
          }),
          (t.toHex = function (e) {
            for (var t = "", r = 0; r < e.byteLength; r++) t += n[e[r]];
            return t;
          });
        for (var n = {}, r = {}, o = 0; o < 256; o++) {
          var i = o.toString(16).toLowerCase();
          1 === i.length && (i = "0".concat(i)), (n[o] = i), (r[i] = o);
        }
      },
      4854: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(3571);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
      },
      3571: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.normalizeProvider = void 0);
        t.normalizeProvider = function (e) {
          if ("function" == typeof e) return e;
          var t = Promise.resolve(e);
          return function () {
            return t;
          };
        };
      },
      3211: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.escapeUriPath = void 0);
        var r = n(3724);
        t.escapeUriPath = function (e) {
          return e.split("/").map(r.escapeUri).join("/");
        };
      },
      3724: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.escapeUri = void 0);
        t.escapeUri = function (e) {
          return encodeURIComponent(e).replace(/[!'()*]/g, n);
        };
        var n = function (e) {
          return "%".concat(e.charCodeAt(0).toString(16).toUpperCase());
        };
      },
      8041: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(3724);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
        var o = n(3211);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
      },
      372: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.toUtf8 = t.fromUtf8 = void 0);
        var r = n(3840),
          o = n(1698);
        t.fromUtf8 = function (e) {
          return "function" == typeof TextEncoder ? (0, o.fromUtf8)(e) : (0, r.fromUtf8)(e);
        };
        t.toUtf8 = function (e) {
          return "function" == typeof TextDecoder ? (0, o.toUtf8)(e) : (0, r.toUtf8)(e);
        };
      },
      3840: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.toUtf8 = t.fromUtf8 = void 0);
        t.fromUtf8 = function (e) {
          for (var t = [], n = 0, r = e.length; n < r; n++) {
            var o = e.charCodeAt(n);
            if (o < 128) t.push(o);
            else if (o < 2048) t.push((o >> 6) | 192, (63 & o) | 128);
            else if (n + 1 < e.length && 55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(n + 1))) {
              var i = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n));
              t.push((i >> 18) | 240, ((i >> 12) & 63) | 128, ((i >> 6) & 63) | 128, (63 & i) | 128);
            } else t.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
          }
          return Uint8Array.from(t);
        };
        t.toUtf8 = function (e) {
          for (var t = "", n = 0, r = e.length; n < r; n++) {
            var o = e[n];
            if (o < 128) t += String.fromCharCode(o);
            else if (192 <= o && o < 224) {
              var i = e[++n];
              t += String.fromCharCode(((31 & o) << 6) | (63 & i));
            } else if (240 <= o && o < 365) {
              var a =
                "%" +
                [o, e[++n], e[++n], e[++n]]
                  .map(function (e) {
                    return e.toString(16);
                  })
                  .join("%");
              t += decodeURIComponent(a);
            } else t += String.fromCharCode(((15 & o) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n]));
          }
          return t;
        };
      },
      1698: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fromUtf8 = function (e) {
            return new TextEncoder().encode(e);
          }),
          (t.toUtf8 = function (e) {
            return new TextDecoder("utf-8").decode(e);
          });
      },
      5007: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.fromUtf8 = void 0);
        t.fromUtf8 = function (e) {
          return new TextEncoder().encode(e);
        };
      },
      1679: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(5007);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === r[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              }));
        });
        var o = n(652);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === o[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              }));
        });
        var i = n(1813);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            ((e in t && t[e] === i[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return i[e];
                },
              }));
        });
      },
      652: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.toUint8Array = void 0);
        var r = n(5007);
        t.toUint8Array = function (e) {
          return "string" == typeof e
            ? (0, r.fromUtf8)(e)
            : ArrayBuffer.isView(e)
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT)
              : new Uint8Array(e);
        };
      },
      1813: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.toUtf8 = void 0);
        t.toUtf8 = function (e) {
          return new TextDecoder("utf-8").decode(e);
        };
      },
      3014: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommandQueue = void 0);
        var o = r(n(8698)),
          i = n(21),
          a = n(7483),
          s = n(7885),
          u = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          c = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          l = (function () {
            function e() {
              var e = this;
              this.commandHandlerMap = {
                setAwsCredentials: function (t) {
                  e.orchestration.setAwsCredentials(t);
                },
                addSessionAttributes: function (t) {
                  e.orchestration.addSessionAttributes(t);
                },
                recordPageView: function (t) {
                  e.orchestration.recordPageView(t);
                },
                recordError: function (t) {
                  e.orchestration.recordError(t);
                },
                registerDomEvents: function (t) {
                  e.orchestration.registerDomEvents(t);
                },
                recordEvent: function (t) {
                  if (
                    "object" !== (0, o.default)(t) ||
                    "string" != typeof t.type ||
                    "object" !== (0, o.default)(t.data)
                  )
                    throw new Error("IncorrectParametersException");
                  e.orchestration.recordEvent(t.type, t.data);
                },
                dispatch: function () {
                  e.orchestration.dispatch();
                },
                dispatchBeacon: function () {
                  e.orchestration.dispatchBeacon();
                },
                enable: function () {
                  e.orchestration.enable();
                },
                disable: function () {
                  e.orchestration.disable();
                },
                allowCookies: function (t) {
                  if ("boolean" != typeof t) throw new Error("IncorrectParametersException");
                  e.orchestration.allowCookies(t);
                },
              };
            }
            return (
              (e.prototype.init = function (e) {
                return u(this, void 0, void 0, function () {
                  var t;
                  return c(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return void 0 === e.u ? [3, 2] : [4, (0, s.getRemoteConfig)(e)];
                      case 1:
                        return (t = n.sent()), (e.c = t), this.initCwr(e), [3, 3];
                      case 2:
                        this.initCwr(e), (n.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.push = function (e) {
                return u(this, void 0, void 0, function () {
                  var t;
                  return c(this, function (n) {
                    if (!(t = this.commandHandlerMap[e.c]))
                      throw new Error("CWR: UnsupportedOperationException: ".concat(e.c));
                    return t(e.p), [2];
                  });
                });
              }),
              (e.prototype.initCwr = function (e) {
                var t = this;
                e.c ? (e.c.client = i.INSTALL_SCRIPT) : (e.c = { client: i.INSTALL_SCRIPT }),
                  (this.orchestration = new a.Orchestration(e.i, e.v, e.r, e.c)),
                  (window[e.n] = function (e, n) {
                    t.push({ c: e, p: n });
                  }),
                  e.q.forEach(function (e) {
                    t.push(e);
                  }),
                  (e.q = []);
              }),
              e
            );
          })();
        t.CommandQueue = l;
      },
      1148: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Authentication = void 0);
        var r = n(7843),
          o = n(3940),
          i = n(21),
          a = function () {
            return (
              (a =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              a.apply(this, arguments)
            );
          },
          s = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          u = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          c = (function () {
            function e(e) {
              var t = this;
              (this.ChainAnonymousCredentialsProvider = function () {
                return s(t, void 0, void 0, function () {
                  return u(this, function (e) {
                    return [
                      2,
                      this.AnonymousCredentialsProvider()
                        .catch(this.AnonymousStorageCredentialsProvider)
                        .catch(this.AnonymousCognitoCredentialsProvider),
                    ];
                  });
                });
              }),
                (this.AnonymousCredentialsProvider = function () {
                  return s(t, void 0, void 0, function () {
                    var e = this;
                    return u(this, function (t) {
                      return [
                        2,
                        new Promise(function (t, n) {
                          if (e.renewCredentials()) return n();
                          t(e.credentials);
                        }),
                      ];
                    });
                  });
                }),
                (this.AnonymousStorageCredentialsProvider = function () {
                  return s(t, void 0, void 0, function () {
                    var e = this;
                    return u(this, function (t) {
                      return [
                        2,
                        new Promise(function (t, n) {
                          var r;
                          try {
                            r = JSON.parse(localStorage.getItem(i.CRED_KEY));
                          } catch (e) {
                            return n();
                          }
                          if (
                            ((e.credentials = a(a({}, r), { expiration: new Date(r.expiration) })),
                            e.renewCredentials())
                          )
                            return n();
                          t(e.credentials);
                        }),
                      ];
                    });
                  });
                });
              var n = e.identityPoolId.split(":")[0];
              (this.config = e),
                (this.cognitoIdentityClient = new r.CognitoIdentityClient({
                  fetchRequestHandler: new o.FetchHttpHandler(),
                  region: n,
                }));
            }
            return (
              (e.prototype.renewCredentials = function () {
                if (!this.credentials || !this.credentials.expiration) return !0;
                var e = new Date(this.credentials.expiration.getTime() - i.CRED_RENEW_MS);
                return new Date() > e;
              }),
              e
            );
          })();
        t.Authentication = c;
      },
      1042: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BasicAuthentication = void 0);
        var r,
          o = n(3940),
          i = n(9269),
          a = n(21),
          s = n(1148),
          u =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          c = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          l = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          f = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              n.AnonymousCognitoCredentialsProvider = function () {
                return c(n, void 0, void 0, function () {
                  var e, t, n, r, o;
                  return l(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (e = 1), (i.label = 1);
                      case 1:
                        0, (i.label = 2);
                      case 2:
                        return (
                          i.trys.push([2, 6, , 7]),
                          [4, this.cognitoIdentityClient.getId({ IdentityPoolId: this.config.identityPoolId })]
                        );
                      case 3:
                        return (t = i.sent()), [4, this.cognitoIdentityClient.getOpenIdToken(t)];
                      case 4:
                        return (
                          (n = i.sent()),
                          [
                            4,
                            this.stsClient.assumeRoleWithWebIdentity({
                              RoleArn: this.config.guestRoleArn,
                              RoleSessionName: "cwr",
                              WebIdentityToken: n.Token,
                            }),
                          ]
                        );
                      case 5:
                        (r = i.sent()), (this.credentials = r);
                        try {
                          localStorage.setItem(a.CRED_KEY, JSON.stringify(r));
                        } catch (e) {}
                        return [2, r];
                      case 6:
                        if (((o = i.sent()), !e)) throw o;
                        return e--, [3, 7];
                      case 7:
                        return [3, 1];
                      case 8:
                        return [2];
                    }
                  });
                });
              };
              var r = t.identityPoolId.split(":")[0];
              return (n.stsClient = new i.StsClient({ fetchRequestHandler: new o.FetchHttpHandler(), region: r })), n;
            }
            return u(t, e), t;
          })(s.Authentication);
        t.BasicAuthentication = f;
      },
      5454: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BeaconHttpHandler = void 0);
        var r = n(4146),
          o = n(590),
          i = (function () {
            function e() {}
            return (
              (e.prototype.handle = function (e) {
                var t = this.sendBeacon(e);
                return new Promise(function (e, n) {
                  t ? e({ response: new r.HttpResponse({ statusCode: 200 }) }) : n();
                });
              }),
              (e.prototype.sendBeacon = function (e) {
                var t = e.path;
                if (e.query) {
                  var n = (0, o.buildQueryString)(e.query);
                  n && (t += "?".concat(n));
                }
                var r = e.port,
                  i = ""
                    .concat(e.protocol, "//")
                    .concat(e.hostname)
                    .concat(r ? ":".concat(r) : "")
                    .concat(t);
                return navigator.sendBeacon(i, e.body);
              }),
              e
            );
          })();
        t.BeaconHttpHandler = i;
      },
      7843: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CognitoIdentityClient = void 0);
        var r = n(4146),
          o = n(828),
          i = n(21),
          a = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          s = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          u = function (e) {
            var t = this;
            (this.getId = function (e) {
              return a(t, void 0, void 0, function () {
                var t, n, r, a, u, c;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      t = null;
                      try {
                        t = JSON.parse(localStorage.getItem(i.IDENTITY_KEY));
                      } catch (e) {}
                      if (t && t.IdentityId) return [2, Promise.resolve(t)];
                      s.label = 1;
                    case 1:
                      return (
                        s.trys.push([1, 4, , 5]),
                        (n = JSON.stringify(e)),
                        (r = this.getHttpRequest("AWSCognitoIdentityService.GetId", n)),
                        (u = o.responseToJson),
                        [4, this.fetchRequestHandler.handle(r)]
                      );
                    case 2:
                      return [4, u.apply(void 0, [s.sent().response])];
                    case 3:
                      a = s.sent();
                      try {
                        localStorage.setItem(i.IDENTITY_KEY, JSON.stringify({ IdentityId: a.IdentityId }));
                      } catch (e) {}
                      return [2, a];
                    case 4:
                      throw ((c = s.sent()), new Error("CWR: Failed to retrieve Cognito identity: ".concat(c)));
                    case 5:
                      return [2];
                  }
                });
              });
            }),
              (this.getOpenIdToken = function (e) {
                return a(t, void 0, void 0, function () {
                  var t, n, r, a, u;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (
                          s.trys.push([0, 3, , 4]),
                          (t = JSON.stringify(e)),
                          (n = this.getHttpRequest("AWSCognitoIdentityService.GetOpenIdToken", t)),
                          [4, this.fetchRequestHandler.handle(n)]
                        );
                      case 1:
                        return (
                          (r = s.sent().response), (a = this.validateOpenIdTokenResponse), [4, (0, o.responseToJson)(r)]
                        );
                      case 2:
                        return [2, a.apply(this, [s.sent()])];
                      case 3:
                        throw (
                          ((u = s.sent()),
                          localStorage.removeItem(i.IDENTITY_KEY),
                          new Error("CWR: Failed to retrieve Cognito OpenId token: ".concat(u)))
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (this.getCredentialsForIdentity = function (e) {
                return a(t, void 0, void 0, function () {
                  var t, n, r, a, u, c, l, f, d, p;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (
                          s.trys.push([0, 3, , 4]),
                          (t = JSON.stringify({ IdentityId: e })),
                          (n = this.getHttpRequest("AWSCognitoIdentityService.GetCredentialsForIdentity", t)),
                          [4, this.fetchRequestHandler.handle(n)]
                        );
                      case 1:
                        return (
                          (r = s.sent().response),
                          (d = this.validateCredenentialsResponse),
                          [4, (0, o.responseToJson)(r)]
                        );
                      case 2:
                        return (
                          (a = d.apply(this, [s.sent()])),
                          (u = a.AccessKeyId),
                          (c = a.Expiration),
                          (l = a.SecretKey),
                          (f = a.SessionToken),
                          [2, { accessKeyId: u, secretAccessKey: l, sessionToken: f, expiration: new Date(1e3 * c) }]
                        );
                      case 3:
                        throw (
                          ((p = s.sent()),
                          localStorage.removeItem(i.IDENTITY_KEY),
                          new Error("CWR: Failed to retrieve credentials for Cognito identity: ".concat(p)))
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (this.validateOpenIdTokenResponse = function (e) {
                if ("IdentityId" in e && "Token" in e) return e;
                throw e && "__type" in e && "message" in e
                  ? new Error("".concat(e.__type, ": ").concat(e.message))
                  : new Error("Unknown OpenIdToken response");
              }),
              (this.validateCredenentialsResponse = function (e) {
                if ("IdentityId" in e && "Credentials" in e) return e.Credentials;
                throw e && "__type" in e && "message" in e
                  ? new Error("".concat(e.__type, ": ").concat(e.message))
                  : new Error("Unknown Credentials response");
              }),
              (this.getHttpRequest = function (e, n) {
                return new r.HttpRequest({
                  method: "POST",
                  headers: { "content-type": "application/x-amz-json-1.1", "x-amz-target": e },
                  protocol: "https:",
                  hostname: t.hostname,
                  body: n,
                });
              }),
              (this.hostname = "cognito-identity.".concat(e.region, ".amazonaws.com")),
              (this.fetchRequestHandler = e.fetchRequestHandler);
          };
        t.CognitoIdentityClient = u;
      },
      9387: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DataPlaneClient = void 0);
        var r = n(460),
          o = n(6703),
          i = n(1938),
          a = n(4146),
          s = function () {
            return (
              (s =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              s.apply(this, arguments)
            );
          },
          u = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          c = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          l = { expiresIn: 60 },
          f = function (e) {
            var t = this;
            (this.sendFetch = function (e) {
              return u(t, void 0, void 0, function () {
                var t, n;
                return c(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.getHttpRequestOptions(e, "application/json")];
                    case 1:
                      return (
                        (t = r.sent()), (n = new a.HttpRequest(t)), this.awsSigV4 ? [4, this.awsSigV4.sign(n)] : [3, 3]
                      );
                    case 2:
                      (n = r.sent()), (r.label = 3);
                    case 3:
                      return [2, this.config.fetchRequestHandler.handle(n)];
                  }
                });
              });
            }),
              (this.sendBeacon = function (e) {
                return u(t, void 0, void 0, function () {
                  var t, n;
                  return c(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.getHttpRequestOptions(e, "text/plain;charset=UTF-8")];
                      case 1:
                        return (
                          (t = r.sent()),
                          (n = new a.HttpRequest(t)),
                          this.awsSigV4 ? [4, this.awsSigV4.presign(n, l)] : [3, 3]
                        );
                      case 2:
                        (n = r.sent()), (r.label = 3);
                      case 3:
                        return [2, this.config.beaconRequestHandler.handle(n)];
                    }
                  });
                });
              }),
              (this.getHttpRequestOptions = function (e, n) {
                return u(t, void 0, void 0, function () {
                  var t, r, o, i, a, u, l, f;
                  return c(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return (
                          (t = JSON.stringify(d(e))),
                          (r = this.config.endpoint.pathname.replace(/\/$/, "")),
                          (o = {
                            method: "POST",
                            protocol: this.config.endpoint.protocol,
                            headers: { "content-type": n, host: this.config.endpoint.host },
                            hostname: this.config.endpoint.hostname,
                            path: "".concat(r, "/appmonitors/").concat(e.AppMonitorDetails.id),
                            body: t,
                          }),
                          this.awsSigV4
                            ? ((i = [s({}, o)]),
                              (l = {}),
                              (a = [s({}, o.headers)]),
                              (f = {}),
                              (u = "X-Amz-Content-Sha256"),
                              [4, h(t)])
                            : [3, 2]
                        );
                      case 1:
                        return [
                          2,
                          s.apply(
                            void 0,
                            i.concat([((l.headers = s.apply(void 0, a.concat([((f[u] = c.sent()), f)]))), l)]),
                          ),
                        ];
                      case 2:
                        return [2, o];
                    }
                  });
                });
              }),
              (this.config = e),
              e.credentials &&
                (this.awsSigV4 = new o.SignatureV4({
                  applyChecksum: !0,
                  credentials: e.credentials,
                  region: e.region,
                  service: "rum",
                  uriEscapePath: !0,
                  sha256: i.Sha256,
                }));
          };
        t.DataPlaneClient = f;
        var d = function (e) {
            var t = [];
            return (
              e.RumEvents.forEach(function (e) {
                return t.push(p(e));
              }),
              { BatchId: e.BatchId, AppMonitorDetails: e.AppMonitorDetails, UserDetails: e.UserDetails, RumEvents: t }
            );
          },
          p = function (e) {
            return {
              id: e.id,
              timestamp: Math.round(e.timestamp.getTime() / 1e3),
              type: e.type,
              metadata: e.metadata,
              details: e.details,
            };
          },
          h = function (e) {
            return u(void 0, void 0, void 0, function () {
              var t, n;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (t = new i.Sha256()).update(e), (n = r.toHex), [4, t.digest()];
                  case 1:
                    return [2, n.apply(void 0, [o.sent()]).toLowerCase()];
                }
              });
            });
          };
      },
      7689: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Dispatch = void 0);
        var r = n(9387),
          o = n(5454),
          i = n(2272),
          a = n(7429),
          s = n(2034),
          u = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          c = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          l = "CWR: Cannot dispatch; no AWS credentials.",
          f = (function () {
            function e(e, t, n, a) {
              var f = this;
              (this.dispatchFetch = function () {
                return u(f, void 0, void 0, function () {
                  return c(this, function (e) {
                    return this.doRequest()
                      ? [2, this.rum.sendFetch(this.createRequest()).catch(this.handleReject)]
                      : [2];
                  });
                });
              }),
                (this.dispatchBeacon = function () {
                  return u(f, void 0, void 0, function () {
                    var e,
                      t = this;
                    return c(this, function (n) {
                      return this.doRequest()
                        ? ((e = this.createRequest()),
                          [
                            2,
                            this.rum.sendBeacon(e).catch(function () {
                              return t.rum.sendFetch(e);
                            }),
                          ])
                        : [2];
                    });
                  });
                }),
                (this.dispatchFetchFailSilent = function () {
                  return u(f, void 0, void 0, function () {
                    return c(this, function (e) {
                      return [2, this.dispatchFetch().catch(function () {})];
                    });
                  });
                }),
                (this.dispatchBeaconFailSilent = function () {
                  return u(f, void 0, void 0, function () {
                    return c(this, function (e) {
                      return [2, this.dispatchBeacon().catch(function () {})];
                    });
                  });
                }),
                (this.handleReject = function (e) {
                  throw (f.disable(), e);
                }),
                (this.defaultClientBuilder = function (e, t, n) {
                  return new r.DataPlaneClient({
                    fetchRequestHandler: new s.RetryHttpHandler(
                      new i.FetchHttpHandler({ fetchFunction: f.config.fetchFunction }),
                      f.config.retries,
                    ),
                    beaconRequestHandler: new o.BeaconHttpHandler(),
                    endpoint: e,
                    region: t,
                    credentials: n,
                  });
                }),
                (this.region = e),
                (this.endpoint = t),
                (this.eventCache = n),
                (this.enabled = !0),
                (this.buildClient = a.clientBuilder || this.defaultClientBuilder),
                (this.config = a),
                this.startDispatchTimer(),
                a.signing
                  ? (this.rum = {
                      sendFetch: function () {
                        return Promise.reject(new Error(l));
                      },
                      sendBeacon: function () {
                        return Promise.reject(new Error(l));
                      },
                    })
                  : (this.rum = this.buildClient(this.endpoint, this.region, void 0));
            }
            return (
              (e.prototype.enable = function () {
                (this.enabled = !0), this.startDispatchTimer();
              }),
              (e.prototype.disable = function () {
                this.stopDispatchTimer(), (this.enabled = !1);
              }),
              (e.prototype.setAwsCredentials = function (e) {
                (this.rum = this.buildClient(this.endpoint, this.region, e)), "function" == typeof e && e();
              }),
              (e.prototype.startDispatchTimer = function () {
                document.addEventListener(
                  "visibilitychange",
                  this.config.useBeacon ? this.dispatchBeaconFailSilent : this.dispatchFetchFailSilent,
                ),
                  document.addEventListener(
                    "pagehide",
                    this.config.useBeacon ? this.dispatchBeaconFailSilent : this.dispatchFetchFailSilent,
                  ),
                  this.config.dispatchInterval <= 0 ||
                    this.dispatchTimerId ||
                    (this.dispatchTimerId = window.setInterval(
                      this.dispatchFetchFailSilent,
                      this.config.dispatchInterval,
                    ));
              }),
              (e.prototype.stopDispatchTimer = function () {
                document.removeEventListener(
                  "visibilitychange",
                  this.config.useBeacon ? this.dispatchBeaconFailSilent : this.dispatchFetchFailSilent,
                ),
                  document.removeEventListener(
                    "pagehide",
                    this.config.useBeacon ? this.dispatchBeaconFailSilent : this.dispatchFetchFailSilent,
                  ),
                  this.dispatchTimerId && (window.clearInterval(this.dispatchTimerId), (this.dispatchTimerId = void 0));
              }),
              (e.prototype.doRequest = function () {
                return this.enabled && this.eventCache.hasEvents();
              }),
              (e.prototype.createRequest = function () {
                return {
                  BatchId: (0, a.v4)(),
                  AppMonitorDetails: this.eventCache.getAppMonitorDetails(),
                  UserDetails: this.eventCache.getUserDetails(),
                  RumEvents: this.eventCache.getEventBatch(),
                };
              }),
              e
            );
          })();
        t.Dispatch = f;
      },
      5612: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.EnhancedAuthentication = void 0);
        var r,
          o = n(21),
          i = n(1148),
          a =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          s = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          u = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          c = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.AnonymousCognitoCredentialsProvider = function () {
                  return s(n, void 0, void 0, function () {
                    var e, t, n, r;
                    return u(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (e = 1), (i.label = 1);
                        case 1:
                          0, (i.label = 2);
                        case 2:
                          return (
                            i.trys.push([2, 5, , 6]),
                            [4, this.cognitoIdentityClient.getId({ IdentityPoolId: this.config.identityPoolId })]
                          );
                        case 3:
                          return (
                            (t = i.sent()), [4, this.cognitoIdentityClient.getCredentialsForIdentity(t.IdentityId)]
                          );
                        case 4:
                          (n = i.sent()), (this.credentials = n);
                          try {
                            localStorage.setItem(o.CRED_KEY, JSON.stringify(n));
                          } catch (e) {}
                          return [2, n];
                        case 5:
                          if (((r = i.sent()), !e)) throw r;
                          return e--, [3, 6];
                        case 6:
                          return [3, 1];
                        case 7:
                          return [2];
                      }
                    });
                  });
                }),
                n
              );
            }
            return a(t, e), t;
          })(i.Authentication);
        t.EnhancedAuthentication = c;
      },
      2272: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FetchHttpHandler = void 0);
        var r = n(4146),
          o = n(590),
          i = n(1603),
          a = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                n = t.fetchFunction,
                r = t.requestTimeout;
              (this.requestTimeout = r), (this.fetchFunction = n);
            }
            return (
              (e.prototype.destroy = function () {}),
              (e.prototype.handle = function (e, t) {
                var n = (void 0 === t ? {} : t).abortSignal,
                  a = this.requestTimeout;
                if (null == n ? void 0 : n.aborted) {
                  var s = new Error("Request aborted");
                  return (s.name = "AbortError"), Promise.reject(s);
                }
                var u = e.path;
                if (e.query) {
                  var c = (0, o.buildQueryString)(e.query);
                  c && (u += "?".concat(c));
                }
                var l = e.port,
                  f = e.method,
                  d = ""
                    .concat(e.protocol, "//")
                    .concat(e.hostname)
                    .concat(l ? ":".concat(l) : "")
                    .concat(u),
                  p = {
                    body: "GET" === f || "HEAD" === f ? void 0 : e.body,
                    headers: new Headers(e.headers),
                    method: f,
                  };
                "undefined" != typeof AbortController && (p.signal = n);
                var h = new Request(d, p),
                  v = [
                    this.fetchFunction.apply(window, [h]).then(function (e) {
                      for (var t = e.headers, n = {}, o = 0, i = t.entries(); o < i.length; o++) {
                        var a = i[o];
                        n[a[0]] = a[1];
                      }
                      return void 0 !== e.body
                        ? { response: new r.HttpResponse({ headers: n, statusCode: e.status, body: e.body }) }
                        : e.blob().then(function (t) {
                            return { response: new r.HttpResponse({ headers: n, statusCode: e.status, body: t }) };
                          });
                    }),
                    (0, i.requestTimeout)(a),
                  ];
                return (
                  n &&
                    v.push(
                      new Promise(function (e, t) {
                        n.onabort = function () {
                          var e = new Error("Request aborted");
                          (e.name = "AbortError"), t(e);
                        };
                      }),
                    ),
                  Promise.race(v)
                );
              }),
              e
            );
          })();
        t.FetchHttpHandler = a;
      },
      2034: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.RetryHttpHandler = void 0);
        var n = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          r = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          o = (function () {
            function e(e, t, n) {
              void 0 === n &&
                (n = function (e) {
                  return 2e3 * e;
                }),
                (this.isStatusCode2xx = function (e) {
                  return e >= 200 && e < 300;
                }),
                (this.handler = e),
                (this.retries = t),
                (this.backoff = n);
            }
            return (
              (e.prototype.handle = function (e) {
                return n(this, void 0, void 0, function () {
                  var t, n, o;
                  return r(this, function (r) {
                    switch (r.label) {
                      case 0:
                        (t = this.retries), (r.label = 1);
                      case 1:
                        0, (r.label = 2);
                      case 2:
                        return r.trys.push([2, 4, , 6]), [4, this.handler.handle(e)];
                      case 3:
                        if (((n = r.sent()), this.isStatusCode2xx(n.response.statusCode))) return [2, n];
                        throw new Error("".concat(n.response.statusCode));
                      case 4:
                        if (((o = r.sent()), !t)) throw o;
                        return t--, [4, this.sleep(this.backoff(this.retries - t))];
                      case 5:
                        return r.sent(), [3, 6];
                      case 6:
                        return [3, 1];
                      case 7:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.sleep = function (e) {
                return n(this, void 0, void 0, function () {
                  return r(this, function (t) {
                    return [
                      2,
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      }),
                    ];
                  });
                });
              }),
              e
            );
          })();
        t.RetryHttpHandler = o;
      },
      9269: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.StsClient = void 0);
        var r = n(4146),
          o = n(828),
          i = function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              i.apply(this, arguments)
            );
          },
          a = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          s = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          u = function (e) {
            var t = this;
            (this.assumeRoleWithWebIdentity = function (e) {
              return a(t, void 0, void 0, function () {
                var t, n, a, u, c, l;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        s.trys.push([0, 3, , 4]),
                        (t = i(i({}, e), { Action: "AssumeRoleWithWebIdentity", Version: "2011-06-15" })),
                        (n = new URLSearchParams(Object.entries(t)).toString()),
                        (a = new r.HttpRequest({
                          method: "POST",
                          headers: { "content-type": "application/x-www-form-urlencoded", host: this.hostname },
                          protocol: "https:",
                          hostname: this.hostname,
                          body: n,
                        })),
                        [4, this.fetchRequestHandler.handle(a)]
                      );
                    case 1:
                      return (u = s.sent().response), [4, (0, o.responseToString)(u)];
                    case 2:
                      return [
                        2,
                        {
                          accessKeyId: (c = s.sent()).split("<AccessKeyId>")[1].split("</AccessKeyId>")[0],
                          secretAccessKey: c.split("<SecretAccessKey>")[1].split("</SecretAccessKey>")[0],
                          sessionToken: c.split("<SessionToken>")[1].split("</SessionToken>")[0],
                          expiration: new Date(c.split("<Expiration>")[1].split("</Expiration>")[0]),
                        },
                      ];
                    case 3:
                      throw ((l = s.sent()), new Error("CWR: Failed to retrieve credentials from STS: ".concat(l)));
                    case 4:
                      return [2];
                  }
                });
              });
            }),
              (this.hostname = "sts.".concat(e.region, ".amazonaws.com")),
              (this.fetchRequestHandler = e.fetchRequestHandler);
          };
        t.StsClient = u;
      },
      1603: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestTimeout = void 0);
        t.requestTimeout = function (e) {
          return (
            void 0 === e && (e = 0),
            new Promise(function (t, n) {
              e &&
                setTimeout(function () {
                  var t = new Error("Request did not complete within ".concat(e, " ms"));
                  (t.name = "TimeoutError"), n(t);
                }, e);
            })
          );
        };
      },
      828: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.responseToString = t.responseToJson = void 0);
        var n = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          r = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          };
        t.responseToJson = function (e) {
          return n(void 0, void 0, void 0, function () {
            var t;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, e.body.getReader().read()];
                case 1:
                  return (t = n.sent().value), [2, JSON.parse(String.fromCharCode.apply(null, t))];
              }
            });
          });
        };
        t.responseToString = function (e) {
          return n(void 0, void 0, void 0, function () {
            var t;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, e.body.getReader().read()];
                case 1:
                  return (t = n.sent().value), [2, String.fromCharCode.apply(null, t)];
              }
            });
          });
        };
      },
      7329: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.XhrError = void 0);
        var n,
          r =
            ((n = function (e, t) {
              return (
                (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                n(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function r() {
                this.constructor = e;
              }
              n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
            }),
          o = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (n.name = "XMLHttpRequest error"), n;
            }
            return r(t, e), t;
          })(Error);
        t.XhrError = o;
      },
      679: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.Topic = void 0),
          (t.Topic = n),
          (function (e) {
            e.EVENT = "event";
          })(n || (t.Topic = n = {}));
        var r = (function () {
          function e() {
            this.subscribers = new Map();
          }
          return (
            (e.prototype.subscribe = function (e, t) {
              var n,
                r = null !== (n = this.subscribers.get(e)) && void 0 !== n ? n : [];
              r.length || this.subscribers.set(e, r), r.push(t);
            }),
            (e.prototype.unsubscribe = function (e, t) {
              var n = this.subscribers.get(e);
              if (n) for (var r = 0; r < n.length; r++) if (n[r] === t) return n.splice(r, 1), !0;
              return !1;
            }),
            (e.prototype.dispatch = function (e, t) {
              var n = this.subscribers.get(e);
              if (n)
                for (var r = 0, o = n; r < o.length; r++) {
                  (0, o[r])(t);
                }
            }),
            e
          );
        })();
        t.default = r;
      },
      657: function (e, t, n) {
        "use strict";
        var r = n(8698);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventCache = void 0);
        var o = n(1998),
          i = n(7429),
          a = n(6464),
          s = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
            var n = u(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                s && (s.get || s.set) ? Object.defineProperty(o, a, s) : (o[a] = e[a]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(679));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        var c = function () {
            return (
              (c =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              c.apply(this, arguments)
            );
          },
          l = (function () {
            function e(e, t, n) {
              void 0 === n && (n = new s.default());
              var r = this;
              (this.eventBus = n),
                (this.events = []),
                (this.recordPageView = function (e) {
                  r.isCurrentUrlAllowed() && r.pageManager.recordPageView(e);
                }),
                (this.recordEvent = function (e, t) {
                  if (r.enabled && r.isCurrentUrlAllowed()) {
                    var n = r.sessionManager.getSession();
                    r.sessionManager.incrementSessionEventCount(), r.canRecord(n) && r.addRecordToCache(e, t);
                  }
                }),
                (this.getSession = function () {
                  if (r.isCurrentUrlAllowed()) return r.sessionManager.getSession();
                }),
                (this.recordSessionInitEvent = function (e, t, n) {
                  r.enabled &&
                    (r.sessionManager.incrementSessionEventCount(), r.canRecord(e) && r.addRecordToCache(t, n));
                }),
                (this.canRecord = function (e) {
                  return e.record && (e.eventCount <= r.config.sessionEventLimit || r.config.sessionEventLimit <= 0);
                }),
                (this.addRecordToCache = function (e, t) {
                  if (r.enabled) {
                    r.events.length === r.config.eventCacheSize && r.events.shift();
                    var n = c(c(c({}, r.sessionManager.getAttributes()), r.pageManager.getAttributes()), {
                        version: "1.0.0",
                        "aws:client": r.installationMethod,
                        "aws:clientVersion": "1.17.1",
                      }),
                      o = { id: (0, i.v4)(), timestamp: new Date(), type: e };
                    r.eventBus.dispatch(s.Topic.EVENT, c(c({}, o), { details: t, metadata: n })),
                      r.events.push(c(c({}, o), { details: JSON.stringify(t), metadata: JSON.stringify(n) }));
                  }
                }),
                (this.appMonitorDetails = e),
                (this.config = t),
                (this.enabled = !0),
                (this.pageManager = new a.PageManager(t, this.recordEvent)),
                (this.sessionManager = new o.SessionManager(e, t, this.recordSessionInitEvent, this.pageManager)),
                (this.installationMethod = t.client);
            }
            return (
              (e.prototype.enable = function () {
                this.enabled = !0;
              }),
              (e.prototype.disable = function () {
                this.enabled = !1;
              }),
              (e.prototype.isSessionSampled = function () {
                return this.sessionManager.isSampled();
              }),
              (e.prototype.hasEvents = function () {
                return 0 !== this.events.length;
              }),
              (e.prototype.getEventBatch = function () {
                var e = [];
                return (
                  0 === this.events.length ||
                    (this.events.length <= this.config.batchLimit
                      ? ((e = this.events), (this.events = []))
                      : (e = this.events.splice(0, this.config.batchLimit))),
                  e
                );
              }),
              (e.prototype.getAppMonitorDetails = function () {
                return this.appMonitorDetails;
              }),
              (e.prototype.getUserDetails = function () {
                return {
                  userId: this.sessionManager.getUserId(),
                  sessionId: this.sessionManager.getSession().sessionId,
                };
              }),
              (e.prototype.addSessionAttributes = function (e) {
                this.sessionManager.addSessionAttributes(e);
              }),
              (e.prototype.isCurrentUrlAllowed = function () {
                var e = document.location.toString(),
                  t = this.config.pagesToExclude.some(function (t) {
                    return t.test(e);
                  });
                return (
                  this.config.pagesToInclude.some(function (t) {
                    return t.test(e);
                  }) && !t
                );
              }),
              e
            );
          })();
        t.EventCache = l;
      },
      7483: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultCookieAttributes =
            t.defaultConfig =
            t.TelemetryEnum =
            t.PageIdFormatEnum =
            t.Orchestration =
              void 0);
        var o,
          i,
          a = n(1042),
          s = n(5612),
          u = n(935),
          c = n(8706),
          l = n(1356),
          f = n(657),
          d = n(7689),
          p = n(9595),
          h = n(7082),
          v = n(4815),
          y = n(7153),
          g = n(7053),
          b = n(4868),
          m = n(21),
          w = r(n(679)),
          E = function () {
            return (
              (E =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              E.apply(this, arguments)
            );
          },
          _ = function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            }
            return n;
          },
          T = function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, o = 0, i = t.length; o < i; o++)
                (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
            return e.concat(r || Array.prototype.slice.call(t));
          },
          P = "us-west-2",
          S = "https://dataplane.rum.".concat(P, ".amazonaws.com");
        (t.TelemetryEnum = o),
          (function (e) {
            (e.Errors = "errors"), (e.Performance = "performance"), (e.Interaction = "interaction"), (e.Http = "http");
          })(o || (t.TelemetryEnum = o = {})),
          (t.PageIdFormatEnum = i),
          (function (e) {
            (e.Path = "PATH"), (e.Hash = "HASH"), (e.PathAndHash = "PATH_AND_HASH");
          })(i || (t.PageIdFormatEnum = i = {}));
        var O = function () {
          return { unique: !1, domain: window.location.hostname, path: "/", sameSite: "Strict", secure: !0 };
        };
        t.defaultCookieAttributes = O;
        var A = function (e) {
          return {
            allowCookies: !1,
            batchLimit: 100,
            client: m.INSTALL_MODULE,
            cookieAttributes: e,
            disableAutoPageView: !1,
            dispatchInterval: 5e3,
            enableRumClient: !0,
            enableXRay: !1,
            endpoint: S,
            endpointUrl: new URL(S),
            eventCacheSize: 200,
            eventPluginsToLoad: [],
            pageIdFormat: i.Path,
            pagesToExclude: [],
            pagesToInclude: [/.*/],
            signing: !0,
            recordResourceUrl: !0,
            retries: 2,
            routeChangeComplete: 100,
            routeChangeTimeout: 1e4,
            sessionAttributes: {},
            sessionEventLimit: 200,
            sessionLengthSeconds: 1800,
            sessionSampleRate: 1,
            telemetries: [],
            useBeacon: !0,
            userIdRetentionDays: 30,
          };
        };
        t.defaultConfig = A;
        var I = (function () {
          function e(e, t, n, r) {
            void 0 === r && (r = {});
            var o = r.cookieAttributes,
              i = _(r, ["cookieAttributes"]);
            (this.eventBus = new w.default()), void 0 === n && (n = "us-west-2");
            var a = E(E({}, O()), o);
            (this.config = E(E({ fetchFunction: fetch }, A(a)), i)),
              (this.config.endpoint = this.getDataPlaneEndpoint(n, i)),
              (this.config.endpointUrl = new URL(this.config.endpoint)),
              (this.eventCache = this.initEventCache(e, t)),
              (this.dispatchManager = this.initDispatch(n)),
              (this.pluginManager = this.initPluginManager(e, t)),
              this.config.enableRumClient ? this.enable() : this.disable();
          }
          return (
            (e.prototype.setAwsCredentials = function (e) {
              this.dispatchManager.setAwsCredentials(e);
            }),
            (e.prototype.addSessionAttributes = function (e) {
              this.eventCache.addSessionAttributes(e);
            }),
            (e.prototype.addPlugin = function (e) {
              this.pluginManager.addPlugin(e);
            }),
            (e.prototype.dispatch = function () {
              this.dispatchManager.dispatchFetch();
            }),
            (e.prototype.dispatchBeacon = function () {
              this.dispatchManager.dispatchBeacon();
            }),
            (e.prototype.enable = function () {
              this.eventCache.enable(), this.pluginManager.enable(), this.dispatchManager.enable();
            }),
            (e.prototype.disable = function () {
              this.dispatchManager.disable(), this.pluginManager.disable(), this.eventCache.disable();
            }),
            (e.prototype.allowCookies = function (e) {
              this.config.allowCookies = e;
            }),
            (e.prototype.recordPageView = function (e) {
              this.eventCache.recordPageView(e);
            }),
            (e.prototype.recordError = function (e) {
              this.pluginManager.record(l.JS_ERROR_EVENT_PLUGIN_ID, e);
            }),
            (e.prototype.registerDomEvents = function (e) {
              this.pluginManager.updatePlugin(c.DOM_EVENT_PLUGIN_ID, e);
            }),
            (e.prototype.recordEvent = function (e, t) {
              this.eventCache.recordEvent(e, t);
            }),
            (e.prototype.initEventCache = function (e, t) {
              return new f.EventCache({ id: e, version: t }, this.config, this.eventBus);
            }),
            (e.prototype.initDispatch = function (e) {
              var t = new d.Dispatch(e, this.config.endpointUrl, this.eventCache, this.config);
              return this.eventCache.isSessionSampled()
                ? (this.config.identityPoolId && this.config.guestRoleArn
                    ? t.setAwsCredentials(new a.BasicAuthentication(this.config).ChainAnonymousCredentialsProvider)
                    : this.config.identityPoolId &&
                      t.setAwsCredentials(new s.EnhancedAuthentication(this.config).ChainAnonymousCredentialsProvider),
                  t)
                : t;
            }),
            (e.prototype.initPluginManager = function (e, t) {
              var n = this.constructBuiltinPlugins(),
                r = T(T([], n, !0), this.config.eventPluginsToLoad, !0),
                o = {
                  applicationId: e,
                  applicationVersion: t,
                  config: this.config,
                  record: this.eventCache.recordEvent,
                  recordPageView: this.eventCache.recordPageView,
                  getSession: this.eventCache.getSession,
                  eventBus: this.eventBus,
                },
                i = new u.PluginManager(o);
              return (
                this.config.disableAutoPageView || i.addPlugin(new b.PageViewPlugin()),
                r.forEach(function (e) {
                  i.addPlugin(e);
                }),
                i
              );
            }),
            (e.prototype.constructBuiltinPlugins = function () {
              var e = [],
                t = this.telemetryFunctor();
              return (
                this.config.telemetries.forEach(function (n) {
                  "string" == typeof n && t[n.toLowerCase()]
                    ? (e = T(T([], e, !0), t[n.toLowerCase()]({}), !0))
                    : Array.isArray(n) &&
                      t[n[0].toLowerCase()] &&
                      (e = T(T([], e, !0), t[n[0].toLowerCase()](n[1]), !0));
                }),
                e
              );
            }),
            (e.prototype.getDataPlaneEndpoint = function (e, t) {
              return t.endpoint ? t.endpoint : S.replace(P, e);
            }),
            (e.prototype.telemetryFunctor = function () {
              var e;
              return (
                ((e = {})[o.Errors] = function (e) {
                  return [new l.JsErrorPlugin(e)];
                }),
                (e[o.Performance] = function (e) {
                  return [new p.NavigationPlugin(e), new h.ResourcePlugin(e), new v.WebVitalsPlugin()];
                }),
                (e[o.Interaction] = function (e) {
                  return [new c.DomEventPlugin(e)];
                }),
                (e[o.Http] = function (e) {
                  return [new y.XhrPlugin(e), new g.FetchPlugin(e)];
                }),
                e
              );
            }),
            e
          );
        })();
        t.Orchestration = I;
      },
      4159: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalPlugin = void 0);
        var r = n(2392),
          o = (function () {
            function e(t) {
              (this.enabled = !0), (this.pluginId = e.generatePluginId(t));
            }
            return (
              (e.generatePluginId = function (t) {
                return "".concat(e.idPrefix, ".").concat(t);
              }),
              (e.prototype.load = function (e) {
                var t;
                (this.context = e), null === (t = this.onload) || void 0 === t || t.call(this);
              }),
              (e.prototype.getPluginId = function () {
                return this.pluginId;
              }),
              (e.idPrefix = r.RUM_AWS_PREFIX),
              e
            );
          })();
        t.InternalPlugin = o;
      },
      5418: function (e, t, n) {
        "use strict";
        var r = n(8698);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MonkeyPatched = void 0);
        var o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
            var n = a(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e)
              if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                var u = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                u && (u.get || u.set) ? Object.defineProperty(o, s, u) : (o[s] = e[s]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(6372)),
          i = n(4159);
        function a(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (a = function (e) {
            return e ? n : t;
          })(e);
        }
        var s,
          u =
            ((s = function (e, t) {
              return (
                (s =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                s(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              s(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          c = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.enable = t.patch.bind(t, !0)), (t.disable = t.patch.bind(t, !1)), (t.enabled = !1), t;
            }
            return (
              u(t, e),
              (t.prototype.patchAll = function () {
                for (var e = o.wrap.bind(o), t = 0, n = this.patches; t < n.length; t++) {
                  var r = n[t];
                  e(r.nodule, r.name, r.wrapper());
                }
              }),
              (t.prototype.unpatchAll = function () {
                for (var e = o.unwrap.bind(o), t = 0, n = this.patches; t < n.length; t++) {
                  var r = n[t];
                  e(r.nodule, r.name);
                }
              }),
              (t.prototype.patch = function (e) {
                void 0 === e && (e = !0),
                  this.enabled !== e && ((this.enabled = e), e ? this.patchAll() : this.unpatchAll());
              }),
              t
            );
          })(i.InternalPlugin);
        t.MonkeyPatched = c;
      },
      935: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.PluginManager = void 0);
        var r = n(4159),
          o = (function () {
            function e(e) {
              (this.context = e), (this.plugins = new Map());
            }
            return (
              (e.prototype.addPlugin = function (e) {
                var t = e.getPluginId();
                if (this.hasPlugin(t)) throw new Error('Plugin "'.concat(t, '" already defined in the PluginManager'));
                this.plugins.set(t, e), e.load(this.context);
              }),
              (e.prototype.updatePlugin = function (e, t) {
                var n,
                  r = this.getPlugin(e);
                null === (n = null == r ? void 0 : r.update) || void 0 === n || n.call(r, t);
              }),
              (e.prototype.enable = function () {
                this.plugins.forEach(function (e) {
                  return e.enable();
                });
              }),
              (e.prototype.disable = function () {
                this.plugins.forEach(function (e) {
                  return e.disable();
                });
              }),
              (e.prototype.hasPlugin = function (e) {
                return Boolean(this.getPlugin(e));
              }),
              (e.prototype.record = function (e, t) {
                var n = this.getPlugin(e);
                if (!((null == n ? void 0 : n.record) instanceof Function))
                  throw new Error("AWS RUM Client record: Invalid plugin ID");
                n.record(t);
              }),
              (e.prototype.getPlugin = function (e) {
                var t;
                return null !== (t = this.plugins.get(e)) && void 0 !== t
                  ? t
                  : this.plugins.get(r.InternalPlugin.generatePluginId(e));
              }),
              e
            );
          })();
        t.PluginManager = o;
      },
      8706: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DomEventPlugin = t.DOM_EVENT_PLUGIN_ID = void 0);
        var r,
          o = n(4159),
          i = n(2392),
          a =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          s = function () {
            return (
              (s =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              s.apply(this, arguments)
            );
          },
          u = "dom-event";
        t.DOM_EVENT_PLUGIN_ID = u;
        var c = {
            interactionId: function () {
              return "";
            },
            enableMutationObserver: !1,
            events: [],
          },
          l = (function (e) {
            function t(t) {
              var n = e.call(this, u) || this;
              return (n.enabled = !1), (n.eventListenerMap = new Map()), (n.config = s(s({}, c), t)), n;
            }
            return (
              a(t, e),
              (t.getElementInfo = function (e) {
                var t = { name: "UNKNOWN" };
                return (
                  e.target instanceof Node && (t.name = e.target.nodeName),
                  e.target instanceof Element && e.target.id && (t.id = e.target.id),
                  t
                );
              }),
              (t.prototype.enable = function () {
                var e = this;
                "complete" === document.readyState
                  ? this.enabled ||
                    (this.addListeners(),
                    this.config.enableMutationObserver && this.observeDOMMutation(),
                    (this.enabled = !0))
                  : window.addEventListener("load", function () {
                      return e.enable();
                    });
              }),
              (t.prototype.disable = function () {
                this.enabled &&
                  (this.removeListeners(), this.observer && this.observer.disconnect(), (this.enabled = !1));
              }),
              (t.prototype.update = function (e) {
                var t = this;
                e.forEach(function (e) {
                  t.addEventHandler(e), t.config.events.push(e);
                });
              }),
              (t.prototype.onload = function () {
                this.enable();
              }),
              (t.prototype.removeListeners = function () {
                var e = this;
                this.config.events.forEach(function (t) {
                  return e.removeEventHandler(t);
                });
              }),
              (t.prototype.addListeners = function () {
                var e = this;
                this.config.events.forEach(function (t) {
                  return e.addEventHandler(t);
                });
              }),
              (t.prototype.getEventListener = function (e) {
                var n = this;
                return function (r) {
                  var o,
                    a = t.getElementInfo(r),
                    u = n.config.interactionId(r),
                    c = s(
                      s(
                        s({ version: "1.1.0", event: r.type, element: a.name }, a.id ? { elementId: a.id } : {}),
                        u ? { interactionId: u } : {},
                      ),
                      e ? { cssLocator: e } : {},
                    );
                  (null === (o = n.context) || void 0 === o ? void 0 : o.record) &&
                    n.context.record(i.DOM_EVENT_TYPE, c);
                };
              }),
              (t.prototype.addEventHandler = function (e) {
                var t = e.event,
                  n = this.getEventListener(e.cssLocator),
                  r = [],
                  o = this.eventListenerMap.has(e) ? this.eventListenerMap.get(e) : [];
                if (e.cssLocator)
                  document.querySelectorAll(e.cssLocator).forEach(function (e) {
                    r.push(e);
                  });
                else if (e.elementId) {
                  var i = document.getElementById(e.elementId);
                  i && r.push(i);
                } else e.element && r.push(e.element);
                r.forEach(function (e) {
                  e.addEventListener(t, n), o.push({ element: e, eventListener: n });
                }),
                  this.eventListenerMap.set(e, o);
              }),
              (t.prototype.removeEventHandler = function (e) {
                var t = this.eventListenerMap.get(e);
                t &&
                  (t.forEach(function (t) {
                    var n = t.element,
                      r = t.eventListener;
                    n.removeEventListener(e.event, r);
                  }),
                  this.eventListenerMap.delete(e));
              }),
              (t.prototype.observeDOMMutation = function () {
                var e = this;
                (this.observer = new MutationObserver(function () {
                  e.removeListeners(), e.addListeners();
                })),
                  this.observer.observe(document, { childList: !0, subtree: !0 });
              }),
              t
            );
          })(o.InternalPlugin);
        t.DomEventPlugin = l;
      },
      7053: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FetchPlugin = t.FETCH_PLUGIN_ID = void 0);
        var r,
          o = n(5418),
          i = n(2931),
          a = n(2392),
          s = n(3135),
          u =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          c = function () {
            return (
              (c =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              c.apply(this, arguments)
            );
          },
          l = "fetch";
        t.FETCH_PLUGIN_ID = l;
        var f = (function (e) {
          function t(t) {
            var n = e.call(this, l) || this;
            return (
              (n.isTracingEnabled = function () {
                return n.context.config.enableXRay;
              }),
              (n.isSessionRecorded = function () {
                var e;
                return (null === (e = n.context.getSession()) || void 0 === e ? void 0 : e.record) || !1;
              }),
              (n.beginTrace = function (e, t, r) {
                var o = (0, i.epochTime)(),
                  a = (0, i.createXRayTraceEventHttp)(e, t, !0),
                  s = (0, i.createXRayTraceEvent)(n.config.logicalServiceName, o),
                  u = (0, i.createXRaySubsegment)((0, i.requestInfoToHostname)(e), o, a);
                return s.subsegments.push(u), n.isTraceIdHeaderEnabled(e) && n.addXRayTraceIdHeader(e, t, r, s), s;
              }),
              (n.addXRayTraceIdHeader = function (e, t, n, r) {
                if (e.headers) return (0, i.addAmznTraceIdHeaderToHeaders)(e.headers, r.trace_id, r.subsegments[0].id);
                t || ((t = {}), [].push.call(n, t)),
                  (0, i.addAmznTraceIdHeaderToInit)(t, r.trace_id, r.subsegments[0].id);
              }),
              (n.endTrace = function (e, t, r) {
                if (e) {
                  var o = (0, i.epochTime)();
                  if (((e.subsegments[0].end_time = o), (e.end_time = o), t)) {
                    (e.subsegments[0].http.response = { status: t.status }),
                      (0, i.is429)(t.status)
                        ? ((e.subsegments[0].throttle = !0), (e.throttle = !0))
                        : (0, i.is4xx)(t.status)
                          ? ((e.subsegments[0].error = !0), (e.error = !0))
                          : (0, i.is5xx)(t.status) && ((e.subsegments[0].fault = !0), (e.fault = !0));
                    var u = t.headers.get("Content-Length"),
                      c = u ? parseInt(u, 10) : NaN;
                    isNaN(c) || (e.subsegments[0].http.response.content_length = c);
                  }
                  r &&
                    ((e.fault = !0),
                    (e.subsegments[0].fault = !0),
                    r instanceof Object
                      ? n.appendErrorCauseFromObject(e.subsegments[0], r)
                      : (0, s.isErrorPrimitive)(r) && n.appendErrorCauseFromPrimitive(e.subsegments[0], r.toString())),
                    n.context.record(a.XRAY_TRACE_EVENT_TYPE, e);
                }
              }),
              (n.createHttpEvent = function (e, t) {
                var n = e;
                return {
                  version: "1.0.0",
                  request: {
                    url: (0, i.resourceToUrlString)(e),
                    method: (null == t ? void 0 : t.method) ? t.method : n.method ? n.method : "GET",
                  },
                };
              }),
              (n.recordHttpEventWithResponse = function (e, t) {
                (!n.config.recordAllRequests && t.ok) ||
                  ((e.response = { status: t.status, statusText: t.statusText }),
                  n.context.record(a.HTTP_EVENT_TYPE, e));
              }),
              (n.recordHttpEventWithError = function (e, t) {
                (e.error = (0, s.errorEventToJsErrorEvent)({ type: "error", error: t }, n.config.stackTraceLength)),
                  n.context.record(a.HTTP_EVENT_TYPE, e);
              }),
              (n.fetch = function (e, t, r, o, a) {
                var s,
                  u = n.createHttpEvent(o, a);
                if (!(0, i.isUrlAllowed)((0, i.resourceToUrlString)(o), n.config)) return e.apply(t, r);
                var c = (0, i.getTraceHeader)(o.headers);
                return (
                  c.traceId && c.segmentId
                    ? ((u.trace_id = c.traceId), (u.segment_id = c.segmentId))
                    : n.isTracingEnabled() &&
                      n.isSessionRecorded() &&
                      ((s = n.beginTrace(o, a, r)), (u.trace_id = s.trace_id), (u.segment_id = s.subsegments[0].id)),
                  e
                    .apply(t, r)
                    .then(function (e) {
                      return n.endTrace(s, e, void 0), n.recordHttpEventWithResponse(u, e), e;
                    })
                    .catch(function (e) {
                      throw (n.endTrace(s, void 0, e), n.recordHttpEventWithError(u, e), e);
                    })
                );
              }),
              (n.fetchWrapper = function () {
                var e = n;
                return function (t) {
                  return function (n, r) {
                    return e.fetch(t, this, arguments, n, r);
                  };
                };
              }),
              (n.config = c(c({}, i.defaultConfig), t)),
              n
            );
          }
          return (
            u(t, e),
            Object.defineProperty(t.prototype, "patches", {
              get: function () {
                return [{ nodule: window, name: "fetch", wrapper: this.fetchWrapper }];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.onload = function () {
              this.enable();
            }),
            (t.prototype.isTraceIdHeaderEnabled = function (e) {
              var t = (0, i.resourceToUrlString)(e);
              return (0, i.isTraceIdHeaderEnabled)(t, this.config.addXRayTraceIdHeader);
            }),
            (t.prototype.appendErrorCauseFromPrimitive = function (e, t) {
              e.cause = { exceptions: [{ type: t }] };
            }),
            (t.prototype.appendErrorCauseFromObject = function (e, t) {
              e.cause = { exceptions: [{ type: t.name, message: t.message }] };
            }),
            t
          );
        })(o.MonkeyPatched);
        t.FetchPlugin = f;
      },
      1356: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.JsErrorPlugin = t.JS_ERROR_EVENT_PLUGIN_ID = void 0);
        var r,
          o = n(4159),
          i = n(2392),
          a = n(3135),
          s =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          u = function () {
            return (
              (u =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              u.apply(this, arguments)
            );
          },
          c = "js-error";
        t.JS_ERROR_EVENT_PLUGIN_ID = c;
        var l = {
            stackTraceLength: 1e3,
            ignore: function () {
              return !1;
            },
          },
          f = (function (e) {
            function t(t) {
              var n = e.call(this, c) || this;
              return (
                (n.eventHandler = function (e) {
                  n.config.ignore(e) || n.recordJsErrorEvent(e);
                }),
                (n.promiseRejectEventHandler = function (e) {
                  n.config.ignore(e) || n.recordJsErrorEvent({ type: e.type, error: e.reason });
                }),
                (n.config = u(u({}, l), t)),
                n
              );
            }
            return (
              s(t, e),
              (t.prototype.enable = function () {
                this.enabled || (this.addEventHandler(), (this.enabled = !0));
              }),
              (t.prototype.disable = function () {
                this.enabled && (this.removeEventHandler(), (this.enabled = !1));
              }),
              (t.prototype.record = function (e) {
                e instanceof ErrorEvent
                  ? this.recordJsErrorEvent(e)
                  : this.recordJsErrorEvent({ type: "error", error: e });
              }),
              (t.prototype.onload = function () {
                this.addEventHandler();
              }),
              (t.prototype.recordJsErrorEvent = function (e) {
                var t;
                null === (t = this.context) ||
                  void 0 === t ||
                  t.record(i.JS_ERROR_EVENT_TYPE, (0, a.errorEventToJsErrorEvent)(e, this.config.stackTraceLength));
              }),
              (t.prototype.addEventHandler = function () {
                window.addEventListener("error", this.eventHandler),
                  window.addEventListener("unhandledrejection", this.promiseRejectEventHandler);
              }),
              (t.prototype.removeEventHandler = function () {
                window.removeEventListener("error", this.eventHandler),
                  window.removeEventListener("unhandledrejection", this.promiseRejectEventHandler);
              }),
              t
            );
          })(o.InternalPlugin);
        t.JsErrorPlugin = f;
      },
      9595: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NavigationPlugin = t.NAVIGATION_EVENT_PLUGIN_ID = void 0);
        var r,
          o = n(4159),
          i = n(2392),
          a = n(1772),
          s =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          u = function () {
            return (
              (u =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              u.apply(this, arguments)
            );
          },
          c = "navigation";
        t.NAVIGATION_EVENT_PLUGIN_ID = c;
        var l = "navigation",
          f = "load",
          d = (function (e) {
            function t(t) {
              var n = e.call(this, c) || this;
              return (
                (n.eventListener = function () {
                  0 === performance.getEntriesByType(l).length
                    ? n.performanceNavigationEventHandlerTimingLevel1()
                    : new PerformanceObserver(function (e) {
                        e.getEntries()
                          .filter(function (e) {
                            return e.entryType === l;
                          })
                          .filter(function (e) {
                            return !n.config.ignore(e);
                          })
                          .forEach(function (e) {
                            n.performanceNavigationEventHandlerTimingLevel2(e);
                          });
                      }).observe({ entryTypes: [l] });
                }),
                (n.performanceNavigationEventHandlerTimingLevel1 = function () {
                  setTimeout(function () {
                    var e,
                      t = performance.timing,
                      r = t.navigationStart,
                      o = {
                        version: "1.0.0",
                        initiatorType: "navigation",
                        startTime: 0,
                        unloadEventStart: t.unloadEventStart > 0 ? t.unloadEventStart - r : 0,
                        promptForUnload: t.unloadEventEnd - t.unloadEventStart,
                        redirectStart: t.redirectStart > 0 ? t.redirectStart - r : 0,
                        redirectTime: t.redirectEnd - t.redirectStart,
                        fetchStart: t.fetchStart > 0 ? t.fetchStart - r : 0,
                        domainLookupStart: t.domainLookupStart > 0 ? t.domainLookupStart - r : 0,
                        dns: t.domainLookupEnd - t.domainLookupStart,
                        connectStart: t.connectStart > 0 ? t.connectStart - r : 0,
                        connect: t.connectEnd - t.connectStart,
                        secureConnectionStart: t.secureConnectionStart > 0 ? t.secureConnectionStart - r : 0,
                        tlsTime: t.secureConnectionStart > 0 ? t.connectEnd - t.secureConnectionStart : 0,
                        requestStart: t.requestStart > 0 ? t.requestStart - r : 0,
                        timeToFirstByte: t.responseStart - t.requestStart,
                        responseStart: t.responseStart > 0 ? t.responseStart - r : 0,
                        responseTime: t.responseStart > 0 ? t.responseEnd - t.responseStart : 0,
                        domInteractive: t.domInteractive > 0 ? t.domInteractive - r : 0,
                        domContentLoadedEventStart:
                          t.domContentLoadedEventStart > 0 ? t.domContentLoadedEventStart - r : 0,
                        domContentLoaded: t.domContentLoadedEventEnd - t.domContentLoadedEventStart,
                        domComplete: t.domComplete > 0 ? t.domComplete - r : 0,
                        domProcessingTime: t.loadEventStart - t.responseEnd,
                        loadEventStart: t.loadEventStart > 0 ? t.loadEventStart - r : 0,
                        loadEventTime: t.loadEventEnd - t.loadEventStart,
                        duration: t.loadEventEnd - t.navigationStart,
                        navigationTimingLevel: 1,
                      };
                    (null === (e = n.context) || void 0 === e ? void 0 : e.record) &&
                      n.context.record(i.PERFORMANCE_NAVIGATION_EVENT_TYPE, o);
                  }, 0);
                }),
                (n.performanceNavigationEventHandlerTimingLevel2 = function (e) {
                  var t,
                    r = {
                      version: "1.0.0",
                      initiatorType: e.initiatorType,
                      navigationType: e.type,
                      startTime: e.startTime,
                      unloadEventStart: e.unloadEventStart,
                      promptForUnload: e.unloadEventEnd - e.unloadEventStart,
                      redirectCount: e.redirectCount,
                      redirectStart: e.redirectStart,
                      redirectTime: e.redirectEnd - e.redirectStart,
                      workerStart: e.workerStart,
                      workerTime: e.workerStart > 0 ? e.fetchStart - e.workerStart : 0,
                      fetchStart: e.fetchStart,
                      domainLookupStart: e.domainLookupStart,
                      dns: e.domainLookupEnd - e.domainLookupStart,
                      nextHopProtocol: e.nextHopProtocol,
                      connectStart: e.connectStart,
                      connect: e.connectEnd - e.connectStart,
                      secureConnectionStart: e.secureConnectionStart,
                      tlsTime: e.secureConnectionStart > 0 ? e.connectEnd - e.secureConnectionStart : 0,
                      requestStart: e.requestStart,
                      timeToFirstByte: e.responseStart - e.requestStart,
                      responseStart: e.responseStart,
                      responseTime: e.responseStart > 0 ? e.responseEnd - e.responseStart : 0,
                      domInteractive: e.domInteractive,
                      domContentLoadedEventStart: e.domContentLoadedEventStart,
                      domContentLoaded: e.domContentLoadedEventEnd - e.domContentLoadedEventStart,
                      domComplete: e.domComplete,
                      domProcessingTime: e.loadEventStart - e.responseEnd,
                      loadEventStart: e.loadEventStart,
                      loadEventTime: e.loadEventEnd - e.loadEventStart,
                      duration: e.duration,
                      headerSize: e.transferSize > 0 ? e.transferSize - e.encodedBodySize : 0,
                      transferSize: e.transferSize,
                      compressionRatio: e.encodedBodySize > 0 ? e.decodedBodySize / e.encodedBodySize : 0,
                      navigationTimingLevel: 2,
                    };
                  (null === (t = n.context) || void 0 === t ? void 0 : t.record) &&
                    n.context.record(i.PERFORMANCE_NAVIGATION_EVENT_TYPE, r);
                }),
                (n.config = u(u({}, a.defaultPerformancePluginConfig), t)),
                n
              );
            }
            return (
              s(t, e),
              (t.prototype.enable = function () {
                this.enabled || ((this.enabled = !0), window.addEventListener(f, this.eventListener));
              }),
              (t.prototype.disable = function () {
                this.enabled &&
                  ((this.enabled = !1), this.eventListener && window.removeEventListener(f, this.eventListener));
              }),
              (t.prototype.hasTheWindowLoadEventFired = function () {
                if (window.performance && window.performance.getEntriesByType(l).length) {
                  var e = window.performance.getEntriesByType(l)[0];
                  return Boolean(e.loadEventEnd);
                }
                return !1;
              }),
              (t.prototype.onload = function () {
                var e = this;
                this.enabled &&
                  (this.hasTheWindowLoadEventFired()
                    ? window.performance
                        .getEntriesByType(l)
                        .filter(function (t) {
                          return !e.config.ignore(t);
                        })
                        .forEach(function (t) {
                          return e.performanceNavigationEventHandlerTimingLevel2(t);
                        })
                    : window.addEventListener(f, this.eventListener));
              }),
              t
            );
          })(o.InternalPlugin);
        t.NavigationPlugin = d;
      },
      4868: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.PageViewPlugin = t.PAGE_EVENT_PLUGIN_ID = void 0);
        var r,
          o = n(7483),
          i = n(5418),
          a =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          s = "page-view";
        t.PAGE_EVENT_PLUGIN_ID = s;
        var u = (function (e) {
          function t() {
            var t = e.call(this, s) || this;
            return (
              (t.pushState = function () {
                var e = t;
                return function (t) {
                  return function (n, r, o) {
                    var i = t.apply(this, arguments);
                    return e.recordPageView(), i;
                  };
                };
              }),
              (t.replaceState = function () {
                var e = t;
                return function (t) {
                  return function (n, r, o) {
                    var i = t.apply(this, arguments);
                    return e.recordPageView(), i;
                  };
                };
              }),
              (t.popstateListener = function (e) {
                t.recordPageView();
              }),
              (t.recordPageView = function () {
                t.context.recordPageView(t.createIdForCurrentPage());
              }),
              t.enable(),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.onload = function () {
              this.addListener(), this.recordPageView();
            }),
            Object.defineProperty(t.prototype, "patches", {
              get: function () {
                return [
                  { nodule: History.prototype, name: "pushState", wrapper: this.pushState },
                  { nodule: History.prototype, name: "replaceState", wrapper: this.replaceState },
                ];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.addListener = function () {
              window.addEventListener("popstate", this.popstateListener);
            }),
            (t.prototype.createIdForCurrentPage = function () {
              var e = window.location.pathname,
                t = window.location.hash;
              switch (this.context.config.pageIdFormat) {
                case o.PageIdFormatEnum.PathAndHash:
                  return e && t ? e + t : e || t || "";
                case o.PageIdFormatEnum.Hash:
                  return t || "";
                case o.PageIdFormatEnum.Path:
                default:
                  return e || "";
              }
            }),
            t
          );
        })(i.MonkeyPatched);
        t.PageViewPlugin = u;
      },
      7082: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ResourcePlugin = t.RESOURCE_EVENT_PLUGIN_ID = void 0);
        var r,
          o = n(4159),
          i = n(6702),
          a = n(2392),
          s = n(1772),
          u =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          c = function () {
            return (
              (c =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              c.apply(this, arguments)
            );
          },
          l = "resource";
        t.RESOURCE_EVENT_PLUGIN_ID = l;
        var f = "resource",
          d = (function (e) {
            function t(t) {
              var n = e.call(this, l) || this;
              return (
                (n.performanceEntryHandler = function (e) {
                  n.recordPerformanceEntries(e.getEntries());
                }),
                (n.recordPerformanceEntries = function (e) {
                  var t = [],
                    r = [];
                  for (
                    e
                      .filter(function (e) {
                        return e.entryType === f;
                      })
                      .filter(function (e) {
                        return !n.config.ignore(e);
                      })
                      .forEach(function (e) {
                        var o = e,
                          a = o.name,
                          s = o.initiatorType,
                          u = (0, i.getResourceFileType)(a, s);
                        n.config.recordAllTypes.includes(u) ? t.push(e) : n.config.sampleTypes.includes(u) && r.push(e);
                      }),
                      t.forEach(function (e) {
                        return n.recordResourceEvent(e);
                      }),
                      (0, i.shuffle)(r);
                    r.length > 0 && n.eventCount < n.config.eventLimit;

                  )
                    n.recordResourceEvent(r.pop()), n.eventCount++;
                }),
                (n.recordResourceEvent = function (e) {
                  var t,
                    r = e.name,
                    o = e.startTime,
                    s = e.initiatorType,
                    u = e.duration,
                    c = e.transferSize,
                    l = new URL(r);
                  if (
                    (l.host !== n.context.config.endpointUrl.host ||
                      !/.*\/application\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/events/.test(
                        l.pathname,
                      )) &&
                    (null === (t = n.context) || void 0 === t ? void 0 : t.record)
                  ) {
                    var f = {
                      version: "1.0.0",
                      initiatorType: s,
                      startTime: o,
                      duration: u,
                      fileType: (0, i.getResourceFileType)(r, s),
                      transferSize: c,
                    };
                    n.context.config.recordResourceUrl && (f.targetUrl = r),
                      n.context.record(a.PERFORMANCE_RESOURCE_EVENT_TYPE, f);
                  }
                }),
                (n.config = c(c({}, s.defaultPerformancePluginConfig), t)),
                (n.eventCount = 0),
                (n.resourceObserver = new PerformanceObserver(n.performanceEntryHandler)),
                n
              );
            }
            return (
              u(t, e),
              (t.prototype.enable = function () {
                this.enabled || ((this.enabled = !0), this.resourceObserver.observe({ type: f, buffered: !0 }));
              }),
              (t.prototype.disable = function () {
                this.enabled && ((this.enabled = !1), this.resourceObserver.disconnect());
              }),
              (t.prototype.onload = function () {
                this.resourceObserver.observe({ type: f, buffered: !0 });
              }),
              t
            );
          })(o.InternalPlugin);
        t.ResourcePlugin = d;
      },
      4815: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WebVitalsPlugin = t.WEB_VITAL_EVENT_PLUGIN_ID = void 0);
        var r,
          o = n(4159),
          i = n(1104),
          a = n(2392),
          s = n(679),
          u = n(6702),
          c =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          l = "web-vitals";
        t.WEB_VITAL_EVENT_PLUGIN_ID = l;
        var f = (function (e) {
          function t() {
            var t = e.call(this, l) || this;
            return (
              (t.resourceEventIds = new Map()),
              (t.cacheLCPCandidates = (0, u.isLCPSupported)()),
              (t.handleEvent = function (e) {
                switch (e.type) {
                  case a.PERFORMANCE_RESOURCE_EVENT_TYPE:
                    var n = e.details;
                    t.cacheLCPCandidates &&
                      n.fileType === u.ResourceType.IMAGE &&
                      t.resourceEventIds.set((0, u.performanceKey)(e.details), e.id);
                    break;
                  case a.PERFORMANCE_NAVIGATION_EVENT_TYPE:
                    t.navigationEventId = e.id;
                }
              }),
              t
            );
          }
          return (
            c(t, e),
            (t.prototype.enable = function () {}),
            (t.prototype.disable = function () {}),
            (t.prototype.configure = function (e) {}),
            (t.prototype.onload = function () {
              var e = this;
              this.context.eventBus.subscribe(s.Topic.EVENT, this.handleEvent),
                (0, i.onLCP)(function (t) {
                  return e.handleLCP(t);
                }),
                (0, i.onFID)(function (t) {
                  return e.handleFID(t);
                }),
                (0, i.onCLS)(function (t) {
                  return e.handleCLS(t);
                });
            }),
            (t.prototype.handleLCP = function (e) {
              var t,
                n,
                r = e.attribution,
                o = {
                  element: r.element,
                  url: r.url,
                  timeToFirstByte: r.timeToFirstByte,
                  resourceLoadDelay: r.resourceLoadDelay,
                  resourceLoadTime: r.resourceLoadTime,
                  elementRenderDelay: r.elementRenderDelay,
                };
              if (r.lcpResourceEntry) {
                var i = (0, u.performanceKey)(r.lcpResourceEntry);
                o.lcpResourceEntry = this.resourceEventIds.get(i);
              }
              this.navigationEventId && (o.navigationEntry = this.navigationEventId),
                null === (t = this.context) ||
                  void 0 === t ||
                  t.record(a.LCP_EVENT_TYPE, { version: "1.0.0", value: e.value, attribution: o }),
                null === (n = this.context) || void 0 === n || n.eventBus.unsubscribe(s.Topic.EVENT, this.handleEvent),
                this.resourceEventIds.clear(),
                (this.navigationEventId = void 0);
            }),
            (t.prototype.handleCLS = function (e) {
              var t,
                n = e.attribution;
              null === (t = this.context) ||
                void 0 === t ||
                t.record(a.CLS_EVENT_TYPE, {
                  version: "1.0.0",
                  value: e.value,
                  attribution: {
                    largestShiftTarget: n.largestShiftTarget,
                    largestShiftValue: n.largestShiftValue,
                    largestShiftTime: n.largestShiftTime,
                    loadState: n.loadState,
                  },
                });
            }),
            (t.prototype.handleFID = function (e) {
              var t,
                n = e.attribution;
              null === (t = this.context) ||
                void 0 === t ||
                t.record(a.FID_EVENT_TYPE, {
                  version: "1.0.0",
                  value: e.value,
                  attribution: {
                    eventTarget: n.eventTarget,
                    eventType: n.eventType,
                    eventTime: n.eventTime,
                    loadState: n.loadState,
                  },
                });
            }),
            t
          );
        })(o.InternalPlugin);
        t.WebVitalsPlugin = f;
      },
      7153: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.XhrPlugin = t.XHR_PLUGIN_ID = void 0);
        var r,
          o = n(5418),
          i = n(2931),
          a = n(7329),
          s = n(2392),
          u = n(3135),
          c =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          l = function () {
            return (
              (l =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              l.apply(this, arguments)
            );
          };
        t.XHR_PLUGIN_ID = "xhr";
        var f = (function (e) {
          function t(t) {
            var n = e.call(this, "xhr") || this;
            return (
              (n.addXRayTraceIdHeader = function (e) {
                return (0, i.isTraceIdHeaderEnabled)(e, n.config.addXRayTraceIdHeader);
              }),
              (n.isTracingEnabled = function () {
                return n.context.config.enableXRay;
              }),
              (n.isSessionRecorded = function () {
                var e;
                return (null === (e = n.context.getSession()) || void 0 === e ? void 0 : e.record) || !1;
              }),
              (n.handleXhrLoadEvent = function (e) {
                var t = e.target,
                  r = n.xhrMap.get(t);
                if (r) {
                  var o = (0, i.epochTime)();
                  (r.trace.end_time = o),
                    (r.trace.subsegments[0].end_time = o),
                    (r.trace.subsegments[0].http.response = { status: t.status }),
                    (0, i.is429)(t.status)
                      ? ((r.trace.subsegments[0].throttle = !0), (r.trace.throttle = !0))
                      : (0, i.is4xx)(t.status)
                        ? ((r.trace.subsegments[0].error = !0), (r.trace.error = !0))
                        : (0, i.is5xx)(t.status) && ((r.trace.subsegments[0].fault = !0), (r.trace.fault = !0));
                  var a = t.getResponseHeader("Content-Length"),
                    s = a ? parseInt(a, 10) : NaN;
                  isNaN(s) || (r.trace.subsegments[0].http.response.content_length = s),
                    n.recordTraceEvent(r.trace),
                    n.recordHttpEventWithResponse(r, t);
                }
              }),
              (n.handleXhrErrorEvent = function (e) {
                var t = e.target,
                  r = n.xhrMap.get(t),
                  o = t.statusText ? t.status.toString() + ": " + t.statusText : t.status.toString();
                if (r) {
                  var s = (0, i.epochTime)();
                  (r.trace.fault = !0),
                    (r.trace.end_time = s),
                    (r.trace.subsegments[0].end_time = s),
                    (r.trace.subsegments[0].fault = !0),
                    (r.trace.subsegments[0].cause = { exceptions: [{ type: "XMLHttpRequest error", message: o }] }),
                    n.recordTraceEvent(r.trace),
                    n.recordHttpEventWithError(r, t, new a.XhrError(o));
                }
              }),
              (n.handleXhrAbortEvent = function (e) {
                var t = e.target,
                  r = n.xhrMap.get(t);
                r && n.handleXhrDetailsOnError(r, t, "XMLHttpRequest abort");
              }),
              (n.handleXhrTimeoutEvent = function (e) {
                var t = e.target,
                  r = n.xhrMap.get(t);
                n.handleXhrDetailsOnError(r, t, "XMLHttpRequest timeout");
              }),
              (n.initializeTrace = function (e) {
                var t = (0, i.epochTime)();
                (e.trace = (0, i.createXRayTraceEvent)(n.config.logicalServiceName, t)),
                  e.trace.subsegments.push(
                    (0, i.createXRaySubsegment)((0, i.requestInfoToHostname)(e.url), t, {
                      request: { method: e.method, url: e.url, traced: !0 },
                    }),
                  );
              }),
              (n.sendWrapper = function () {
                var e = n;
                return function (t) {
                  return function () {
                    var n = e.xhrMap.get(this);
                    return (
                      n &&
                        (this.addEventListener("load", e.handleXhrLoadEvent),
                        this.addEventListener("error", e.handleXhrErrorEvent),
                        this.addEventListener("abort", e.handleXhrAbortEvent),
                        this.addEventListener("timeout", e.handleXhrTimeoutEvent),
                        e.initializeTrace(n),
                        !e.isSyntheticsUA &&
                          e.isTracingEnabled() &&
                          e.addXRayTraceIdHeader(n.url) &&
                          e.isSessionRecorded() &&
                          this.setRequestHeader(
                            i.X_AMZN_TRACE_ID,
                            (0, i.getAmznTraceIdHeaderValue)(n.trace.trace_id, n.trace.subsegments[0].id),
                          )),
                      t.apply(this, arguments)
                    );
                  };
                };
              }),
              (n.openWrapper = function () {
                var e = n;
                return function (t) {
                  return function (n, r, o) {
                    return (
                      (0, i.isUrlAllowed)(r, e.config) && e.xhrMap.set(this, { url: r, method: n, async: o }),
                      t.apply(this, arguments)
                    );
                  };
                };
              }),
              (n.config = l(l({}, i.defaultConfig), t)),
              (n.xhrMap = new Map()),
              (n.isSyntheticsUA = navigator.userAgent.includes("CloudWatchSynthetics")),
              n
            );
          }
          return (
            c(t, e),
            (t.prototype.onload = function () {
              this.enable();
            }),
            Object.defineProperty(t.prototype, "patches", {
              get: function () {
                return [
                  { nodule: XMLHttpRequest.prototype, name: "send", wrapper: this.sendWrapper },
                  { nodule: XMLHttpRequest.prototype, name: "open", wrapper: this.openWrapper },
                ];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.handleXhrDetailsOnError = function (e, t, n) {
              if (e) {
                var r = (0, i.epochTime)();
                (e.trace.end_time = r),
                  (e.trace.subsegments[0].end_time = r),
                  (e.trace.subsegments[0].error = !0),
                  (e.trace.subsegments[0].cause = { exceptions: [{ type: n }] }),
                  this.recordTraceEvent(e.trace),
                  this.recordHttpEventWithError(e, t, n);
              }
            }),
            (t.prototype.statusOk = function (e) {
              return e >= 200 && e < 300;
            }),
            (t.prototype.recordHttpEventWithResponse = function (e, t) {
              this.xhrMap.delete(t);
              var n = {
                version: "1.0.0",
                request: { method: e.method, url: e.url },
                response: { status: t.status, statusText: t.statusText },
              };
              this.isTracingEnabled() && ((n.trace_id = e.trace.trace_id), (n.segment_id = e.trace.subsegments[0].id)),
                (!this.config.recordAllRequests && this.statusOk(t.status)) ||
                  this.context.record(s.HTTP_EVENT_TYPE, n);
            }),
            (t.prototype.recordHttpEventWithError = function (e, t, n) {
              this.xhrMap.delete(t);
              var r = {
                version: "1.0.0",
                request: { method: e.method, url: e.url },
                error: (0, u.errorEventToJsErrorEvent)({ type: "error", error: n }, this.config.stackTraceLength),
              };
              this.isTracingEnabled() && ((r.trace_id = e.trace.trace_id), (r.segment_id = e.trace.subsegments[0].id)),
                this.context.record(s.HTTP_EVENT_TYPE, r);
            }),
            (t.prototype.recordTraceEvent = function (e) {
              !this.isSyntheticsUA &&
                this.isTracingEnabled() &&
                this.isSessionRecorded() &&
                this.context.record(s.XRAY_TRACE_EVENT_TYPE, e);
            }),
            t
          );
        })(o.MonkeyPatched);
        t.XhrPlugin = f;
      },
      2392: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.XRAY_TRACE_EVENT_TYPE =
            t.UNKNOWN =
            t.TIME_TO_INTERACTIVE_EVENT_TYPE =
            t.SESSION_START_EVENT_TYPE =
            t.RUM_AWS_PREFIX =
            t.RUM_AMZ_PREFIX =
            t.PERFORMANCE_RESOURCE_EVENT_TYPE =
            t.PERFORMANCE_NAVIGATION_EVENT_TYPE =
            t.PAGE_VIEW_EVENT_TYPE =
            t.LCP_EVENT_TYPE =
            t.JS_ERROR_EVENT_TYPE =
            t.HTTP_EVENT_TYPE =
            t.FID_EVENT_TYPE =
            t.DOM_EVENT_TYPE =
            t.CLS_EVENT_TYPE =
              void 0);
        t.UNKNOWN = "unknown";
        var n = "com.amazon.rum";
        t.RUM_AMZ_PREFIX = n;
        t.RUM_AWS_PREFIX = "com.amazonaws.rum";
        var r = "".concat(n, ".http_event");
        t.HTTP_EVENT_TYPE = r;
        var o = "".concat(n, ".xray_trace_event");
        t.XRAY_TRACE_EVENT_TYPE = o;
        var i = "".concat(n, ".largest_contentful_paint_event");
        t.LCP_EVENT_TYPE = i;
        var a = "".concat(n, ".first_input_delay_event");
        t.FID_EVENT_TYPE = a;
        var s = "".concat(n, ".cumulative_layout_shift_event");
        t.CLS_EVENT_TYPE = s;
        var u = "".concat(n, ".performance_navigation_event");
        t.PERFORMANCE_NAVIGATION_EVENT_TYPE = u;
        var c = "".concat(n, ".performance_resource_event");
        t.PERFORMANCE_RESOURCE_EVENT_TYPE = c;
        var l = "".concat(n, ".dom_event");
        t.DOM_EVENT_TYPE = l;
        var f = "".concat(n, ".js_error_event");
        t.JS_ERROR_EVENT_TYPE = f;
        var d = "".concat(n, ".page_view_event");
        t.PAGE_VIEW_EVENT_TYPE = d;
        var p = "".concat(n, ".session_start_event");
        t.SESSION_START_EVENT_TYPE = p;
        var h = "".concat(n, ".time_to_interactive_event");
        t.TIME_TO_INTERACTIVE_EVENT_TYPE = h;
      },
      2931: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resourceToUrlString =
            t.requestInfoToHostname =
            t.isUrlAllowed =
            t.isTraceIdHeaderEnabled =
            t.is5xx =
            t.is4xx =
            t.is429 =
            t.getTraceHeader =
            t.getAmznTraceIdHeaderValue =
            t.epochTime =
            t.defaultConfig =
            t.createXRayTraceEventHttp =
            t.createXRayTraceEvent =
            t.createXRaySubsegment =
            t.byteToHex =
            t.addAmznTraceIdHeaderToInit =
            t.addAmznTraceIdHeaderToHeaders =
            t.X_AMZN_TRACE_ID =
              void 0);
        var r = n(5106),
          o = [];
        t.byteToHex = o;
        for (var i = 0; i < 256; i++) o[i] = (i + 256).toString(16).substr(1);
        var a = "X-Amzn-Trace-Id";
        t.X_AMZN_TRACE_ID = a;
        t.isTraceIdHeaderEnabled = function (e, t) {
          return Array.isArray(t)
            ? t.some(function (t) {
                return t.test(e);
              })
            : t;
        };
        t.defaultConfig = {
          logicalServiceName: "rum.aws.amazon.com",
          urlsToInclude: [/.*/],
          urlsToExclude: [/cognito\-identity\.([^\.]*\.)?amazonaws\.com/, /sts\.([^\.]*\.)?amazonaws\.com/],
          stackTraceLength: 200,
          recordAllRequests: !1,
          addXRayTraceIdHeader: !1,
        };
        t.is4xx = function (e) {
          return 4 === Math.floor(e / 100);
        };
        t.is5xx = function (e) {
          return 5 === Math.floor(e / 100);
        };
        t.is429 = function (e) {
          return 429 === e;
        };
        t.isUrlAllowed = function (e, t) {
          var n = t.urlsToInclude.some(function (t) {
              return t.test(e);
            }),
            r = t.urlsToExclude.some(function (t) {
              return t.test(e);
            });
          return n && !r;
        };
        t.epochTime = function () {
          return Date.now() / 1e3;
        };
        t.createXRayTraceEventHttp = function (e, t, n) {
          var r = { request: {} };
          return (
            (r.request.method = (null == t ? void 0 : t.method) ? t.method : "GET"),
            (r.request.traced = n),
            (r.request.url = u(e)),
            r
          );
        };
        t.createXRayTraceEvent = function (e, t, n) {
          var r = {
            version: "1.0.0",
            name: e,
            origin: "AWS::RUM::AppMonitor",
            id: l(),
            start_time: t,
            trace_id: c(),
            end_time: void 0,
            subsegments: [],
            in_progress: !1,
          };
          return n && (r.http = n), r;
        };
        t.createXRaySubsegment = function (e, t, n) {
          var r = {
            id: l(),
            name: e,
            start_time: t,
            end_time: void 0,
            in_progress: !1,
            namespace: e.endsWith("amazonaws.com") ? "aws" : "remote",
          };
          return n && (r.http = n), r;
        };
        t.requestInfoToHostname = function (e) {
          try {
            return e.hostname ? e.hostname : e.url ? new URL(e.url).hostname : new URL(e.toString()).hostname;
          } catch (e) {
            return window.location.hostname;
          }
        };
        t.addAmznTraceIdHeaderToInit = function (e, t, n) {
          e.headers || (e.headers = {}), (e.headers[a] = s(t, n));
        };
        t.addAmznTraceIdHeaderToHeaders = function (e, t, n) {
          e.set(a, s(t, n));
        };
        var s = function (e, t) {
          return "Root=" + e + ";Parent=" + t + ";Sampled=1";
        };
        t.getAmznTraceIdHeaderValue = s;
        t.getTraceHeader = function (e) {
          var t,
            n = {};
          if (e) {
            var r = null === (t = e.get(a)) || void 0 === t ? void 0 : t.split(";");
            3 === (null == r ? void 0 : r.length) &&
              ((n.traceId = r[0].split("Root=")[1]), (n.segmentId = r[1].split("Parent=")[1]));
          }
          return n;
        };
        var u = function (e) {
          return e.url ? e.url : e.toString();
        };
        t.resourceToUrlString = u;
        var c = function () {
            return "1-".concat(f(), "-").concat(d());
          },
          l = function () {
            var e = new Uint8Array(8);
            return (0, r.getRandomValues)(e), p(e);
          },
          f = function () {
            return Math.floor(Date.now() / 1e3).toString(16);
          },
          d = function () {
            var e = new Uint8Array(12);
            return (0, r.getRandomValues)(e), p(e);
          },
          p = function (e) {
            for (var t = "", n = 0; n < e.length; n++) t += o[e[n]];
            return t;
          };
      },
      3135: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isErrorPrimitive = t.errorEventToJsErrorEvent = void 0);
        var o = r(n(8698)),
          i = function (e) {
            return e !== Object(e) && null != e;
          };
        t.isErrorPrimitive = i;
        t.errorEventToJsErrorEvent = function (e, t) {
          var n = (function (e) {
              var t = { version: "1.0.0", type: "undefined", message: "undefined" };
              return (
                void 0 !== e.type && (t.type = e.type),
                void 0 !== e.message && (t.message = e.message),
                void 0 !== e.filename && (t.filename = e.filename),
                void 0 !== e.lineno && (t.lineno = e.lineno),
                void 0 !== e.colno && (t.colno = e.colno),
                t
              );
            })(e),
            r = e.error;
          return (
            !(function (e) {
              var t = (0, o.default)(e);
              return ("object" === t || "function" === t) && !!e;
            })(r)
              ? i(r) &&
                (function (e, t) {
                  "unhandledrejection" !== e.type && (e.type = t.toString()), (e.message = t.toString());
                })(n, r)
              : (function (e, t, n) {
                  t.name && (e.type = t.name),
                    t.message && (e.message = t.message),
                    t.fileName && (e.filename = t.fileName),
                    t.lineNumber && (e.lineno = t.lineNumber),
                    t.columnNumber && (e.colno = t.columnNumber),
                    n && t.stack && (e.stack = t.stack.length > n ? t.stack.substring(0, n) + "..." : t.stack);
                })(n, r, t),
            n
          );
        };
      },
      1772: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultPerformancePluginConfig = t.defaultIgnore = void 0);
        var r = n(6702),
          o = function (e) {
            return (
              "resource" === e.entryType &&
              (!/^https?:/.test(e.name) || /^(fetch|xmlhttprequest)$/.test(e.initiatorType))
            );
          };
        t.defaultIgnore = o;
        var i = {
          eventLimit: 10,
          ignore: o,
          recordAllTypes: [
            r.ResourceType.DOCUMENT,
            r.ResourceType.SCRIPT,
            r.ResourceType.STYLESHEET,
            r.ResourceType.FONT,
          ],
          sampleTypes: [r.ResourceType.IMAGE, r.ResourceType.OTHER],
        };
        t.defaultPerformancePluginConfig = i;
      },
      7885: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRemoteConfig = void 0);
        var n = function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
          r = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          o = function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          };
        t.getRemoteConfig = function (e) {
          return r(void 0, void 0, void 0, function () {
            var t, i;
            return o(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (t = {}),
                    (i = {}),
                    void 0 === e.u
                      ? [3, 2]
                      : [
                          4,
                          ((s = e.u),
                          r(void 0, void 0, void 0, function () {
                            var e;
                            return o(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    t.trys.push([0, 3, , 4]),
                                    [
                                      4,
                                      fetch(s, {
                                        mode: "cors",
                                        method: "GET",
                                        headers: { Accept: "application/json", "Content-Type": "application/json" },
                                      }),
                                    ]
                                  );
                                case 1:
                                  return [4, t.sent().json()];
                                case 2:
                                  return [2, t.sent()];
                                case 3:
                                  throw ((e = t.sent()), new Error("CWR: Failed to load remote config: ".concat(e)));
                                case 4:
                                  return [2];
                              }
                            });
                          })),
                        ]
                  );
                case 1:
                  return (i = a.sent()), (t = n(n({}, i.clientConfig), e.c)), [3, 3];
                case 2:
                  void 0 !== e.c && (t = e.c), (a.label = 3);
                case 3:
                  return [2, t];
              }
              var s;
            });
          });
        };
      },
      6464: function (e, t, n) {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.PageManager = void 0);
        var o = r(n(8698)),
          i = n(9002),
          a = n(2392),
          s = function () {
            return (
              (s =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              s.apply(this, arguments)
            );
          },
          u = (function () {
            function e(e, t) {
              (this.TIMEOUT = 1e3),
                (this.config = e),
                (this.record = t),
                (this.page = void 0),
                (this.resumed = !1),
                (this.recordInteraction = !1),
                (this.virtualPageLoadTimer = new i.VirtualPageLoadTimer(this, e, t));
            }
            return (
              (e.prototype.getPage = function () {
                return this.page;
              }),
              (e.prototype.getAttributes = function () {
                return this.attributes;
              }),
              (e.prototype.resumeSession = function (e) {
                (this.recordInteraction = !0), e && ((this.page = e), (this.resumed = !0));
              }),
              (e.prototype.recordPageView = function (e) {
                var t;
                if (
                  ((t = "string" == typeof e ? e : e.pageId),
                  this.useCookies() && (this.recordInteraction = !0),
                  this.page)
                ) {
                  if (this.page.pageId === t)
                    return this.resumed
                      ? void this.collectAttributes(this.page, "object" === (0, o.default)(e) ? e : void 0)
                      : void 0;
                  this.createNextPage(this.page, t);
                } else this.createLandingPage(t);
                this.collectAttributes(this.page, "object" === (0, o.default)(e) ? e : void 0),
                  this.recordPageViewEvent(this.page);
              }),
              (e.prototype.createNextPage = function (e, t) {
                var n = Date.now(),
                  r = this.virtualPageLoadTimer.latestInteractionTime;
                !this.resumed && n - r <= this.TIMEOUT && ((n = r), this.virtualPageLoadTimer.startTiming()),
                  (this.timeOnParentPage = n - e.start),
                  (this.resumed = !1),
                  (this.page = {
                    pageId: t,
                    parentPageId: e.pageId,
                    interaction: e.interaction + 1,
                    referrer: document.referrer,
                    referrerDomain: this.getDomainFromReferrer(),
                    start: n,
                  });
              }),
              (e.prototype.createLandingPage = function (e) {
                this.page = {
                  pageId: e,
                  interaction: 0,
                  referrer: document.referrer,
                  referrerDomain: this.getDomainFromReferrer(),
                  start: Date.now(),
                };
              }),
              (e.prototype.collectAttributes = function (e, t) {
                var n;
                (this.attributes = {
                  title: (null === (n = null == t ? void 0 : t.pageAttributes) || void 0 === n ? void 0 : n.title)
                    ? t.pageAttributes.title
                    : document.title,
                  pageId: e.pageId,
                }),
                  this.recordInteraction &&
                    ((this.attributes.interaction = e.interaction),
                    void 0 !== e.parentPageId && (this.attributes.parentPageId = e.parentPageId)),
                  (null == t ? void 0 : t.pageTags) && (this.attributes.pageTags = t.pageTags),
                  (null == t ? void 0 : t.pageAttributes) &&
                    (this.attributes = s(s({}, t.pageAttributes), this.attributes));
              }),
              (e.prototype.createPageViewEvent = function (e) {
                var t = { version: "1.0.0", pageId: e.pageId };
                return (
                  this.recordInteraction &&
                    ((t.interaction = e.interaction),
                    (t.pageInteractionId = e.pageId + "-" + e.interaction),
                    void 0 !== e.parentPageId &&
                      ((t.parentPageInteractionId = e.parentPageId + "-" + (e.interaction - 1)),
                      (t.timeOnParentPage = this.timeOnParentPage)),
                    (t.referrer = document.referrer),
                    (t.referrerDomain = this.getDomainFromReferrer())),
                  t
                );
              }),
              (e.prototype.recordPageViewEvent = function (e) {
                this.record(a.PAGE_VIEW_EVENT_TYPE, this.createPageViewEvent(e));
              }),
              (e.prototype.useCookies = function () {
                return navigator.cookieEnabled && this.config.allowCookies;
              }),
              (e.prototype.getDomainFromReferrer = function () {
                try {
                  return new URL(document.referrer).hostname;
                } catch (e) {
                  return "localhost" === document.referrer ? document.referrer : "";
                }
              }),
              e
            );
          })();
        t.PageManager = u;
      },
      1998: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WEB_PLATFORM_TYPE =
            t.UNKNOWN =
            t.SessionManager =
            t.SESSION_START_EVENT_TYPE =
            t.RUM_SESSION_START =
            t.RUM_SESSION_EXPIRE =
            t.NIL_UUID =
            t.DESKTOP_DEVICE_TYPE =
              void 0);
        var r = n(6989),
          o = n(7429),
          i = n(2238),
          a = n(21),
          s = function () {
            return (
              (s =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              s.apply(this, arguments)
            );
          },
          u = "00000000-0000-0000-0000-000000000000";
        t.NIL_UUID = u;
        var c = "unknown";
        t.UNKNOWN = c;
        var l = "desktop";
        t.DESKTOP_DEVICE_TYPE = l;
        t.WEB_PLATFORM_TYPE = "web";
        var f = "com.amazon.rum.session_start_event";
        t.SESSION_START_EVENT_TYPE = f;
        t.RUM_SESSION_START = "rum_session_start";
        t.RUM_SESSION_EXPIRE = "rum_session_expire";
        var d = (function () {
          function e(e, t, n, r) {
            (this.appMonitorDetails = e),
              (this.config = t),
              (this.record = n),
              (this.pageManager = r),
              (this.session = { sessionId: u, record: this.sample(), eventCount: 0 }),
              this.initializeUser(),
              this.collectAttributes(),
              this.addSessionAttributes(this.config.sessionAttributes),
              this.getSessionFromCookie();
          }
          return (
            (e.prototype.isSampled = function () {
              return this.session.record;
            }),
            (e.prototype.getSession = function () {
              return (
                (this.session.sessionId === u || (this.session.sessionId !== u && new Date() > this.sessionExpiry)) &&
                  this.createSession(),
                this.session
              );
            }),
            (e.prototype.getAttributes = function () {
              return this.attributes;
            }),
            (e.prototype.addSessionAttributes = function (e) {
              this.attributes = s(s({}, this.attributes), e);
            }),
            (e.prototype.getUserId = function () {
              return this.useCookies() ? this.userId : u;
            }),
            (e.prototype.incrementSessionEventCount = function () {
              this.session.eventCount++, this.renewSession();
            }),
            (e.prototype.initializeUser = function () {
              var e = "";
              (this.userExpiry = new Date()),
                this.userExpiry.setDate(this.userExpiry.getDate() + this.config.userIdRetentionDays),
                this.config.userIdRetentionDays <= 0
                  ? (this.userId = "00000000-0000-0000-0000-000000000000")
                  : this.useCookies()
                    ? ((e = this.getUserIdCookie()),
                      (this.userId = e || (0, o.v4)()),
                      this.createOrRenewUserCookie(e, this.userExpiry))
                    : (this.userId = (0, o.v4)());
            }),
            (e.prototype.createOrRenewSessionCookie = function (e, t) {
              btoa &&
                (0, r.storeCookie)(
                  this.sessionCookieName(),
                  btoa(JSON.stringify(e)),
                  this.config.cookieAttributes,
                  void 0,
                  t,
                );
            }),
            (e.prototype.createOrRenewUserCookie = function (e, t) {
              (0, r.storeCookie)(a.USER_COOKIE_NAME, e, this.config.cookieAttributes, void 0, t);
            }),
            (e.prototype.getUserIdCookie = function () {
              return (0, r.getCookie)(a.USER_COOKIE_NAME);
            }),
            (e.prototype.getSessionFromCookie = function () {
              if (this.useCookies()) {
                var e = (0, r.getCookie)(this.sessionCookieName());
                if (e && atob)
                  try {
                    (this.session = JSON.parse(atob(e))), this.pageManager.resumeSession(this.session.page);
                  } catch (e) {}
              }
            }),
            (e.prototype.storeSessionAsCookie = function () {
              this.useCookies() &&
                this.config.userIdRetentionDays > 0 &&
                this.createOrRenewUserCookie(this.userId, this.userExpiry),
                this.useCookies() && this.createOrRenewSessionCookie(this.session, this.sessionExpiry);
            }),
            (e.prototype.createSession = function () {
              (this.session = {
                sessionId: (0, o.v4)(),
                record: this.session.sessionId === u ? this.session.record : this.sample(),
                eventCount: 0,
              }),
                (this.session.page = this.pageManager.getPage()),
                (this.sessionExpiry = new Date(new Date().getTime() + 1e3 * this.config.sessionLengthSeconds)),
                this.storeSessionAsCookie(),
                this.record(this.session, f, { version: "1.0.0" });
            }),
            (e.prototype.renewSession = function () {
              (this.sessionExpiry = new Date(new Date().getTime() + 1e3 * this.config.sessionLengthSeconds)),
                (this.session.page = this.pageManager.getPage()),
                this.storeSessionAsCookie();
            }),
            (e.prototype.collectAttributes = function () {
              var e = new i.UAParser(navigator.userAgent).getResult();
              this.attributes = {
                browserLanguage: navigator.language,
                browserName: e.browser.name ? e.browser.name : c,
                browserVersion: e.browser.version ? e.browser.version : c,
                osName: e.os.name ? e.os.name : c,
                osVersion: e.os.version ? e.os.version : c,
                deviceType: e.device.type ? e.device.type : l,
                platformType: "web",
                domain: window.location.hostname,
              };
            }),
            (e.prototype.useCookies = function () {
              return navigator.cookieEnabled && this.config.allowCookies;
            }),
            (e.prototype.sample = function () {
              return Math.random() < this.config.sessionSampleRate;
            }),
            (e.prototype.sessionCookieName = function () {
              return this.config.cookieAttributes.unique
                ? "".concat(a.SESSION_COOKIE_NAME, "_").concat(this.appMonitorDetails.id)
                : a.SESSION_COOKIE_NAME;
            }),
            e
          );
        })();
        t.SessionManager = d;
      },
      9002: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.VirtualPageLoadTimer = void 0);
        var r,
          o = n(2392),
          i = n(5418),
          a =
            ((r = function (e, t) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                r(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          s = (function (e) {
            function t(t, n, r) {
              var o = e.call(this, "virtual-page-load-timer") || this;
              return (
                (o.sendWrapper = function () {
                  var e = o;
                  return function (t) {
                    return function () {
                      return (
                        e.recordXhr(this), this.addEventListener("loadend", e.endTracking), t.apply(this, arguments)
                      );
                    };
                  };
                }),
                (o.endTracking = function (e) {
                  var t = Date.now(),
                    n = e.target;
                  n.removeEventListener("loadend", o.endTracking), o.removeXhr(n, t);
                }),
                (o.fetch = function (e, t, n) {
                  return e
                    .apply(t, n)
                    .catch(function (e) {
                      throw e;
                    })
                    .finally(o.decrementFetchCounter);
                }),
                (o.fetchWrapper = function () {
                  var e = o;
                  return function (t) {
                    return function (n, r) {
                      return (e.fetchCounter += 1), e.fetch(t, this, arguments);
                    };
                  };
                }),
                (o.decrementFetchCounter = function () {
                  o.isPageLoaded || (o.latestEndTime = Date.now()), (o.fetchCounter -= 1);
                }),
                (o.checkLoadStatus = function () {
                  0 === o.ongoingRequests.size &&
                    0 === o.fetchCounter &&
                    (clearInterval(o.periodicCheckerId),
                    clearTimeout(o.timeoutCheckerId),
                    o.domMutationObserver.disconnect(),
                    o.recordRouteChangeNavigationEvent(o.pageManager.getPage()),
                    (o.periodicCheckerId = void 0),
                    (o.timeoutCheckerId = void 0),
                    (o.isPageLoaded = !0));
                }),
                (o.declareTimeout = function () {
                  clearInterval(o.periodicCheckerId),
                    (o.periodicCheckerId = void 0),
                    (o.timeoutCheckerId = void 0),
                    o.domMutationObserver.disconnect(),
                    (o.isPageLoaded = !0);
                }),
                (o.resetInterval = function () {
                  (o.latestEndTime = Date.now()),
                    clearInterval(o.periodicCheckerId),
                    (o.periodicCheckerId = setInterval(o.checkLoadStatus, o.config.routeChangeComplete));
                }),
                (o.moveItemsFromBuffer = function (e) {
                  o.ongoingRequests.add(e);
                }),
                (o.updateLatestInteractionTime = function (e) {
                  o.latestInteractionTime = Date.now();
                }),
                (o.periodicCheckerId = void 0),
                (o.timeoutCheckerId = void 0),
                (o.domMutationObserver = new MutationObserver(o.resetInterval)),
                (o.ongoingRequests = new Set()),
                (o.requestBuffer = new Set()),
                (o.fetchCounter = 0),
                (o.isPageLoaded = !0),
                (o.latestEndTime = 0),
                (o.latestInteractionTime = 0),
                (o.config = n),
                (o.pageManager = t),
                (o.record = r),
                o.enable(),
                document.addEventListener("mousedown", o.updateLatestInteractionTime),
                document.addEventListener("keydown", o.updateLatestInteractionTime),
                o
              );
            }
            return (
              a(t, e),
              Object.defineProperty(t.prototype, "patches", {
                get: function () {
                  return [
                    { nodule: XMLHttpRequest.prototype, name: "send", wrapper: this.sendWrapper },
                    { nodule: window, name: "fetch", wrapper: this.fetchWrapper },
                  ];
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.startTiming = function () {
                (this.latestEndTime = Date.now()),
                  this.periodicCheckerId && clearInterval(this.periodicCheckerId),
                  this.timeoutCheckerId && clearTimeout(this.timeoutCheckerId),
                  this.domMutationObserver.disconnect(),
                  (this.periodicCheckerId = setInterval(this.checkLoadStatus, this.config.routeChangeComplete)),
                  (this.timeoutCheckerId = setTimeout(this.declareTimeout, this.config.routeChangeTimeout)),
                  this.domMutationObserver.observe(document, {
                    subtree: !0,
                    childList: !0,
                    attributes: !1,
                    characterData: !1,
                  }),
                  (this.isPageLoaded = !1),
                  this.requestBuffer.forEach(this.moveItemsFromBuffer),
                  this.requestBuffer.clear();
              }),
              (t.prototype.recordXhr = function (e) {
                this.pageManager.getPage() && !1 === this.isPageLoaded
                  ? this.ongoingRequests.add(e)
                  : this.requestBuffer.add(e);
              }),
              (t.prototype.removeXhr = function (e, t) {
                this.pageManager.getPage() && this.ongoingRequests.has(e)
                  ? (this.ongoingRequests.delete(e), (this.latestEndTime = t))
                  : this.requestBuffer.has(e) && this.requestBuffer.delete(e);
              }),
              (t.prototype.recordRouteChangeNavigationEvent = function (e) {
                var t = {
                  version: "1.0.0",
                  initiatorType: "route_change",
                  navigationType: "navigate",
                  startTime: e.start,
                  duration: this.latestEndTime - e.start,
                };
                this.record && this.record(o.PERFORMANCE_NAVIGATION_EVENT_TYPE, t);
              }),
              t
            );
          })(i.MonkeyPatched);
        t.VirtualPageLoadTimer = s;
      },
      6702: function (e, t) {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.shuffle =
            t.performanceKey =
            t.isLongTaskSupported =
            t.isLCPSupported =
            t.isFCPSupported =
            t.httpStatusText =
            t.getResourceFileType =
            t.ResourceType =
            t.InitiatorType =
              void 0),
          (t.ResourceType = n),
          (function (e) {
            (e.OTHER = "other"),
              (e.STYLESHEET = "stylesheet"),
              (e.DOCUMENT = "document"),
              (e.SCRIPT = "script"),
              (e.IMAGE = "image"),
              (e.FONT = "font");
          })(n || (t.ResourceType = n = {})),
          (t.InitiatorType = r),
          (function (e) {
            (e.IMG = "img"),
              (e.IMAGE = "image"),
              (e.INPUT = "input"),
              (e.IFRAME = "iframe"),
              (e.FRAME = "frame"),
              (e.SCRIPT = "script"),
              (e.CSS = "css");
          })(r || (t.InitiatorType = r = {}));
        t.performanceKey = function (e) {
          return [e.startTime, e.duration].join("#");
        };
        var o = [
          { name: n.STYLESHEET, list: ["css", "less"] },
          { name: n.DOCUMENT, list: ["htm", "html", "ts", "doc", "docx", "pdf", "xls", "xlsx"] },
          { name: n.SCRIPT, list: ["js"] },
          { name: n.IMAGE, list: ["ai", "bmp", "gif", "ico", "jpeg", "jpg", "png", "ps", "psd", "svg", "tif", "tiff"] },
          { name: n.FONT, list: ["fnt", "fon", "otf", "ttf", "woff"] },
        ];
        t.shuffle = function (e) {
          for (var t = e.length - 1; t > 0; t--) {
            var n = Math.floor(Math.random() * (t + 1)),
              r = e[t];
            (e[t] = e[n]), (e[n] = r);
          }
        };
        t.getResourceFileType = function (e, t) {
          var i = n.OTHER;
          if (e) {
            var a = e.substring(e.lastIndexOf("/") + 1),
              s = a.substring(a.lastIndexOf(".") + 1).split(/[?#]/)[0];
            o.forEach(function (e) {
              e.list.indexOf(s) > -1 && (i = e.name);
            });
          }
          if (t && i === n.OTHER)
            switch (t) {
              case r.IMAGE:
              case r.IMG:
              case r.INPUT:
                i = n.IMAGE;
                break;
              case r.IFRAME:
              case r.FRAME:
                i = n.DOCUMENT;
                break;
              case r.SCRIPT:
                i = n.SCRIPT;
                break;
              case r.CSS:
                i = n.STYLESHEET;
            }
          return i;
        };
        t.httpStatusText = {
          0: "Abort Request",
          200: "OK",
          201: "Created",
          202: "Accepted",
          203: "Non-Authoritative Information",
          204: "No Content",
          205: "Reset Content",
          206: "Partial Content",
          300: "Multiple Choices",
          301: "Moved Permanently",
          302: "Found",
          303: "See Other",
          304: "Not Modified",
          305: "Use Proxy",
          306: "Unused",
          307: "Temporary Redirect",
          400: "Bad Request",
          401: "Unauthorized",
          402: "Payment Required",
          403: "Forbidden",
          404: "Not Found",
          405: "Method Not Allowed",
          406: "Not Acceptable",
          407: "Proxy Authentication Required",
          408: "Request Timeout",
          409: "Conflict",
          410: "Gone",
          411: "Length Required",
          412: "Precondition Required",
          413: "Request Entry Too Large",
          414: "Request-URI Too Long",
          415: "Unsupported Media Type",
          416: "Requested Range Not Satisfiable",
          417: "Expectation Failed",
          418: 'I"m a teapot',
          500: "Internal Server Error",
          501: "Not Implemented",
          502: "Bad Gateway",
          503: "Service Unavailable",
          504: "Gateway Timeout",
          505: "HTTP Version Not Supported",
        };
        t.isLCPSupported = function () {
          return PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint");
        };
        t.isFCPSupported = function () {
          return PerformanceObserver.supportedEntryTypes.includes("paint");
        };
        t.isLongTaskSupported = function () {
          return PerformanceObserver.supportedEntryTypes.includes("longtask");
        };
      },
      21: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USER_COOKIE_NAME =
            t.SESSION_COOKIE_NAME =
            t.INSTALL_SCRIPT =
            t.INSTALL_MODULE =
            t.IDENTITY_KEY =
            t.DEFAULT_PAGE_ATTRIBUTES =
            t.CRED_RENEW_MS =
            t.CRED_KEY =
              void 0);
        t.CRED_KEY = "cwr_c";
        t.IDENTITY_KEY = "cwr_i";
        t.SESSION_COOKIE_NAME = "cwr_s";
        t.USER_COOKIE_NAME = "cwr_u";
        t.CRED_RENEW_MS = 3e4;
        t.INSTALL_SCRIPT = "arw-script";
        t.INSTALL_MODULE = "arw-module";
        t.DEFAULT_PAGE_ATTRIBUTES = ["pageId", "pageTags"];
      },
      6989: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.storeCookie = t.removeCookie = t.getExpiryDate = t.getCookie = void 0);
        t.storeCookie = function (e, t, r, o, i) {
          var a = e + "=";
          (a += t || ""),
            void 0 !== i
              ? (a += "; Expires=".concat(i.toUTCString()))
              : void 0 !== o && (a += "; Expires=".concat(n(o).toUTCString())),
            (a += "; Domain=".concat(r.domain)),
            (a += "; Path=".concat(r.path)),
            (a += "; SameSite=".concat(r.sameSite)),
            (a += r.secure ? "; Secure" : ""),
            (document.cookie = a);
        };
        var n = function (e) {
          return new Date(new Date().getTime() + 1e3 * e);
        };
        t.getExpiryDate = n;
        t.removeCookie = function (e, t) {
          var n = e + "=";
          (n += "; Expires=".concat(new Date(0))),
            (n += "; Domain=".concat(t.domain)),
            (n += "; Path=".concat(t.path)),
            (n += "; SameSite=".concat(t.sameSite)),
            (n += t.secure ? "Secure" : ""),
            (document.cookie = n);
        };
        t.getCookie = function (e) {
          for (var t = 0, n = document.cookie.split("; "); t < n.length; t++) {
            var r = n[t].split("=");
            if (r[0] === e) return r[1];
          }
          return "";
        };
      },
      5106: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRandomValues = void 0);
        t.getRandomValues = function (e) {
          if (crypto) return crypto.getRandomValues(e);
          if (msCrypto) return msCrypto.getRandomValues(e);
          throw new Error("No crypto library found.");
        };
      },
      6372: function (e) {
        "use strict";
        function t(e) {
          return "function" == typeof e;
        }
        var n = console.error.bind(console);
        function r(e, t, n) {
          var r = !!e[t] && e.propertyIsEnumerable(t);
          Object.defineProperty(e, t, { configurable: !0, enumerable: r, writable: !0, value: n });
        }
        function o(e) {
          e && e.logger && (t(e.logger) ? (n = e.logger) : n("new logger isn't a function, not replacing"));
        }
        function i(e, o, i) {
          if (e && e[o]) {
            if (!i) return n("no wrapper function"), void n(new Error().stack);
            if (t(e[o]) && t(i)) {
              var a = e[o],
                s = i(a, o);
              return (
                r(s, "__original", a),
                r(s, "__unwrap", function () {
                  e[o] === s && r(e, o, a);
                }),
                r(s, "__wrapped", !0),
                r(e, o, s),
                s
              );
            }
            n("original object and wrapper must be functions");
          } else n("no original function " + o + " to wrap");
        }
        function a(e, t) {
          return e && e[t]
            ? e[t].__unwrap
              ? e[t].__unwrap()
              : void n("no original to unwrap to -- has " + t + " already been unwrapped?")
            : (n("no function to unwrap."), void n(new Error().stack));
        }
        (o.wrap = i),
          (o.massWrap = function (e, t, r) {
            if (!e) return n("must provide one or more modules to patch"), void n(new Error().stack);
            Array.isArray(e) || (e = [e]),
              t && Array.isArray(t)
                ? e.forEach(function (e) {
                    t.forEach(function (t) {
                      i(e, t, r);
                    });
                  })
                : n("must provide one or more functions to wrap on modules");
          }),
          (o.unwrap = a),
          (o.massUnwrap = function (e, t) {
            if (!e) return n("must provide one or more modules to patch"), void n(new Error().stack);
            Array.isArray(e) || (e = [e]),
              t && Array.isArray(t)
                ? e.forEach(function (e) {
                    t.forEach(function (t) {
                      a(e, t);
                    });
                  })
                : n("must provide one or more functions to unwrap on modules");
          }),
          (e.exports = o);
      },
      655: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            __assign: function () {
              return i;
            },
            __asyncDelegator: function () {
              return w;
            },
            __asyncGenerator: function () {
              return m;
            },
            __asyncValues: function () {
              return E;
            },
            __await: function () {
              return b;
            },
            __awaiter: function () {
              return l;
            },
            __classPrivateFieldGet: function () {
              return S;
            },
            __classPrivateFieldSet: function () {
              return O;
            },
            __createBinding: function () {
              return d;
            },
            __decorate: function () {
              return s;
            },
            __exportStar: function () {
              return p;
            },
            __extends: function () {
              return o;
            },
            __generator: function () {
              return f;
            },
            __importDefault: function () {
              return P;
            },
            __importStar: function () {
              return T;
            },
            __makeTemplateObject: function () {
              return _;
            },
            __metadata: function () {
              return c;
            },
            __param: function () {
              return u;
            },
            __read: function () {
              return v;
            },
            __rest: function () {
              return a;
            },
            __spread: function () {
              return y;
            },
            __spreadArrays: function () {
              return g;
            },
            __values: function () {
              return h;
            },
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function o(e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
        }
        var i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        };
        function a(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          }
          return n;
        }
        function s(e, t, n, r) {
          var o,
            i = arguments.length,
            a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        }
        function u(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        }
        function f(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        }
        function d(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }
        function p(e, t) {
          for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function h(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function v(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }
        function y() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
          return e;
        }
        function g() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
          return r;
        }
        function b(e) {
          return this instanceof b ? ((this.v = e), this) : new b(e);
        }
        function m(e, t, n) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            o = n.apply(e, t || []),
            i = [];
          return (
            (r = {}),
            a("next"),
            a("throw"),
            a("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function a(e) {
            o[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  i.push([e, t, n, r]) > 1 || s(e, t);
                });
              });
          }
          function s(e, t) {
            try {
              (n = o[e](t)).value instanceof b ? Promise.resolve(n.value.v).then(u, c) : l(i[0][2], n);
            } catch (e) {
              l(i[0][3], e);
            }
            var n;
          }
          function u(e) {
            s("next", e);
          }
          function c(e) {
            s("throw", e);
          }
          function l(e, t) {
            e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
          }
        }
        function w(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, o) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n) ? { value: b(e[r](t)), done: "return" === r } : o ? o(t) : t;
                }
              : o;
          }
        }
        function E(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = h(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, o) {
                  (function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, o, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function _(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
        }
        function T(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function P(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function S(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function O(e, t, n) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, n), n;
        }
      },
      2238: function (e, t, n) {
        var r;
        !(function (o, i) {
          "use strict";
          var a = "function",
            s = "undefined",
            u = "object",
            c = "string",
            l = "model",
            f = "name",
            d = "type",
            p = "vendor",
            h = "version",
            v = "architecture",
            y = "console",
            g = "mobile",
            b = "tablet",
            m = "smarttv",
            w = "wearable",
            E = "embedded",
            _ = "Amazon",
            T = "Apple",
            P = "ASUS",
            S = "BlackBerry",
            O = "Firefox",
            A = "Google",
            I = "Huawei",
            x = "LG",
            R = "Microsoft",
            C = "Motorola",
            M = "Opera",
            k = "Samsung",
            j = "Sharp",
            L = "Sony",
            N = "Xiaomi",
            U = "Zebra",
            D = "Facebook",
            H = function (e) {
              for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
              return t;
            },
            F = function (e, t) {
              return typeof e === c && -1 !== B(t).indexOf(B(e));
            },
            B = function (e) {
              return e.toLowerCase();
            },
            q = function (e, t) {
              if (typeof e === c) return (e = e.replace(/^\s\s*/, "")), typeof t === s ? e : e.substring(0, 350);
            },
            V = function (e, t) {
              for (var n, r, o, s, c, l, f = 0; f < t.length && !c; ) {
                var d = t[f],
                  p = t[f + 1];
                for (n = r = 0; n < d.length && !c; )
                  if ((c = d[n++].exec(e)))
                    for (o = 0; o < p.length; o++)
                      (l = c[++r]),
                        typeof (s = p[o]) === u && s.length > 0
                          ? 2 === s.length
                            ? typeof s[1] == a
                              ? (this[s[0]] = s[1].call(this, l))
                              : (this[s[0]] = s[1])
                            : 3 === s.length
                              ? typeof s[1] !== a || (s[1].exec && s[1].test)
                                ? (this[s[0]] = l ? l.replace(s[1], s[2]) : i)
                                : (this[s[0]] = l ? s[1].call(this, l, s[2]) : i)
                              : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : i)
                          : (this[s] = l || i);
                f += 2;
              }
            },
            G = function (e, t) {
              for (var n in t)
                if (typeof t[n] === u && t[n].length > 0) {
                  for (var r = 0; r < t[n].length; r++) if (F(t[n][r], e)) return "?" === n ? i : n;
                } else if (F(t[n], e)) return "?" === n ? i : n;
              return e;
            },
            Y = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            X = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [f, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [f, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [f, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [f, "Opera Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [h, [f, M]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [f, h],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [f, "UCBrowser"]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                [h, [f, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [h, [f, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [h, [f, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [f, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [h, [f, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Secure Browser"], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [f, "Firefox Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [h, [f, "Opera Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [f, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [h, [f, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [h, [f, "Opera Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [f, "MIUI Browser"]],
                [/fxios\/([-\w\.]+)/i],
                [h, [f, O]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[f, "360 Browser"]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Browser"], h],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[f, /_/g, " "], h],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [f, h],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                [f],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[f, D], h],
                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                [f, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [f, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [f, "Chrome Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[f, "Chrome WebView"], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [f, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [f, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [f, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, f],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  f,
                  [
                    h,
                    G,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [f, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[f, "Netscape"], h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [f, "Firefox Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [f, h],
                [/(cobalt)\/([\w\.]+)/i],
                [f, [h, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[v, "amd64"]],
                [/(ia32(?=;))/i],
                [[v, B]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[v, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[v, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[v, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[v, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[v, /ower/, "", B]],
                [/(sun4\w)[;\)]/i],
                [[v, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[v, B]],
              ],
              device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [l, [p, k], [d, b]],
                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [l, [p, k], [d, g]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [l, [p, T], [d, g]],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [l, [p, T], [d, b]],
                [/(macintosh);/i],
                [l, [p, T]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [l, [p, I], [d, b]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [l, [p, I], [d, g]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [l, /_/g, " "],
                  [p, N],
                  [d, g],
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [l, /_/g, " "],
                  [p, N],
                  [d, b],
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [l, [p, "OPPO"], [d, g]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [l, [p, "Vivo"], [d, g]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [l, [p, "Realme"], [d, g]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [l, [p, C], [d, g]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [l, [p, C], [d, b]],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [l, [p, x], [d, b]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [l, [p, x], [d, g]],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [l, [p, "Lenovo"], [d, b]],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                  [l, /_/g, " "],
                  [p, "Nokia"],
                  [d, g],
                ],
                [/(pixel c)\b/i],
                [l, [p, A], [d, b]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [l, [p, A], [d, g]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [l, [p, L], [d, g]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [l, "Xperia Tablet"],
                  [p, L],
                  [d, b],
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [l, [p, "OnePlus"], [d, g]],
                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [l, [p, _], [d, b]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [l, /(.+)/g, "Fire Phone $1"],
                  [p, _],
                  [d, g],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [l, p, [d, b]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [l, [p, S], [d, g]],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [l, [p, P], [d, b]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [l, [p, P], [d, g]],
                [/(nexus 9)/i],
                [l, [p, "HTC"], [d, b]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [p, [l, /_/g, " "], [d, g]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [l, [p, "Acer"], [d, b]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [l, [p, "Meizu"], [d, g]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [l, [p, j], [d, g]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [p, l, [d, g]],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [p, l, [d, b]],
                [/(surface duo)/i],
                [l, [p, R], [d, b]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [l, [p, "Fairphone"], [d, g]],
                [/(u304aa)/i],
                [l, [p, "AT&T"], [d, g]],
                [/\bsie-(\w*)/i],
                [l, [p, "Siemens"], [d, g]],
                [/\b(rct\w+) b/i],
                [l, [p, "RCA"], [d, b]],
                [/\b(venue[\d ]{2,7}) b/i],
                [l, [p, "Dell"], [d, b]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [l, [p, "Verizon"], [d, b]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [l, [p, "Barnes & Noble"], [d, b]],
                [/\b(tm\d{3}\w+) b/i],
                [l, [p, "NuVision"], [d, b]],
                [/\b(k88) b/i],
                [l, [p, "ZTE"], [d, b]],
                [/\b(nx\d{3}j) b/i],
                [l, [p, "ZTE"], [d, g]],
                [/\b(gen\d{3}) b.+49h/i],
                [l, [p, "Swiss"], [d, g]],
                [/\b(zur\d{3}) b/i],
                [l, [p, "Swiss"], [d, b]],
                [/\b((zeki)?tb.*\b) b/i],
                [l, [p, "Zeki"], [d, b]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[p, "Dragon Touch"], l, [d, b]],
                [/\b(ns-?\w{0,9}) b/i],
                [l, [p, "Insignia"], [d, b]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [l, [p, "NextBook"], [d, b]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[p, "Voice"], l, [d, g]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[p, "LvTel"], l, [d, g]],
                [/\b(ph-1) /i],
                [l, [p, "Essential"], [d, g]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [l, [p, "Envizen"], [d, b]],
                [/\b(trio[-\w\. ]+) b/i],
                [l, [p, "MachSpeed"], [d, b]],
                [/\btu_(1491) b/i],
                [l, [p, "Rotor"], [d, b]],
                [/(shield[\w ]+) b/i],
                [l, [p, "Nvidia"], [d, b]],
                [/(sprint) (\w+)/i],
                [p, l, [d, g]],
                [/(kin\.[onetw]{3})/i],
                [
                  [l, /\./g, " "],
                  [p, R],
                  [d, g],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [l, [p, U], [d, b]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [l, [p, U], [d, g]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [p, l, [d, y]],
                [/droid.+; (shield) bui/i],
                [l, [p, "Nvidia"], [d, y]],
                [/(playstation [345portablevi]+)/i],
                [l, [p, L], [d, y]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [l, [p, R], [d, y]],
                [/smart-tv.+(samsung)/i],
                [p, [d, m]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [l, /^/, "SmartTV"],
                  [p, k],
                  [d, m],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [p, x],
                  [d, m],
                ],
                [/(apple) ?tv/i],
                [p, [l, "Apple TV"], [d, m]],
                [/crkey/i],
                [
                  [l, "Chromecast"],
                  [p, A],
                  [d, m],
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [l, [p, _], [d, m]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [l, [p, j], [d, m]],
                [/(bravia[\w ]+)( bui|\))/i],
                [l, [p, L], [d, m]],
                [/(mitv-\w{5}) bui/i],
                [l, [p, N], [d, m]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                [
                  [p, q],
                  [l, q],
                  [d, m],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[d, m]],
                [/((pebble))app/i],
                [p, l, [d, w]],
                [/droid.+; (glass) \d/i],
                [l, [p, A], [d, w]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [l, [p, U], [d, w]],
                [/(quest( 2)?)/i],
                [l, [p, D], [d, w]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [p, [d, E]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [l, [d, g]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [l, [d, b]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[d, b]],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [[d, g]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [l, [p, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [h, [f, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [h, [f, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                ],
                [f, h],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [h, f],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [f, h],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                ],
                [f, [h, G, Y]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [f, "Windows"],
                  [h, G, Y],
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                [
                  [h, /_/g, "."],
                  [f, "iOS"],
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                  [f, "Mac OS"],
                  [h, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, f],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [f, h],
                [/\(bb(10);/i],
                [h, [f, S]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [f, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [h, [f, "Firefox OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [f, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [h, [f, "Chromecast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[f, "Chromium OS"], h],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [f, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[f, "Solaris"], h],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [f, h],
              ],
            },
            z = function (e, t) {
              if ((typeof e === u && ((t = e), (e = i)), !(this instanceof z))) return new z(e, t).getResult();
              var n = e || (typeof o !== s && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                r = t
                  ? (function (e, t) {
                      var n = {};
                      for (var r in e) t[r] && t[r].length % 2 == 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                      return n;
                    })(X, t)
                  : X;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t.name = i),
                    (t.version = i),
                    V.call(t, n, r.browser),
                    (t.major = typeof (e = t.version) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : i),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e.architecture = i), V.call(e, n, r.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (e.vendor = i), (e.model = i), (e.type = i), V.call(e, n, r.device), e;
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e.name = i), (e.version = i), V.call(e, n, r.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (e.name = i), (e.version = i), V.call(e, n, r.os), e;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return n;
                }),
                (this.setUA = function (e) {
                  return (n = typeof e === c && e.length > 350 ? q(e, 350) : e), this;
                }),
                this.setUA(n),
                this
              );
            };
          (z.VERSION = "1.0.33"),
            (z.BROWSER = H([f, h, "major"])),
            (z.CPU = H([v])),
            (z.DEVICE = H([l, p, d, y, g, m, b, w, E])),
            (z.ENGINE = z.OS = H([f, h])),
            typeof t !== s
              ? (e.exports && (t = e.exports = z), (t.UAParser = z))
              : n.amdO
                ? (r = function () {
                    return z;
                  }.call(t, n, t, e)) === i || (e.exports = r)
                : typeof o !== s && (o.UAParser = z);
          var W = typeof o !== s && (o.jQuery || o.Zepto);
          if (W && !W.ua) {
            var K = new z();
            (W.ua = K.getResult()),
              (W.ua.get = function () {
                return K.getUA();
              }),
              (W.ua.set = function (e) {
                K.setUA(e);
                var t = K.getResult();
                for (var n in t) W.ua[n] = t[n];
              });
          }
        })("object" == typeof window ? window : this);
      },
      7429: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "NIL", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(t, "parse", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(t, "stringify", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(t, "v1", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(t, "v3", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(t, "v4", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(t, "v5", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(t, "validate", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(t, "version", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          });
        var r = d(n(3990)),
          o = d(n(8237)),
          i = d(n(5355)),
          a = d(n(3764)),
          s = d(n(6314)),
          u = d(n(8464)),
          c = d(n(6435)),
          l = d(n(4008)),
          f = d(n(8222));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      4163: function (e, t) {
        "use strict";
        function n(e) {
          return 14 + (((e + 64) >>> 9) << 4) + 1;
        }
        function r(e, t) {
          const n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function o(e, t, n, o, i, a) {
          return r(((s = r(r(t, e), r(o, a))) << (u = i)) | (s >>> (32 - u)), n);
          var s, u;
        }
        function i(e, t, n, r, i, a, s) {
          return o((t & n) | (~t & r), e, t, i, a, s);
        }
        function a(e, t, n, r, i, a, s) {
          return o((t & r) | (n & ~r), e, t, i, a, s);
        }
        function s(e, t, n, r, i, a, s) {
          return o(t ^ n ^ r, e, t, i, a, s);
        }
        function u(e, t, n, r, i, a, s) {
          return o(n ^ (t | ~r), e, t, i, a, s);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var c = function (e) {
          if ("string" == typeof e) {
            const t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
          }
          return (function (e) {
            const t = [],
              n = 32 * e.length,
              r = "0123456789abcdef";
            for (let o = 0; o < n; o += 8) {
              const n = (e[o >> 5] >>> o % 32) & 255,
                i = parseInt(r.charAt((n >>> 4) & 15) + r.charAt(15 & n), 16);
              t.push(i);
            }
            return t;
          })(
            (function (e, t) {
              (e[t >> 5] |= 128 << t % 32), (e[n(t) - 1] = t);
              let o = 1732584193,
                c = -271733879,
                l = -1732584194,
                f = 271733878;
              for (let t = 0; t < e.length; t += 16) {
                const n = o,
                  d = c,
                  p = l,
                  h = f;
                (o = i(o, c, l, f, e[t], 7, -680876936)),
                  (f = i(f, o, c, l, e[t + 1], 12, -389564586)),
                  (l = i(l, f, o, c, e[t + 2], 17, 606105819)),
                  (c = i(c, l, f, o, e[t + 3], 22, -1044525330)),
                  (o = i(o, c, l, f, e[t + 4], 7, -176418897)),
                  (f = i(f, o, c, l, e[t + 5], 12, 1200080426)),
                  (l = i(l, f, o, c, e[t + 6], 17, -1473231341)),
                  (c = i(c, l, f, o, e[t + 7], 22, -45705983)),
                  (o = i(o, c, l, f, e[t + 8], 7, 1770035416)),
                  (f = i(f, o, c, l, e[t + 9], 12, -1958414417)),
                  (l = i(l, f, o, c, e[t + 10], 17, -42063)),
                  (c = i(c, l, f, o, e[t + 11], 22, -1990404162)),
                  (o = i(o, c, l, f, e[t + 12], 7, 1804603682)),
                  (f = i(f, o, c, l, e[t + 13], 12, -40341101)),
                  (l = i(l, f, o, c, e[t + 14], 17, -1502002290)),
                  (c = i(c, l, f, o, e[t + 15], 22, 1236535329)),
                  (o = a(o, c, l, f, e[t + 1], 5, -165796510)),
                  (f = a(f, o, c, l, e[t + 6], 9, -1069501632)),
                  (l = a(l, f, o, c, e[t + 11], 14, 643717713)),
                  (c = a(c, l, f, o, e[t], 20, -373897302)),
                  (o = a(o, c, l, f, e[t + 5], 5, -701558691)),
                  (f = a(f, o, c, l, e[t + 10], 9, 38016083)),
                  (l = a(l, f, o, c, e[t + 15], 14, -660478335)),
                  (c = a(c, l, f, o, e[t + 4], 20, -405537848)),
                  (o = a(o, c, l, f, e[t + 9], 5, 568446438)),
                  (f = a(f, o, c, l, e[t + 14], 9, -1019803690)),
                  (l = a(l, f, o, c, e[t + 3], 14, -187363961)),
                  (c = a(c, l, f, o, e[t + 8], 20, 1163531501)),
                  (o = a(o, c, l, f, e[t + 13], 5, -1444681467)),
                  (f = a(f, o, c, l, e[t + 2], 9, -51403784)),
                  (l = a(l, f, o, c, e[t + 7], 14, 1735328473)),
                  (c = a(c, l, f, o, e[t + 12], 20, -1926607734)),
                  (o = s(o, c, l, f, e[t + 5], 4, -378558)),
                  (f = s(f, o, c, l, e[t + 8], 11, -2022574463)),
                  (l = s(l, f, o, c, e[t + 11], 16, 1839030562)),
                  (c = s(c, l, f, o, e[t + 14], 23, -35309556)),
                  (o = s(o, c, l, f, e[t + 1], 4, -1530992060)),
                  (f = s(f, o, c, l, e[t + 4], 11, 1272893353)),
                  (l = s(l, f, o, c, e[t + 7], 16, -155497632)),
                  (c = s(c, l, f, o, e[t + 10], 23, -1094730640)),
                  (o = s(o, c, l, f, e[t + 13], 4, 681279174)),
                  (f = s(f, o, c, l, e[t], 11, -358537222)),
                  (l = s(l, f, o, c, e[t + 3], 16, -722521979)),
                  (c = s(c, l, f, o, e[t + 6], 23, 76029189)),
                  (o = s(o, c, l, f, e[t + 9], 4, -640364487)),
                  (f = s(f, o, c, l, e[t + 12], 11, -421815835)),
                  (l = s(l, f, o, c, e[t + 15], 16, 530742520)),
                  (c = s(c, l, f, o, e[t + 2], 23, -995338651)),
                  (o = u(o, c, l, f, e[t], 6, -198630844)),
                  (f = u(f, o, c, l, e[t + 7], 10, 1126891415)),
                  (l = u(l, f, o, c, e[t + 14], 15, -1416354905)),
                  (c = u(c, l, f, o, e[t + 5], 21, -57434055)),
                  (o = u(o, c, l, f, e[t + 12], 6, 1700485571)),
                  (f = u(f, o, c, l, e[t + 3], 10, -1894986606)),
                  (l = u(l, f, o, c, e[t + 10], 15, -1051523)),
                  (c = u(c, l, f, o, e[t + 1], 21, -2054922799)),
                  (o = u(o, c, l, f, e[t + 8], 6, 1873313359)),
                  (f = u(f, o, c, l, e[t + 15], 10, -30611744)),
                  (l = u(l, f, o, c, e[t + 6], 15, -1560198380)),
                  (c = u(c, l, f, o, e[t + 13], 21, 1309151649)),
                  (o = u(o, c, l, f, e[t + 4], 6, -145523070)),
                  (f = u(f, o, c, l, e[t + 11], 10, -1120210379)),
                  (l = u(l, f, o, c, e[t + 2], 15, 718787259)),
                  (c = u(c, l, f, o, e[t + 9], 21, -343485551)),
                  (o = r(o, n)),
                  (c = r(c, d)),
                  (l = r(l, p)),
                  (f = r(f, h));
              }
              return [o, c, l, f];
            })(
              (function (e) {
                if (0 === e.length) return [];
                const t = 8 * e.length,
                  r = new Uint32Array(n(t));
                for (let n = 0; n < t; n += 8) r[n >> 5] |= (255 & e[n / 8]) << n % 32;
                return r;
              })(e),
              8 * e.length,
            ),
          );
        };
        t.default = c;
      },
      4790: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
        t.default = n;
      },
      6314: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = "00000000-0000-0000-0000-000000000000";
      },
      8222: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r,
          o = (r = n(6435)) && r.__esModule ? r : { default: r };
        var i = function (e) {
          if (!(0, o.default)(e)) throw TypeError("Invalid UUID");
          let t;
          const n = new Uint8Array(16);
          return (
            (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
            (n[1] = (t >>> 16) & 255),
            (n[2] = (t >>> 8) & 255),
            (n[3] = 255 & t),
            (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
            (n[5] = 255 & t),
            (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
            (n[7] = 255 & t),
            (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
            (n[9] = 255 & t),
            (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
            (n[11] = (t / 4294967296) & 255),
            (n[12] = (t >>> 24) & 255),
            (n[13] = (t >>> 16) & 255),
            (n[14] = (t >>> 8) & 255),
            (n[15] = 255 & t),
            n
          );
        };
        t.default = i;
      },
      58: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      },
      3319: function (e, t) {
        "use strict";
        let n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            if (
              !n &&
              ((n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !n)
            )
              throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
              );
            return n(r);
          });
        const r = new Uint8Array(16);
      },
      3757: function (e, t) {
        "use strict";
        function n(e, t, n, r) {
          switch (e) {
            case 0:
              return (t & n) ^ (~t & r);
            case 1:
            case 3:
              return t ^ n ^ r;
            case 2:
              return (t & n) ^ (t & r) ^ (n & r);
          }
        }
        function r(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var o = function (e) {
          const t = [1518500249, 1859775393, 2400959708, 3395469782],
            o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            const t = unescape(encodeURIComponent(e));
            e = [];
            for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          const i = e.length / 4 + 2,
            a = Math.ceil(i / 16),
            s = new Array(a);
          for (let t = 0; t < a; ++t) {
            const n = new Uint32Array(16);
            for (let r = 0; r < 16; ++r)
              n[r] =
                (e[64 * t + 4 * r] << 24) |
                (e[64 * t + 4 * r + 1] << 16) |
                (e[64 * t + 4 * r + 2] << 8) |
                e[64 * t + 4 * r + 3];
            s[t] = n;
          }
          (s[a - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
            (s[a - 1][14] = Math.floor(s[a - 1][14])),
            (s[a - 1][15] = (8 * (e.length - 1)) & 4294967295);
          for (let e = 0; e < a; ++e) {
            const i = new Uint32Array(80);
            for (let t = 0; t < 16; ++t) i[t] = s[e][t];
            for (let e = 16; e < 80; ++e) i[e] = r(i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16], 1);
            let a = o[0],
              u = o[1],
              c = o[2],
              l = o[3],
              f = o[4];
            for (let e = 0; e < 80; ++e) {
              const o = Math.floor(e / 20),
                s = (r(a, 5) + n(o, u, c, l) + f + t[o] + i[e]) >>> 0;
              (f = l), (l = c), (c = r(u, 30) >>> 0), (u = a), (a = s);
            }
            (o[0] = (o[0] + a) >>> 0),
              (o[1] = (o[1] + u) >>> 0),
              (o[2] = (o[2] + c) >>> 0),
              (o[3] = (o[3] + l) >>> 0),
              (o[4] = (o[4] + f) >>> 0);
          }
          return [
            (o[0] >> 24) & 255,
            (o[0] >> 16) & 255,
            (o[0] >> 8) & 255,
            255 & o[0],
            (o[1] >> 24) & 255,
            (o[1] >> 16) & 255,
            (o[1] >> 8) & 255,
            255 & o[1],
            (o[2] >> 24) & 255,
            (o[2] >> 16) & 255,
            (o[2] >> 8) & 255,
            255 & o[2],
            (o[3] >> 24) & 255,
            (o[3] >> 16) & 255,
            (o[3] >> 8) & 255,
            255 & o[3],
            (o[4] >> 24) & 255,
            (o[4] >> 16) & 255,
            (o[4] >> 8) & 255,
            255 & o[4],
          ];
        };
        t.default = o;
      },
      4008: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0), (t.unsafeStringify = a);
        var r,
          o = (r = n(6435)) && r.__esModule ? r : { default: r };
        const i = [];
        for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
        function a(e, t = 0) {
          return (
            i[e[t + 0]] +
            i[e[t + 1]] +
            i[e[t + 2]] +
            i[e[t + 3]] +
            "-" +
            i[e[t + 4]] +
            i[e[t + 5]] +
            "-" +
            i[e[t + 6]] +
            i[e[t + 7]] +
            "-" +
            i[e[t + 8]] +
            i[e[t + 9]] +
            "-" +
            i[e[t + 10]] +
            i[e[t + 11]] +
            i[e[t + 12]] +
            i[e[t + 13]] +
            i[e[t + 14]] +
            i[e[t + 15]]
          ).toLowerCase();
        }
        var s = function (e, t = 0) {
          const n = a(e, t);
          if (!(0, o.default)(n)) throw TypeError("Stringified UUID is invalid");
          return n;
        };
        t.default = s;
      },
      3990: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r,
          o = (r = n(3319)) && r.__esModule ? r : { default: r },
          i = n(4008);
        let a,
          s,
          u = 0,
          c = 0;
        var l = function (e, t, n) {
          let r = (t && n) || 0;
          const l = t || new Array(16);
          let f = (e = e || {}).node || a,
            d = void 0 !== e.clockseq ? e.clockseq : s;
          if (null == f || null == d) {
            const t = e.random || (e.rng || o.default)();
            null == f && (f = a = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
              null == d && (d = s = 16383 & ((t[6] << 8) | t[7]));
          }
          let p = void 0 !== e.msecs ? e.msecs : Date.now(),
            h = void 0 !== e.nsecs ? e.nsecs : c + 1;
          const v = p - u + (h - c) / 1e4;
          if (
            (v < 0 && void 0 === e.clockseq && (d = (d + 1) & 16383),
            (v < 0 || p > u) && void 0 === e.nsecs && (h = 0),
            h >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (u = p), (c = h), (s = d), (p += 122192928e5);
          const y = (1e4 * (268435455 & p) + h) % 4294967296;
          (l[r++] = (y >>> 24) & 255), (l[r++] = (y >>> 16) & 255), (l[r++] = (y >>> 8) & 255), (l[r++] = 255 & y);
          const g = ((p / 4294967296) * 1e4) & 268435455;
          (l[r++] = (g >>> 8) & 255),
            (l[r++] = 255 & g),
            (l[r++] = ((g >>> 24) & 15) | 16),
            (l[r++] = (g >>> 16) & 255),
            (l[r++] = (d >>> 8) | 128),
            (l[r++] = 255 & d);
          for (let e = 0; e < 6; ++e) l[r + e] = f[e];
          return t || (0, i.unsafeStringify)(l);
        };
        t.default = l;
      },
      8237: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r = i(n(7925)),
          o = i(n(4163));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (0, r.default)("v3", 48, o.default);
        t.default = a;
      },
      7925: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.URL = t.DNS = void 0),
          (t.default = function (e, t, n) {
            function r(e, r, a, s) {
              var u;
              if (
                ("string" == typeof e &&
                  (e = (function (e) {
                    e = unescape(encodeURIComponent(e));
                    const t = [];
                    for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                    return t;
                  })(e)),
                "string" == typeof r && (r = (0, i.default)(r)),
                16 !== (null === (u = r) || void 0 === u ? void 0 : u.length))
              )
                throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
              let c = new Uint8Array(16 + e.length);
              if ((c.set(r), c.set(e, r.length), (c = n(c)), (c[6] = (15 & c[6]) | t), (c[8] = (63 & c[8]) | 128), a)) {
                s = s || 0;
                for (let e = 0; e < 16; ++e) a[s + e] = c[e];
                return a;
              }
              return (0, o.unsafeStringify)(c);
            }
            try {
              r.name = e;
            } catch (e) {}
            return (r.DNS = a), (r.URL = s), r;
          });
        var r,
          o = n(4008),
          i = (r = n(8222)) && r.__esModule ? r : { default: r };
        const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        t.DNS = a;
        const s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        t.URL = s;
      },
      5355: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r = a(n(4790)),
          o = a(n(3319)),
          i = n(4008);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = function (e, t, n) {
          if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
          const a = (e = e || {}).random || (e.rng || o.default)();
          if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
            n = n || 0;
            for (let e = 0; e < 16; ++e) t[n + e] = a[e];
            return t;
          }
          return (0, i.unsafeStringify)(a);
        };
        t.default = s;
      },
      3764: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r = i(n(7925)),
          o = i(n(3757));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = (0, r.default)("v5", 80, o.default);
        t.default = a;
      },
      6435: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r,
          o = (r = n(58)) && r.__esModule ? r : { default: r };
        var i = function (e) {
          return "string" == typeof e && o.default.test(e);
        };
        t.default = i;
      },
      8464: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r,
          o = (r = n(6435)) && r.__esModule ? r : { default: r };
        var i = function (e) {
          if (!(0, o.default)(e)) throw TypeError("Invalid UUID");
          return parseInt(e.slice(14, 15), 16);
        };
        t.default = i;
      },
      4642: function (e, t, n) {
        var r = n(3801);
        function o(e) {
          var t, n;
          function o(t, n) {
            try {
              var a = e[t](n),
                s = a.value,
                u = s instanceof r;
              Promise.resolve(u ? s.v : s).then(
                function (n) {
                  if (u) {
                    var r = "return" === t ? "return" : "next";
                    if (!s.k || n.done) return o(r, n);
                    n = e[r](n).value;
                  }
                  i(a.done ? "return" : "normal", n);
                },
                function (e) {
                  o("throw", e);
                },
              );
            } catch (e) {
              i("throw", e);
            }
          }
          function i(e, r) {
            switch (e) {
              case "return":
                t.resolve({ value: r, done: !0 });
                break;
              case "throw":
                t.reject(r);
                break;
              default:
                t.resolve({ value: r, done: !1 });
            }
            (t = t.next) ? o(t.key, t.arg) : (n = null);
          }
          (this._invoke = function (e, r) {
            return new Promise(function (i, a) {
              var s = { key: e, arg: r, resolve: i, reject: a, next: null };
              n ? (n = n.next = s) : ((t = n = s), o(e, r));
            });
          }),
            "function" != typeof e.return && (this.return = void 0);
        }
        (o.prototype[("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"] = function () {
          return this;
        }),
          (o.prototype.next = function (e) {
            return this._invoke("next", e);
          }),
          (o.prototype.throw = function (e) {
            return this._invoke("throw", e);
          }),
          (o.prototype.return = function (e) {
            return this._invoke("return", e);
          }),
          (e.exports = o),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3801: function (e) {
        (e.exports = function (e, t) {
          (this.v = e), (this.k = t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3897: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3405: function (e, t, n) {
        var r = n(3897);
        (e.exports = function (e) {
          if (Array.isArray(e)) return r(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7156: function (e) {
        function t(e, t, n, r, o, i, a) {
          try {
            var s = e[i](a),
              u = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        (e.exports = function (e) {
          return function () {
            var n = this,
              r = arguments;
            return new Promise(function (o, i) {
              var a = e.apply(n, r);
              function s(e) {
                t(a, o, i, s, u, "next", e);
              }
              function u(e) {
                t(a, o, i, s, u, "throw", e);
              }
              s(void 0);
            });
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6737: function (e, t, n) {
        var r = n(3801);
        (e.exports = function (e) {
          return new r(e, 0);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6690: function (e) {
        (e.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9728: function (e, t, n) {
        var r = n(4062);
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, r(o.key), o);
          }
        }
        (e.exports = function (e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8416: function (e, t, n) {
        var r = n(4062);
        (e.exports = function (e, t, n) {
          return (
            (t = r(t)) in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4836: function (e) {
        (e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9498: function (e) {
        (e.exports = function (e) {
          if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
            return Array.from(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      2281: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      215: function (e, t, n) {
        var r = n(7071);
        (e.exports = function (e, t) {
          if (null == e) return {};
          var n,
            o,
            i = r(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
          }
          return i;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7071: function (e) {
        (e.exports = function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7061: function (e, t, n) {
        var r = n(8698).default;
        function o() {
          "use strict";
          (e.exports = o =
            function () {
              return t;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var t = {},
            n = Object.prototype,
            i = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            s = "function" == typeof Symbol ? Symbol : {},
            u = s.iterator || "@@iterator",
            c = s.asyncIterator || "@@asyncIterator",
            l = s.toStringTag || "@@toStringTag";
          function f(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
          }
          try {
            f({}, "");
          } catch (e) {
            f = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function d(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              i = Object.create(o.prototype),
              s = new I(r || []);
            return a(i, "_invoke", { value: P(e, n, s) }), i;
          }
          function p(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = d;
          var h = {};
          function v() {}
          function y() {}
          function g() {}
          var b = {};
          f(b, u, function () {
            return this;
          });
          var m = Object.getPrototypeOf,
            w = m && m(m(x([])));
          w && w !== n && i.call(w, u) && (b = w);
          var E = (g.prototype = v.prototype = Object.create(b));
          function _(e) {
            ["next", "throw", "return"].forEach(function (t) {
              f(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function T(e, t) {
            function n(o, a, s, u) {
              var c = p(e[o], e, a);
              if ("throw" !== c.type) {
                var l = c.arg,
                  f = l.value;
                return f && "object" == r(f) && i.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, s, u);
                      },
                      function (e) {
                        n("throw", e, s, u);
                      },
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (l.value = e), s(l);
                      },
                      function (e) {
                        return n("throw", e, s, u);
                      },
                    );
              }
              u(c.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (e, r) {
                function i() {
                  return new t(function (t, o) {
                    n(e, r, t, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function P(e, t, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return R();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = S(a, n);
                  if (s) {
                    if (s === h) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var u = p(e, t, n);
                if ("normal" === u.type) {
                  if (((r = n.done ? "completed" : "suspendedYield"), u.arg === h)) continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type && ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          }
          function S(e, t) {
            var n = t.method,
              r = e.iterator[n];
            if (void 0 === r)
              return (
                (t.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((t.method = "return"), (t.arg = void 0), S(e, t), "throw" === t.method)) ||
                  ("return" !== n &&
                    ((t.method = "throw"),
                    (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                h
              );
            var o = p(r, e.iterator, t.arg);
            if ("throw" === o.type) return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), h;
            var i = o.arg;
            return i
              ? i.done
                ? ((t[e.resultName] = i.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  h)
                : i
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                h);
          }
          function O(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function I(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(O, this), this.reset(!0);
          }
          function x(e) {
            if (e) {
              var t = e[u];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  r = function t() {
                    for (; ++n < e.length; ) if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (r.next = r);
              }
            }
            return { next: R };
          }
          function R() {
            return { value: void 0, done: !0 };
          }
          return (
            (y.prototype = g),
            a(E, "constructor", { value: g, configurable: !0 }),
            a(g, "constructor", { value: y, configurable: !0 }),
            (y.displayName = f(g, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : ((e.__proto__ = g), f(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(E)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            _(T.prototype),
            f(T.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = T),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new T(d(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            _(E),
            f(E, l, "Generator"),
            f(E, u, function () {
              return this;
            }),
            f(E, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = x),
            (I.prototype = {
              constructor: I,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(A),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(n, r) {
                  return (
                    (a.type = "throw"), (a.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r],
                    a = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var s = i.call(o, "catchLoc"),
                      u = i.call(o, "finallyLoc");
                    if (s && u) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!u) throw new Error("try statement without catch or finally");
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var o = r;
                    break;
                  }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  o ? ((this.method = "next"), (this.next = o.finallyLoc), h) : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                      ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                  h
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), h;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      A(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                  "next" === this.method && (this.arg = void 0),
                  h
                );
              },
            }),
            t
          );
        }
        (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      },
      861: function (e, t, n) {
        var r = n(3405),
          o = n(9498),
          i = n(6116),
          a = n(2281);
        (e.exports = function (e) {
          return r(e) || o(e) || i(e) || a();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      5036: function (e, t, n) {
        var r = n(8698).default;
        (e.exports = function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4062: function (e, t, n) {
        var r = n(8698).default,
          o = n(5036);
        (e.exports = function (e) {
          var t = o(e, "string");
          return "symbol" === r(t) ? t : String(t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8698: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      },
      6116: function (e, t, n) {
        var r = n(3897);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8186: function (e, t, n) {
        var r = n(4642);
        (e.exports = function (e) {
          return function () {
            return new r(e.apply(this, arguments));
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4687: function (e, t, n) {
        var r = n(7061)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
      1104: function (e, t) {
        !(function (e) {
          "use strict";
          var t,
            n,
            r,
            o,
            i,
            a = function () {
              return (
                window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
              );
            },
            s = function (e) {
              if ("loading" === document.readyState) return "loading";
              var t = a();
              if (t) {
                if (e < t.domInteractive) return "loading";
                if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded";
              }
              return "complete";
            },
            u = function (e) {
              var t = e.nodeName;
              return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "");
            },
            c = function (e, t) {
              var n = "";
              try {
                for (; e && 9 !== e.nodeType; ) {
                  var r = e,
                    o = r.id
                      ? "#" + r.id
                      : u(r) + (r.className && r.className.length ? "." + r.className.replace(/\s+/g, ".") : "");
                  if (n.length + o.length > (t || 100) - 1) return n || o;
                  if (((n = n ? o + ">" + n : o), r.id)) break;
                  e = r.parentNode;
                }
              } catch (e) {}
              return n;
            },
            l = -1,
            f = function () {
              return l;
            },
            d = function (e) {
              addEventListener(
                "pageshow",
                function (t) {
                  t.persisted && ((l = t.timeStamp), e(t));
                },
                !0,
              );
            },
            p = function () {
              var e = a();
              return (e && e.activationStart) || 0;
            },
            h = function (e, t) {
              var n = a(),
                r = "navigate";
              return (
                f() >= 0
                  ? (r = "back-forward-cache")
                  : n && (r = document.prerendering || p() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
                {
                  name: e,
                  value: void 0 === t ? -1 : t,
                  rating: "good",
                  delta: 0,
                  entries: [],
                  id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                  navigationType: r,
                }
              );
            },
            v = function (e, t, n) {
              try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                  var r = new PerformanceObserver(function (e) {
                    t(e.getEntries());
                  });
                  return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
                }
              } catch (e) {}
            },
            y = function (e, t) {
              var n = function n(r) {
                ("pagehide" !== r.type && "hidden" !== document.visibilityState) ||
                  (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
              };
              addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
            },
            g = function (e, t, n, r) {
              var o, i;
              return function (a) {
                t.value >= 0 &&
                  (a || r) &&
                  ((i = t.value - (o || 0)) || void 0 === o) &&
                  ((o = t.value),
                  (t.delta = i),
                  (t.rating = (function (e, t) {
                    return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good";
                  })(t.value, n)),
                  e(t));
              };
            },
            b = -1,
            m = function () {
              return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
            },
            w = function () {
              y(function (e) {
                var t = e.timeStamp;
                b = t;
              }, !0);
            },
            E = function () {
              return (
                b < 0 &&
                  ((b = m()),
                  w(),
                  d(function () {
                    setTimeout(function () {
                      (b = m()), w();
                    }, 0);
                  })),
                {
                  get firstHiddenTime() {
                    return b;
                  },
                }
              );
            },
            _ = function (e, t) {
              t = t || {};
              var n,
                r = [1800, 3e3],
                o = E(),
                i = h("FCP"),
                a = function (e) {
                  e.forEach(function (e) {
                    "first-contentful-paint" === e.name &&
                      (u && u.disconnect(),
                      e.startTime < o.firstHiddenTime && ((i.value = e.startTime - p()), i.entries.push(e), n(!0)));
                  });
                },
                s =
                  window.performance &&
                  window.performance.getEntriesByName &&
                  window.performance.getEntriesByName("first-contentful-paint")[0],
                u = s ? null : v("paint", a);
              (s || u) &&
                ((n = g(e, i, r, t.reportAllChanges)),
                s && a([s]),
                d(function (o) {
                  (i = h("FCP")),
                    (n = g(e, i, r, t.reportAllChanges)),
                    requestAnimationFrame(function () {
                      requestAnimationFrame(function () {
                        (i.value = performance.now() - o.timeStamp), n(!0);
                      });
                    });
                }));
            },
            T = !1,
            P = -1,
            S = { passive: !0, capture: !0 },
            O = new Date(),
            A = function (e, o) {
              t || ((t = o), (n = e), (r = new Date()), R(removeEventListener), I());
            },
            I = function () {
              if (n >= 0 && n < r - O) {
                var e = {
                  entryType: "first-input",
                  name: t.type,
                  target: t.target,
                  cancelable: t.cancelable,
                  startTime: t.timeStamp,
                  processingStart: t.timeStamp + n,
                };
                o.forEach(function (t) {
                  t(e);
                }),
                  (o = []);
              }
            },
            x = function (e) {
              if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
                "pointerdown" == e.type
                  ? (function (e, t) {
                      var n = function () {
                          A(e, t), o();
                        },
                        r = function () {
                          o();
                        },
                        o = function () {
                          removeEventListener("pointerup", n, S), removeEventListener("pointercancel", r, S);
                        };
                      addEventListener("pointerup", n, S), addEventListener("pointercancel", r, S);
                    })(t, e)
                  : A(t, e);
              }
            },
            R = function (e) {
              ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
                return e(t, x, S);
              });
            },
            C = function (e, r) {
              r = r || {};
              var i,
                a = [100, 300],
                s = E(),
                u = h("FID"),
                c = function (e) {
                  e.startTime < s.firstHiddenTime &&
                    ((u.value = e.processingStart - e.startTime), u.entries.push(e), i(!0));
                },
                l = function (e) {
                  e.forEach(c);
                },
                f = v("first-input", l);
              (i = g(e, u, a, r.reportAllChanges)),
                f &&
                  y(function () {
                    l(f.takeRecords()), f.disconnect();
                  }, !0),
                f &&
                  d(function () {
                    var s;
                    (u = h("FID")),
                      (i = g(e, u, a, r.reportAllChanges)),
                      (o = []),
                      (n = -1),
                      (t = null),
                      R(addEventListener),
                      (s = c),
                      o.push(s),
                      I();
                  });
            },
            M = 0,
            k = 1 / 0,
            j = 0,
            L = function (e) {
              e.forEach(function (e) {
                e.interactionId &&
                  ((k = Math.min(k, e.interactionId)),
                  (j = Math.max(j, e.interactionId)),
                  (M = j ? (j - k) / 7 + 1 : 0));
              });
            },
            N = function () {
              return i ? M : performance.interactionCount || 0;
            },
            U = function () {
              "interactionCount" in performance ||
                i ||
                (i = v("event", L, { type: "event", buffered: !0, durationThreshold: 0 }));
            },
            D = 0,
            H = function () {
              return N() - D;
            },
            F = [],
            B = {},
            q = function (e) {
              var t = F[F.length - 1],
                n = B[e.interactionId];
              if (n || F.length < 10 || e.duration > t.latency) {
                if (n) n.entries.push(e), (n.latency = Math.max(n.latency, e.duration));
                else {
                  var r = { id: e.interactionId, latency: e.duration, entries: [e] };
                  (B[r.id] = r), F.push(r);
                }
                F.sort(function (e, t) {
                  return t.latency - e.latency;
                }),
                  F.splice(10).forEach(function (e) {
                    delete B[e.id];
                  });
              }
            },
            V = function (e, t) {
              t = t || {};
              var n = [200, 500];
              U();
              var r,
                o = h("INP"),
                i = function (e) {
                  e.forEach(function (e) {
                    e.interactionId && q(e),
                      "first-input" === e.entryType &&
                        !F.some(function (t) {
                          return t.entries.some(function (t) {
                            return e.duration === t.duration && e.startTime === t.startTime;
                          });
                        }) &&
                        q(e);
                  });
                  var t,
                    n = ((t = Math.min(F.length - 1, Math.floor(H() / 50))), F[t]);
                  n && n.latency !== o.value && ((o.value = n.latency), (o.entries = n.entries), r());
                },
                a = v("event", i, { durationThreshold: t.durationThreshold || 40 });
              (r = g(e, o, n, t.reportAllChanges)),
                a &&
                  (a.observe({ type: "first-input", buffered: !0 }),
                  y(function () {
                    i(a.takeRecords()), o.value < 0 && H() > 0 && ((o.value = 0), (o.entries = [])), r(!0);
                  }),
                  d(function () {
                    (F = []), (D = N()), (o = h("INP")), (r = g(e, o, n, t.reportAllChanges));
                  }));
            },
            G = {},
            Y = function e(t) {
              document.prerendering
                ? addEventListener(
                    "prerenderingchange",
                    function () {
                      return e(t);
                    },
                    !0,
                  )
                : "complete" !== document.readyState
                  ? addEventListener(
                      "load",
                      function () {
                        return e(t);
                      },
                      !0,
                    )
                  : setTimeout(t, 0);
            },
            X = function (e, t) {
              t = t || {};
              var n = [800, 1800],
                r = h("TTFB"),
                o = g(e, r, n, t.reportAllChanges);
              Y(function () {
                var i = a();
                if (i) {
                  if (((r.value = Math.max(i.responseStart - p(), 0)), r.value < 0 || r.value > performance.now()))
                    return;
                  (r.entries = [i]),
                    o(!0),
                    d(function () {
                      (r = h("TTFB", 0)), (o = g(e, r, n, t.reportAllChanges))(!0);
                    });
                }
              });
            };
          (e.onCLS = function (e, t) {
            !(function (e, t) {
              t = t || {};
              var n = [0.1, 0.25];
              T ||
                (_(function (e) {
                  P = e.value;
                }),
                (T = !0));
              var r,
                o = function (t) {
                  P > -1 && e(t);
                },
                i = h("CLS", 0),
                a = 0,
                s = [],
                u = function (e) {
                  e.forEach(function (e) {
                    if (!e.hadRecentInput) {
                      var t = s[0],
                        n = s[s.length - 1];
                      a && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3
                        ? ((a += e.value), s.push(e))
                        : ((a = e.value), (s = [e])),
                        a > i.value && ((i.value = a), (i.entries = s), r());
                    }
                  });
                },
                c = v("layout-shift", u);
              c &&
                ((r = g(o, i, n, t.reportAllChanges)),
                y(function () {
                  u(c.takeRecords()), r(!0);
                }),
                d(function () {
                  (a = 0), (P = -1), (i = h("CLS", 0)), (r = g(o, i, n, t.reportAllChanges));
                }));
            })(function (t) {
              !(function (e) {
                if (e.entries.length) {
                  var t = e.entries.reduce(function (e, t) {
                    return e && e.value > t.value ? e : t;
                  });
                  if (t && t.sources && t.sources.length) {
                    var n =
                      (r = t.sources).find(function (e) {
                        return e.node && 1 === e.node.nodeType;
                      }) || r[0];
                    n &&
                      (e.attribution = {
                        largestShiftTarget: c(n.node),
                        largestShiftTime: t.startTime,
                        largestShiftValue: t.value,
                        largestShiftSource: n,
                        largestShiftEntry: t,
                        loadState: s(t.startTime),
                      });
                  }
                } else e.attribution = {};
                var r;
              })(t),
                e(t);
            }, t);
          }),
            (e.onFCP = function (e, t) {
              _(function (t) {
                !(function (e) {
                  if (e.entries.length) {
                    var t = a(),
                      n = e.entries[e.entries.length - 1];
                    if (t) {
                      var r = t.activationStart || 0,
                        o = Math.max(0, t.responseStart - r);
                      e.attribution = {
                        timeToFirstByte: o,
                        firstByteToFCP: e.value - o,
                        loadState: s(e.entries[0].startTime),
                        navigationEntry: t,
                        fcpEntry: n,
                      };
                    }
                  } else e.attribution = { timeToFirstByte: 0, firstByteToFCP: e.value, loadState: s(f()) };
                })(t),
                  e(t);
              }, t);
            }),
            (e.onFID = function (e, t) {
              C(function (t) {
                !(function (e) {
                  var t = e.entries[0];
                  e.attribution = {
                    eventTarget: c(t.target),
                    eventType: t.name,
                    eventTime: t.startTime,
                    eventEntry: t,
                    loadState: s(t.startTime),
                  };
                })(t),
                  e(t);
              }, t);
            }),
            (e.onINP = function (e, t) {
              V(function (t) {
                !(function (e) {
                  if (e.entries.length) {
                    var t = e.entries.sort(function (e, t) {
                      return (
                        t.duration - e.duration ||
                        t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                      );
                    })[0];
                    e.attribution = {
                      eventTarget: c(t.target),
                      eventType: t.name,
                      eventTime: t.startTime,
                      eventEntry: t,
                      loadState: s(t.startTime),
                    };
                  } else e.attribution = {};
                })(t),
                  e(t);
              }, t);
            }),
            (e.onLCP = function (e, t) {
              !(function (e, t) {
                t = t || {};
                var n,
                  r = [2500, 4e3],
                  o = E(),
                  i = h("LCP"),
                  a = function (e) {
                    var t = e[e.length - 1];
                    if (t) {
                      var r = t.startTime - p();
                      r < o.firstHiddenTime && ((i.value = r), (i.entries = [t]), n());
                    }
                  },
                  s = v("largest-contentful-paint", a);
                if (s) {
                  n = g(e, i, r, t.reportAllChanges);
                  var u = function () {
                    G[i.id] || (a(s.takeRecords()), s.disconnect(), (G[i.id] = !0), n(!0));
                  };
                  ["keydown", "click"].forEach(function (e) {
                    addEventListener(e, u, { once: !0, capture: !0 });
                  }),
                    y(u, !0),
                    d(function (o) {
                      (i = h("LCP")),
                        (n = g(e, i, r, t.reportAllChanges)),
                        requestAnimationFrame(function () {
                          requestAnimationFrame(function () {
                            (i.value = performance.now() - o.timeStamp), (G[i.id] = !0), n(!0);
                          });
                        });
                    });
                }
              })(function (t) {
                !(function (e) {
                  if (e.entries.length) {
                    var t = a();
                    if (t) {
                      var n = t.activationStart || 0,
                        r = e.entries[e.entries.length - 1],
                        o =
                          r.url &&
                          performance.getEntriesByType("resource").filter(function (e) {
                            return e.name === r.url;
                          })[0],
                        i = Math.max(0, t.responseStart - n),
                        s = Math.max(i, o ? (o.requestStart || o.startTime) - n : 0),
                        u = Math.max(s, o ? o.responseEnd - n : 0),
                        l = Math.max(u, r ? r.startTime - n : 0),
                        f = {
                          element: c(r.element),
                          timeToFirstByte: i,
                          resourceLoadDelay: s - i,
                          resourceLoadTime: u - s,
                          elementRenderDelay: l - u,
                          navigationEntry: t,
                          lcpEntry: r,
                        };
                      r.url && (f.url = r.url), o && (f.lcpResourceEntry = o), (e.attribution = f);
                    }
                  } else
                    e.attribution = {
                      timeToFirstByte: 0,
                      resourceLoadDelay: 0,
                      resourceLoadTime: 0,
                      elementRenderDelay: e.value,
                    };
                })(t),
                  e(t);
              }, t);
            }),
            (e.onTTFB = function (e, t) {
              X(function (t) {
                !(function (e) {
                  if (e.entries.length) {
                    var t = e.entries[0],
                      n = t.activationStart || 0,
                      r = Math.max(t.domainLookupStart - n, 0),
                      o = Math.max(t.connectStart - n, 0),
                      i = Math.max(t.requestStart - n, 0);
                    e.attribution = {
                      waitingTime: r,
                      dnsTime: o - r,
                      connectionTime: i - o,
                      requestTime: e.value - i,
                      navigationEntry: t,
                    };
                  } else e.attribution = { waitingTime: 0, dnsTime: 0, connectionTime: 0, requestTime: 0 };
                })(t),
                  e(t);
              }, t);
            }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.amdO = {}),
    (n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var e = n(3014);
      !window.AwsRumClient && window.AwsNexusTelemetry && (window.AwsRumClient = window.AwsNexusTelemetry),
        "function" == typeof fetch && "function" == typeof navigator.sendBeacon
          ? new e.CommandQueue().init(window.AwsRumClient)
          : (window[window.AwsRumClient.n] = function () {});
    })();
})();
