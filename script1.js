document.getElementById("button").onclick = function() {
    //https://cors-anywhere.herokuapp.com/
    //https://allow-any-origin.appspot.com/
    var URL = document.getElementById('urlid').value;
    var xhttp = new XMLHttpRequest()
    var found = URL.search("https://quizizz.com/join/game/");
    if (found == 0) { found = true }
    if (found) {
        document.getElementById("tableanswers").innerHTML = "";
        document.getElementById("tableans").style.display = 'none';
        document.getElementById("tableans").style.display = 'block';
        if (!window.idiidk) {
            window.idiidk = function() {
                const offset = 33;
                class Encoding {
                    static encode(t, e, o = 2) {
                        const s = this.encodeRaw(e, !0);
                        return `${s}${this.encodeRaw(t,!1,e)}${String.fromCharCode(33+s.length)}${o}`
                    }
                    static encodeRaw(t, e, o = "quizizz.com") {
                        let s = 0;
                        s = e ? o.charCodeAt(0) : o.charCodeAt(0) + o.charCodeAt(o.length - 1);
                        const r = [];
                        for (let o = 0; o < t.length; o++) {
                            const n = t[o].charCodeAt(0),
                                c = e ? this.safeAdd(n, s) : this.addOffset(n, s, o, 2);
                            r.push(String.fromCharCode(c))
                        }
                        return r.join("")
                    }
                    static decode(t, e = !1) {
                        if (e) {
                            const e = this.extractHeader(t);
                            return this.decodeRaw(e, !0)
                        } {
                            const e = this.decode(this.extractHeader(t), !0),
                                o = this.extractData(t);
                            return this.decodeRaw(o, !1, e)
                        }
                    }
                    static decodeRaw(t, e, o = "quizizz.com") {
                        const s = this.extractVersion(t);
                        let r = 0;
                        r = e ? o.charCodeAt(0) : o.charCodeAt(0) + o.charCodeAt(o.length - 1), r = -r;
                        const n = [];
                        for (let o = 0; o < t.length; o++) {
                            const c = t[o].charCodeAt(0),
                                a = e ? this.safeAdd(c, r) : this.addOffset(c, r, o, s);
                            n.push(String.fromCharCode(a))
                        }
                        return n.join("")
                    }
                    static addOffset(t, e, o, s) {
                        return 2 === s ? this.verifyCharCode(t) ? this.safeAdd(t, o % 2 == 0 ? e : -e) : t : this.safeAdd(t, o % 2 == 0 ? e : -e)
                    }
                    static extractData(t) {
                        const e = t.charCodeAt(t.length - 2) - 33;
                        return t.slice(e, -2)
                    }
                    static extractHeader(t) {
                        const e = t.charCodeAt(t.length - 2) - 33;
                        return t.slice(0, e)
                    }
                    static extractVersion(t) {
                        if ("string" == typeof t && t[t.length - 1]) {
                            const e = parseInt(t[t.length - 1], 10);
                            if (!isNaN(e)) return e
                        }
                        return null
                    }
                    static safeAdd(t, e) {
                        const o = t + e;
                        return o > 65535 ? o - 65535 + 0 - 1 : o < 0 ? 65535 - (0 - o) + 1 : o
                    }
                    static verifyCharCode(t) {
                        if ("number" == typeof t) return !(t >= 55296 && t <= 56319 || t >= 56320 && t <= 57343)
                    }
                    static generateIdentifier(t, e, o = 1, s = (new Date).getTime()) {
                        let r = e;
                        return "function" == typeof e && (r = e()), "".concat(t, ".").concat(r, "|").concat(o, ".").concat(s)
                    }
                }
                /*const prevConx = localStorage.getItem("previousContext"),
                    parsedConx = JSON.parse(prevConx),
                    encodedRoomHash = parsedConx.game.roomHash,
                    roomHash = Encoding.decode(encodedRoomHash.split("-")[1]),
                    data = {
                        roomHash: roomHash,
                        type: GameType
                    };*/
                var GameType = URL.slice(URL.search("gameType=") + 9, URL.length);
                //parsedConx = JSON.parse(prevConx),
                //encodedRoomHash = parsedConx.game.roomHash,
                //roomHash = Encoding.decode(encodedRoomHash.split("-")[1]),
                encodedRoomHash = "roomHash-ãààÞ¹ÒäÙďﾋļﾋļｚċ｜ŀ～Ļﾌċ～ĊｖċﾈľﾊčｘČ～)2",
                    roomHash = Encoding.decode(encodedRoomHash.split("-")[1]),
                    data = {
                        roomHash: roomHash,
                        type: GameType
                    };
                fetch("https://cors-anywhere.herokuapp.com/https://game.quizizz.com/play-api/v3/getQuestions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(t => t.json()).then(t => {
                    let e = 0;
                    for (const o of Object.keys(t.questions)) {
                        e++;
                        const s = t.questions[o],
                            r = s.structure.kind,
                            n = s.structure.answer,
                            c = Encoding.decode(n);
                        const tr = document.createElement('tr');
                        tr.innerHTML = `<td >` + `${s.structure.query.text}` + `</td>`;
                        if (s.type != "OPEN") {
                            if (c[0] == "[") {
                                newc = c.slice(1, c.length - 1)
                                newc = newc.split(",");
                                // c has been turned into an array :)
                                if (s.type == "BLANK") {
                                    for (let i = 0; i < s.structure.options.length; i++) {
                                        var answer = s.structure.options[i].text || s.structure.options[i].media[0].url;
                                        tr.innerHTML += `<td >` + answer + `</td>`;
                                    }
                                } else {
                                    for (let i = 0; i < newc.length; i++) {
                                        var answer = s.structure.options[Number(newc[i])].text || s.structure.options[Number(newc[i])].media[0].url;
                                        tr.innerHTML += `<td >` + answer + `</td>`;
                                    }
                                }
                            } else {
                                if (c == -1) {
                                    var answer = "Optional";
                                } else {
                                    var answer = s.structure.options[c].text || s.structure.options[c].media[0].url;
                                }
                                tr.innerHTML += `<td >` + answer + `</td>`;
                            }
                        } else {
                            var answer = "Optional";
                            tr.innerHTML += `<td >` + answer + `</td>`;
                        }
                        document.getElementById('tableanswers').appendChild(tr);
                    }
                });
            }
            window.idiidk();
        } else {
            window.idiidk();
        }
    }

}