;(function () {
  var bE = window,
    ce = bE.document,
    ck,
    s = 4,
    cp = "pwtc",
    cv = "=+=+= ",
    x = "pwtvc",
    cm = "pwtsid",
    ca = "pwtbst",
    H = "pwtaid",
    bN = "pwtecp",
    aX = "pwtaecp",
    cn = "pwtdid",
    ay = "pwtau",
    cg = "pwta",
    m = "pwtcid",
    br = "pwth",
    aQ = "pwtw",
    aW = "kgp",
    cJ = "sk",
    cF = "klm",
    bf = "pubid",
    o = "pid",
    bX = "pdvid",
    bq = "dataURL",
    aI = "winURL",
    cy = "rev_share",
    i = "throttle",
    bI = "config",
    b5 = "divID",
    d = "params",
    A = "sizes",
    Z = "height",
    j = "width",
    a0 = "global",
    aR = "adapters",
    R = "slots",
    K = "kgpv",
    aq = ": In fetchbids.",
    ao = ": Throttled.",
    an = ": adapter must implement the fetchBids() function.",
    al = "BidManager: entry ",
    ak = ": Callback.",
    aj = "bidAlreadExists : ",
    ag = ": Exiting from fetchBids.",
    af = ". Config not found, ignored.",
    ae = ". Config ignored.",
    U = "Bid is rejected as ecpm is NULL.",
    T = "Bid is rejected as ecpm is NaN: ",
    S = "Existing bid ecpm: ",
    Q = ", is lower than new bid ecpm ",
    O = ", so we are replacing bid.",
    L = ", is greater than new bid ecpm ",
    J = ", so we are not replacing bid.",
    G = "Post timeout bid, ignored.",
    F = "Bid is selected.",
    E = ": Found winning adapterID: ",
    v = "Bid is rejected as ecpm is empty string.",
    B = "_W_",
    a1 = "_H_",
    a2 = "_AU_",
    bW = "_AUI_",
    b2 = "_I_",
    bo = "_DIV_",
    b4 = new RegExp(B, "g"),
    aS = new RegExp(a1, "g"),
    aF = new RegExp(a2, "g"),
    by = new RegExp(bW, "g"),
    cD = new RegExp(b2, "g"),
    bT = new RegExp(bo, "g"),
    bK = "adSlotSizes",
    bJ = "adUnitID",
    P = "adUnitIndex",
    bs = "iid",
    aJ = "slt",
    av = "adp",
    aO = "en",
    b = "eg",
    aU = "tst"
  bE.PWT = bE.PWT || {}
  bE.PWT.displayCreative = function (cL, cK) {
    bd(cL, cK)
  }
  var at = Object.prototype.hasOwnProperty,
    aw = function (cK) {
      return bE.location.href.indexOf(cK)
    },
    V = (function () {
      try {
        return aw(cp) >= 0 ? true : false
      } catch (cK) {}
      return false
    })(),
    aD = (function () {
      try {
        if (aw(x) >= 0) {
          V = true
          return true
        }
      } catch (cK) {}
      return false
    })(),
    f = (function () {
      try {
        if (aw("pwtv=") >= 0) {
          return true
        }
      } catch (cK) {}
      return false
    })(),
    ax = function (cM, cS) {
      var cO, cL, cP
      if (aD) {
        cO = ce.getElementById(cM)
        if (cO) {
          cP = cM + "-pwtc-info"
          if (!am(ce.getElementById(cP))) {
            var cQ = bn(cO)
            cL = ce.createElement("div")
            cL.id = cP
            cL.style =
              "position: absolute; /*top: " +
              cQ.y +
              "px;*/ left: " +
              cQ.x +
              "px; width: " +
              cS[0][0] +
              "px; height: " +
              cS[0][1] +
              "px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;"
            var cK = ce.createElement("img")
            cK.src = bQ.protocol + "ads.pubmatic.com/AdServer/js/pwt/close.png"
            cK.style =
              "cursor:pointer; position: absolute; top: 2px; left: " +
              (cQ.x + cS[0][0] - 16 - 15) +
              "px; z-index: 9999998;"
            cK.title = "close"
            cK.onclick = function () {
              cL.style.display = "none"
            }
            cL.appendChild(cK)
            cL.appendChild(ce.createElement("br"))
            var cR = "Slot: " + cM + " | "
            for (var cN = 0; cN < cS.length; cN++) {
              cR += (cN != 0 ? ", " : "") + cS[cN][0] + "x" + cS[cN][1]
            }
            cL.appendChild(ce.createTextNode(cR))
            cL.appendChild(ce.createElement("br"))
            cO.parentNode.insertBefore(cL, cO)
          }
        }
      }
    },
    cj = function (cK) {
      var cM, cL, cN
      if (aD) {
        cM = ce.getElementById(cK)
        if (cM) {
          cN = cK + "-pwtc-info"
          cL = ce.getElementById(cN)
          if (cL) {
            var cO = bn(cM)
            cL.style.visibility = "visible"
            cL.style.left = cO.x + "px"
            cL.style.height = cM.clientHeight + "px"
          }
        }
      }
    },
    cG = function (cK, cM) {
      var cL, cN
      if (aD) {
        var cP = cK + "-pwtc-info"
        cL = ce.getElementById(cP)
        if (cL) {
          switch (cM.type) {
            case "bid":
              var cO = cM.endTime - cM.startTime
              if (cO < 0) {
                cO = 0
              }
              cN =
                "Bid: " +
                cM.bidder +
                ": " +
                cM.bidDetails[bN] +
                "(" +
                cM.bidDetails[aX] +
                "): " +
                cO +
                "ms"
              if (ck + cM.startTime < cM.endTime) {
                cN += ": POST-TIMEOUT"
              }
              break
            case "win-bid":
              cN = "Winning Bid: " + cM.bidDetails[H] + ": " + cM.bidDetails[bN]
              break
            case "win-bid-fail":
              cN = "There are no bids from PWT"
              break
            case "hr":
              cN = "----------------------"
              break
            case "disp":
              cN = "Displaying creative from " + cM.adapter
              break
          }
          cL.appendChild(ce.createTextNode(cN))
          cL.appendChild(ce.createElement("br"))
        }
      }
    },
    n = function (cL, cK) {
      return cL.hasOwnProperty(cK)
    },
    bY = function (cK) {
      try {
        if (cK.parent.document != cK.document) {
          return bY(cK.parent)
        }
      } catch (cL) {}
      return cK
    },
    bn = function (cL) {
      var cO,
        cM,
        cK = 0,
        cN = 0
      if (bg(cL.getBoundingClientRect)) {
        cM = cL.getBoundingClientRect()
        cK = Math.floor(cM.left)
        cN = Math.floor(cM.top)
      } else {
        while (cL) {
          cK += cL.offsetLeft
          cN += cL.offsetTop
          cL = cL.offsetParent
        }
      }
      cO = { x: cK, y: cN }
      return cO
    },
    aK = (function () {
      var cK = 0
      return function () {
        cK++
        return cK
      }
    })(),
    bG = function () {
      return aK() + Math.random().toString(16).substr(2)
    },
    y = function (cK) {
      if (V && console && bg(console.log)) {
        cl(cK) ? console.log(cv + cK) : console.log(cK)
      }
    },
    ct = function () {
      var cK = document.createElement("iframe")
      cK.id = bG()
      cK.height = 0
      cK.width = 0
      cK.border = "0px"
      cK.hspace = "0"
      cK.vspace = "0"
      cK.marginWidth = "0"
      cK.marginHeight = "0"
      cK.style.border = "0"
      cK.scrolling = "no"
      cK.frameBorder = "0"
      cK.src = "about:self"
      cK.style = "display:none"
      return cK
    },
    ci = function (cN, cO, cK, cM, cL) {
      cN.write(
        '<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' +
          cM +
          '" hspace="0" vspace="0" height="' +
          cK +
          '"' +
          (cL ? ' style="' + cL + '"' : "") +
          ' src="' +
          cO +
          '"></iframe>',
      )
    },
    bi = function (cK) {
      var cL = ce.getElementById(cK)
      if (cL) {
        var cM = bn(cL)
        return cM.y + "x" + cM.x
      }
      return "-1x-1"
    },
    cb = function () {
      return Math.round(new Date().getTime() / 1000)
    },
    ah = function () {
      return new Date().getTime()
    },
    bD = function (cM, cL) {
      var cK = ce.createElement("script")
      cK.type = "text/javascript"
      cK.async = true
      cK.src = cM
      if (cL && bg(cL)) {
        if (cK.readyState) {
          cK.onreadystatechange = function () {
            if (cK.readyState == "loaded" || cK.readyState == "complete") {
              cK.onreadystatechange = null
              cL()
            }
          }
        } else {
          cK.onload = function () {
            cL()
          }
        }
      }
      document.getElementsByTagName("script")[0].parentNode.appendChild(cK)
    },
    bu = function (cN) {
      var cK = [],
        cL,
        cM
      for (cL in cN) {
        cM = cN[cL]
        if (n(cN, cL) && cM != undefined && cM !== "") {
          cK.push(cL + "=" + ai(cM))
        }
      }
      return cK.join("&")
    },
    ai = function (cM) {
      var cK = window.encodeURIComponent,
        cN = window.decodeURIComponent
      try {
        cM = cl(cM) ? cM : "" + cM
        cM = cN(cM) === cM ? cK(cM) : cM
        if (
          cM.indexOf("&") >= 0 ||
          cM.indexOf("=") >= 0 ||
          cM.indexOf("?") >= 0
        ) {
          cM = cK(cM)
        }
        return cM
      } catch (cL) {
        return ""
      }
    },
    cw = function (cL, cK) {
      if (n(cL, a0) && n(cL[a0], aR) && n(cL[a0][aR], cK)) {
        return cL[a0][aR][cK]
      }
      return false
    },
    aB = function (cL, cQ) {
      var cP = [],
        cK,
        cN = {},
        cO,
        cM
      if (cL && cL[bK]) {
        cO = cL[bK].length
        if (cO > 0) {
          for (cM = 0; cM < cO; cM++) {
            if (cL[bK][cM][0] && cL[bK][cM][1]) {
              cK = cQ
              cK = cK
                .replace(aF, cL[bJ])
                .replace(b4, cL[bK][cM][0])
                .replace(aS, cL[bK][cM][1])
                .replace(by, cL[P])
                .replace(cD, aK())
                .replace(bT, cL[b5])
              if (!n(cN, cK)) {
                cN[cK] = ""
                cP.push(cK)
              }
            }
          }
        }
      }
      return cP
    },
    cB = function (cN, cK, cM) {
      if (cK && cM) {
        try {
          var cL = cN.defaultView.frameElement
          cL.width = cM
          cL.height = cK
        } catch (cO) {}
      }
    },
    au = function (cL, cK) {
      cB(cL, cK.bid[br], cK.bid[aQ])
      if (cK.bid[cg]) {
        cL.write(cK.bid[cg])
      } else {
        if (cK.bid[ay]) {
          ci(cL, cK.bid[ay], cK.bid[br], cK.bid[aQ], "")
        } else {
          y("creative details are not found")
          y(cK)
        }
      }
      cL.close()
    },
    a5 = function () {
      var cM = new Date().getTime(),
        cK = decodeURIComponent(bQ.u)
          .toLowerCase()
          .replace(/[^a-z,A-Z,0-9]/gi, ""),
        cN = cK.length
      if (bE.performance && bg(bE.performance.now)) {
        cM += performance.now()
      }
      var cL = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(
        /[xyz]/g,
        function (cP) {
          var cO = (cM + Math.random() * 16) % 16 | 0
          cM = Math.floor(cM / 16)
          switch (cP) {
            case "x":
              op = cO
              break
            case "z":
              op = cK[Math.floor(Math.random() * cN)]
              break
            default:
              op = (cO & 3) | 8
          }
          return op.toString(16)
        },
      )
      return cL
    },
    a4 = function (cK, cL) {
      var cM = Object.prototype.toString
      return cM.call(cK) === "[object " + cL + "]"
    },
    bg = function (cK) {
      return a4(cK, "Function")
    },
    cl = function (cK) {
      return a4(cK, "String")
    },
    aV = function (cK) {
      return a4(cK, "Array")
    },
    bU = function (cK) {
      return this.isA(cK, "Number")
    },
    aE = function (cK) {
      return typeof cK === "object"
    },
    am = function (cK) {
      return typeof cK === "undefined"
    },
    bP = function (cL) {
      if (!cL) {
        return true
      }
      if (aV(cL) || cl(cL)) {
        return !(cL.length > 0)
      }
      for (var cK in cL) {
        if (at.call(cL, cK)) {
          return false
        }
      }
      return true
    },
    a7 = function (cM, cN) {
      if (bP(cM)) {
        return
      }
      if (bg(cM.forEach)) {
        return cM.forEach(cN)
      }
      var cL = 0,
        cK = cM.length
      if (cK > 0) {
        for (; cL < cK; cL++) {
          cN(cM[cL], cL, cM)
        }
      } else {
        for (cL in cM) {
          if (at.call(cM, cL)) {
            cN(cM[cL], cL, cM)
          }
        }
      }
    },
    cs = function (cL, cN, cP) {
      var cK = false,
        cO = true
      if (!cL || !aE(cL) || aV(cL)) {
        y(cP + "provided object is invalid.")
        return cK
      }
      if (!aV(cN)) {
        y(cP + "provided keys must be in an array.")
        return cK
      }
      var cQ = cN.length
      if (cQ == 0) {
        return cO
      }
      for (var cM = 0; cM < cQ; cM++) {
        if (!n(cL, cN[cM])) {
          y(cP + ": " + cN[cM] + ", mandatory parameter not present.")
          return cK
        }
      }
      return cO
    },
    l = function (cU, cQ, cS, cL) {
      var cT = cU.length,
        cR,
        cP,
        cK,
        cN,
        cM
      if (cT > 0 && cQ.length > 3) {
        cM = cQ.indexOf(B) >= 0 && cQ.indexOf(a1) >= 0
        for (cR = 0; cR < cT; cR++) {
          cK = aB(cU[cR], cQ)
          cN = cK.length
          for (cP = 0; cP < cN; cP++) {
            var cO = cK[cP]
            cL(cO, cM, cU[cR], cS[cO], cU[cR][bK][cP][0], cU[cR][bK][cP][1])
          }
        }
      }
    },
    bQ = (function () {
      var cN = {},
        cQ = 512,
        cP,
        cL,
        cK,
        cO = window.navigator
      cN.u = ""
      cN.r = ""
      try {
        cP = bY(bE)
        cN.r = (cP.refurl || cP.document.referrer || "").substr(0, cQ)
        cN.u = (
          cP !== top && cP.document.referrer != ""
            ? cP.document.referrer
            : cP.location.href
        ).substr(0, cQ)
        cN.u = ai(cN.u)
        cN.r = ai(cN.r)
      } catch (cM) {}
      cL = cO.userAgent
      cK = cL.indexOf("MSIE")
      cN.IE = cO.appName == "Microsoft Internet Explorer"
      if (cN.IE && cK > 0) {
        cN.IEV = parseInt(cL.substr(cK + 5, 3))
        cN.IE6 = cN.IEV < 7
      }
      cN.protocol = (function () {
        var cR = bY(bE)
        if (cR.location.protocol === "https:") {
          cN.secure = 1
          return "https://"
        }
        cN.secure = 0
        return "http://"
      })()
      return cN
    })()
  var ad = {},
    aC = function (cO, cL) {
      var cP = Math.floor(Math.random() * 100)
      var cM = a5()
      for (var cN in cL) {
        if (n(cL, cN) && cL[cN]) {
          u(cL[cN][bZ], cM)
          b6(cL[cN][bZ], cO)
          w(cL[cN][bZ], aB(cL[cN], "_W_x_H_"))
        }
      }
      for (var cK in ad) {
        if (n(ad, cK)) {
          if (cP >= ba(cK)) {
            for (var cN in cL) {
              if (n(cL, cN) && cL[cN]) {
                bA(cL[cN][bZ], cK)
              }
            }
            ad[cK].fB(cO, cL)
          } else {
            y(cK + ao)
          }
        }
      }
    },
    t = function (cK) {
      if (cK) {
        var cL = cK.ID()
        if (bg(cK.fB)) {
          ad[cL] = cK
        } else {
          y(cL + an)
        }
      }
    },
    b0 = function (cL, cM, cK) {
      if (n(ad, cM)) {
        ad[cM].dC(cL, cK)
      }
    }
  var cC = {},
    aY = {},
    b3 = {},
    bx = {},
    aG = "bid",
    aP = "bidsFromBidders",
    q = "post_timeout",
    bl = "creationTime",
    cA = "callInitiatedTime",
    e = "bidReceivedTime",
    cI = function (cP, cR, cQ, cL, cM, cK, cS, cO) {
      var cN = {}
      cN[bN] = cP
      cN[cn] = cR
      cN[cg] = cL
      cN[ay] = cM
      cN[m] = cQ
      cN[br] = cS
      cN[aQ] = cK
      cN[K] = cO
      return cN
    },
    bm = function (cK) {
      var cL
      if (!n(cC, cK)) {
        cL = {}
        cL[aP] = {}
        cL[bI] = {}
        cL[A] = []
        cL[bl] = ah()
        cC[cK] = cL
      }
    },
    b6 = function (cK, cL) {
      bm(cK)
      cC[cK][bI] = cL
    },
    w = function (cK, cL) {
      bm(cK)
      cC[cK][A] = cL
    },
    bA = function (cK, cL) {
      bm(cK)
      if (!n(cC[cK][aP], cL)) {
        cC[cK][aP][cL] = {}
      }
      cC[cK][aP][cL][cA] = ah()
      y(al + cK + " " + cL + " " + cC[cK][aP][cL][cA])
    },
    C = function (cK, cL, cN) {
      bm(cK)
      if (!n(cC[cK][aP], cL)) {
        cC[cK][aP][cL] = {}
      }
      y(
        "BdManagerSetBid: divID: " +
          cK +
          ", bidderID: " +
          cL +
          ", ecpm: " +
          cN[bN],
      )
      y(aj + n(cC[cK][aP][cL], aG))
      if (cN[bN] == null) {
        y(U)
        return
      }
      if (cl(cN[bN])) {
        cN[bN] = cN[bN].replace(/\s/g, "")
        if (cN[bN].length == 0) {
          y(v)
          return
        }
      }
      if (isNaN(cN[bN])) {
        y(T + cN[bN])
        return
      }
      cN[bN] = parseFloat(cN[bN])
      cN[aX] = parseFloat(cN[bN])
      cN[bN] = parseFloat((cN[bN] * a9(cL)).toFixed(s))
      var cM = ah()
      var cO = cC[cK][bl] + ck < cM ? true : false
      if (n(cC[cK][aP][cL], aG)) {
        if (!cO) {
          if (cC[cK][aP][cL][aG][bN] < cN[bN]) {
            y(S + cC[cK][aP][cL][aG][bN] + Q + cN[bN] + O)
            cC[cK][aP][cL][aG] = cN
            cC[cK][aP][cL][e] = cM
            cC[cK][aP][cL][q] = cO
            cG(cK, {
              type: aG,
              bidder: cL,
              bidDetails: cN,
              startTime: cC[cK][bl],
              endTime: cC[cK][aP][cL][e],
            })
          } else {
            y(S + cC[cK][aP][cL][aG][bN] + L + cN[bN] + J)
          }
        } else {
          y(G)
        }
      } else {
        y(F)
        cC[cK][aP][cL][aG] = cN
        cC[cK][aP][cL][e] = cM
        cC[cK][aP][cL][q] = cO
        cG(cK, {
          type: aG,
          bidder: cL,
          bidDetails: cN,
          startTime: cC[cK][bl],
          endTime: cC[cK][aP][cL][e],
        })
      }
    },
    u = function (cK, cL) {
      cG(cK, { type: "hr" })
      delete cC[cK]
      bm(cK)
      cC[cK][bs] = cL
    },
    W = function (cM) {
      var cL = {}
      cL[bN] = 0
      for (var cK in cM) {
        if (cM[cK] && cM[cK].bid && cM[cK].bid[bN] && cM[cK][q] == false) {
          if (cL[bN] < cM[cK].bid[bN]) {
            cL = cM[cK].bid
            cL[H] = cK
          }
        }
      }
      return cL
    },
    az = function (cK, cM) {
      var cL = {}
      cL[bN] = 0
      if (n(cC, cK)) {
        if (bg(cM)) {
          return cM(cC[cK][aP])
        }
        cL = W(cC[cK][aP])
        cL[ca] = 1
        cC[cK]["ae"] = true
        if (cL[bN] > 0) {
          cC[cK][aP][cL[H]].win = true
          cG(cK, { type: "win-bid", bidDetails: cL })
        } else {
          cG(cK, { type: "win-bid-fail" })
        }
      }
      return cL
    },
    bd = function (cM, cK) {
      if (n(cC, cK)) {
        var cN = ""
        for (var cL in cC[cK][aP]) {
          if (n(cC[cK][aP], cL) && cC[cK][aP][cL].win) {
            cN = cL
            break
          }
        }
        y(cK + E + cN)
        if (n(cC[cK][aP], cN)) {
          b0(cM, cN, cC[cK][aP][cN])
          cG(cK, { type: "disp", adapter: cN })
          p({
            slt: cK,
            adp: cN,
            en: cC[cK][aP][cN][aG][bN],
            eg: cC[cK][aP][cN][aG][aX],
            iid: cC[cK][bs],
            kgpv: cC[cK][aP][cN][aG][K],
          })
        }
      }
    },
    aT = function (cK) {
      if (n(cK, a0) && n(cK[a0], "pwt")) {
        aY = cK[a0]["pwt"]
      }
      bV(cK)
    },
    aa = function () {
      return aY[o]
    },
    r = function () {
      return aY[bX]
    },
    X = function () {
      return aY[bq]
    },
    cq = function () {
      return aY[aI]
    },
    bV = function (cM) {
      if (n(cM, a0) && n(cM[a0], aR)) {
        var cL = cM[a0][aR]
        for (var cK in cL) {
          if (n(cL, cK)) {
            if (n(cL[cK], cy)) {
              b3[cK] = 1 - parseFloat(cL[cK][cy]) / 100
            }
            if (n(cL[cK], i)) {
              bx[cK] = 100 - parseFloat(cL[cK][i])
            }
          }
        }
      }
    },
    a9 = function (cK) {
      if (n(b3, cK)) {
        return b3[cK]
      }
      return 1
    },
    ba = function (cK) {
      if (n(bx, cK)) {
        return bx[cK]
      }
      return 0
    },
    a8 = function () {
      var cQ = {},
        cO = {},
        cU = false,
        cR = "",
        cL = X()
      if (!cL) {
        return
      }
      cO.s = []
      for (var cT in cC) {
        if (!n(cC, cT)) {
          continue
        }
        var cK = cC[cT][bl]
        if (n(cC, cT) && cC[cT].exp != false && cC[cT]["ae"] == true) {
          cC[cT].exp = false
          var cN = { sn: cT, sz: cC[cT][A], ps: [] }
          cQ[cT] = {}
          var cM = cC[cT][aP]
          cR = cC[cT][bs]
          for (var cS in cM) {
            if (cM[cS] && cM[cS].bid) {
              var cP = cM[cS][e]
              cN.ps.push({
                pn: cS,
                kgpv: cM[cS].bid[K],
                psz: cM[cS].bid[aQ] + "x" + cM[cS].bid[br],
                eg: cM[cS].bid[aX],
                en: cM[cS].bid[bN],
                l1: cP - cK,
                l2: 0,
                t: cM[cS][q] == false ? 0 : 1,
                wb: cM[cS]["win"] == true ? 1 : 0,
              })
              cU = true
            }
          }
          cO.s.push(cN)
        }
      }
      if (cU) {
        cO[bf] = aY[bf]
        cO.to = aY.t
        cO.purl = decodeURIComponent(bQ.u)
        cO[aU] = cb()
        cO[bs] = encodeURIComponent(cR)
        cO[o] = aY[o]
        cO[bX] = aY[bX]
        cL += "json=" + encodeURIComponent(JSON.stringify(cO))
      }
      if (cU) {
        new Image().src = bQ.protocol + cL
      }
    },
    p = function (cL) {
      var cK = cq()
      if (!cK) {
        return
      }
      cK += "pubid=" + aY[bf]
      cK += "&purl=" + bQ.u
      cK += "&tst=" + cb()
      cK += "&iid=" + encodeURIComponent(cL[bs])
      cK += "&pid=" + encodeURIComponent(aY[o])
      cK += "&pdvid=" + encodeURIComponent(aY[bX])
      cK += "&slot=" + encodeURIComponent(cL[aJ])
      cK += "&pn=" + encodeURIComponent(cL[av])
      cK += "&en=" + encodeURIComponent(cL[aO])
      cK += "&eg=" + encodeURIComponent(cL[b])
      cK += "&kgpv=" + encodeURIComponent(cL[K])
      new Image().src = bQ.protocol + cK
    }
  var cH = function () {
    bE.bidDetailsMap = bE.bidDetailsMap || {}
    bE.progKeyValueMap = bE.progKeyValueMap || {}
    var cM = "pubmatic",
      cS = "pub_id",
      cW = "pubId",
      cN = "creative_tag",
      cV = "tracking_url",
      cT = 0,
      cU = {},
      cO = false,
      cR = function (cY) {
        var cX = new Date()
        cY.kltstamp =
          cX.getFullYear() +
          "-" +
          (cX.getMonth() + 1) +
          "-" +
          cX.getDate() +
          " " +
          cX.getHours() +
          ":" +
          cX.getMinutes() +
          ":" +
          cX.getSeconds()
        cY.timezone = (cX.getTimezoneOffset() / 60) * -1
      },
      cK = function () {
        if (!cO) {
          setTimeout(function () {
            var cX = ce.createElement("iframe")
            cX.src =
              bQ.protocol +
              "ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" +
              cT +
              "&s=&a="
            cX.style.height = "0px"
            cX.style.width = "0px"
            ce.getElementsByTagName("script")[0].parentNode.appendChild(cX)
            cO = true
          }, 2000)
        }
      },
      cQ = function (c5, cY) {
        var c2 = "",
          c3,
          c4 = bQ.protocol,
          cZ = "haso.pubmatic.com/ads/",
          c0 = [],
          c1 = {},
          cX = { 46076: "", 60530: "", 9999: "", 7777: "" }
        l(c5, cY, {}, function (c8, db, c9, c6, c7, da) {
          c0.push(c8)
          cU[c8] = c9[b5]
        })
        if (c0.length > 0) {
          c1[cW] = cT
          c1.pm_cb = "window.PWT.PubmaticAdapterCallback"
          c1.grs = 3
          c1.a = 1
          c1.sec = bQ.secure
          c1.pageURL = bQ.u
          c1.refurl = bQ.r
          c1.inIframe = bE != top ? "1" : "0"
          c1.screenResolution = bE.screen.width + "x" + bE.screen.height
          c1.ranreq = Math.random()
          c1.profId = aa()
          if (f) {
            c1.verId = r()
          }
          if (navigator.cookieEnabled === false) {
            c1.fpcd = "1"
          }
          cR(c1)
          c3 =
            bE.pm_dm_enabled != true && !n(cX, c1[cW])
              ? "gads.pubmatic.com/AdServer/AdCallAggregator"
              : cZ + c1[cW] + "/GRPBID/index.html"
          c2 = c4 + c3 + "?" + bu(c1)
          c2 += "&adslots=" + encodeURIComponent("[" + c0.join(",") + "]")
        }
        return c2
      },
      cL = function (c0, cY) {
        y(cM + aq)
        var cX = cw(c0, cM)
        if (!cs(cX, [cS, aW, cJ], cM)) {
          y(cM + ag)
          return
        }
        var cZ = cX[cJ]
        if (cZ == false) {
          y(cM + ": " + cJ + " should be true." + ag)
          return
        }
        cT = cX[cS]
        if (cT == 0) {
          y(cM + ": " + cS + " should be non-zero." + ag)
          return
        }
        bD(cQ(cY, cX[aW]))
        cK()
      },
      cP = function (cX, c0, cZ) {
        var c1 = function (c3) {
            var c2 = { 37576: "" }
            return n(c2, c3)
          },
          c0 =
            '<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="0" hspace="0" vspace="0" height="0" style="height:0p;width:0p;display:none;" src="' +
            decodeURIComponent(c0) +
            '"></iframe>',
          cY = (c1(cZ) ? c0 : "") + decodeURIComponent(cX) + (!c1(cZ) ? "" : c0)
        if (bE.PubMaticAI != null) {
          cY = "<span class='PubAdAI'>" + cY + "</span>"
        }
        return cY
      }
    bE.PWT.PubmaticAdapterCallback = function () {
      var cY = bE.progKeyValueMap,
        c2 = bE.bidDetailsMap
      bE.progKeyValueMap = {}
      for (var c1 in cY) {
        if (n(cY, c1)) {
          var c0 = cY[c1].split(";")
          var cX = c0.length
          if (cX == 8) {
            var cZ = cI(
              parseFloat(c0[3]),
              c0[7],
              "",
              cP(c2[c0[5]][cN], c2[c0[5]][cV], cT),
              "",
              c2[c0[5]][j],
              c2[c0[5]][Z],
              c1,
            )
            C(cU[c1], cM, cZ)
          }
        }
      }
    }
    return {
      fB: cL,
      dC: au,
      ID: function () {
        return cM
      },
    }
  }
  t(cH())
  var N = function () {
    var cQ = "appnexus",
      cM = "placementId",
      cK = "AppNexusAdapterCallback",
      cP = "window.PWT." + cK,
      cO = {},
      cN = function (c0, cS, cU, cV) {
        var cW = c0[d]
        var c1 = cW[cM] || ""
        var c2 = cW.memberId || ""
        var cZ = cW.member || ""
        var cY = cW.invCode || ""
        var cT =
          "http" +
          ("https:" === document.location.protocol
            ? "s://secure.adnxs.com/jpt?"
            : "://ib.adnxs.com/jpt?")
        var c3 = {}
        c3.callback = cP
        c3.callback_uid = cS
        c3.psa = "0"
        c3.id = c1
        c3.code = cY
        c3.referrer = cW.referrer || ""
        c3.alt_referrer = cW.alt_referrer || ""
        if (cZ) {
          c3.member = cZ
        } else {
          if (c2) {
            c3.member = c2
          }
        }
        if (cU == 0 && cV == 0) {
          var c4 = c0[A].length
          if (c4 > 0) {
            for (var cX = 0; cX < c4; cX++) {
              if (c0[A][cX][0] && c0[A][cX][1]) {
                var cR = c0[A][cX][0] + "x" + c0[A][cX][1]
                if (cX == 0) {
                  c3.size = cR
                  c3.promo_sizes = []
                } else {
                  c3.promo_sizes.push(cR)
                }
              }
            }
            c3.promo_sizes = c3.promo_sizes.join(",")
          }
        } else {
          c3.size = cU + "x" + cV
        }
        cT += bu(c3)
        return cT
      },
      cL = function (cT, cS) {
        y(cQ + aq)
        var cR = cw(cT, cQ)
        if (!cs(cR, [aW, cF], cQ)) {
          y(cQ + ag)
          return
        }
        var cV = cR[aW]
        var cU = cR[cF]
        l(cS, cV, cU, function (cY, c2, c0, cW, cX, c1) {
          if (!cW) {
            y(cQ + ": " + cY + af)
            return
          }
          if (!cs(cW, [cM], cQ)) {
            y(cQ + ": " + cY + ae)
            return
          }
          var cZ = bG()
          cO[cZ] = {}
          cO[cZ][bI] = { params: cW, divID: c0[b5], sizes: c0[bK], status: "" }
          cO[cZ][K] = cY
          if (!c2) {
            cX = 0
            c1 = 0
          }
          bD(cN(cO[cZ][bI], cZ, cX, c1))
        })
      }
    bE.PWT[cK] = function (cS) {
      y(cQ + ak)
      if (cS && cS.callback_uid) {
        var cW,
          cT,
          cV = cS.callback_uid,
          cR = "",
          cU = cO[cV] && cO[cV][bI] ? cO[cV][bI] : 0
        if (cU) {
          cR = cU[b5]
        }
        if (cS.result && cS.result.cpm && cS.result.cpm !== 0) {
          cW = parseInt(cS.result.cpm, 10)
          cW = cW / 10000
          cT = cI(
            cW,
            cS.result.deal_id,
            cS.result.creative_id,
            "",
            cS.result.ad,
            cS.result.width,
            cS.result.height,
            cO[cV][K],
          )
        } else {
          cT = cI(0, "", "", "", "", 0, 0, cO[cV][K])
        }
        C(cR, cQ, cT)
      }
    }
    return {
      fB: cL,
      dC: au,
      ID: function () {
        return cQ
      },
    }
  }
  t(N())
  var M = function () {
    var cQ = "bRealTime",
      cM = "placementId",
      cK = "BRealTimeAdapterCallback",
      cP = "window.PWT." + cK,
      cO = {},
      cN = function (c0, cS, cU, cV) {
        var cW = c0[d]
        var c1 = cW[cM] || ""
        var c2 = cW.memberId || ""
        var cZ = cW.member || ""
        var cY = cW.invCode || ""
        var cT =
          "http" +
          ("https:" === document.location.protocol
            ? "s://secure.adnxs.com/jpt?"
            : "://ib.adnxs.com/jpt?")
        var c3 = {}
        c3.callback = cP
        c3.callback_uid = cS
        c3.psa = "0"
        c3.id = c1
        c3.code = cY
        c3.referrer = cW.referrer || ""
        c3.alt_referrer = cW.alt_referrer || ""
        if (cZ) {
          c3.member = cZ
        } else {
          if (c2) {
            c3.member = c2
          }
        }
        if (cU == 0 && cV == 0) {
          var c4 = c0[A].length
          if (c4 > 0) {
            for (var cX = 0; cX < c4; cX++) {
              if (c0[A][cX][0] && c0[A][cX][1]) {
                var cR = c0[A][cX][0] + "x" + c0[A][cX][1]
                if (cX == 0) {
                  c3.size = cR
                  c3.promo_sizes = []
                } else {
                  c3.promo_sizes.push(cR)
                }
              }
            }
            c3.promo_sizes = c3.promo_sizes.join(",")
          }
        } else {
          c3.size = cU + "x" + cV
        }
        cT += bu(c3)
        return cT
      },
      cL = function (cT, cS) {
        y(cQ + aq)
        var cR = cw(cT, cQ)
        if (!cs(cR, [aW, cF], cQ)) {
          y(cQ + ag)
          return
        }
        var cV = cR[aW]
        var cU = cR[cF]
        l(cS, cV, cU, function (cY, c2, c0, cW, cX, c1) {
          if (!cW) {
            y(cQ + ": " + cY + af)
            return
          }
          if (!cs(cW, [cM], cQ)) {
            y(cQ + ": " + cY + ae)
            return
          }
          var cZ = bG()
          cO[cZ] = {}
          cO[cZ][bI] = { params: cW, divID: c0[b5], sizes: c0[bK], status: "" }
          cO[cZ][K] = cY
          if (!c2) {
            cX = 0
            c1 = 0
          }
          bD(cN(cO[cZ][bI], cZ, cX, c1))
        })
      }
    bE.PWT[cK] = function (cS) {
      y(cQ + ak)
      if (cS && cS.callback_uid) {
        var cW,
          cT,
          cV = cS.callback_uid,
          cR = "",
          cU = cO[cV] && cO[cV][bI] ? cO[cV][bI] : 0
        if (cU) {
          cR = cU[b5]
        }
        if (cS.result && cS.result.cpm && cS.result.cpm !== 0) {
          cW = parseInt(cS.result.cpm, 10)
          cW = cW / 10000
          cT = cI(
            cW,
            cS.result.deal_id,
            cS.result.creative_id,
            "",
            cS.result.ad,
            cS.result.width,
            cS.result.height,
            cO[cV][K],
          )
        } else {
          cT = cI(0, "", "", "", "", 0, 0, cO[cV][K])
        }
        C(cR, cQ, cT)
      }
    }
    return {
      fB: cL,
      dC: au,
      ID: function () {
        return cQ
      },
    }
  }
  t(M())
  var c = function () {
    var cQ = "districtM",
      cM = "placementId",
      cK = "DistrictMAdapterCallback",
      cP = "window.PWT." + cK,
      cO = {},
      cN = function (c0, cS, cU, cV) {
        var cW = c0[d]
        var c1 = cW[cM] || ""
        var c2 = cW.memberId || ""
        var cZ = cW.member || ""
        var cY = cW.invCode || ""
        var cT =
          "http" +
          ("https:" === document.location.protocol
            ? "s://secure.adnxs.com/jpt?"
            : "://ib.adnxs.com/jpt?")
        var c3 = {}
        c3.callback = cP
        c3.callback_uid = cS
        c3.psa = "0"
        c3.id = c1
        c3.code = cY
        c3.referrer = cW.referrer || ""
        c3.alt_referrer = cW.alt_referrer || ""
        if (cZ) {
          c3.member = cZ
        } else {
          if (c2) {
            c3.member = c2
          }
        }
        if (cU == 0 && cV == 0) {
          var c4 = c0[A].length
          if (c4 > 0) {
            for (var cX = 0; cX < c4; cX++) {
              if (c0[A][cX][0] && c0[A][cX][1]) {
                var cR = c0[A][cX][0] + "x" + c0[A][cX][1]
                if (cX == 0) {
                  c3.size = cR
                  c3.promo_sizes = []
                } else {
                  c3.promo_sizes.push(cR)
                }
              }
            }
            c3.promo_sizes = c3.promo_sizes.join(",")
          }
        } else {
          c3.size = cU + "x" + cV
        }
        cT += bu(c3)
        return cT
      },
      cL = function (cT, cS) {
        y(cQ + aq)
        var cR = cw(cT, cQ)
        if (!cs(cR, [aW, cF], cQ)) {
          y(cQ + ag)
          return
        }
        var cV = cR[aW]
        var cU = cR[cF]
        l(cS, cV, cU, function (cY, c2, c0, cW, cX, c1) {
          if (!cW) {
            y(cQ + ": " + cY + af)
            return
          }
          if (!cs(cW, [cM], cQ)) {
            y(cQ + ": " + cY + ae)
            return
          }
          var cZ = bG()
          cO[cZ] = {}
          cO[cZ][bI] = { params: cW, divID: c0[b5], sizes: c0[bK], status: "" }
          cO[cZ][K] = cY
          if (!c2) {
            cX = 0
            c1 = 0
          }
          bD(cN(cO[cZ][bI], cZ, cX, c1))
        })
      }
    bE.PWT[cK] = function (cS) {
      y(cQ + ak)
      if (cS && cS.callback_uid) {
        var cW,
          cT,
          cV = cS.callback_uid,
          cR = "",
          cU = cO[cV] && cO[cV][bI] ? cO[cV][bI] : 0
        if (cU) {
          cR = cU[b5]
        }
        if (cS.result && cS.result.cpm && cS.result.cpm !== 0) {
          cW = parseInt(cS.result.cpm, 10)
          cW = cW / 10000
          cT = cI(
            cW,
            cS.result.deal_id,
            cS.result.creative_id,
            "",
            cS.result.ad,
            cS.result.width,
            cS.result.height,
            cO[cV][K],
          )
        } else {
          cT = cI(0, "", "", "", "", 0, 0, cO[cV][K])
        }
        C(cR, cQ, cT)
      }
    }
    return {
      fB: cL,
      dC: au,
      ID: function () {
        return cQ
      },
    }
  }
  t(c())
  var bR = function bR() {
    var cQ = "openx",
      cO = "jstag_url",
      cP = "pgid",
      cM = { pageURL: bQ.u, refererURL: bQ.r, pgid: 0 },
      cN = {},
      cL = function (cT, cS) {
        y(cQ + aq)
        var cR = cw(cT, cQ)
        if (!cs(cR, [cO, aW, cF], cQ)) {
          y(cQ + ag)
          return
        }
        var cV = cR[aW]
        var cU = cR[cF]
        var cX = 0
        var cW = cR[cO]
        if (n(cR, cP)) {
          cM[cP] = cR[cP]
        }
        l(cS, cV, cU, function (c0, c4, c2, cY, cZ, c3) {
          if (!cY) {
            y(cQ + ": " + c0 + af)
            return
          }
          if (!cs(cY, ["unit"], cQ)) {
            y(cQ + ": " + c0 + ae)
            return
          }
          var c1 = bG()
          cN[c1] = {}
          cN[c1][bI] = { params: cY, divID: c2[b5], sizes: c2[bK] }
          cN[c1][K] = c0
          cX = 1
        })
        if (cX) {
          cK(cW)
        }
      },
      cK = function (cR) {
        if (cR) {
          bD(cR, function () {
            var cT
            var cS = OX()
            cS.setPageURL(cM.pageURL)
            cS.setRefererURL(cM.refererURL)
            cS.addPage(cM.pgid)
            for (cT in cN) {
              if (n(cN, cT)) {
                cS.addAdUnit(cN[cT][bI][d].unit)
              }
            }
            cS.addHook(function (cY) {
              var cV,
                c0,
                cX,
                cZ,
                c4 = "pub_rev",
                cW = "ad_id",
                c3 = "ad_url",
                cU = "html",
                c2 = "width",
                c1 = "height"
              y(cQ + ak)
              for (cV in cN) {
                if (n(cN, cV) && cN[cV]["exp"] != true) {
                  c0 = cN[cV]
                  cX = cY.getOrCreateAdUnit(c0.config[d].unit)
                  if (cX.get(c4)) {
                    cZ = cI(
                      Number(cX.get(c4)) / 1000,
                      "",
                      cX.get(cW),
                      cX.get(cU),
                      cX.get(c3),
                      cX.get(c2),
                      cX.get(c1),
                      c0[K],
                    )
                  } else {
                    y(cQ + ": Required details not available")
                    cZ = cI(0, "", "", "", "", 0, 0, c0[K])
                  }
                  C(c0.config[b5], cQ, cZ)
                  cN[cV]["exp"] = true
                }
              }
            }, OX.Hooks.ON_AD_RESPONSE)
            cS.load()
          })
        }
      }
    return {
      fB: cL,
      dC: au,
      ID: function () {
        return cQ
      },
    }
  }
  t(bR())
  var bO = function bO() {
    var cL = "rubicon",
      cN = "rp_account",
      cT = "rp_site",
      cR = "rp_zonesize",
      cM = "rp_tracking",
      cW = "rp_inventory",
      cZ = "rp_floor",
      cX = "rp_visitor",
      cS = "",
      cV = {},
      cY = {},
      cK = function (c2, c1) {
        y(cL + aq)
        var c0 = cw(c2, cL)
        if (!cs(c0, [cN, aW, cF], cL)) {
          y(cL + ag)
          return
        }
        cS = c0[cN]
        var c4 = c0[aW]
        var c3 = c0[cF]
        l(c1, c4, c3, function (da, c7, dc, c6, c8, c9) {
          if (!c6) {
            y(cL + ": " + da + af)
            return
          }
          if (!cs(c6, [cT, cR], cL)) {
            y(cL + ": " + da + ae)
            return
          }
          var db = bG()
          bE.PWT.RubiconAdapterCallbacks[db] = new (function () {
            var de = db
            this.callback = function (df) {
              cO(df, de)
            }
          })()
          var c5 = cU({ params: c6 }, db)
          cY[c5] = {}
          cY[c5][bI] = { params: c6, divID: dc[b5], sizes: dc[bK] }
          cY[c5][K] = da
          var dd = cQ(
            cY[c5][bI],
            'window.parent.PWT.RubiconAdapterCallbacks["' + db + '"].callback',
            cY[c5][bI][A][0][0],
            cY[c5][bI][A][0][1],
          )
          cY[c5][bI].iframeID = cP(dd)
        })
      },
      cU = function (c0, c1) {
        return (
          c0[d]
            ? [cS, c0[d].rp_site, c0[d].rp_zonesize, c1]
            : [c0.account_id, c0.site_id, c0.zone_id, c0.size_id, c1]
        ).join("-")
      },
      cP = function (c2) {
        try {
          var c1 = ct()
          if (!c1) {
            throw { message: "Failed to create invisible frame.", name: "" }
          }
          var c0 = document.getElementsByTagName("head")[0]
          c0.insertBefore(c1, c0.firstChild)
          if (!c1.contentWindow) {
            throw { message: "Unable to access frame window.", name: "" }
          }
          var c4 = c1.contentWindow.document
          if (!c4) {
            throw {
              message: "Unable to access frame window document.",
              name: "",
            }
          }
          c4.write(c2)
          c4.close()
          return c1.id
        } catch (c3) {
          y(cL + ": error in calling bids.")
          y(c3)
        }
      },
      cQ = function (c2, c5, c1, c0) {
        var c4 = c2[d]
        cV[c4[cR].split("-")[1]] = { width: c1, height: c0 }
        var c3 =
          '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head>'
        c3 += "<body>"
        c3 += "<script>"
        c3 +=
          'window.rp_account  	= "' +
          cS +
          '";window.rp_site     	= "' +
          c4[cT] +
          '";window.rp_zonesize 	= "' +
          c4[cR] +
          '";window.rp_tracking 	= "' +
          (c4[cM] ? c4[cM] : "") +
          '";window.rp_visitor 		= "' +
          (c4[cX] ? c4[cX] : "{}") +
          '";window.rp_width 		=  ' +
          c1 +
          ";window.rp_height 		=  " +
          c0 +
          ';window.rp_adtype   	= "jsonp";window.rp_inventory 	= "' +
          (c4[cW] ? c4[cW] : "{}") +
          '";window.rp_floor 		= ' +
          (c4[cZ] ? c4[cZ] : "0.00") +
          ";window.rp_callback 	= " +
          c5 +
          ";"
        c3 += "</script>"
        c3 +=
          '<script src="https://ads.rubiconproject.com/ad/' +
          cS +
          '.js"></script>'
        c3 += "</body></html>"
        return c3
      },
      cO = function (c6, c8) {
        var c2 = ""
        y(cL + ak)
        if (c6 && c6.status === "ok") {
          try {
            var c0 = ""
            var c5 = cY[cU(c6, c8)]
            if (c5) {
              c2 = c5[bI][b5]
              c5.status = 1
              c0 = c5[bI].iframeID
            }
            if (c6.ads && c6.ads[0]) {
              var dc = c6.ads[0]
              var dd = cV[c6.size_id]
              var c1 = 0
              var db = 0
              var c7
              if (dc.status != "no-ads") {
                if (dc.size_id) {
                  var c3 = window.frames[c0]
                  var c4 = c3.contentWindow.RubiconAdServing
                  if (c4 && c4.AdSizes) {
                    dd = c4.AdSizes[dc.size_id]
                    var c9 = dd.dim.split("x")
                    c1 = c9[0]
                    db = c9[1]
                  }
                }
                c7 = cI(
                  dc.cpm,
                  "",
                  dc.ad_id,
                  "<script>" + dc.script + "</script>",
                  "",
                  c1,
                  db,
                  c5[K],
                )
              } else {
                c7 = cI(0, "", "", "", "", c1, db, c5[K])
              }
              C(c5[bI][b5], cL, c7)
            }
          } catch (da) {
            y("Error parsing rubicon response bid: " + da.message)
          }
        }
      }
    bE.PWT.RubiconAdapterCallbacks = {}
    return {
      fB: cK,
      dC: au,
      ID: function () {
        return cL
      },
    }
  }
  t(bO())
  bE.cygnus_index_parse_res = function (cM) {
    try {
      if (cM) {
        if (
          !aE(_IndexRequestData) ||
          !aE(_IndexRequestData.impIDToSlotID) ||
          am(_IndexRequestData.impIDToSlotID[cM.id])
        ) {
          return
        }
        var cU = 1
        var cS
        if (
          aE(_IndexRequestData.reqOptions) &&
          aE(_IndexRequestData.reqOptions[cM.id])
        ) {
          if (bg(_IndexRequestData.reqOptions[cM.id].callback)) {
            cS = _IndexRequestData.reqOptions[cM.id].callback
          }
          if (bU(_IndexRequestData.reqOptions[cM.id].targetMode)) {
            cU = _IndexRequestData.reqOptions[cM.id].targetMode
          }
        }
        _IndexRequestData.lastRequestID = cM.id
        _IndexRequestData.targetIDToBid = {}
        _IndexRequestData.targetIDToResp = {}
        var cK = []
        var cR = am(cM.seatbid) ? 0 : cM.seatbid.length
        for (var cO = 0; cO < cR; cO++) {
          for (var cN = 0; cN < cM.seatbid[cO].bid.length; cN++) {
            var cP = cM.seatbid[cO].bid[cN]
            if (!aE(cP.ext) || !cl(cP.ext.pricelevel)) {
              continue
            }
            if (am(_IndexRequestData.impIDToSlotID[cM.id][cP.impid])) {
              continue
            }
            var cT = _IndexRequestData.impIDToSlotID[cM.id][cP.impid]
            if (am(_IndexRequestData.targetIDToBid)) {
              _IndexRequestData.targetIDToBid = {}
            }
            var cL
            if (cl(cP.ext.dealid)) {
              if (cU === 1) {
                cL = cT + cP.ext.pricelevel
              } else {
                cL = cT + "_" + cP.ext.dealid
              }
            } else {
              cL = cT + cP.ext.pricelevel
            }
            if (_IndexRequestData.targetIDToBid[cL] === undefined) {
              _IndexRequestData.targetIDToBid[cL] = [cP.adm]
            } else {
              _IndexRequestData.targetIDToBid[cL].push(cP.adm)
            }
            var cV = {}
            cV.impressionID = cP.impid
            if (!am(cP.ext.dealid)) {
              cV.dealID = cP.ext.dealid
            }
            cV.bid = cP.price
            cV.slotID = cT
            cV.priceLevel = cP.ext.pricelevel
            _IndexRequestData.targetIDToResp[cL] = cV
            cK.push(cV)
          }
        }
        if (bg(cS)) {
          if (cK.length === 0) {
            cS(cM.id)
          } else {
            cS(cM.id, cK)
          }
        }
      }
    } catch (cQ) {}
    if (bg(window.cygnus_index_ready_state)) {
      window.cygnus_index_ready_state()
    }
  }
  bE.cygnus_index_args = { slots: [] }
  var bz = []
  var ab = function () {
    bE.index_slots = []
    bE.cygnus_index_args.parseFn = cygnus_index_parse_res
    function cR(cS) {
      var cU = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      }
      var cT = cU[cS]
      if (cl(cT)) {
        return cT
      } else {
        return "\\u" + ("0000" + cS.charCodeAt(0).toString(16)).slice(-4)
      }
    }
    function cM(cS) {
      var cT =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
      cT.lastIndex = 0
      if (cT.test(cS)) {
        return cS.replace(cT, cR)
      } else {
        return cS
      }
    }
    function cK(cS, cU, cT) {
      this.initialized = false
      if (!bU(cS) || cS % 1 !== 0 || cS < 0) {
        throw "Invalid Site ID"
      }
      if (bU(cT) && cT % 1 === 0 && cT >= 0) {
        this.timeoutDelay = cT
      }
      this.siteID = cS
      this.impressions = []
      this._parseFnName = undefined
      if (top === self) {
        this.sitePage = location.href
        this.topframe = 1
      } else {
        this.sitePage = document.referrer
        this.topframe = 0
      }
      if (!am(cU)) {
        if (bg(cU)) {
          this._parseFnName = "cygnus_index_args.parseFn"
        } else {
          throw "Invalid jsonp target function"
        }
      }
      if (am(_IndexRequestData.requestCounter)) {
        _IndexRequestData.requestCounter = Math.floor(Math.random() * 256)
      } else {
        _IndexRequestData.requestCounter =
          (_IndexRequestData.requestCounter + 1) % 256
      }
      this.requestID = String(
        (new Date().getTime() % 2592000) * 256 +
          _IndexRequestData.requestCounter +
          256,
      )
      this.initialized = true
    }
    cK.prototype.serialize = function () {
      var cT = "{}"
      try {
        cT =
          '{"id":' +
          this.requestID +
          ',"site":{"page":"' +
          cM(this.sitePage) +
          '"'
        if (cl(document.referrer)) {
          cT += ',"ref":"' + cM(document.referrer) + '"'
        }
        cT += '},"imp":['
        for (var cS = 0; cS < this.impressions.length; cS++) {
          var cW = this.impressions[cS]
          var cU = []
          cT +=
            '{"id":"' +
            cW.id +
            '", "banner":{"w":' +
            cW.w +
            ',"h":' +
            cW.h +
            ',"topframe":' +
            String(this.topframe) +
            "}"
          if (bU(cW.bidfloor)) {
            cT += ',"bidfloor":' + cW.bidfloor
            if (cl(cW.bidfloorcur)) {
              cT += ',"bidfloorcur":"' + cM(cW.bidfloorcur) + '"'
            }
          }
          if (cl(cW.slotID) && !cW.slotID.match(/^\s*$/)) {
            cU.push('"sid":"' + cM(cW.slotID) + '"')
          }
          if (bU(cW.siteID)) {
            cU.push('"siteID":' + cW.siteID)
          }
          if (cU.length > 0) {
            cT += ',"ext": {' + cU.join() + "}"
          }
          if (cS + 1 === this.impressions.length) {
            cT += "}"
          } else {
            cT += "},"
          }
        }
        cT += "]}"
      } catch (cV) {
        cT = "{}"
      }
      return cT
    }
    cK.prototype.setPageOverride = function (cS) {
      if (cl(cS) && !cS.match(/^\s*$/)) {
        this.sitePage = cS
        return true
      } else {
        return false
      }
    }
    cK.prototype.addImpression = function (cV, cS, cY, cU, cT, cW) {
      var cZ = { id: String(this.impressions.length + 1) }
      try {
        if (!bU(cV) || cV <= 1) {
          return null
        }
        if (!bU(cS) || cS <= 1) {
          return null
        }
        if ((cl(cT) || bU(cT)) && String(cT).length <= 50) {
          cZ.slotID = String(cT)
        }
        cZ.w = cV
        cZ.h = cS
        if (cY !== undefined && !bU(cY)) {
          return null
        }
        if (bU(cY)) {
          if (cY < 0) {
            return null
          }
          cZ.bidfloor = cY
          if (cU !== undefined && !cl(cU)) {
            return null
          }
          cZ.bidfloorcur = cU
        }
        if (!am(cW)) {
          if (bU(cW) && cW % 1 === 0 && cW >= 0) {
            cZ.siteID = cW
          } else {
            return null
          }
        }
        this.impressions.push(cZ)
      } catch (cX) {}
      return cZ.id
    }
    cK.prototype.buildRequest = function () {
      if (this.impressions.length === 0 || this.initialized !== true) {
        return
      }
      var cT = encodeURIComponent(this.serialize())
      var cS =
        window.location.protocol === "https:"
          ? "https://as-sec.casalemedia.com"
          : "http://as.casalemedia.com"
      cS +=
        "/cygnus?v=7&fn=cygnus_index_parse_res&pid=pm&s=" +
        this.siteID +
        "&r=" +
        cT
      if (
        bU(this.timeoutDelay) &&
        this.timeoutDelay % 1 === 0 &&
        this.timeoutDelay >= 0
      ) {
        cS += "&t=" + this.timeoutDelay
      }
      return cS
    }
    try {
      if (
        am(cygnus_index_args) ||
        am(cygnus_index_args.siteID) ||
        am(cygnus_index_args[R])
      ) {
        return
      }
      if (am(window._IndexRequestData)) {
        window._IndexRequestData = {}
        window._IndexRequestData.impIDToSlotID = {}
        window._IndexRequestData.reqOptions = {}
      }
      var cO = new cK(
        cygnus_index_args.siteID,
        cygnus_index_args.parseFn,
        cygnus_index_args.timeout,
      )
      if (cygnus_index_args.url && cl(cygnus_index_args.url)) {
        cO.setPageOverride(cygnus_index_args.url)
      }
      _IndexRequestData.impIDToSlotID[cO.requestID] = {}
      _IndexRequestData.reqOptions[cO.requestID] = {}
      var cL, cQ
      for (var cN = 0; cN < cygnus_index_args[R].length; cN++) {
        cL = cygnus_index_args[R][cN]
        if (cL.used == true) {
          continue
        }
        cQ = cO.addImpression(
          cL.width,
          cL.height,
          cL.bidfloor,
          cL.bidfloorcur,
          cL.id,
          cL.siteID,
        )
        if (cQ) {
          _IndexRequestData.impIDToSlotID[cO.requestID][cQ] = String(cL.id)
          cL.used = true
        }
      }
      if (bU(cygnus_index_args.targetMode)) {
        _IndexRequestData.reqOptions[cO.requestID].targetMode =
          cygnus_index_args.targetMode
      }
      if (bg(cygnus_index_args.callback)) {
        _IndexRequestData.reqOptions[cO.requestID].callback =
          cygnus_index_args.callback
      }
      return cO.buildRequest()
    } catch (cP) {
      y("Error calling index adapter")
    } finally {
      _IndexRequestData.targetIDToBid = {}
    }
  }
  var co = function co() {
    var cQ = "indexExchange",
      cL = {},
      cK = 0,
      cP = function (cR, cS, cZ, cV, cU, cT) {
        var cX = {
          "728x90": 1,
          "120x600": 1,
          "300x250": 1,
          "160x600": 1,
          "336x280": 1,
          "234x60": 1,
          "300x600": 1,
          "300x50": 1,
          "320x50": 1,
          "970x250": 1,
          "300x1050": 1,
          "970x90": 1,
          "180x150": 1,
        }
        try {
          cT = "" + cT
          if (!n(cX, cR + "x" + cS)) {
            return
          }
          if (ck && am(cygnus_index_args.timeout)) {
            cygnus_index_args.timeout = ck
          }
          var cW = Number(cV.siteID)
          if (!cW) {
            return
          }
          if (cW && am(cygnus_index_args.siteID)) {
            cygnus_index_args.siteID = cW
          }
          cL[cT] = {}
          cL[cT][b5] = cU[b5]
          cL[cT][K] = cZ
          cygnus_index_args[R] = cO(
            {
              id: cT,
              width: cR,
              height: cS,
              siteID: cW || cygnus_index_args.siteID,
            },
            cygnus_index_args[R],
          )
        } catch (cY) {}
      },
      cN = function (cU, cT) {
        y(cQ + aq)
        var cR = cw(cU, cQ)
        if (!cs(cR, [aW, cF], cQ)) {
          y(cQ + ag)
          return
        }
        var cW = cR[aW]
        var cV = cR[cF]
        l(cT, cW, cV, function (c1, cY, c4, cX, cZ, c0) {
          if (!cX) {
            y(cQ + ": " + c1 + af)
            return
          }
          if (!cs(cX, ["siteID"], cQ)) {
            y(cQ + ": " + c1 + ae)
            return
          }
          if (cY) {
            cK++
            cP(cZ, c0, c1, cX, c4, cK)
          } else {
            var c5 = c4[bK],
              c3 = c5.length
            for (var c2 = 0; c2 < c3; c2++) {
              cK++
              cP(c5[c2][0], c5[c2][1], c1, cX, c4, cK)
            }
          }
        })
        cygnus_index_primary_request = false
        var cS = ab()
        if (cS) {
          bD(cS)
        }
      },
      cO = function (cT, cS) {
        for (var cR = 0; cR < cS.length; cR++) {
          if (cT.id === cS[cR].id) {
            return cS
          }
        }
        cS.push(cT)
        return cS
      },
      cM = function (cT, cU) {
        var cR = cT[R]
        var cS = {}
        a7(cR, function (cV) {
          if (cV.id === cU) {
            cS = cV
          }
        })
        return cS
      }
    bE.cygnus_index_ready_state = function () {
      var cV = {}
      try {
        var c0 = _IndexRequestData.targetIDToBid
        for (var cW in cL) {
          if (!n(cL, cW)) {
            continue
          }
          var cT = cL[cW]
          for (var cU in c0) {
            if (!n(c0, cU)) {
              continue
            }
            var cX = /^(.+)_(\d+)$/.exec(cU)
            var cZ = cX[1]
            var cS = cX[2]
            var cR = cM(cygnus_index_args, cZ)
            if (cZ === cW && cR.width && cR.height && cR.siteID) {
              cV = cI(
                cS / 100,
                "",
                "",
                c0[cU][0],
                "",
                cR.width,
                cR.height,
                cT[K],
              )
              C(cT[b5], cQ, cV)
            } else {
              y(cQ + ": slotObj details not found.")
            }
          }
        }
      } catch (cY) {
        y("Error in parsing index adapter response")
        y(cY)
      }
    }
    return {
      fB: cN,
      dC: au,
      ID: function () {
        return cQ
      },
    }
  }
  t(co())
  var cu = function cu() {
    window.ybotq = window.ybotq || []
    var cK = "yieldbot",
      cP = "psn",
      cN = "slot",
      cR = "",
      cT = {},
      cS = "//cdn.yldbt.com/js/yieldbot.intent.js",
      cM = function (cX, cV) {
        y(cK + aq)
        var cU = cw(cX, cK)
        if (!cs(cU, [cP, aW, cF], cK)) {
          y(cK + ag)
          return
        }
        var cZ = cU[aW]
        var cY = cU[cF]
        cR = cU[cP]
        var cW = []
        l(cV, cZ, cY, function (c2, c6, c4, c0, c1, c5) {
          if (!c0) {
            y(cK + ": " + c2 + af)
            return
          }
          if (!cs(c0, [cN], cK)) {
            y(cK + ": " + c2 + ae)
            return
          }
          if (cR && c0[cN]) {
            var c3 = bG()
            cT[c3] = {}
            cT[c3][bI] = { params: c0, divID: c4[b5], sizes: c4[bK] }
            cT[c3][K] = c2
            cW.push(c3)
          }
        })
        if (cW.length) {
          ybotq.push(function () {
            var c0 = window.yieldbot
            a7(cW, function (c2) {
              if (n(cT, c2)) {
                var c1 = cT[c2][bI]
                c0.pub(cR)
                c0.defineSlot(c1[d].slot, { sizes: c1[A] || [] })
              }
            })
            c0.enableAsync()
            c0.go()
          })
          ybotq.push(function () {
            cL()
          })
          bD(cS)
        } else {
          y(cK + ": definedSlots are empty.")
        }
      },
      cL = function () {
        var cX = window.yieldbot
        for (var cV in cT) {
          var cU
          if (n(cT, cV) && cT[cV].exp != true) {
            cT[cV].exp = true
            cU = cT[cV][bI] || {}
            var cY = cX.getSlotCriteria(cU[d].slot || "")
            var cW = cO(cY, cT[cV][K])
            C(cU[b5], cK, cW)
          }
        }
      },
      cO = function (cX, cZ) {
        var cV = {}
        if (cX && cX.ybot_ad && cX.ybot_ad !== "n") {
          var cU = cX.ybot_size ? cX.ybot_size.split("x") : [0, 0],
            cY = cX.ybot_slot || "",
            cW = cX.ybot_size || ""
          cV = cI(
            parseInt(cX.ybot_cpm) / 100 || 0,
            "",
            "",
            cQ(cY, cW),
            "",
            cU[0] || 0,
            cU[1] || 0,
            cZ,
          )
        } else {
          cV = cI(0, "", "", "", "", 0, 0, cZ)
        }
        return cV
      },
      cQ = function (cV, cU) {
        return (
          '<script type="text/javascript" src="' +
          cS +
          '"></script><script type="text/javascript">var ybotq = ybotq || [];ybotq.push(function () {yieldbot.renderAd(\'' +
          cV.toLowerCase() +
          ":" +
          cU +
          "');});</script>"
        )
      }
    return {
      fB: cM,
      dC: au,
      ID: function () {
        return cK
      },
    }
  }
  t(cu())
  var be = function () {
    var cQ = "adform",
      cR = "adx.adform.net",
      cP = "adxDomain",
      cN = "mid",
      cM = function (cV, c1) {
        y(cQ + aq)
        try {
          var cS = cw(cV, cQ)
          if (!cs(cS, [aW, cF], cQ)) {
            y(cQ + ag)
            return
          }
          var cU = cS[aW]
          var cZ = cS[cF]
          if (n(cS, cP)) {
            cR = cS[cP]
          }
          var cY,
            cX = [],
            cT = [],
            c0 = function (c3, c2, c6, c5, c4, c7) {
              c3.w = c4
              c3.h = c7
              cX.push({ params: c3, divID: c2, sizes: c6, kgpv: c5 })
              cT.push(cK(c3))
            }
          l(c1, cU, cZ, function (c7, c3, c9, c2, c4, c6) {
            if (!c2) {
              y(cQ + ": " + c7 + af)
              return
            }
            if (!cs(c2, [cN], cQ)) {
              y(cQ + ": " + c7 + ae)
              return
            }
            if (c3) {
              c0(c2, c9[b5], c9[bK], c7, c4, c6)
            } else {
              var da = c9[bK]
              var c8 = da.length
              for (var c5 = 0; c5 < c8; c5++) {
                c0(c2, c9[b5], c9[bK], c7, da[c5][0], da[c5][1])
              }
            }
          })
          if (cX.length > 0) {
            cY = bG()
            bE.PWT.AdFormAdapterCallbacks[cY] = new (function () {
              var c2 = cX
              this.callback = function (c3) {
                cL(c3, c2)
              }
            })()
            cT.unshift("//" + cR + "/adx/?rp=4")
            cT.push(
              'callback=window.PWT.AdFormAdapterCallbacks["' +
                cY +
                '"].callback',
            )
            bD(cT.join("&"))
          } else {
            y(cQ + ", Not calling as there are no selected slots.")
          }
        } catch (cW) {}
      },
      cK = function (cV) {
        var cX
        var cU = []
        var cS = [
          "mid",
          "inv",
          "pdom",
          "mname",
          "mkw",
          "mkv",
          "cat",
          "bcat",
          "bcatrt",
          "adv",
          "advt",
          "cntr",
          "cntrt",
          "maxp",
          "minp",
          "sminp",
          "w",
          "h",
          "pb",
          "pos",
          "cturl",
          "iturl",
          "cttype",
          "hidedomain",
          "cdims",
          "test",
        ]
        try {
          for (var cW = 0, cT = cS.length; cW < cT; cW++) {
            cX = cS[cW]
            if (cV.hasOwnProperty(cX)) {
              cU.push(cX, "=", cV[cX], "&")
            }
          }
        } catch (cY) {}
        return btoa(cU.join(""))
      },
      cL = function (cZ, cS) {
        var cV, cU
        try {
          for (var cW = 0, cT = cZ.length; cW < cT; cW++) {
            cU = cZ[cW]
            var cX = cS[cW]
            if (cX && cU && cU.response === "banner" && cO(cU, cX[A])) {
              cV = cI(
                cU.win_bid,
                "",
                "",
                cU.banner,
                "",
                cU.width,
                cU.height,
                cX[K],
              )
              C(cX[b5], cQ, cV)
            } else {
              y(
                cQ +
                  ": invalid adItem. Either response is not banner or slot sizes are not matching.",
              )
            }
          }
        } catch (cY) {}
      },
      cO = function (cU, cS) {
        try {
          for (var cV = 0, cT = cS.length; cV < cT; cV++) {
            if (cU.width == cS[cV][0] && cU.height == cS[cV][1]) {
              return true
            }
          }
        } catch (cW) {}
        return false
      }
    bE.PWT.AdFormAdapterCallbacks = {}
    return {
      fB: cM,
      dC: au,
      ID: function () {
        return cQ
      },
    }
  }
  t(be())
  var cx = false,
    Y = {},
    bh = true,
    ch = false,
    D = 0,
    a3 = 1,
    bt = 2,
    cr = 3,
    g = "adSlot",
    h = "adSlotSizes",
    b1 = "adUnitID",
    bc = "adUnitIndex",
    bZ = "divID",
    bH = "status",
    bv = "isDisplayFunctionCalled",
    bM = "isRefreshFunctionCalled",
    ar = "arguments",
    bw,
    cd,
    aN,
    aH,
    b9,
    ap,
    bp,
    ac = false,
    bC = {},
    bj = {},
    I = {},
    cf = {},
    z = function (cM) {
      var cK = 0
      try {
        cK = cM.getSlotId().getId().split("_")
        cK = cK[cK.length - 1]
      } catch (cL) {}
      return cK
    },
    a = function (cO) {
      var cK,
        cN,
        cL,
        cM,
        cP = []
      if (bg(cO.getSizes)) {
        cK = cO.getSizes()
        cN = cK.length
        for (cL = 0; cL < cN; cL++) {
          cM = cK[cL]
          cP.push([cM.getWidth(), cM.getHeight()])
        }
      }
      return cP
    },
    bk = function (cL, cK) {
      if (!n(bC, cL)) {
        bC[cL] = {}
        bC[cL][bZ] = cL
        bC[cL][g] = cK
        bC[cL][b1] = cK.getAdUnitPath()
        bC[cL][bc] = z(cK)
        bC[cL][h] = a(cK)
        bC[cL][bH] = D
        bC[cL][bv] = false
        bC[cL][bM] = false
        bC[cL][ar] = []
        bC[cL]["position"] = bi(cL)
        ax(cL, bC[cL][h])
      }
    },
    bB = function (cV, cT) {
      var cK = [],
        cN,
        cM,
        cP,
        cQ,
        cL,
        cU,
        cS,
        cR,
        cO
      if (bE.googletag && bg(bE.googletag.pubads)) {
        cK = bE.googletag.pubads().getSlots()
        cN = cK.length
        for (cS = 0; cS < cN; cS++) {
          cM = cK[cS]
          cP = cM.getSlotId().getDomId()
          bk(cP, cM)
          if (bh && JSON && bg(JSON.stringify)) {
            cQ = cM.getTargetingKeys()
            cU = cQ.length
            for (cR = 0; cR < cU; cR++) {
              if (am(cf[cP])) {
                cf[cP] = {}
              }
              cL = cQ[cR]
              cf[cP][cL] = cM.getTargeting(cL)
            }
          }
          if (cT && n(bC, cP)) {
            cO = cV[0]
            if (cO && cO == bC[cP][bZ]) {
              bC[cP][bv] = true
              bC[cP][ar] = cV
            }
          }
        }
      }
    },
    aM = function (cK) {
      var cL = cr
      if (n(bC, cK)) {
        cL = bC[cK][bH]
      }
      return cL
    },
    k = function (cK, cM) {
      var cL = {}
      cL[bH] = cr
      cL[ar] = []
      cL[cM ? bM : bv] = false
      aL(cK, cL)
    },
    aL = function (cK, cL) {
      var cM
      if (n(bC, cK)) {
        for (cM in cL) {
          if (n(cL, cM)) {
            bC[cK][cM] = cL[cM]
          }
        }
      }
    },
    cc = function (cM) {
      var cK,
        cL = []
      for (cK in bC) {
        if (n(cM, bC[cK][bH])) {
          cL.push(cK)
        }
      }
      return cL
    },
    b8 = function (cN) {
      var cO, cQ, cP, cL, cK, cM
      if (cN in bC) {
        cQ = []
        cL = {}
        cO = bC[cN][g]
        cQ = cO.getTargetingKeys()
        cK = cQ.length
        for (cM = 0; cM < cK; cM++) {
          cP = cQ[cM]
          if (!n(I, cP)) {
            cL[cP] = cO.getTargeting(cP)
          }
        }
        cO.clearTargeting()
        for (cP in cL) {
          if (n(cL, cP)) {
            cO.setTargeting(cP, cL[cP])
          }
        }
      }
    },
    cz = function (cO, cK, cP) {
      var cN = cO.length,
        cL,
        cM
      if (cN > 0) {
        for (cL = 0; cL < cN; cL++) {
          cM = cO[cL]
          bC[cM][bH] = a3
          if (cP) {
            b8(cM)
            bC[cM][bM] = true
            bC[cM][ar] = cK
          }
        }
      }
    },
    aZ = function (cN) {
      var cM = cN.length,
        cL,
        cK = []
      if (cM > 0) {
        for (cL = 0; cL < cM; cL++) {
          cK.push(bC[cN[cL]])
        }
      }
      return cK
    },
    bL = function (cK) {
      var cL = az(cK)
      y("DIV: " + cK + " winningBid: ")
      y(cL)
      if (cL[bN] > 0) {
        bC[cK][bH] = bt
        var cM = bC[cK][g]
        cM.setTargeting(cm, cK)
        cM.setTargeting(ca, cL[ca])
        cM.setTargeting(bN, cL[bN].toFixed(s))
        cM.setTargeting(cn, cL[cn])
      }
    },
    aA = function () {
      if (cx) {
        return
      }
      cx = true
      y("Adding hook on googletag.display")
      bw.display = function () {
        y("In display function, with arguments: ")
        y(arguments)
        var cL = arguments,
          cK,
          cN,
          cM = []
        if (ch) {
          y("DisableInitialLoad was called, Nothing to do")
          return aN.apply(this, cL)
        } else {
          y("Generating slotsMap")
          bB(cL, true)
          y(bC)
          cK = aM(cL[0])
          switch (cK) {
            case D:
            case a3:
              setTimeout(function () {
                y("PostTimeout.. back in display function")
                var cQ = function (cR) {
                  if (n(bC, cR) && bC[cR][bH] != cr && bC[cR][bH] != bt) {
                    bL(cR)
                  }
                }
                for (var cP in bC) {
                  cQ(cP)
                }
                var cO = aM(cL[0])
                if (cO != cr) {
                  y(
                    "calling original display function after timeout with arguments, ",
                  )
                  y(cL)
                  k(cL[0], false)
                  aN.apply(bE.googletag, cL)
                } else {
                  y("AdSlot already rendered")
                }
              }, ck)
              break
            case bt:
              y(
                "As DM processing is already done, Calling original display function with arguments",
              )
              y(cL)
              k(cL[0], false)
              aN.apply(bE.googletag, cL)
              break
            case cr:
              k(cL[0], false)
              aN.apply(bE.googletag, cL)
              break
          }
          cN = cc({ 0: "" })
          if (cN.length > 0) {
            cz(cN, cL, false)
            cM = aZ(cN)
            aC(Y, cM)
          }
          setTimeout(function () {
            cj(cL[0])
            a8()
          }, 2000 + ck)
        }
      }
    },
    bS = function () {
      if ((b9 = cd && cd.disableInitialLoad)) {
        cd.disableInitialLoad = function () {
          ch = true
          y("Disable Initial Load is called")
          var cK = arguments
          return b9.apply(this, cK)
        }
      }
    },
    bF = function () {
      if ((bp = cd && cd.enableSingleRequest)) {
        cd.enableSingleRequest = function () {
          y("enableSingleRequest is called")
          var cK = arguments
          ac = true
          aA()
          return bp.apply(this, cK)
        }
      }
    },
    b7 = function () {
      if ((ap = cd && cd.setTargeting)) {
        cd.setTargeting = function () {
          var cK = arguments,
            cL = cK[0] ? cK[0] : null
          aA()
          if (cL != null) {
            if (!n(bj, cL)) {
              bj[cL] = []
            }
            bj[cL] = bj[cL].concat(cK[1])
          }
          return ap.apply(cd, cK)
        }
      }
    },
    bb = function () {
      if ((aH = cd && cd.refresh)) {
        cd.refresh = function () {
          var cK = arguments,
            cN = [],
            cO,
            cP = [],
            cL,
            cM
          y("In Refresh function")
          bB(cK, false)
          if (cK.length == 0) {
            cN = bE.googletag.pubads().getSlots()
          } else {
            cN = cK[0] == null ? bE.googletag.pubads().getSlots() : cK[0]
          }
          cO = cN.length
          for (cM = 0; cM < cO; cM++) {
            cP = cP.concat(cN[cM].getSlotId().getDomId())
          }
          if (cP.length > 0) {
            cz(cP, cK, true)
            cL = aZ(cP)
            aC(Y, cL)
          }
          y(
            "Intiating Call to original refresh function with timeout: " +
              ck +
              " ms",
          )
          setTimeout(function () {
            y("Executing post timeout events, arguments: ")
            y(cK)
            var cS,
              cR,
              cQ,
              cU = false,
              cT
            cT = cP.length
            for (cS = 0; cS < cT; cS++) {
              cR = cP[cS]
              cQ = bC[cR][bZ]
              if (n(bC, cR) && bC[cR][bM] == true && bC[cR][bH] != cr) {
                bL(cQ)
                k(cQ, true)
                cU = true
              }
            }
            setTimeout(function () {
              for (cS = 0; cS < cT; cS++) {
                var cV = cP[cS]
                ax(bC[cV][bZ], bC[cV][h])
                cj(bC[cV][bZ])
              }
            }, 2000 + ck)
            a8()
            if (cU) {
              y("Calling original refresh function from Timeout")
              aH.apply(bE.googletag.pubads(), cK)
            } else {
              y("AdSlot already rendered")
            }
          }, ck)
        }
      }
    },
    cE = function () {
      bw = bE.googletag
      cd = bw.pubads()
      aN = bw && bw.display
      bS()
      bF()
      aA()
      bb()
      b7()
    }
  var a6 = function (cK) {
    Y = cK
    aT(Y)
    ck = parseInt(Y[a0].pwt.t || 1000)
    I[cm] = ""
    I[ca] = ""
    I[bN] = ""
    I[cn] = ""
    bE.googletag = bE.googletag || {}
    bE.googletag.cmd = bE.googletag.cmd || []
    if (am(bE.google_onload_fired) && bE.googletag.cmd.unshift) {
      y("Succeeded to load before GPT")
      bE.googletag.cmd.unshift(function () {
        y("PubMatic initialization started")
        cE()
        y("PubMatic initialization completed")
      })
    } else {
      y("Failed to load before GPT")
    }
    if (bg(bE.PWT.jsLoaded)) {
      bE.PWT.jsLoaded()
    }
  }
  a6(bE.pm_config || {})
})()
