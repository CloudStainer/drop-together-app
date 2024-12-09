"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1458],
  {
    28036: function (e, t, n) {
      n.d(t, {
        AH: function () {
          return c;
        },
        C0: function () {
          return I;
        },
        Mk: function () {
          return v;
        },
        Nx: function () {
          return h;
        },
        Q8: function () {
          return f;
        },
        Rb: function () {
          return C;
        },
        SE: function () {
          return A;
        },
        Tn: function () {
          return u;
        },
        Vg: function () {
          return b;
        },
        WC: function () {
          return r;
        },
        Wo: function () {
          return T;
        },
        Xz: function () {
          return y;
        },
        cq: function () {
          return g;
        },
        hf: function () {
          return o;
        },
        jf: function () {
          return l;
        },
        lw: function () {
          return x;
        },
        nr: function () {
          return m;
        },
        rR: function () {
          return p;
        },
        v7: function () {
          return s;
        },
        vj: function () {
          return w;
        },
        wg: function () {
          return d;
        },
      });
      var a = n(13471),
        i = n(65014);
      let s = (0, a.cn)(void 0),
        r = (0, a.cn)(""),
        l = (0, a.cn)(""),
        d = (0, a.cn)(void 0),
        u = (0, a.cn)(!1),
        o = (0, a.cn)(void 0),
        p = (0, a.cn)(void 0),
        c = (0, a.cn)(void 0),
        y = (0, a.cn)(void 0),
        m = (0, a.cn)(void 0),
        b = (0, a.cn)(void 0),
        f = (0, a.cn)(void 0),
        h = (0, a.cn)(0),
        T = (0, a.cn)(void 0),
        v = (0, a.cn)(
          (() => {
            let e = localStorage.getItem(i.dA.vaultIds);
            return e ? e.split(",") : [];
          })()
        ),
        w = (0, a.cn)(0),
        g = (0, a.cn)(void 0),
        x = (0, a.cn)(void 0),
        C = (0, a.cn)(0.5),
        I = (0, a.cn)(void 0),
        A = (0, a.cn)(void 0);
    },
    89622: function (e, t, n) {
      n.d(t, {
        A: function () {
          return f;
        },
      });
      var a = n(97458),
        i = n(2371),
        s = n(80027),
        r = n(7048),
        l = n(87608),
        d = n.n(l),
        u = n(22870),
        o = n.n(u),
        p = n(63168),
        c = n.n(p),
        y = n(30914),
        m = n.n(y);
      let b = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)("div", {
            className: d()("flex flex-col gap-2 items-center", t),
            children: [
              (0, a.jsx)("span", {
                className: "text-sm text-pt-teal-dark",
                children: "Powered By",
              }),
              (0, a.jsx)(c(), {
                src: "/ptLogo.svg",
                alt: "PoolTogether Logo",
                width: 183,
                height: 72,
                className: "w-28 h-auto",
              }),
            ],
          });
        },
        f = (e) => {
          let { children: t, isSidebarActive: n, className: i } = e;
          return (0, a.jsxs)("div", {
            className: "flex flex-col min-h-screen overflow-x-hidden",
            children: [
              (0, a.jsx)(o(), {
                children: (0, a.jsx)("title", { children: "Cabana Factory" }),
              }),
              (0, a.jsx)(h, {}),
              (0, a.jsx)(s.x7, {}),
              n &&
                (0, a.jsx)("div", {
                  className:
                    "fixed hidden w-[28rem] h-screen bg-pt-transparent lg:block",
                }),
              (0, a.jsx)("main", {
                className: d()(
                  "w-full min-h-[calc(100vh-16rem)] relative flex flex-col items-center mx-auto py-10 md:py-0 lg:px-4",
                  i
                ),
                children: t,
              }),
              (0, a.jsx)(T, { isSidebarActive: n }),
            ],
          });
        },
        h = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)("div", {
            className: d()(
              "flex flex-col gap-6 items-center justify-between px-12 py-6 z-30 md:h-36 md:flex-row md:py-0",
              t
            ),
            children: [
              (0, a.jsx)(m(), {
                href: "/",
                className: "lg:w-[22rem] lg:mr-12",
                children: (0, a.jsx)(c(), {
                  src: "/cabanaLogo.svg",
                  alt: "Cabana Logo",
                  width: 177,
                  height: 60,
                  priority: !0,
                  className: "w-52 h-auto mx-auto md:mx-0",
                }),
              }),
              (0, a.jsx)(i.NL, {
                showBalance: !1,
                chainStatus: { smallScreen: "icon", largeScreen: "full" },
                accountStatus: "full",
              }),
            ],
          });
        },
        T = (e) => {
          let { isSidebarActive: t, className: n } = e;
          return (0, a.jsxs)("footer", {
            className: d()(
              "flex flex-col gap-6 items-center mt-auto p-6 overflow-hidden z-20 lg:h-28 lg:flex-row lg:gap-0 lg:p-0",
              n
            ),
            children: [
              (0, a.jsx)("div", {
                className: d()({
                  "lg:w-[28rem]": t,
                  "lg:absolute lg:right-8": !t,
                }),
                children: (0, a.jsx)(b, { className: "mx-auto" }),
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2 items-center mx-auto",
                children: [
                  (0, a.jsxs)("span", {
                    className: "inline-block text-center text-sm font-medium",
                    children: [
                      "Made with ❤️ & \uD83E\uDD16 by",
                      " ",
                      (0, a.jsx)("a", {
                        href: "https://g9software.xyz",
                        target: "_blank",
                        className: "hover:text-pt-teal",
                        children: "Generation Software",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("span", {
                    className: "text-xs font-medium text-pt-pink",
                    children: [
                      "By using this app you are agreeing to our",
                      " ",
                      (0, a.jsx)(m(), {
                        href: r.BAY.termsOfService,
                        target: "_blank",
                        className: "hover:underline",
                        children: "Terms and Conditions",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    33905: function (e, t, n) {
      n.d(t, {
        g: function () {
          return l;
        },
      });
      var a = n(97458),
        i = n(80027),
        s = n(87608),
        r = n.n(s);
      let l = (e) => {
        let { children: t, className: n, innerClassName: s, ...l } = e;
        return (0, a.jsx)(i.zx, {
          color: "purple",
          className: r()(
            "bg-pt-purple-600 border-pt-purple-600 hover:bg-pt-purple-700 focus:outline-transparent",
            n
          ),
          ...l,
          children: (0, a.jsx)("span", {
            className: r()("text-pt-purple-50 whitespace-nowrap", s),
            children: t,
          }),
        });
      };
    },
    13287: function (e, t, n) {
      n.d(t, {
        J: function () {
          return d;
        },
      });
      var a = n(97458),
        i = n(87608),
        s = n.n(i),
        r = n(52983),
        l = n(85466);
      let d = (e) => {
        var t;
        let {
            formKey: n,
            id: i,
            validate: d,
            placeholder: u,
            defaultValue: o,
            label: p,
            hideErrorMsgs: c,
            autoFocus: y,
            disabled: m,
            needsOverride: b,
            keepValueOnOverride: f,
            onOverride: h,
            className: T,
            labelClassName: v,
            innerClassName: w,
            errorClassName: g,
          } = e,
          { register: x, formState: C, setValue: I } = (0, l.Gc)(),
          A = (0, l.qo)(),
          [P, M] = (0, r.useState)(!1),
          D = null === (t = C.errors[n]) || void 0 === t ? void 0 : t.message;
        return (0, a.jsxs)("div", {
          className: s()("flex flex-col gap-2", T),
          children: [
            (0, a.jsxs)("label", {
              htmlFor: null != i ? i : n,
              className: s()("flex items-center justify-between text-sm", v),
              children: [
                (0, a.jsx)("span", {
                  className: "font-medium text-pt-purple-100",
                  children: p,
                }),
                b &&
                  !P &&
                  (0, a.jsx)("span", {
                    onClick: () => {
                      f || I(n, ""), M(!0), null == h || h(!0);
                    },
                    className: "text-pt-teal-dark cursor-pointer underline",
                    children: "override",
                  }),
              ],
            }),
            (0, a.jsx)("input", {
              id: null != i ? i : n,
              ...x(n, { validate: d }),
              placeholder: u,
              defaultValue: o,
              autoFocus: y,
              disabled: m || (b && !P),
              onBlur: () => {
                ((b && !A[n]) || A[n] === o) &&
                  (I(n, o, { shouldValidate: !0 }), M(!1), null == h || h(!1));
              },
              className: s()(
                "px-3 py-2 text-sm leading-tight rounded-lg border outline outline-1",
                "md:px-4 md:py-3",
                {
                  "bg-pt-purple-50 text-gray-700 border-gray-300":
                    !b || (b && P),
                  "bg-transparent text-pt-teal-dark border-pt-teal": b && !P,
                  "brightness-75": m,
                  ["outline-red-600 ".concat(g)]: !!D,
                  "outline-transparent": !D,
                },
                w
              ),
            }),
            !c &&
              (0, a.jsx)("span", {
                className: "text-xs text-pt-warning-light",
                children: D,
              }),
          ],
        });
      };
    },
    41579: function (e, t, n) {
      n.d(t, {
        py: function () {
          return v;
        },
        dt: function () {
          return B;
        },
        T1: function () {
          return A;
        },
        WA: function () {
          return O;
        },
        HD: function () {
          return N;
        },
        K7: function () {
          return S;
        },
        Yt: function () {
          return R;
        },
        Cf: function () {
          return Z;
        },
        dV: function () {
          return $;
        },
        aO: function () {
          return ea;
        },
      });
      var a = n(97458),
        i = n(7048),
        s = n(87608),
        r = n.n(s),
        l = n(80027);
      let d = (e) => {
          let { chainId: t, className: n } = e;
          if (t in T) {
            let e = T[t].svgIcon;
            return (0, a.jsx)(e, { className: r()("rounded-full", n) });
          }
          return (0, a.jsx)(l._k, { content: "?", className: n });
        },
        u = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 25",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_1136_2204)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M12.5 24.5C19.1274 24.5 24.5 19.1274 24.5 12.5C24.5 5.87258 19.1274 0.5 12.5 0.5C5.87258 0.5 0.5 5.87258 0.5 12.5C0.5 19.1274 5.87258 24.5 12.5 24.5Z",
                    fill: "#627EEA",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.873 3.5V10.1525L18.4958 12.665L12.873 3.5Z",
                    fill: "white",
                    fillOpacity: "0.602",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.8735 3.5L7.25 12.665L12.8735 10.1525V3.5Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.873 16.9759V21.4962L18.4995 13.7119L12.873 16.9759Z",
                    fill: "white",
                    fillOpacity: "0.602",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.8735 21.4962V16.9752L7.25 13.7119L12.8735 21.4962Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.873 15.93L18.4958 12.6653L12.873 10.1543V15.93Z",
                    fill: "white",
                    fillOpacity: "0.2",
                  }),
                  (0, a.jsx)("path", {
                    d: "M7.25 12.6653L12.8735 15.93V10.1543L7.25 12.6653Z",
                    fill: "white",
                    fillOpacity: "0.602",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_1136_2204",
                  children: (0, a.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white",
                    transform: "translate(0.5 0.5)",
                  }),
                }),
              }),
            ],
          }),
        o = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsx)("rect", {
                width: "28",
                height: "28",
                fill: "#8247E5",
                rx: "14",
              }),
              (0, a.jsx)("rect", {
                width: "28",
                height: "28",
                fill: "url(#a)",
                fillOpacity: ".3",
                rx: "14",
              }),
              (0, a.jsx)("path", {
                fill: "#fff",
                d: "M18.28 10.92a1.06 1.06 0 0 0-1.06 0l-2.41 1.42-1.65.93-2.41 1.43c-.31.19-.72.19-1.06 0l-1.92-1.12a1.07 1.07 0 0 1-.53-.9v-2.2a1 1 0 0 1 .53-.9l1.9-1.08c.3-.18.7-.18 1.04 0l1.9 1.09c.3.18.52.52.52.9v1.42l1.64-.96V9.52a1 1 0 0 0-.52-.9l-3.5-2.04a1.06 1.06 0 0 0-1.06 0L6.13 8.63a1 1 0 0 0-.53.9v4.12a1 1 0 0 0 .53.9l3.56 2.04c.31.19.71.19 1.06 0l2.41-1.4 1.65-.95 2.41-1.4c.31-.19.72-.19 1.06 0l1.89 1.09c.3.18.53.52.53.9v2.2a1 1 0 0 1-.53.9l-1.9 1.11c-.3.19-.7.19-1.05 0l-1.89-1.08a1.07 1.07 0 0 1-.52-.9v-1.43l-1.65.96v1.43a1 1 0 0 0 .53.9l3.56 2.04c.31.19.72.19 1.06 0l3.56-2.04c.31-.19.53-.53.53-.9v-4.13a1 1 0 0 0-.53-.9l-3.6-2.07Z",
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                  id: "a",
                  x1: "0",
                  x2: "14",
                  y1: "0",
                  y2: "28",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                  ],
                }),
              }),
            ],
          }),
        p = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsx)("rect", {
                width: "28",
                height: "28",
                fill: "#FF3131",
                rx: "14",
              }),
              (0, a.jsx)("rect", {
                width: "28",
                height: "28",
                fill: "url(#a)",
                fillOpacity: ".3",
                rx: "14",
              }),
              (0, a.jsx)("path", {
                fill: "#fff",
                d: "M9.22 18.35c2.7 0 4.86-2.2 4.86-5.38 0-2.19-1.47-3.8-3.98-3.8-2.72 0-4.85 2.2-4.85 5.38 0 2.2 1.5 3.8 3.97 3.8Zm.83-7.35c1.06 0 1.74.81 1.74 2.1 0 1.9-1.11 3.42-2.51 3.42-1.06 0-1.74-.82-1.74-2.1 0-1.89 1.11-3.42 2.5-3.42Zm6.38-1.68-1.88 8.88h2.26l.55-2.6h1.47c2.43 0 4.01-1.38 4.01-3.6 0-1.61-1.17-2.68-3.1-2.68h-3.3Zm1.9 1.74h.94c.83 0 1.3.38 1.3 1.14 0 1-.68 1.7-1.74 1.7h-1.11l.6-2.84Z",
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                  id: "a",
                  x1: "0",
                  x2: "14",
                  y1: "0",
                  y2: "28",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                  ],
                }),
              }),
            ],
          }),
        c = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsx)("rect", {
                width: "26.6",
                height: "26.6",
                x: ".7",
                y: ".7",
                fill: "#2D374B",
                stroke: "#96BEDC",
                strokeWidth: "1.4",
                rx: "13.3",
              }),
              (0, a.jsx)("mask", {
                id: "a",
                width: "28",
                height: "28",
                x: "0",
                y: "0",
                maskUnits: "userSpaceOnUse",
                style: { maskType: "alpha" },
                children: (0, a.jsx)("rect", {
                  width: "28",
                  height: "28",
                  fill: "#C4C4C4",
                  rx: "14",
                }),
              }),
              (0, a.jsxs)("g", {
                mask: "url(#a)",
                children: [
                  (0, a.jsx)("path", {
                    fill: "#28A0F0",
                    d: "m14.0861 18.6041 6.5014 10.2239 4.0057-2.3213-7.86-12.3943-2.6471 4.4917Zm13.0744 3.4692-.003-1.8599-7.3064-11.407-2.3087 3.9173 7.091 11.4303 2.172-1.2586a.9628.9628 0 0 0 .3555-.7009l-.0004-.1212Z",
                  }),
                  (0, a.jsx)("rect", {
                    width: "25.9",
                    height: "25.9",
                    x: "1.05",
                    y: "1.05",
                    fill: "url(#b)",
                    fillOpacity: ".3",
                    stroke: "#96BEDC",
                    strokeWidth: "2.1",
                    rx: "12.95",
                  }),
                  (0, a.jsx)("path", {
                    fill: "#fff",
                    d: "m.3634 28.2207-3.07-1.7674-.234-.8333L7.7461 9.0194c.7298-1.1913 2.3197-1.575 3.7957-1.5541l1.7323.0457L.3634 28.2207ZM19.1655 7.511l-4.5653.0166L2.24 27.9533l3.6103 2.0788.9818-1.6652L19.1655 7.511Z",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                  id: "b",
                  x1: "0",
                  x2: "14",
                  y1: "0",
                  y2: "28",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                  ],
                }),
              }),
            ],
          }),
        y = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1503 1504",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsx)("rect", {
                x: "287",
                y: "258",
                width: "928",
                height: "844",
                fill: "white",
              }),
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z",
                fill: "#E84142",
              }),
            ],
          }),
        m = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 950 950",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsx)("path", {
                fill: "#FBCC5C",
                d: "M375,850c151.9,0,275-123.1,275-275S526.9,300,375,300S100,423.1,100,575S223.1,850,375,850z M375,950C167.9,950,0,782.1,0,575s167.9-375,375-375s375,167.9,375,375S582.1,950,375,950z",
              }),
              (0, a.jsx)("path", {
                fill: "#35D07F",
                d: "M575,650c151.9,0,275-123.1,275-275S726.9,100,575,100S300,223.1,300,375S423.1,650,575,650z M575,750c-207.1,0-375-167.9-375-375S367.9,0,575,0s375,167.9,375,375S782.1,750,575,750z",
              }),
              (0, a.jsx)("path", {
                fill: "#5EA33B",
                d: "M587.4,750c26-31.5,44.6-68.4,54.5-108.1c39.6-9.9,76.5-28.5,108.1-54.5 c-1.4,45.9-11.3,91.1-29.2,133.5C678.5,738.7,633.3,748.6,587.4,750z M308.1,308.1c-39.6,9.9-76.5,28.5-108.1,54.5 c1.4-45.9,11.3-91.1,29.2-133.4c42.3-17.8,87.6-27.7,133.4-29.2C336.6,231.5,318,268.4,308.1,308.1z",
              }),
            ],
          }),
        b = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#base-icon-clip-path)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M12 23C14.1756 23 16.3023 22.3548 18.1113 21.1462C19.9202 19.9375 21.3301 18.2195 22.1627 16.2095C22.9953 14.1995 23.2131 11.9878 22.7887 9.85404C22.3642 7.72022 21.3165 5.76021 19.7782 4.22183C18.2398 2.68345 16.2798 1.6358 14.146 1.21137C12.0122 0.786929 9.80048 1.00477 7.79048 1.83733C5.7805 2.6699 4.06253 4.07979 2.85384 5.88873C1.64514 7.69767 1 9.82441 1 12C1 14.9174 2.15893 17.7153 4.22182 19.7782C6.28472 21.8411 9.08259 23 12 23Z",
                    fill: "#0052FF",
                  }),
                  (0, a.jsx)("path", {
                    d: "M11.9742 19.7465C16.2524 19.7465 19.7206 16.2783 19.7206 12C19.7206 7.72176 16.2524 4.25354 11.9742 4.25354C7.91543 4.25354 4.58574 7.37493 4.25469 11.3481H15.7499V12.6381H4.25354C4.57799 16.6179 7.91068 19.7465 11.9742 19.7465Z",
                    fill: "white",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "base-icon-clip-path",
                  children: (0, a.jsx)("rect", {
                    width: "22",
                    height: "22",
                    fill: "white",
                    transform: "translate(1 1)",
                  }),
                }),
              }),
            ],
          }),
        f = (e) =>
          (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 444 444",
            xmlSpace: "preserve",
            className: e.className,
            children: (0, a.jsxs)("g", {
              children: [
                (0, a.jsx)("rect", {
                  width: "444",
                  height: "444",
                  fill: "#FFEEDA",
                }),
                (0, a.jsxs)("g", {
                  children: [
                    (0, a.jsx)("path", {
                      d: "M333.4,262V110.6c-0.2-12.7-10.3-22.9-23-22.9h-158c-34.1,0.5-61.5,28.4-61.5,62.6c0,11.5,3.1,21.4,7.8,30.1    c4,7.2,10.3,14,16.5,19.1c1.8,1.4,0.9,0.8,6.3,4.1c7.4,4.5,15.9,6.8,15.9,6.8l-0.1,90.6c0.2,4.3,0.6,8.4,1.8,12.3    c3.5,12.8,12.4,22.6,24.4,27.3c5,2,10.7,3.3,16.8,3.4l126.2,0.4c25.1,0,45.5-20.4,45.5-45.6C352.1,283.8,344.6,270.4,333.4,262z",
                      fill: "#FFEEDA",
                    }),
                    (0, a.jsx)("path", {
                      d: "M336.5,299.9C336,316,322.7,329,306.4,329l-86.8-0.3c6.9-8,11.1-18.4,11.1-29.8c0-17.8-10.6-30.1-10.6-30.1    h86.4c16.6,0,30.1,13.5,30.1,30.1L336.5,299.9z",
                      fill: "#EBC28E",
                    }),
                    (0, a.jsx)("path", {
                      d: "M123.5,186.7c-10-9.5-17-21.7-17-36.3v-1.5c0.8-24.8,21.2-44.8,46-45.5h158c4.1,0.2,7.4,3.1,7.4,7.3v133.7    c3.6,0.6,5.4,1.1,8.9,2.4c2.8,1,6.6,3.2,6.6,3.2V110.7c-0.2-12.7-10.3-22.9-23-22.9h-158c-34.1,0.5-61.5,28.4-61.5,62.6    c0,19.9,9.1,36.9,23.9,48.8c1,0.8,2,1.9,4.6,1.9c4.6,0,7.9-3.7,7.7-7.7C127.1,190,125.6,188.8,123.5,186.7z",
                      fill: "#101010",
                    }),
                    (0, a.jsx)("path", {
                      d: "M306.4,253.2H182.5c-8.3,0.1-15,6.8-15,15.1v17.8c0.2,8.2,7.2,15.2,15.6,15.2h9.2v-15.2H183v-17.4    c0,0,2.3,0,5,0c15.7,0,27.2,14.5,27.2,30.1c0,13.8-12.6,31.4-33.6,30c-18.6-1.2-28.7-17.8-28.7-30v-151c0-6.8-5.6-12.4-12.4-12.4    h-12.4v15.5h9.2v148c-0.5,30.1,21.4,45.2,44.3,45.2l124.9,0.4c25.1,0,45.5-20.4,45.5-45.6C352.1,273.7,331.6,253.2,306.4,253.2z    M336.5,299.9C336,316,322.7,329,306.4,329l-86.8-0.3c6.9-8,11.1-18.4,11.1-29.8c0-17.8-10.6-30.1-10.6-30.1h86.4    c16.6,0,30.1,13.5,30.1,30.1L336.5,299.9z",
                      fill: "#101010",
                    }),
                    (0, a.jsx)("path", {
                      d: "M273,153.7h-93.4v-15.5H273c4.2,0,7.7,3.4,7.7,7.7C280.8,150.2,277.4,153.7,273,153.7z",
                      fill: "#101010",
                    }),
                    (0, a.jsx)("path", {
                      d: "M273,226.4h-93.4V211H273c4.2,0,7.7,3.4,7.7,7.7C280.8,222.9,277.4,226.4,273,226.4z",
                      fill: "#101010",
                    }),
                    (0, a.jsx)("path", {
                      d: "M289.5,190H179.6v-15.5h109.8c4.2,0,7.7,3.4,7.7,7.7C297.3,186.5,293.8,190,289.5,190z",
                      fill: "#101010",
                    }),
                  ],
                }),
              ],
            }),
          }),
        h = (e) =>
          (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 75 75",
            fill: "none",
            className: e.className,
            children: [
              (0, a.jsx)("rect", {
                width: "75",
                height: "75",
                fill: "#f0ebde",
              }),
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_2909_1369)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M12.32 33.08C12.2859 30.9109 12.9912 28.7948 14.32 27.08L27.96 40.72C26.2408 42.0404 24.1277 42.7447 21.96 42.72C19.4066 42.7095 16.9608 41.6905 15.1552 39.8849C13.3496 38.0793 12.3306 35.6335 12.32 33.08Z",
                    fill: "#133629",
                  }),
                  (0, a.jsx)("path", {
                    d: "M52.9 42.71C54.1771 42.7153 55.4426 42.4678 56.6237 41.9818C57.8047 41.4958 58.8778 40.781 59.7813 39.8784C60.6848 38.9758 61.4008 37.9034 61.888 36.7229C62.3752 35.5423 62.624 34.2771 62.62 33C62.6439 30.8325 61.9396 28.7197 60.62 27L46.94 40.68C48.6405 42.0102 50.7411 42.7257 52.9 42.71Z",
                    fill: "#133629",
                  }),
                  (0, a.jsx)("path", {
                    d: "M63.4499 24.23C65.5528 26.6994 66.7084 29.8366 66.7099 33.08C66.7073 36.7277 65.2564 40.225 62.6762 42.8034C60.096 45.3817 56.5976 46.83 52.9499 46.83C49.7234 46.8337 46.5994 45.6967 44.1299 43.62L37.5099 50.24L30.8899 43.62C28.4187 45.7004 25.2902 46.8377 22.0599 46.83C20.2496 46.8366 18.4557 46.4859 16.7812 45.798C15.1066 45.11 13.5843 44.0984 12.3014 42.8211C11.0185 41.5437 10.0002 40.0258 9.30496 38.3543C8.60975 36.6827 8.25121 34.8904 8.24991 33.08C8.25249 29.8515 9.38859 26.7265 11.4599 24.25L8.3699 21.16L5.41995 18.16C1.86631 24.0027 -0.00901661 30.7115 -9.03528e-05 37.55C-0.00140495 42.4653 0.96596 47.3327 2.84665 51.8739C4.72734 56.4152 7.48451 60.5413 10.9606 64.0164C14.4367 67.4916 18.5636 70.2477 23.1053 72.1272C27.6471 74.0066 32.5146 74.9727 37.4299 74.97C47.3492 74.9674 56.8621 71.0285 63.8799 64.0183C70.8977 57.008 74.8467 47.4993 74.86 37.58C74.9217 30.7426 73.0646 24.025 69.4999 18.19L63.4499 24.23Z",
                    fill: "#133629",
                  }),
                  (0, a.jsx)("path", {
                    d: "M64.54 11.74C61.0496 8.07017 56.8486 5.14916 52.1931 3.1549C47.5375 1.16065 42.5247 0.134865 37.46 0.140034C32.3942 0.137583 27.3808 1.16455 22.724 3.1586C18.0672 5.15266 13.8641 8.07221 10.37 11.74C9.46 12.74 8.57005 13.74 7.74005 14.81L37.43 44.49L67.12 14.78C66.3361 13.7045 65.4738 12.6884 64.54 11.74ZM37.46 37.56L14.46 14.56C17.4671 11.5209 21.0501 9.11181 24.9993 7.47375C28.9485 5.8357 33.1846 5.00153 37.46 5.02004C41.7362 4.99649 45.9738 5.82835 49.9237 7.46669C53.8736 9.10504 57.456 11.5168 60.46 14.56L37.46 37.56Z",
                    fill: "#133629",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_2909_1369",
                  children: (0, a.jsx)("rect", {
                    width: "74.86",
                    height: "74.86",
                    fill: "white",
                    transform: "translate(0 0.140015)",
                  }),
                }),
              }),
            ],
          }),
        T = {
          [i.IBi.mainnet]: { svgIcon: u, iconBgColor: "#484c50" },
          [i.IBi.sepolia]: { svgIcon: u, iconBgColor: "#484c50" },
          [i.IBi.polygon]: { svgIcon: o, iconBgColor: "#9f71ec" },
          [i.IBi.mumbai]: { svgIcon: o, iconBgColor: "#9f71ec" },
          [i.IBi.optimism]: { svgIcon: p, iconBgColor: "#ff5a57" },
          [i.IBi.optimism_sepolia]: { svgIcon: p, iconBgColor: "#ff5a57" },
          [i.IBi.arbitrum]: { svgIcon: c, iconBgColor: "#96bedc" },
          [i.IBi.arbitrum_sepolia]: { svgIcon: c, iconBgColor: "#96bedc" },
          [i.IBi.avalanche]: { svgIcon: y, iconBgColor: "#e84142" },
          [i.IBi.fuji]: { svgIcon: y, iconBgColor: "#e84142" },
          [i.IBi.celo]: { svgIcon: m, iconBgColor: "#ffffff" },
          [i.IBi.celo_testnet]: { svgIcon: m, iconBgColor: "#ffffff" },
          [i.IBi.base]: { svgIcon: b, iconBgColor: "#0052FF" },
          [i.IBi.base_sepolia]: { svgIcon: b, iconBgColor: "#0052FF" },
          [i.IBi.scroll]: { svgIcon: f, iconBgColor: "#ffeeda" },
          [i.IBi.scroll_sepolia]: { svgIcon: f, iconBgColor: "#ffeeda" },
          [i.IBi.gnosis]: { svgIcon: h, iconBgColor: "#f0ebde" },
          [i.IBi.gnosis_chiado]: { svgIcon: h, iconBgColor: "#f0ebde" },
        },
        v = (e) => {
          let {
              chainId: t,
              appendText: n,
              hideIcon: s,
              hideBorder: l,
              hideBg: u,
              className: o,
              iconClassName: p,
              textClassName: c,
              onClick: y,
            } = e,
            m = (0, i.st0)(t);
          return (0, a.jsxs)("span", {
            className: r()(
              "inline-flex items-center gap-1 px-3 py-2 text-sm rounded-lg",
              {
                "border border-pt-transparent": !l && !u,
                "bg-pt-transparent": !u,
                "cursor-pointer select-none hover:bg-pt-purple-50/20": !!y,
              },
              o
            ),
            onClick: y,
            children: [
              !s &&
                (0, a.jsx)(d, {
                  chainId: t,
                  className: r()("h-4 w-4 shrink-0", p),
                }),
              (0, a.jsxs)("span", {
                className: r()(c),
                children: [m, n ? " ".concat(n) : ""],
              }),
            ],
          });
        };
      var w = n(38637),
        g = n(52983);
      let x = {
          eth: "".concat(i.BAY.app, "/icons/ether.svg"),
          pool: "https://assets.coingecko.com/coins/images/14003/standard/PoolTogether.png",
          usdc: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          dai: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
          gusd: "https://assets.coingecko.com/coins/images/5992/standard/gemini-dollar-gusd.png",
          weth: "https://assets.coingecko.com/coins/images/2518/standard/weth.png",
          wbtc: "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png",
          lusd: "https://assets.coingecko.com/coins/images/14666/standard/Group_3.png",
          op: "https://optimistic.etherscan.io/token/images/optimism_32.png",
          steth:
            "https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png",
          usdt: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          usda: "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/stUSD.svg",
          eura: "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/stEUR.svg",
          crash:
            "https://assets.coingecko.com/coins/images/37152/standard/apCdaaX9_400x400.jpg",
          degen:
            "https://assets.coingecko.com/coins/images/34515/standard/android-chrome-512x512.png",
          dude: "https://assets.coingecko.com/coins/images/36860/standard/dudelogo.png",
          higher:
            "https://assets.coingecko.com/coins/images/36084/standard/200x200logo.png",
          well: "https://assets.coingecko.com/coins/images/26133/standard/WELL.png",
          bifi: "https://assets.coingecko.com/coins/images/12704/standard/bifi.png",
          mooBIFI:
            "https://assets.coingecko.com/coins/images/32597/standard/319381e63428d3c2ab6e035d5f3abd76.png",
          reth: "https://assets.coingecko.com/coins/images/20764/standard/reth.png",
          snx: "https://assets.coingecko.com/coins/images/3406/standard/SNX.png",
          crv: "https://assets.coingecko.com/coins/images/12124/standard/Curve.png",
          based: "https://basescan.org/token/images/basedtoken_32.png",
          uni: "https://assets.coingecko.com/coins/images/12504/standard/uniswap-logo.png",
          ldo: "https://assets.coingecko.com/coins/images/13573/standard/Lido_DAO.png",
          aero: "https://assets.coingecko.com/coins/images/31745/standard/token.png",
          cbeth:
            "https://assets.coingecko.com/coins/images/27008/standard/cbeth.png",
          xdai: "https://gnosisscan.io/token/images/wrappedxdai_32.png",
          usds: "https://assets.coingecko.com/coins/images/39926/standard/usds.webp",
          superOETH:
            "https://assets.coingecko.com/coins/images/39828/standard/Super_OETH.png",
        },
        C = {
          [i.IBi.mainnet]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.mainnet].toLowerCase()]: x.pool,
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": x.usdc,
            "0x6b175474e89094c44da98b954eedeac495271d0f": x.dai,
            "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd": x.gusd,
            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": x.weth,
            "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": x.wbtc,
            "0x5f98805a4e8be255a32880fdec7f6728c6568ba0": x.lusd,
            "0x0000206329b97db379d5e1bf586bbdb969c63274": x.usda,
            "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8": x.eura,
            "0xb1f1ee126e9c96231cc3d3fad7c08b4cf873b1f1": x.bifi,
            "0xae78736cd615f374d3085123a210448e74fc6393": x.reth,
            "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": x.snx,
            "0xd533a949740bb3306d119cc777fa900ba034cd52": x.crv,
            "0xdac17f958d2ee523a2206206994597c13d831ec7": x.usdt,
            "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": x.uni,
            "0x5a98fcbea516cf06857215779fd812ca3bef1b32": x.ldo,
            "0xdc035d45d973e3ec169d2276ddab16f1e407384f": x.usds,
          },
          [i.IBi.sepolia]: { [i.KGw]: x.eth },
          [i.IBi.bsc]: {},
          [i.IBi.bsc_testnet]: {},
          [i.IBi.polygon]: {
            [i.kCg[i.IBi.polygon].toLowerCase()]: x.pool,
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": x.usdc,
            "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": x.usdc,
            "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": x.dai,
            "0xc8a94a3d3d2dabc3c1caffffdca6a7543c3e3e65": x.gusd,
            "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": x.weth,
            "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6": x.wbtc,
            "0x0000206329b97db379d5e1bf586bbdb969c63274": x.usda,
            "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4": x.eura,
          },
          [i.IBi.mumbai]: {},
          [i.IBi.optimism]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.optimism].toLowerCase()]: x.pool,
            "0x7f5c764cbc14f9669b88837ca1490cca17c31607": x.usdc,
            "0x0b2c639c533813f4aa9d7837caf62653d097ff85": x.usdc,
            "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1": x.dai,
            "0x4200000000000000000000000000000000000006": x.weth,
            "0x68f180fcce6836688e9084f035309e29bf0a2095": x.wbtc,
            "0xc40f949f8a4e094d1b49a23ea9241d289b7b2819": x.lusd,
            "0x4200000000000000000000000000000000000042": x.op,
            "0x0000206329b97db379d5e1bf586bbdb969c63274": x.usda,
            "0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed": x.eura,
            "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb": x.steth,
            "0xc55e93c62874d8100dbd2dfe307edc1036ad5434": x.mooBIFI,
            "0x9bcef72be871e61ed4fbbc7630889bee758eb81d": x.reth,
            "0x67cde7af920682a29fcfea1a179ef0f30f48df3e": x.reth,
            "0x8700daec35af8ff88c16bdf0418774cb3d7599b4": x.snx,
            "0x0994206dfe8de6ec6920ff4d779b0d950605fb53": x.crv,
          },
          [i.IBi.optimism_sepolia]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.optimism_sepolia].toLowerCase()]: x.pool,
            [i.yBE[i.IBi.optimism_sepolia]]: x.usdc,
            "0xef38f21ec5477f6e3d4b7e9f0dea44a788c669b0": x.dai,
            "0x68f92539f64e486f2853bb2892933a21b54829e5": x.gusd,
            "0x4a61b6f54157840e80e0c47f1a628c0b3744a739": x.weth,
            "0x6c6a62b0861d8f2b946456ba9dcd0f3baec54147": x.wbtc,
          },
          [i.IBi.avalanche]: {
            "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f": x.wbtc,
          },
          [i.IBi.fuji]: {},
          [i.IBi.celo]: {},
          [i.IBi.celo_testnet]: {},
          [i.IBi.arbitrum]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.arbitrum].toLowerCase()]: x.pool,
            "0xaf88d065e77c8cc2239327c5edb3a432268e5831": x.usdc,
            "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8": x.usdc,
            "0x82af49447d8a07e3bd95bd0d56f35241523fbab1": x.weth,
            "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": x.usdt,
            "0x0000206329b97db379d5e1bf586bbdb969c63274": x.usda,
            "0xfa5ed56a203466cbbc2430a43c66b9d8723528e7": x.eura,
            "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978": x.crv,
          },
          [i.IBi.arbitrum_sepolia]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.arbitrum_sepolia].toLowerCase()]: x.pool,
            [i.yBE[i.IBi.arbitrum_sepolia]]: x.usdc,
            "0xfe045beefda06606fc5f441ccca2fe8c903e9725": x.dai,
            "0x060fad1bca90e5b1efca0d93febec96e638fd8a6": x.weth,
          },
          [i.IBi.base]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.base].toLowerCase()]: x.pool,
            "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": x.usdc,
            "0x50c5725949a6f0c72e6c4a641f24049a917db0cb": x.dai,
            "0x4200000000000000000000000000000000000006": x.weth,
            "0x368181499736d0c0cc614dbb145e2ec1ac86b8c6": x.lusd,
            "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452": x.steth,
            "0x0000206329b97db379d5e1bf586bbdb969c63274": x.usda,
            "0xa61beb4a3d02decb01039e378237032b351125b4": x.eura,
            "0x621e87af48115122cd96209f820fe0445c2ea90e": x.crash,
            "0x4ed4e862860bed51a9570b96d89af5e1b0efefed": x.degen,
            "0xcb2861a1ec1d0392afb9e342d5aa539e4f75b633": x.dude,
            "0x0578d8a44db98b23bf096a382e016e29a5ce0ffe": x.higher,
            "0xa88594d404727625a9437c3f886c7643872296ae": x.well,
            "0x940181a94a35a4569e4529a3cdfb74e38fd98631": x.aero,
            "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22": x.cbeth,
            "0xdbfefd2e8460a6ee4955a68582f85708baea60a3": x.superOETH,
          },
          [i.IBi.base_sepolia]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.base_sepolia].toLowerCase()]: x.pool,
            [i.yBE[i.IBi.base_sepolia]]: x.usdc,
            "0xe4b4a71923aecb4b8924bda8c31941a8ab50ff86": x.dai,
            "0x019aa44d02715e4042b1ba3b4d2fa9bcef33c002": x.weth,
          },
          [i.IBi.scroll]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.scroll].toLowerCase()]: x.pool,
            "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4": x.usdc,
            "0x5300000000000000000000000000000000000004": x.weth,
            "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97": x.dai,
          },
          [i.IBi.scroll_sepolia]: {
            [i.KGw]: x.eth,
            [i.kCg[i.IBi.scroll_sepolia].toLowerCase()]: x.pool,
            [i.yBE[i.IBi.scroll_sepolia]]: x.usdc,
            "0xc024e95cf6bb2efc424c9035db4647a12d8dcac9": x.dai,
            "0x23dbacc4e588fadc2d3eed3d1eddb8daa57714ba": x.gusd,
            "0x6b0877bcb4720f094bc13187f5e16bdbf730693a": x.weth,
            "0xa15316214d52d907712d751987d4593972cf3b8b": x.wbtc,
          },
          [i.IBi.gnosis]: {
            [i.KGw]: x.xdai,
            [i.kCg[i.IBi.gnosis].toLowerCase()]: x.pool,
            "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83": x.usdc,
            "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0": x.usdc,
            "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1": x.weth,
            "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d": x.xdai,
          },
          [i.IBi.gnosis_chiado]: {
            [i.KGw]: x.xdai,
            [i.kCg[i.IBi.gnosis_chiado].toLowerCase()]: x.pool,
            [i.yBE[i.IBi.gnosis_chiado]]: x.usdc,
            "0xb2d0d7ad1d4b2915390dc7053b9421f735a723e7": x.xdai,
            "0xbe9a62939f82e12f4a48912078a4420f1a5fc2e0": x.gusd,
            "0x6b629bb304017d3d985d140599d8e6fc9942b9a7": x.weth,
            "0x3e9c64afc24c551cc8e11f52fedecdacf7362559": x.wbtc,
          },
        };
      var I = n(66384);
      let A = (e) => {
          let { token: t, fallbackToken: n, showSpinner: s, className: r } = e,
            l = t.symbol
              ? "".concat(t.symbol, " Logo")
              : t.name
              ? "".concat(t.name, " Logo")
              : "Token Logo";
          if (t.logoURI)
            return (0, a.jsx)(M, {
              logoURI: t.logoURI,
              altText: l,
              className: r,
            });
          if (t.chainId && t.address) {
            var d, u, o;
            let e =
              null === (d = C[t.chainId]) || void 0 === d
                ? void 0
                : d[(0, i.zOu)(t.address)];
            if (e)
              return (0, a.jsx)(M, { logoURI: e, altText: l, className: r });
            if (
              t.chainId === i.IBi.optimism &&
              (null === (u = t.symbol) || void 0 === u
                ? void 0
                : u.startsWith("vAMMV2-"))
            )
              return (0, a.jsx)(M, {
                logoURI:
                  "https://optimistic.etherscan.io/token/images/velodromefinance_32.png",
                altText: l,
                className: r,
              });
            if (
              t.chainId === i.IBi.base &&
              (null === (o = t.symbol) || void 0 === o
                ? void 0
                : o.startsWith("vAMM-"))
            )
              return (0, a.jsx)(M, {
                logoURI: "https://basescan.org/token/images/aerodrome_32.png",
                altText: l,
                className: r,
              });
            if (t.chainId === i.IBi.optimism && "2BTC-f" === t.symbol)
              return (0, a.jsx)(M, {
                logoURI:
                  "https://assets.coingecko.com/coins/images/12124/standard/Curve.png",
                altText: l,
                className: r,
              });
            if (t.chainId in i.YGr)
              return (0, a.jsx)(P, {
                token: t,
                fallbackToken:
                  (null == n ? void 0 : n.chainId) && n.address ? n : void 0,
                altText: l,
                showSpinner: s,
                className: r,
              });
          }
          return n
            ? (0, a.jsx)(A, { token: n, className: r, showSpinner: s })
            : (0, a.jsx)(D, { symbol: t.symbol, className: r });
        },
        P = (e) => {
          var t;
          let {
              token: n,
              fallbackToken: s,
              altText: r,
              showSpinner: d,
              className: u,
            } = e,
            { data: o, isFetched: p } = (0, I.TM)(n.chainId, n.address);
          return p
            ? (
                null == o
                  ? void 0
                  : null === (t = o.image) || void 0 === t
                  ? void 0
                  : t.small
              )
              ? (0, a.jsx)(M, {
                  logoURI: o.image.small,
                  altText: r,
                  className: u,
                })
              : s && s.chainId in i.YGr
              ? (0, a.jsx)(P, {
                  token: s,
                  altText: r,
                  showSpinner: d,
                  className: u,
                })
              : (0, a.jsx)(D, { symbol: n.symbol, className: u })
            : !1 === d
            ? (0, a.jsx)(a.Fragment, {})
            : (0, a.jsx)(l.$j, {});
        },
        M = (e) => {
          let { logoURI: t, altText: n, className: i } = e;
          return (0, a.jsx)("img", {
            src: t,
            alt: n,
            className: r()("h-6 w-6 rounded-full", i),
          });
        },
        D = (e) => {
          let { symbol: t, className: n } = e;
          return (0, a.jsx)(l._k, {
            content: t ? t.slice(0, 2).toUpperCase() : "?",
            className: n,
          });
        },
        S = (e) => {
          var t, n, s, l, u, o, p, c, y, m, b;
          let {
              vault: f,
              onClick: h,
              showSymbol: T,
              className: v,
              iconClassName: x,
              networkIconClassName: I,
              nameClassName: P,
              symbolClassName: M,
              yieldSourceClassName: D,
            } = e,
            { data: S } = (0, w.Bg)(f),
            { data: _ } = (0, w.Xr)(f),
            { cachedVaultLists: k } = (0, w.hK)(),
            N = (0, g.useMemo)(
              () =>
                Object.values(k)
                  .filter((e) => !!e)
                  .map((e) => e.tokens)
                  .reduce((e, t) => [...e, ...t], [])
                  .find((e) => (0, i.zOb)(e) === f.id),
              [f, k]
            ),
            E = !!(null === (t = C[f.chainId]) || void 0 === t
              ? void 0
              : t[(0, i.zOu)(f.address)]);
          return (0, a.jsxs)("div", {
            className: r()(
              "inline-flex items-center gap-3 shrink-0 px-3 py-2 bg-pt-transparent rounded-lg",
              "whitespace-nowrap overflow-hidden",
              "border border-pt-transparent",
              { "cursor-pointer select-none hover:bg-pt-purple-50/20": !!h },
              v
            ),
            onClick: h,
            children: [
              (0, a.jsxs)("div", {
                className: "relative pb-1 shrink-0",
                children: [
                  (0, a.jsx)(A, {
                    token: {
                      ...S,
                      ...f,
                      address:
                        f.logoURI || (null == N ? void 0 : N.logoURI) || E
                          ? f.address
                          : null !== (u = f.tokenAddress) && void 0 !== u
                          ? u
                          : _,
                      logoURI:
                        null !==
                          (p =
                            null !== (o = f.logoURI) && void 0 !== o
                              ? o
                              : null == N
                              ? void 0
                              : N.logoURI) && void 0 !== p
                          ? p
                          : f.tokenLogoURI,
                    },
                    className: x,
                  }),
                  (0, a.jsx)(d, {
                    chainId: f.chainId,
                    className: r()("absolute top-3 left-3 h-4 w-4", I),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, a.jsxs)("div", {
                    className: "inline-flex items-center gap-2",
                    children: [
                      (0, a.jsx)("span", {
                        className: r()(
                          "text-sm font-medium overflow-hidden overflow-ellipsis",
                          P
                        ),
                        children:
                          null !==
                            (y =
                              null !== (c = null == N ? void 0 : N.name) &&
                              void 0 !== c
                                ? c
                                : f.name) && void 0 !== y
                            ? y
                            : null == S
                            ? void 0
                            : S.name,
                      }),
                      T &&
                        (0, a.jsx)("span", {
                          className: r()("text-xs text-pt-purple-200", M),
                          children:
                            null !==
                              (b =
                                null !== (m = null == N ? void 0 : N.symbol) &&
                                void 0 !== m
                                  ? m
                                  : null === (n = f.shareData) || void 0 === n
                                  ? void 0
                                  : n.symbol) && void 0 !== b
                              ? b
                              : null == S
                              ? void 0
                              : S.symbol,
                        }),
                    ],
                  }),
                  !!(null == N
                    ? void 0
                    : null === (l = N.extensions) || void 0 === l
                    ? void 0
                    : null === (s = l.yieldSource) || void 0 === s
                    ? void 0
                    : s.name) &&
                    (0, a.jsx)("span", {
                      className: r()("text-xs text-pt-purple-200", D),
                      children: N.extensions.yieldSource.name,
                    }),
                ],
              }),
            ],
          });
        };
      var _ = n(12779),
        k = n(36731);
      let N = (e) => {
          var t, n, s, d, u, o;
          let {
              chainId: p,
              isTxLoading: c,
              isTxSuccess: y,
              write: m,
              txHash: b,
              txDescription: f,
              openConnectModal: h,
              openChainModal: T,
              addRecentTransaction: v,
              intl: w,
              innerClassName: x,
              disabled: C,
              children: I,
              ...A
            } = e,
            { chain: P, isDisconnected: M } = (0, _.m)(),
            { switchChain: D, isPending: S } = (0, k.o)(),
            N = (0, i.st0)(p);
          return ((0, g.useEffect)(() => {
            y &&
              b &&
              f &&
              v &&
              v({ hash: b, description: "".concat(N, ": ").concat(f) });
          }, [y, b, f]),
          M)
            ? (0, a.jsx)(l.zx, {
                onClick: h,
                ...A,
                children: (0, a.jsx)("span", {
                  className: r()("whitespace-nowrap", x),
                  children:
                    null !==
                      (n =
                        null == w
                          ? void 0
                          : null === (t = w.common) || void 0 === t
                          ? void 0
                          : t.call(w, "connectWallet")) && void 0 !== n
                      ? n
                      : "Connect Wallet",
                }),
              })
            : (null == P ? void 0 : P.id) !== p
            ? (0, a.jsxs)(l.zx, {
                onClick: () => (D ? D({ chainId: p }) : T ? T() : void 0),
                disabled: S,
                ...A,
                children: [
                  S &&
                    (0, a.jsx)("span", {
                      className: r()("whitespace-nowrap", x),
                      children:
                        null !==
                          (u =
                            null == w
                              ? void 0
                              : null === (s = w.base) || void 0 === s
                              ? void 0
                              : s.call(w, "switchingNetwork", {
                                  network: N,
                                })) && void 0 !== u
                          ? u
                          : "Switching to ".concat(N, "..."),
                    }),
                  !S &&
                    (0, a.jsx)("span", {
                      className: r()("whitespace-nowrap", x),
                      children:
                        null !==
                          (o =
                            null == w
                              ? void 0
                              : null === (d = w.base) || void 0 === d
                              ? void 0
                              : d.call(w, "switchNetwork", { network: N })) &&
                        void 0 !== o
                          ? o
                          : "Switch to ".concat(N),
                    }),
                ],
              })
            : (0, a.jsx)(l.zx, {
                onClick: m,
                disabled: !m || c || C,
                ...A,
                children: (0, a.jsxs)("span", {
                  className: r()("whitespace-nowrap", x, { "leading-none": c }),
                  children: [c && (0, a.jsx)(l.$j, {}), !c && I],
                }),
              });
        },
        E = (e) => {
          let {
              baseValue: t,
              baseCurrency: n,
              countUp: s,
              decimals: r,
              hideCountUpSymbol: d,
              hideLoading: u,
              fallback: o,
              ...p
            } = e,
            { data: c, isFetched: y } = (0, I._L)(),
            { selectedCurrency: m } = (0, I.ZT)(),
            { data: b, isFetched: f } = (0, w.Wh)(i.IBi.mainnet, [
              i.yBE[i.IBi.mainnet],
              i.kCg[i.IBi.mainnet],
            ]),
            h = (0, g.useMemo)(() => {
              let e = { ...c };
              if (e.eth && b) {
                let t = b[i.yBE[i.IBi.mainnet]],
                  n = b[(0, i.zOu)(i.kCg[i.IBi.mainnet])];
                e.usd && t && (e.usd.value = e.eth.value / t),
                  n &&
                    (e.pool = {
                      name: I.ck.pool.name,
                      unit: I.ck.pool.symbol,
                      value: e.eth.value / n,
                      type: "crypto",
                    });
              }
              return e;
            }, [c, b]),
            [T, v] = (0, g.useState)(!1),
            x = (0, g.useMemo)(() => {
              if ((v(!1), 0 === Number(t))) return 0;
              if ("eth" === m && ("eth" === n || void 0 === n))
                return Number(t);
              if (0 === Object.keys(h).length) return;
              let e = (0, i.EdJ)(t, m, h, { baseCurrency: n });
              if (void 0 !== e) return e;
              {
                let e = (0, i.EdJ)(t, "usd", h, { baseCurrency: n });
                return v(!0), e;
              }
            }, [h, t, m, n]),
            C = 1 / 10 ** (null != r ? r : 2);
          if (y && f) {
            if (void 0 === x)
              return null != o ? o : (0, a.jsx)(a.Fragment, { children: "?" });
            {
              var A;
              if (x > 0 && x < C)
                return (0, a.jsx)(a.Fragment, {
                  children: "< ".concat((0, i.uqV)(C, T ? "usd" : m, { ...p })),
                });
              if (!s)
                return (0, a.jsx)(a.Fragment, {
                  children: (0, i.uqV)(x, T ? "usd" : m, { ...p }),
                });
              let e =
                  null === (A = I.ck[T ? "usd" : m]) || void 0 === A
                    ? void 0
                    : A.symbol,
                t = (null != r ? r : x > 1e4) ? 0 : 2;
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  !d && "POOL" !== e && e,
                  (0, a.jsx)(l.I0, {
                    countTo: x,
                    minimumFractionDigits: t,
                    maximumFractionDigits: t,
                    ...p,
                  }),
                  !d && "POOL" === e && " ".concat(e),
                ],
              });
            }
          }
          return u ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)(l.$j, {});
        },
        B = (e) => {
          var t, n, s;
          let { token: r, ...d } = e,
            { data: u, isFetching: o } = (0, w.dQ)(r.chainId, r.address),
            p = null !== (t = r.amount) && void 0 !== t ? t : 0n,
            c =
              null !== (n = r.decimals) && void 0 !== n
                ? n
                : null == u
                ? void 0
                : u.decimals,
            y =
              null !== (s = r.symbol) && void 0 !== s
                ? s
                : null == u
                ? void 0
                : u.symbol;
          return o || void 0 === c || !y
            ? (0, a.jsx)(l.$j, {})
            : (0, a.jsxs)(a.Fragment, {
                children: [(0, i.dR8)(p, c, { ...d }), " ", y],
              });
        };
      var j = n(39350);
      let O = (e) => {
        let { token: t, baseCurrency: n, fallback: i, ...s } = e,
          { data: r, isFetching: d } = (0, w.dQ)(t.chainId, t.address),
          { data: u, isFetching: o } = (0, w.Wh)(t.chainId, [t.address]),
          p = (0, g.useMemo)(
            () => (r && u ? u[r.address.toLowerCase()] : void 0),
            [r, u]
          ),
          c = (0, g.useMemo)(() => {
            if (p) {
              var e, n;
              let a = null !== (e = t.amount) && void 0 !== e ? e : 0n,
                i =
                  null !== (n = t.decimals) && void 0 !== n
                    ? n
                    : null == r
                    ? void 0
                    : r.decimals;
              if (void 0 !== i) return parseFloat((0, j.b)(a, i)) * p;
            }
          }, [p, t, r]);
        return d || o
          ? (0, a.jsx)(l.$j, {})
          : void 0 === c
          ? null != i
            ? i
            : (0, a.jsx)(a.Fragment, { children: "?" })
          : (0, a.jsx)(E, { baseValue: c, baseCurrency: n, fallback: i, ...s });
      };
      n(33454);
      var z = n(26776),
        F = n(37311);
      let R = (e) => {
          (0, l.Am)((0, a.jsx)(L, { ...e }), { id: e.txHash });
        },
        L = (e) => {
          let { chainId: t, txHash: n, addRecentTransaction: s } = e,
            {
              isFetching: r,
              isSuccess: d,
              isError: u,
            } = (0, F.A)({ chainId: t, hash: n });
          return (
            (0, g.useEffect)(() => {
              if (d && n && s) {
                let e = (0, i.st0)(t);
                s({
                  hash: n,
                  description: ""
                    .concat(e, ": ")
                    .concat("Liquidation Pair Deployment"),
                });
              }
            }, [d, n]),
            !r &&
              d &&
              (0, l.Am)(
                (0, a.jsx)(V, {
                  id: n,
                  children: (0, a.jsx)(q, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            r ||
              d ||
              !u ||
              (0, l.Am)(
                (0, a.jsx)(V, {
                  id: n,
                  children: (0, a.jsx)(H, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            (0, a.jsx)(V, {
              id: n,
              children: (0, a.jsx)(U, { chainId: t, txHash: n }),
            })
          );
        },
        V = (e) => {
          let { id: t, children: n } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative w-full flex flex-col gap-2 items-center text-center smSonner:w-80",
            children: [
              n,
              (0, a.jsx)(z, {
                className:
                  "absolute top-0 right-0 h-3 w-3 text-pt-purple-100 cursor-pointer",
                onClick: () => l.Am.dismiss(t),
              }),
            ],
          });
        },
        U = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("span", {
                className: "flex items-center gap-2 text-pt-purple-50",
                children: [
                  (0, a.jsx)(l.$j, { className: "after:border-y-pt-teal" }),
                  " Deploying liquidation pair...",
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        q = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.st0)(t),
            r = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-pt-teal",
                    children: "Success!",
                  }),
                  (0, a.jsxs)("span", {
                    className: "text-pt-purple-50",
                    children: ["You deployed a liquidation pair on ", s],
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", r],
              }),
            ],
          });
        },
        H = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-[#EA8686]",
                    children: "Uh oh!",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-pt-purple-50",
                    children: "Something went wrong...",
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        Z = (e) => {
          (0, l.Am)((0, a.jsx)(W, { ...e }), { id: e.txHash });
        },
        W = (e) => {
          let { chainId: t, txHash: n, addRecentTransaction: s } = e,
            {
              isFetching: r,
              isSuccess: d,
              isError: u,
            } = (0, F.A)({ chainId: t, hash: n });
          return (
            (0, g.useEffect)(() => {
              if (d && n && s) {
                let e = (0, i.st0)(t);
                s({
                  hash: n,
                  description: ""
                    .concat(e, ": ")
                    .concat("Prize Vault Deployment"),
                });
              }
            }, [d, n]),
            !r &&
              d &&
              (0, l.Am)(
                (0, a.jsx)(Y, {
                  id: n,
                  children: (0, a.jsx)(K, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            r ||
              d ||
              !u ||
              (0, l.Am)(
                (0, a.jsx)(Y, {
                  id: n,
                  children: (0, a.jsx)(X, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            (0, a.jsx)(Y, {
              id: n,
              children: (0, a.jsx)(G, { chainId: t, txHash: n }),
            })
          );
        },
        Y = (e) => {
          let { id: t, children: n } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative w-full flex flex-col gap-2 items-center text-center smSonner:w-80",
            children: [
              n,
              (0, a.jsx)(z, {
                className:
                  "absolute top-0 right-0 h-3 w-3 text-pt-purple-100 cursor-pointer",
                onClick: () => l.Am.dismiss(t),
              }),
            ],
          });
        },
        G = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("span", {
                className: "flex items-center gap-2 text-pt-purple-50",
                children: [
                  (0, a.jsx)(l.$j, { className: "after:border-y-pt-teal" }),
                  " Deploying prize vault...",
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        K = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.st0)(t),
            r = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-pt-teal",
                    children: "Success!",
                  }),
                  (0, a.jsxs)("span", {
                    className: "text-pt-purple-50",
                    children: ["You deployed a prize vault on ", s],
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", r],
              }),
            ],
          });
        },
        X = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-[#EA8686]",
                    children: "Uh oh!",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-pt-purple-50",
                    children: "Something went wrong...",
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        $ = (e) => {
          (0, l.Am)((0, a.jsx)(J, { ...e }), { id: e.txHash });
        },
        J = (e) => {
          let { chainId: t, txHash: n, addRecentTransaction: s } = e,
            {
              isFetching: r,
              isSuccess: d,
              isError: u,
            } = (0, F.A)({ chainId: t, hash: n });
          return (
            (0, g.useEffect)(() => {
              if (d && n && s) {
                let e = (0, i.st0)(t);
                s({
                  hash: n,
                  description: "".concat(e, ": ").concat("Set Claimer"),
                });
              }
            }, [d, n]),
            !r &&
              d &&
              (0, l.Am)(
                (0, a.jsx)(Q, {
                  id: n,
                  children: (0, a.jsx)(et, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            r ||
              d ||
              !u ||
              (0, l.Am)(
                (0, a.jsx)(Q, {
                  id: n,
                  children: (0, a.jsx)(en, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            (0, a.jsx)(Q, {
              id: n,
              children: (0, a.jsx)(ee, { chainId: t, txHash: n }),
            })
          );
        },
        Q = (e) => {
          let { id: t, children: n } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative w-full flex flex-col gap-2 items-center text-center smSonner:w-80",
            children: [
              n,
              (0, a.jsx)(z, {
                className:
                  "absolute top-0 right-0 h-3 w-3 text-pt-purple-100 cursor-pointer",
                onClick: () => l.Am.dismiss(t),
              }),
            ],
          });
        },
        ee = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("span", {
                className: "flex items-center gap-2 text-pt-purple-50",
                children: [
                  (0, a.jsx)(l.$j, { className: "after:border-y-pt-teal" }),
                  " Setting claimer...",
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        et = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.st0)(t),
            r = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-pt-teal",
                    children: "Success!",
                  }),
                  (0, a.jsxs)("span", {
                    className: "text-pt-purple-50",
                    children: ["You set a claimer to a prize vault on ", s],
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", r],
              }),
            ],
          });
        },
        en = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-[#EA8686]",
                    children: "Uh oh!",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-pt-purple-50",
                    children: "Something went wrong...",
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        ea = (e) => {
          (0, l.Am)((0, a.jsx)(ei, { ...e }), { id: e.txHash });
        },
        ei = (e) => {
          let { chainId: t, txHash: n, addRecentTransaction: s } = e,
            {
              isFetching: r,
              isSuccess: d,
              isError: u,
            } = (0, F.A)({ chainId: t, hash: n });
          return (
            (0, g.useEffect)(() => {
              if (d && n && s) {
                let e = (0, i.st0)(t);
                s({
                  hash: n,
                  description: ""
                    .concat(e, ": ")
                    .concat("Set Liquidation Pair"),
                });
              }
            }, [d, n]),
            !r &&
              d &&
              (0, l.Am)(
                (0, a.jsx)(es, {
                  id: n,
                  children: (0, a.jsx)(el, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            r ||
              d ||
              !u ||
              (0, l.Am)(
                (0, a.jsx)(es, {
                  id: n,
                  children: (0, a.jsx)(ed, { chainId: t, txHash: n }),
                }),
                { id: n }
              ),
            (0, a.jsx)(es, {
              id: n,
              children: (0, a.jsx)(er, { chainId: t, txHash: n }),
            })
          );
        },
        es = (e) => {
          let { id: t, children: n } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative w-full flex flex-col gap-2 items-center text-center smSonner:w-80",
            children: [
              n,
              (0, a.jsx)(z, {
                className:
                  "absolute top-0 right-0 h-3 w-3 text-pt-purple-100 cursor-pointer",
                onClick: () => l.Am.dismiss(t),
              }),
            ],
          });
        },
        er = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("span", {
                className: "flex items-center gap-2 text-pt-purple-50",
                children: [
                  (0, a.jsx)(l.$j, { className: "after:border-y-pt-teal" }),
                  " Setting liquidation pair...",
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        },
        el = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.st0)(t),
            r = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-pt-teal",
                    children: "Success!",
                  }),
                  (0, a.jsxs)("span", {
                    className: "text-pt-purple-50",
                    children: [
                      "You set a liquidation pair to a prize vault on ",
                      s,
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", r],
              }),
            ],
          });
        },
        ed = (e) => {
          let { chainId: t, txHash: n } = e,
            s = (0, i.bfO)(t);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-semibold text-[#EA8686]",
                    children: "Uh oh!",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-pt-purple-50",
                    children: "Something went wrong...",
                  }),
                ],
              }),
              (0, a.jsxs)("a", {
                href: (0, i.B8C)(t, n, "tx"),
                target: "_blank",
                className: "text-xs text-pt-teal",
                children: ["View on ", s],
              }),
            ],
          });
        };
    },
    89129: function (e, t, n) {
      n.d(t, {
        PmD: function () {
          return ei;
        },
        jc0: function () {
          return es;
        },
        vO5: function () {
          return er;
        },
      });
      var a,
        i,
        s = n(39350),
        r = n(54917),
        l = n(75815),
        d = n(47802),
        u = n(86781),
        o = n(79523),
        p = [
          {
            inputs: [
              {
                internalType: "contract PrizePool",
                name: "_prizePool",
                type: "address",
              },
              { internalType: "contract IRng", name: "_rng", type: "address" },
              {
                internalType: "uint48",
                name: "_auctionDuration",
                type: "uint48",
              },
              {
                internalType: "uint48",
                name: "_auctionTargetTime",
                type: "uint48",
              },
              {
                internalType: "UD2x18",
                name: "_firstStartDrawTargetFraction",
                type: "uint64",
              },
              {
                internalType: "UD2x18",
                name: "_firstFinishDrawTargetFraction",
                type: "uint64",
              },
              { internalType: "uint256", name: "_maxRewards", type: "uint256" },
              { internalType: "uint256", name: "_maxRetries", type: "uint256" },
              {
                internalType: "address",
                name: "_vaultBeneficiary",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "AlreadyStartedDraw", type: "error" },
          {
            inputs: [
              {
                internalType: "uint48",
                name: "auctionDuration",
                type: "uint48",
              },
            ],
            name: "AuctionDurationGTDrawPeriodSeconds",
            type: "error",
          },
          { inputs: [], name: "AuctionExpired", type: "error" },
          {
            inputs: [
              {
                internalType: "uint48",
                name: "auctionTargetTime",
                type: "uint48",
              },
              {
                internalType: "uint48",
                name: "auctionDuration",
                type: "uint48",
              },
            ],
            name: "AuctionTargetTimeExceedsDuration",
            type: "error",
          },
          { inputs: [], name: "DrawHasFinalized", type: "error" },
          { inputs: [], name: "DrawHasNotClosed", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "x", type: "uint256" },
              { internalType: "uint256", name: "y", type: "uint256" },
            ],
            name: "PRBMath_MulDiv18_Overflow",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "x", type: "uint256" },
              { internalType: "uint256", name: "y", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            name: "PRBMath_MulDiv_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "uint256", name: "x", type: "uint256" }],
            name: "PRBMath_UD60x18_Convert_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "UD60x18", name: "x", type: "uint256" }],
            name: "PRBMath_UD60x18_IntoUD2x18_Overflow",
            type: "error",
          },
          { inputs: [], name: "RetryLimitReached", type: "error" },
          { inputs: [], name: "RewardRecipientIsZero", type: "error" },
          { inputs: [], name: "RngRequestNotComplete", type: "error" },
          { inputs: [], name: "RngRequestNotInSameBlock", type: "error" },
          { inputs: [], name: "StaleRngRequest", type: "error" },
          { inputs: [], name: "TargetRewardFractionGTOne", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint24",
                name: "drawId",
                type: "uint24",
              },
              {
                indexed: !1,
                internalType: "uint48",
                name: "elapsedTime",
                type: "uint48",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "contribution",
                type: "uint256",
              },
            ],
            name: "DrawFinished",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint24",
                name: "drawId",
                type: "uint24",
              },
              {
                indexed: !1,
                internalType: "uint48",
                name: "elapsedTime",
                type: "uint48",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint32",
                name: "rngRequestId",
                type: "uint32",
              },
              {
                indexed: !1,
                internalType: "uint64",
                name: "count",
                type: "uint64",
              },
            ],
            name: "DrawStarted",
            type: "event",
          },
          {
            inputs: [],
            name: "auctionDuration",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "auctionTargetTime",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "canFinishDraw",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "canStartDraw",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_rewardRecipient",
                type: "address",
              },
            ],
            name: "finishDraw",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "finishDrawReward",
            outputs: [
              { internalType: "uint256", name: "reward", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getLastStartDrawAuction",
            outputs: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                  },
                  { internalType: "uint40", name: "closedAt", type: "uint40" },
                  { internalType: "uint24", name: "drawId", type: "uint24" },
                  {
                    internalType: "uint32",
                    name: "rngRequestId",
                    type: "uint32",
                  },
                ],
                internalType: "struct StartDrawAuction",
                name: "result",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_index", type: "uint256" },
            ],
            name: "getStartDrawAuction",
            outputs: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                  },
                  { internalType: "uint40", name: "closedAt", type: "uint40" },
                  { internalType: "uint24", name: "drawId", type: "uint24" },
                  {
                    internalType: "uint32",
                    name: "rngRequestId",
                    type: "uint32",
                  },
                ],
                internalType: "struct StartDrawAuction",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getStartDrawAuctionCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lastFinishDrawFraction",
            outputs: [{ internalType: "UD2x18", name: "", type: "uint64" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lastStartDrawFraction",
            outputs: [{ internalType: "UD2x18", name: "", type: "uint64" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxRetries",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxRewards",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "prizePool",
            outputs: [
              { internalType: "contract PrizePool", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "rng",
            outputs: [
              { internalType: "contract IRng", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_rewardRecipient",
                type: "address",
              },
              { internalType: "uint32", name: "_rngRequestId", type: "uint32" },
            ],
            name: "startDraw",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "startDrawReward",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "vaultBeneficiary",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        c = [
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
        ],
        y = [
          {
            inputs: [
              {
                components: [
                  {
                    internalType: "contract IERC20",
                    name: "prizeToken",
                    type: "address",
                  },
                  {
                    internalType: "contract TwabController",
                    name: "twabController",
                    type: "address",
                  },
                  { internalType: "address", name: "creator", type: "address" },
                  {
                    internalType: "uint256",
                    name: "tierLiquidityUtilizationRate",
                    type: "uint256",
                  },
                  {
                    internalType: "uint48",
                    name: "drawPeriodSeconds",
                    type: "uint48",
                  },
                  {
                    internalType: "uint48",
                    name: "firstDrawOpensAt",
                    type: "uint48",
                  },
                  {
                    internalType: "uint24",
                    name: "grandPrizePeriodDraws",
                    type: "uint24",
                  },
                  {
                    internalType: "uint8",
                    name: "numberOfTiers",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "tierShares", type: "uint8" },
                  {
                    internalType: "uint8",
                    name: "canaryShares",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "reserveShares",
                    type: "uint8",
                  },
                  {
                    internalType: "uint24",
                    name: "drawTimeout",
                    type: "uint24",
                  },
                ],
                internalType: "struct ConstructorParams",
                name: "params",
                type: "tuple",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "AddToDrawZero", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "winner", type: "address" },
              { internalType: "uint8", name: "tier", type: "uint8" },
              { internalType: "uint32", name: "prizeIndex", type: "uint32" },
            ],
            name: "AlreadyClaimed",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint48", name: "drawClosesAt", type: "uint48" },
            ],
            name: "AwardingDrawNotClosed",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              { internalType: "address", name: "drawManager", type: "address" },
            ],
            name: "CallerNotDrawManager",
            type: "error",
          },
          { inputs: [], name: "ClaimPeriodExpired", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "uint256", name: "available", type: "uint256" },
            ],
            name: "ContributionGTDeltaBalance",
            type: "error",
          },
          { inputs: [], name: "CreatorIsZeroAddress", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "winner", type: "address" },
              { internalType: "uint8", name: "tier", type: "uint8" },
              { internalType: "uint32", name: "prizeIndex", type: "uint32" },
            ],
            name: "DidNotWin",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint24", name: "drawId", type: "uint24" },
              { internalType: "uint24", name: "newestDrawId", type: "uint24" },
            ],
            name: "DrawAwarded",
            type: "error",
          },
          { inputs: [], name: "DrawManagerAlreadySet", type: "error" },
          {
            inputs: [],
            name: "DrawTimeoutGTGrandPrizePeriodDraws",
            type: "error",
          },
          { inputs: [], name: "DrawTimeoutIsZero", type: "error" },
          { inputs: [], name: "FirstDrawOpensInPast", type: "error" },
          {
            inputs: [
              {
                internalType: "uint24",
                name: "grandPrizePeriodDraws",
                type: "uint24",
              },
              {
                internalType: "uint24",
                name: "maxGrandPrizePeriodDraws",
                type: "uint24",
              },
            ],
            name: "GrandPrizePeriodDrawsTooLarge",
            type: "error",
          },
          { inputs: [], name: "IncompatibleTwabPeriodLength", type: "error" },
          { inputs: [], name: "IncompatibleTwabPeriodOffset", type: "error" },
          {
            inputs: [
              {
                internalType: "uint104",
                name: "requestedLiquidity",
                type: "uint104",
              },
            ],
            name: "InsufficientLiquidity",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint104", name: "amount", type: "uint104" },
              { internalType: "uint104", name: "reserve", type: "uint104" },
            ],
            name: "InsufficientReserve",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "requested", type: "uint256" },
              { internalType: "uint256", name: "available", type: "uint256" },
            ],
            name: "InsufficientRewardsError",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint24", name: "startDrawId", type: "uint24" },
              { internalType: "uint24", name: "endDrawId", type: "uint24" },
            ],
            name: "InvalidDrawRange",
            type: "error",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "invalidPrizeIndex",
                type: "uint32",
              },
              { internalType: "uint32", name: "prizeCount", type: "uint32" },
              { internalType: "uint8", name: "tier", type: "uint8" },
            ],
            name: "InvalidPrizeIndex",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint8", name: "tier", type: "uint8" },
              { internalType: "uint8", name: "numberOfTiers", type: "uint8" },
            ],
            name: "InvalidTier",
            type: "error",
          },
          { inputs: [], name: "NoDrawsAwarded", type: "error" },
          {
            inputs: [
              { internalType: "uint8", name: "numTiers", type: "uint8" },
            ],
            name: "NumberOfTiersGreaterThanMaximum",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint8", name: "numTiers", type: "uint8" },
            ],
            name: "NumberOfTiersLessThanMinimum",
            type: "error",
          },
          { inputs: [], name: "OnlyCreator", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "x", type: "uint256" },
              { internalType: "uint256", name: "y", type: "uint256" },
            ],
            name: "PRBMath_MulDiv18_Overflow",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "x", type: "uint256" },
              { internalType: "uint256", name: "y", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            name: "PRBMath_MulDiv_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "SD59x18", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Ceil_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "int256", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Convert_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "int256", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Convert_Underflow",
            type: "error",
          },
          {
            inputs: [],
            name: "PRBMath_SD59x18_Div_InputTooSmall",
            type: "error",
          },
          {
            inputs: [
              { internalType: "SD59x18", name: "x", type: "int256" },
              { internalType: "SD59x18", name: "y", type: "int256" },
            ],
            name: "PRBMath_SD59x18_Div_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "SD59x18", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Exp2_InputTooBig",
            type: "error",
          },
          {
            inputs: [{ internalType: "SD59x18", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Log_InputTooSmall",
            type: "error",
          },
          {
            inputs: [],
            name: "PRBMath_SD59x18_Mul_InputTooSmall",
            type: "error",
          },
          {
            inputs: [
              { internalType: "SD59x18", name: "x", type: "int256" },
              { internalType: "SD59x18", name: "y", type: "int256" },
            ],
            name: "PRBMath_SD59x18_Mul_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "SD59x18", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Sqrt_NegativeInput",
            type: "error",
          },
          {
            inputs: [{ internalType: "SD59x18", name: "x", type: "int256" }],
            name: "PRBMath_SD59x18_Sqrt_Overflow",
            type: "error",
          },
          {
            inputs: [{ internalType: "uint256", name: "x", type: "uint256" }],
            name: "PRBMath_UD60x18_Convert_Overflow",
            type: "error",
          },
          { inputs: [], name: "PrizeIsZero", type: "error" },
          { inputs: [], name: "PrizePoolNotShutdown", type: "error" },
          { inputs: [], name: "PrizePoolShutdown", type: "error" },
          { inputs: [], name: "RandomNumberIsZero", type: "error" },
          { inputs: [], name: "RangeSizeZero", type: "error" },
          { inputs: [], name: "RewardRecipientZeroAddress", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "reward", type: "uint256" },
              { internalType: "uint256", name: "maxReward", type: "uint256" },
            ],
            name: "RewardTooLarge",
            type: "error",
          },
          {
            inputs: [],
            name: "TierLiquidityUtilizationRateCannotBeZero",
            type: "error",
          },
          {
            inputs: [],
            name: "TierLiquidityUtilizationRateGreaterThanOne",
            type: "error",
          },
          { inputs: [], name: "UpperBoundGtZero", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "AllocateRewardFromReserve",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "winner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint24",
                name: "drawId",
                type: "uint24",
              },
              {
                indexed: !1,
                internalType: "uint8",
                name: "tier",
                type: "uint8",
              },
              {
                indexed: !1,
                internalType: "uint32",
                name: "prizeIndex",
                type: "uint32",
              },
              {
                indexed: !1,
                internalType: "uint152",
                name: "payout",
                type: "uint152",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "claimReward",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "claimRewardRecipient",
                type: "address",
              },
            ],
            name: "ClaimedPrize",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint24",
                name: "drawId",
                type: "uint24",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "ContributePrizeTokens",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "ContributedReserve",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "uint24",
                name: "drawId",
                type: "uint24",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "winningRandomNumber",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint8",
                name: "lastNumTiers",
                type: "uint8",
              },
              {
                indexed: !1,
                internalType: "uint8",
                name: "numTiers",
                type: "uint8",
              },
              {
                indexed: !1,
                internalType: "uint104",
                name: "reserve",
                type: "uint104",
              },
              {
                indexed: !1,
                internalType: "uint128",
                name: "prizeTokensPerShare",
                type: "uint128",
              },
              {
                indexed: !1,
                internalType: "uint48",
                name: "drawOpenedAt",
                type: "uint48",
              },
            ],
            name: "DrawAwarded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "IncreaseClaimRewards",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "ReserveConsumed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "drawManager",
                type: "address",
              },
            ],
            name: "SetDrawManager",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "available",
                type: "uint256",
              },
            ],
            name: "WithdrawRewards",
            type: "event",
          },
          {
            inputs: [],
            name: "DONATOR",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "accountedBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint96", name: "_amount", type: "uint96" },
            ],
            name: "allocateRewardFromReserve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "winningRandomNumber_",
                type: "uint256",
              },
            ],
            name: "awardDraw",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "canaryShares",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claimCount",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_winner", type: "address" },
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint32", name: "_prizeIndex", type: "uint32" },
              {
                internalType: "address",
                name: "_prizeRecipient",
                type: "address",
              },
              { internalType: "uint96", name: "_claimReward", type: "uint96" },
              {
                internalType: "address",
                name: "_claimRewardRecipient",
                type: "address",
              },
            ],
            name: "claimPrize",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint32", name: "_claimCount", type: "uint32" },
            ],
            name: "computeNextNumberOfTiers",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint24",
                name: "_endDrawIdInclusive",
                type: "uint24",
              },
              { internalType: "uint24", name: "_rangeSize", type: "uint24" },
            ],
            name: "computeRangeStartDrawIdInclusive",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "computeShutdownPortion",
            outputs: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "numerator",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "denominator",
                    type: "uint256",
                  },
                ],
                internalType: "struct ShutdownPortion",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint8", name: "_numberOfTiers", type: "uint8" },
            ],
            name: "computeTotalShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_prizeVault", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "contributePrizeTokens",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint96", name: "_amount", type: "uint96" },
            ],
            name: "contributeReserve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "donatePrizeTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint24", name: "drawId", type: "uint24" },
            ],
            name: "drawClosesAt",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "drawManager",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint24", name: "drawId", type: "uint24" },
            ],
            name: "drawOpensAt",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "drawPeriodSeconds",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "drawTimeout",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "drawTimeoutAt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "estimateNextNumberOfTiers",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint8", name: "numTiers", type: "uint8" },
            ],
            name: "estimatedPrizeCount",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "estimatedPrizeCount",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint8", name: "numTiers", type: "uint8" },
            ],
            name: "estimatedPrizeCountWithBothCanaries",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "estimatedPrizeCountWithBothCanaries",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "firstDrawOpensAt",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              {
                internalType: "uint24",
                name: "_startDrawIdInclusive",
                type: "uint24",
              },
              {
                internalType: "uint24",
                name: "_endDrawIdInclusive",
                type: "uint24",
              },
            ],
            name: "getContributedBetween",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint24",
                name: "_startDrawIdInclusive",
                type: "uint24",
              },
              {
                internalType: "uint24",
                name: "_endDrawIdInclusive",
                type: "uint24",
              },
            ],
            name: "getDonatedBetween",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_timestamp", type: "uint256" },
            ],
            name: "getDrawId",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getDrawIdToAward",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getLastAwardedDrawId",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getOpenDrawId",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getShutdownDrawId",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getShutdownInfo",
            outputs: [
              { internalType: "uint256", name: "balance", type: "uint256" },
              {
                components: [
                  { internalType: "uint96", name: "available", type: "uint96" },
                  {
                    internalType: "uint160",
                    name: "disbursed",
                    type: "uint160",
                  },
                ],
                internalType: "struct Observation",
                name: "observation",
                type: "tuple",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint8", name: "_tier", type: "uint8" }],
            name: "getTierAccrualDurationInDraws",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint8", name: "_numTiers", type: "uint8" },
            ],
            name: "getTierOdds",
            outputs: [{ internalType: "SD59x18", name: "", type: "int256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint8", name: "_tier", type: "uint8" }],
            name: "getTierPrizeCount",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint8", name: "_tier", type: "uint8" }],
            name: "getTierPrizeSize",
            outputs: [{ internalType: "uint104", name: "", type: "uint104" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint8", name: "_tier", type: "uint8" }],
            name: "getTierRemainingLiquidity",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getTotalAccumulatorNewestObservation",
            outputs: [
              {
                components: [
                  { internalType: "uint96", name: "available", type: "uint96" },
                  {
                    internalType: "uint160",
                    name: "disbursed",
                    type: "uint160",
                  },
                ],
                internalType: "struct Observation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint24",
                name: "_startDrawIdInclusive",
                type: "uint24",
              },
              {
                internalType: "uint24",
                name: "_endDrawIdInclusive",
                type: "uint24",
              },
            ],
            name: "getTotalContributedBetween",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getTotalShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
            ],
            name: "getVaultAccumulatorNewestObservation",
            outputs: [
              {
                components: [
                  { internalType: "uint96", name: "available", type: "uint96" },
                  {
                    internalType: "uint160",
                    name: "disbursed",
                    type: "uint160",
                  },
                ],
                internalType: "struct Observation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              {
                internalType: "uint24",
                name: "_startDrawIdInclusive",
                type: "uint24",
              },
              {
                internalType: "uint24",
                name: "_endDrawIdInclusive",
                type: "uint24",
              },
            ],
            name: "getVaultPortion",
            outputs: [{ internalType: "SD59x18", name: "", type: "int256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_user", type: "address" },
              {
                internalType: "uint24",
                name: "_startDrawIdInclusive",
                type: "uint24",
              },
              {
                internalType: "uint24",
                name: "_endDrawIdInclusive",
                type: "uint24",
              },
            ],
            name: "getVaultUserBalanceAndTotalSupplyTwab",
            outputs: [
              { internalType: "uint256", name: "twab", type: "uint256" },
              {
                internalType: "uint256",
                name: "twabTotalSupply",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getWinningRandomNumber",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "grandPrizePeriodDraws",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint8", name: "_tier", type: "uint8" }],
            name: "isCanaryTier",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint24", name: "drawId", type: "uint24" },
            ],
            name: "isDrawFinalized",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "isShutdown",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_user", type: "address" },
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint32", name: "_prizeIndex", type: "uint32" },
            ],
            name: "isWinner",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lastAwardedDrawAwardedAt",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "numberOfTiers",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingReserveContributions",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "prizeToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "prizeTokenPerShare",
            outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "reserve",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "reserveShares",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_recipient", type: "address" },
            ],
            name: "rewardBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_drawManager",
                type: "address",
              },
            ],
            name: "setDrawManager",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "shutdownAt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "shutdownBalanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "tierLiquidityUtilizationRate",
            outputs: [{ internalType: "UD60x18", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tierShares",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalWithdrawn",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "twabController",
            outputs: [
              {
                internalType: "contract TwabController",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_winner", type: "address" },
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint32", name: "_prizeIndex", type: "uint32" },
            ],
            name: "wasClaimed",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_winner", type: "address" },
              { internalType: "uint24", name: "_drawId", type: "uint24" },
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint32", name: "_prizeIndex", type: "uint32" },
            ],
            name: "wasClaimed",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawRewards",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_recipient", type: "address" },
            ],
            name: "withdrawShutdownBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        m = [
          {
            inputs: [
              { internalType: "uint32", name: "_periodLength", type: "uint32" },
              { internalType: "uint32", name: "_periodOffset", type: "uint32" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "uint96", name: "balance", type: "uint96" },
              { internalType: "uint96", name: "amount", type: "uint96" },
              { internalType: "string", name: "message", type: "string" },
            ],
            name: "BalanceLTAmount",
            type: "error",
          },
          {
            inputs: [],
            name: "CannotTransferToSponsorshipAddress",
            type: "error",
          },
          {
            inputs: [
              {
                internalType: "uint96",
                name: "delegateBalance",
                type: "uint96",
              },
              {
                internalType: "uint96",
                name: "delegateAmount",
                type: "uint96",
              },
              { internalType: "string", name: "message", type: "string" },
            ],
            name: "DelegateBalanceLTAmount",
            type: "error",
          },
          {
            inputs: [
              {
                internalType: "PeriodOffsetRelativeTimestamp",
                name: "requestedTimestamp",
                type: "uint32",
              },
              {
                internalType: "PeriodOffsetRelativeTimestamp",
                name: "oldestTimestamp",
                type: "uint32",
              },
            ],
            name: "InsufficientHistory",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "start", type: "uint256" },
              { internalType: "uint256", name: "end", type: "uint256" },
            ],
            name: "InvalidTimeRange",
            type: "error",
          },
          { inputs: [], name: "PeriodLengthTooShort", type: "error" },
          {
            inputs: [
              { internalType: "uint32", name: "periodOffset", type: "uint32" },
            ],
            name: "PeriodOffsetInFuture",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "delegate", type: "address" },
            ],
            name: "SameDelegateAlreadySet",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              {
                internalType: "uint256",
                name: "currentOverwritePeriodStartedAt",
                type: "uint256",
              },
            ],
            name: "TimestampNotFinalized",
            type: "error",
          },
          { inputs: [], name: "TransferToZeroAddress", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "amount",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "delegateAmount",
                type: "uint96",
              },
            ],
            name: "DecreasedBalance",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "amount",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "delegateAmount",
                type: "uint96",
              },
            ],
            name: "DecreasedTotalSupply",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "delegator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "delegate",
                type: "address",
              },
            ],
            name: "Delegated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "amount",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "delegateAmount",
                type: "uint96",
              },
            ],
            name: "IncreasedBalance",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "amount",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "delegateAmount",
                type: "uint96",
              },
            ],
            name: "IncreasedTotalSupply",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "balance",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "delegateBalance",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isNew",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "cumulativeBalance",
                    type: "uint128",
                  },
                  { internalType: "uint96", name: "balance", type: "uint96" },
                  { internalType: "uint32", name: "timestamp", type: "uint32" },
                ],
                indexed: !1,
                internalType: "struct ObservationLib.Observation",
                name: "observation",
                type: "tuple",
              },
            ],
            name: "ObservationRecorded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "balance",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "delegateBalance",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isNew",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "cumulativeBalance",
                    type: "uint128",
                  },
                  { internalType: "uint96", name: "balance", type: "uint96" },
                  { internalType: "uint32", name: "timestamp", type: "uint32" },
                ],
                indexed: !1,
                internalType: "struct ObservationLib.Observation",
                name: "observation",
                type: "tuple",
              },
            ],
            name: "TotalSupplyObservationRecorded",
            type: "event",
          },
          {
            inputs: [],
            name: "PERIOD_LENGTH",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "PERIOD_OFFSET",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_from", type: "address" },
              { internalType: "uint96", name: "_amount", type: "uint96" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "currentOverwritePeriodStartedAt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_vault", type: "address" },
              { internalType: "address", name: "_to", type: "address" },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "delegateBalanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "delegateOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "getAccount",
            outputs: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint96",
                        name: "balance",
                        type: "uint96",
                      },
                      {
                        internalType: "uint96",
                        name: "delegateBalance",
                        type: "uint96",
                      },
                      {
                        internalType: "uint16",
                        name: "nextObservationIndex",
                        type: "uint16",
                      },
                      {
                        internalType: "uint16",
                        name: "cardinality",
                        type: "uint16",
                      },
                    ],
                    internalType: "struct TwabLib.AccountDetails",
                    name: "details",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint128",
                        name: "cumulativeBalance",
                        type: "uint128",
                      },
                      {
                        internalType: "uint96",
                        name: "balance",
                        type: "uint96",
                      },
                      {
                        internalType: "uint32",
                        name: "timestamp",
                        type: "uint32",
                      },
                    ],
                    internalType: "struct ObservationLib.Observation[17520]",
                    name: "observations",
                    type: "tuple[17520]",
                  },
                ],
                internalType: "struct TwabLib.Account",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
              {
                internalType: "uint256",
                name: "periodEndOnOrAfterTime",
                type: "uint256",
              },
            ],
            name: "getBalanceAt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "getNewestObservation",
            outputs: [
              { internalType: "uint16", name: "", type: "uint16" },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "cumulativeBalance",
                    type: "uint128",
                  },
                  { internalType: "uint96", name: "balance", type: "uint96" },
                  { internalType: "uint32", name: "timestamp", type: "uint32" },
                ],
                internalType: "struct ObservationLib.Observation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
            ],
            name: "getNewestTotalSupplyObservation",
            outputs: [
              { internalType: "uint16", name: "", type: "uint16" },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "cumulativeBalance",
                    type: "uint128",
                  },
                  { internalType: "uint96", name: "balance", type: "uint96" },
                  { internalType: "uint32", name: "timestamp", type: "uint32" },
                ],
                internalType: "struct ObservationLib.Observation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "getOldestObservation",
            outputs: [
              { internalType: "uint16", name: "", type: "uint16" },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "cumulativeBalance",
                    type: "uint128",
                  },
                  { internalType: "uint96", name: "balance", type: "uint96" },
                  { internalType: "uint32", name: "timestamp", type: "uint32" },
                ],
                internalType: "struct ObservationLib.Observation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
            ],
            name: "getOldestTotalSupplyObservation",
            outputs: [
              { internalType: "uint16", name: "", type: "uint16" },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "cumulativeBalance",
                    type: "uint128",
                  },
                  { internalType: "uint96", name: "balance", type: "uint96" },
                  { internalType: "uint32", name: "timestamp", type: "uint32" },
                ],
                internalType: "struct ObservationLib.Observation",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "time", type: "uint256" },
            ],
            name: "getTimestampPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
            ],
            name: "getTotalSupplyAccount",
            outputs: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint96",
                        name: "balance",
                        type: "uint96",
                      },
                      {
                        internalType: "uint96",
                        name: "delegateBalance",
                        type: "uint96",
                      },
                      {
                        internalType: "uint16",
                        name: "nextObservationIndex",
                        type: "uint16",
                      },
                      {
                        internalType: "uint16",
                        name: "cardinality",
                        type: "uint16",
                      },
                    ],
                    internalType: "struct TwabLib.AccountDetails",
                    name: "details",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint128",
                        name: "cumulativeBalance",
                        type: "uint128",
                      },
                      {
                        internalType: "uint96",
                        name: "balance",
                        type: "uint96",
                      },
                      {
                        internalType: "uint32",
                        name: "timestamp",
                        type: "uint32",
                      },
                    ],
                    internalType: "struct ObservationLib.Observation[17520]",
                    name: "observations",
                    type: "tuple[17520]",
                  },
                ],
                internalType: "struct TwabLib.Account",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              {
                internalType: "uint256",
                name: "periodEndOnOrAfterTime",
                type: "uint256",
              },
            ],
            name: "getTotalSupplyAt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "uint256", name: "startTime", type: "uint256" },
              { internalType: "uint256", name: "endTime", type: "uint256" },
            ],
            name: "getTotalSupplyTwabBetween",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "startTime", type: "uint256" },
              { internalType: "uint256", name: "endTime", type: "uint256" },
            ],
            name: "getTwabBetween",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "time", type: "uint256" },
            ],
            name: "hasFinalized",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
            ],
            name: "isShutdownAt",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lastObservationAt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint96", name: "_amount", type: "uint96" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_timestamp", type: "uint256" },
            ],
            name: "periodEndOnOrAfter",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_from", type: "address" },
            ],
            name: "sponsor",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
            ],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
            ],
            name: "totalSupplyDelegateBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_from", type: "address" },
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint96", name: "_amount", type: "uint96" },
            ],
            name: "transfer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        b = [
          {
            inputs: [
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
              {
                internalType: "contract IERC4626",
                name: "yieldVault_",
                type: "address",
              },
              {
                internalType: "contract PrizePool",
                name: "prizePool_",
                type: "address",
              },
              { internalType: "address", name: "claimer_", type: "address" },
              {
                internalType: "address",
                name: "yieldFeeRecipient_",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "yieldFeePercentage_",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "yieldBuffer_",
                type: "uint256",
              },
              { internalType: "address", name: "owner_", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "BurnZeroShares", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              { internalType: "address", name: "claimer", type: "address" },
            ],
            name: "CallerNotClaimer",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              {
                internalType: "address",
                name: "liquidationPair",
                type: "address",
              },
            ],
            name: "CallerNotLP",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              {
                internalType: "address",
                name: "yieldFeeRecipient",
                type: "address",
              },
            ],
            name: "CallerNotYieldFeeRecipient",
            type: "error",
          },
          { inputs: [], name: "ClaimRecipientZeroAddress", type: "error" },
          { inputs: [], name: "ClaimerZeroAddress", type: "error" },
          { inputs: [], name: "DepositZeroAssets", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "asset", type: "address" },
            ],
            name: "FailedToGetAssetDecimals",
            type: "error",
          },
          { inputs: [], name: "InvalidShortString", type: "error" },
          { inputs: [], name: "LPZeroAddress", type: "error" },
          { inputs: [], name: "LiquidationAmountOutZero", type: "error" },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "totalToWithdraw",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "availableYield",
                type: "uint256",
              },
            ],
            name: "LiquidationExceedsAvailable",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenIn", type: "address" },
              { internalType: "address", name: "prizeToken", type: "address" },
            ],
            name: "LiquidationTokenInNotPrizeToken",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenOut", type: "address" },
            ],
            name: "LiquidationTokenOutNotSupported",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "totalAssets", type: "uint256" },
              { internalType: "uint256", name: "totalSupply", type: "uint256" },
            ],
            name: "LossyDeposit",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
              { internalType: "uint256", name: "maxShares", type: "uint256" },
            ],
            name: "MaxSharesExceeded",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "assets", type: "uint256" },
              { internalType: "uint256", name: "minAssets", type: "uint256" },
            ],
            name: "MinAssetsNotReached",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "excess", type: "uint256" },
            ],
            name: "MintLimitExceeded",
            type: "error",
          },
          { inputs: [], name: "MintZeroShares", type: "error" },
          { inputs: [], name: "OwnerZeroAddress", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "PermitCallerNotOwner",
            type: "error",
          },
          { inputs: [], name: "PrizePoolZeroAddress", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
              {
                internalType: "uint256",
                name: "yieldFeeBalance",
                type: "uint256",
              },
            ],
            name: "SharesExceedsYieldFeeBalance",
            type: "error",
          },
          {
            inputs: [{ internalType: "string", name: "str", type: "string" }],
            name: "StringTooLong",
            type: "error",
          },
          { inputs: [], name: "TwabControllerZeroAddress", type: "error" },
          { inputs: [], name: "WithdrawZeroAssets", type: "error" },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "yieldFeePercentage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxYieldFeePercentage",
                type: "uint256",
              },
            ],
            name: "YieldFeePercentageExceedsMax",
            type: "error",
          },
          { inputs: [], name: "YieldVaultZeroAddress", type: "error" },
          { inputs: [], name: "ZeroTotalAssets", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "ClaimYieldFeeShares",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "claimer",
                type: "address",
              },
            ],
            name: "ClaimerSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "assets",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "EIP712DomainChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "liquidationPair",
                type: "address",
              },
            ],
            name: "LiquidationPairSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "pendingOwner",
                type: "address",
              },
            ],
            name: "OwnershipOffered",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "useBeforeClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "useAfterClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "contract IPrizeHooks",
                    name: "implementation",
                    type: "address",
                  },
                ],
                indexed: !1,
                internalType: "struct PrizeHooks",
                name: "hooks",
                type: "tuple",
              },
            ],
            name: "SetHooks",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "caller",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "assets",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "Sponsor",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "liquidationPair",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "yieldFee",
                type: "uint256",
              },
            ],
            name: "TransferYieldOut",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "assets",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "Withdraw",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "yieldFeePercentage",
                type: "uint256",
              },
            ],
            name: "YieldFeePercentageSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "yieldFeeRecipient",
                type: "address",
              },
            ],
            name: "YieldFeeRecipientSet",
            type: "event",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "FEE_PRECISION",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "HOOK_GAS",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MAX_YIELD_FEE",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "asset",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "availableYieldBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claimOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_winner", type: "address" },
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint32", name: "_prizeIndex", type: "uint32" },
              { internalType: "uint96", name: "_reward", type: "uint96" },
              {
                internalType: "address",
                name: "_rewardRecipient",
                type: "address",
              },
            ],
            name: "claimPrize",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "claimYieldFeeShares",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "claimer",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "convertToAssets",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
            ],
            name: "convertToShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "currentYieldBuffer",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
            ],
            name: "deposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_deadline", type: "uint256" },
              { internalType: "uint8", name: "_v", type: "uint8" },
              { internalType: "bytes32", name: "_r", type: "bytes32" },
              { internalType: "bytes32", name: "_s", type: "bytes32" },
            ],
            name: "depositWithPermit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "getHooks",
            outputs: [
              {
                components: [
                  {
                    internalType: "bool",
                    name: "useBeforeClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "useAfterClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "contract IPrizeHooks",
                    name: "implementation",
                    type: "address",
                  },
                ],
                internalType: "struct PrizeHooks",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_tokenOut", type: "address" },
              {
                internalType: "address",
                name: "_liquidationPair",
                type: "address",
              },
            ],
            name: "isLiquidationPair",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_tokenOut", type: "address" },
            ],
            name: "liquidatableBalanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "liquidationPair",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "maxDeposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "maxMint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "maxRedeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "maxWithdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
            ],
            name: "mint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
            ],
            name: "previewDeposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "previewMint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "previewRedeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
            ],
            name: "previewWithdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "prizePool",
            outputs: [
              { internalType: "contract PrizePool", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_minAssets", type: "uint256" },
            ],
            name: "redeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "redeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_claimer", type: "address" },
            ],
            name: "setClaimer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  {
                    internalType: "bool",
                    name: "useBeforeClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "useAfterClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "contract IPrizeHooks",
                    name: "implementation",
                    type: "address",
                  },
                ],
                internalType: "struct PrizeHooks",
                name: "hooks",
                type: "tuple",
              },
            ],
            name: "setHooks",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_liquidationPair",
                type: "address",
              },
            ],
            name: "setLiquidationPair",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "_yieldFeePercentage",
                type: "uint32",
              },
            ],
            name: "setYieldFeePercentage",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_yieldFeeRecipient",
                type: "address",
              },
            ],
            name: "setYieldFeeRecipient",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "targetOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalAssets",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalDebt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalPreciseAssets",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalYieldBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_tokenOut", type: "address" },
              { internalType: "uint256", name: "_amountOut", type: "uint256" },
            ],
            name: "transferTokensOut",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "twabController",
            outputs: [
              {
                internalType: "contract TwabController",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_tokenIn", type: "address" },
              { internalType: "uint256", name: "_amountIn", type: "uint256" },
              { internalType: "bytes", name: "", type: "bytes" },
            ],
            name: "verifyTokensIn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_maxShares", type: "uint256" },
            ],
            name: "withdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "withdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldBuffer",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldFeeBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldFeePercentage",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldFeeRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldVault",
            outputs: [
              { internalType: "contract IERC4626", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        f = (e) => e.toLowerCase(),
        h =
          (((a = h || {})[(a.mainnet = 1)] = "mainnet"),
          (a[(a.sepolia = 11155111)] = "sepolia"),
          (a[(a.bsc = 56)] = "bsc"),
          (a[(a.bsc_testnet = 97)] = "bsc_testnet"),
          (a[(a.polygon = 137)] = "polygon"),
          (a[(a.mumbai = 80001)] = "mumbai"),
          (a[(a.optimism = 10)] = "optimism"),
          (a[(a.optimism_sepolia = 11155420)] = "optimism_sepolia"),
          (a[(a.avalanche = 43114)] = "avalanche"),
          (a[(a.fuji = 43113)] = "fuji"),
          (a[(a.celo = 42220)] = "celo"),
          (a[(a.celo_testnet = 44787)] = "celo_testnet"),
          (a[(a.arbitrum = 42161)] = "arbitrum"),
          (a[(a.arbitrum_sepolia = 421614)] = "arbitrum_sepolia"),
          (a[(a.base = 8453)] = "base"),
          (a[(a.base_sepolia = 84532)] = "base_sepolia"),
          (a[(a.scroll = 534352)] = "scroll"),
          (a[(a.scroll_sepolia = 534351)] = "scroll_sepolia"),
          (a[(a.gnosis = 100)] = "gnosis"),
          (a[(a.gnosis_chiado = 10200)] = "gnosis_chiado"),
          a),
        T = {
          1: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
          137: "0x25788a1a171ec66Da6502f9975a15B609fF54CF6",
          10: "0x395ae52bb17aef68c2888d941736a71dc6d4e125",
          42161: "0xCF934E2402A5e072928a39a956964eb8F2B5B79C",
          8453: "0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3",
          534352: "0xF9Af83FC41e0cc2af2fba93644D542Df6eA0F2b7",
          100: "0x216a7d520992eD198593A16e0b17c784c9cdc660",
          11155420: "0x24Ffb8Ca3DeA588B267A15F1d94766dCbA034aE6",
          421614: "0x02A32F041C16158bcC1CaA90e22B230958eD5c4b",
          84532: "0x50Ac98a0CA373a3935069A8755D895663d2F4A16",
          534351: "0x7026b77376547Ba7961C16a4A05edaE070aBeC47",
          10200: "0xa83a315bed18b36308a518c7f77a2464e9f7286c",
        },
        v = {
          1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          137: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          10: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
          42161: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          8453: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          534352: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
          100: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
          11155420: "0xded96a50515f1a4620a3c5244fae15ed7d216d4a",
          421614: "0x7b2e0bd66ef04d26db132391b5600af3887e9f9f",
          84532: "0x034109d90e70b972617e96b33295e724fff5887a",
          534351: "0x6f720053319f89c9670234989a5bd807a37d1792",
          10200: "0xfc535b2407bb2c8b4f4a4faabbb9981ff031b7ca",
        },
        w = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        g = {
          1: {
            chainId: 1,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          11155111: {
            chainId: 11155111,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          56: {
            chainId: 56,
            address: w,
            symbol: "BNB",
            name: "BNB",
            decimals: 18,
          },
          97: {
            chainId: 97,
            address: w,
            symbol: "BNB",
            name: "BNB",
            decimals: 18,
          },
          137: {
            chainId: 137,
            address: w,
            symbol: "MATIC",
            name: "Polygon",
            decimals: 18,
          },
          80001: {
            chainId: 80001,
            address: w,
            symbol: "MATIC",
            name: "Polygon",
            decimals: 18,
          },
          10: {
            chainId: 10,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          11155420: {
            chainId: 11155420,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          43114: {
            chainId: 43114,
            address: w,
            symbol: "AVAX",
            name: "Avalanche",
            decimals: 18,
          },
          43113: {
            chainId: 43113,
            address: w,
            symbol: "AVAX",
            name: "Avalanche",
            decimals: 18,
          },
          42220: {
            chainId: 42220,
            address: w,
            symbol: "CELO",
            name: "Celo",
            decimals: 18,
          },
          44787: {
            chainId: 44787,
            address: w,
            symbol: "CELO",
            name: "Celo",
            decimals: 18,
          },
          42161: {
            chainId: 42161,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          421614: {
            chainId: 421614,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          8453: {
            chainId: 8453,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          84532: {
            chainId: 84532,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          534352: {
            chainId: 534352,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          534351: {
            chainId: 534351,
            address: w,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          100: {
            chainId: 100,
            address: w,
            symbol: "XDAI",
            name: "XDAI",
            decimals: 18,
          },
          10200: {
            chainId: 10200,
            address: w,
            symbol: "XDAI",
            name: "XDAI",
            decimals: 18,
          },
        },
        x = {
          1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          11155111: null,
          56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
          97: null,
          137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
          80001: null,
          10: "0x4200000000000000000000000000000000000006",
          11155420: null,
          43114: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
          43113: null,
          42220: null,
          44787: null,
          42161: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          421614: null,
          8453: "0x4200000000000000000000000000000000000006",
          84532: null,
          534352: "0x5300000000000000000000000000000000000004",
          534351: null,
          100: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
          10200: null,
        },
        C = "https://token-prices.api.cabana.fi",
        I = {
          1: {
            "0xdc035d45d973e3ec169d2276ddab16f1e407384f": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
          },
          10: {
            [T[10].toLowerCase()]: { chainId: 1, address: f(T[1]) },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
          },
          42161: {
            [T[42161].toLowerCase()]: { chainId: 1, address: f(T[1]) },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0xfa5ed56a203466cbbc2430a43c66b9d8723528e7": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
          },
          8453: {
            [T[8453].toLowerCase()]: { chainId: 1, address: f(T[1]) },
            "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452": {
              chainId: 1,
              address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
            },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0xa61beb4a3d02decb01039e378237032b351125b4": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
            "0x368181499736d0c0cc614dbb145e2ec1ac86b8c6": {
              chainId: 1,
              address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
            },
          },
          137: {
            [w]: {
              chainId: 137,
              address: "0x0000000000000000000000000000000000001010",
            },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
          },
          534352: {
            [T[534352].toLowerCase()]: { chainId: 1, address: f(T[1]) },
          },
          100: { [T[100].toLowerCase()]: { chainId: 1, address: f(T[1]) } },
          11155420: {
            [w]: { chainId: 1, address: w },
            "0xef38f21ec5477f6e3d4b7e9f0dea44a788c669b0": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            [v[11155420]]: { chainId: 1, address: v[1] },
            "0x68f92539f64e486f2853bb2892933a21b54829e5": {
              chainId: 1,
              address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            },
            "0x6c6a62b0861d8f2b946456ba9dcd0f3baec54147": {
              chainId: 1,
              address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            },
            "0x4a61b6f54157840e80e0c47f1a628c0b3744a739": {
              chainId: 1,
              address: x[1],
            },
            [T[11155420].toLowerCase()]: { chainId: 1, address: f(T[1]) },
          },
          421614: {
            [w]: { chainId: 1, address: w },
            "0xfe045beefda06606fc5f441ccca2fe8c903e9725": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            [v[421614]]: { chainId: 1, address: v[1] },
            "0x060fad1bca90e5b1efca0d93febec96e638fd8a6": {
              chainId: 1,
              address: x[1],
            },
            [T[421614].toLowerCase()]: { chainId: 1, address: f(T[1]) },
          },
          84532: {
            [w]: { chainId: 1, address: w },
            "0xe4b4a71923aecb4b8924bda8c31941a8ab50ff86": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            [v[84532]]: { chainId: 1, address: v[1] },
            "0x019aa44d02715e4042b1ba3b4d2fa9bcef33c002": {
              chainId: 1,
              address: x[1],
            },
            [T[84532].toLowerCase()]: { chainId: 1, address: f(T[1]) },
          },
          534351: {
            [w]: { chainId: 1, address: w },
            "0x6b0877bcb4720f094bc13187f5e16bdbf730693a": {
              chainId: 1,
              address: x[1],
            },
            "0x7026b77376547ba7961c16a4a05edae070abec47": {
              chainId: 1,
              address: f(T[1]),
            },
            "0x6f720053319f89c9670234989a5bd807a37d1792": {
              chainId: 1,
              address: v[1],
            },
            "0xc024e95cf6bb2efc424c9035db4647a12d8dcac9": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            "0x23dbacc4e588fadc2d3eed3d1eddb8daa57714ba": {
              chainId: 1,
              address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            },
            "0xa15316214d52d907712d751987d4593972cf3b8b": {
              chainId: 1,
              address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            },
          },
          10200: {
            [w]: {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            "0x6b629bb304017d3d985d140599d8e6fc9942b9a7": {
              chainId: 1,
              address: x[1],
            },
            "0xa83a315bed18b36308a518c7f77a2464e9f7286c": {
              chainId: 1,
              address: f(T[1]),
            },
            "0xfc535b2407bb2c8b4f4a4faabbb9981ff031b7ca": {
              chainId: 1,
              address: v[1],
            },
            "0xb2d0d7ad1d4b2915390dc7053b9421f735a723e7": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            "0xbe9a62939f82e12f4a48912078a4420f1a5fc2e0": {
              chainId: 1,
              address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            },
            "0x3e9c64afc24c551cc8e11f52fedecdacf7362559": {
              chainId: 1,
              address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            },
          },
        },
        A = {
          10: {
            "0x7f5c764cbc14f9669b88837ca1490cca17c31607": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
          42161: {
            "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
          137: {
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
          43114: {
            "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
        },
        P = {
          app: "https://app.cabana.fi",
          app_v4: "https://app.pooltogether.com",
          landingPage: "https://cabana.fi",
          protocolLandingPage: "https://pooltogether.com",
          docs: "https://docs.cabana.fi",
          protocolDocs: "https://docs.pooltogether.com",
          protocolDevDocs: "https://dev.pooltogether.com",
          governance: "https://gov.pooltogether.com",
          poolExplorer: "https://poolexplorer.win",
          tools_v4: "https://tools.pooltogether.com",
          notion: "https://pooltogetherdao.notion.site",
          vaultListCreator: "https://lists.cabana.fi",
          vaultFactory: "https://factory.cabana.fi",
          analytics: "https://analytics.cabana.fi",
          swaps: "https://swap.cabana.fi",
          rewardsBuilder: "https://rewards.cabana.fi",
          flashLiquidator: "https://flash.cabana.fi",
          migrations: "https://migrate.cabana.fi",
          builders: "https://builders.cabana.fi",
        };
      ({
        ...P,
        termsOfService: "".concat(P.landingPage, "/terms"),
        privacyPolicy: "".concat(P.landingPage, "/privacy"),
        ecosystem: "".concat(P.protocolLandingPage, "/ecosystem"),
        discord: "".concat(P.protocolLandingPage, "/discord"),
        appDocs: "".concat(P.docs, "/#the-cabana-app"),
        toolDocs: "".concat(P.docs, "/#cabana-tools"),
        protocolBasicsDocs: "".concat(P.docs, "/protocol/the-basics"),
        delegateDocs: "".concat(P.docs, "/cabana-app/delegation"),
        prizeYieldDocs: "".concat(P.docs, "/cabana-app/prize-yield"),
        factoryDocs: "".concat(P.docs, "/cabana-tools/cabana-factory"),
        listDocs: "".concat(P.docs, "/cabana-tools/cabana-lists"),
        analyticsDocs: "".concat(P.docs, "/cabana-tools/cabanalytics"),
        swapDocs: "".concat(P.docs, "/cabana-tools/cabana-swaps"),
        flashDocs: "".concat(P.docs, "/cabana-tools/cabana-flash"),
        appGuides: "".concat(P.docs, "/cabana-app/guides"),
        toolGuides: "".concat(P.docs, "/cabana-tools/guides"),
        protocolFaqs: "".concat(P.docs, "/protocol/faqs"),
        appFaqs: "".concat(P.docs, "/cabana-app/faqs"),
        toolFaqs: "".concat(P.docs, "/cabana-tools/faqs"),
        rewardTokenWhitelist: "".concat(
          P.docs,
          "/cabana-app/bonus-rewards#reward-token-whitelist"
        ),
        risks: "".concat(P.protocolDocs, "/security/risks"),
        audits: "".concat(P.protocolDocs, "/security/audits"),
        devDocs_v4: "".concat(P.protocolDevDocs, "/protocol/V4/introduction"),
        depositDelegator: "".concat(P.tools_v4, "/delegate"),
        prizeTierController: "".concat(P.tools_v4, "/prize-tier-controller"),
        communityCalendar: "".concat(
          P.notion,
          "/Community-Calendar-4ce3024241dd464db96215e6729a78e0"
        ),
      });
      var M = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n = e.indexOf(".");
          return -1 !== n
            ? 0 === t
              ? e.substring(0, n)
              : e.substring(0, n + t + 1)
            : e;
        },
        D = (e) => {
          var t;
          return e.toString().includes("e")
            ? 18
            : (null === (t = e.toString().split(".")[1]) || void 0 === t
                ? void 0
                : t.length) || 0;
        },
        S = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
          return e && t
            ? parseFloat((0, s.b)((e * BigInt(10 ** n)) / t, n))
            : 0;
        },
        _ = (e, t) => {
          let n = D(t);
          return (e * (0, r.v)(t.toFixed(n), n)) / 10n ** BigInt(n);
        },
        k = async (e, t, n, a) => {
          if (!(0, l.U)(t) || 0 === a.length)
            throw Error("Multicall Error: Invalid parameters");
          if (!(await (null == e ? void 0 : e.getChainId())))
            throw Error("Multicall Error: Could not get chain ID from client");
          let i = [];
          return (
            a.forEach((e) => {
              i.push({ address: t, abi: n, ...e });
            }),
            (await e.multicall({ contracts: i })).map((e) => e.result)
          );
        },
        N = async (e, t, n, a) => {
          let i = t.every((e) => (0, l.U)(e));
          if (0 === t.length || !i || 0 === a.length)
            throw Error("Multicall Error: Invalid parameters");
          if (!(await (null == e ? void 0 : e.getChainId())))
            throw Error("Multicall Error: Could not get chain ID from client");
          let s = [];
          a.forEach((e) => {
            t.forEach((t) => {
              s.push({ address: t, abi: n, ...e });
            });
          });
          let r = await e.multicall({ contracts: s }),
            d = {};
          return (
            s.forEach((e, t) => {
              var n;
              void 0 === d[e.address] && (d[e.address] = {}),
                (d[e.address][e.functionName] =
                  null === (n = r[t]) || void 0 === n ? void 0 : n.result);
            }),
            d
          );
        },
        E = async (e, t) => {
          let n = t.every((e) => (0, l.U)(e.address));
          if (0 === t.length || !n)
            throw Error("Multicall Error: Invalid parameters");
          if (!(await e.getChainId()))
            throw Error("Multicall Error: Could not get chain ID from client");
          let a = await e.multicall({ contracts: t }),
            i = {};
          return (
            t.forEach((e, t) => {
              var n;
              void 0 === i[e.address] && (i[e.address] = {}),
                (i[e.address][e.functionName] =
                  null === (n = a[t]) || void 0 === n ? void 0 : n.result);
            }),
            i
          );
        },
        B = async (e, t) => {
          try {
            if (null.includes(e)) {
              let n = new URL("".concat(C, "/").concat(e)),
                a = {};
              t && t.length > 0 && n.searchParams.set("tokens", t.join(","));
              let i = await fetch(n.toString()),
                s = await i.json();
              if (
                (Object.keys(s).forEach((e) => {
                  var t;
                  let n =
                    null === (t = s[e][0]) || void 0 === t ? void 0 : t.price;
                  void 0 !== n && (a[e] = n);
                }),
                t && t.length > 0 && Object.keys(a).length < t.length)
              ) {
                let n = await O(e, t);
                Object.entries(n).forEach((e) => {
                  let [t, n] = e;
                  a[t] || (a[t] = n);
                });
              }
              return a;
            }
            if (t && t.length > 0) return await O(e, t);
            return {};
          } catch (e) {
            return console.error(e), {};
          }
        },
        j = async (e, t) => {
          if (!isAddress3(t)) return {};
          try {
            if (null.includes(e)) {
              let n = new URL("".concat(C, "/").concat(e, "/").concat(t)),
                a = await fetch(n.toString()),
                i = await a.json(),
                s = Object.values(i)[0];
              if (null == s ? void 0 : s.length) return i;
              return await z(e, t);
            }
            {
              let n = f(t),
                a = (await B(e, [t]))[n],
                i = new Date().toISOString().split("T")[0];
              return { [n]: [{ date: i, price: a }] };
            }
          } catch (e) {
            return console.error(e), {};
          }
        },
        O = async (e, t) => {
          let n = {},
            a = {};
          return (
            t.forEach((t) => {
              var n;
              let i = f(t),
                s = null === (n = I[e]) || void 0 === n ? void 0 : n[i];
              s &&
                (void 0 === a[s.chainId] && (a[s.chainId] = {}),
                (a[s.chainId][s.address] = i));
            }),
            (
              await Promise.all(
                Object.keys(a).map(async (e) => {
                  let t = parseInt(e),
                    n = Object.keys(a[t]);
                  return { chainId: t, tokenPrices: await B(t, n) };
                })
              )
            ).forEach((e) => {
              Object.entries(e.tokenPrices).forEach((t) => {
                var i;
                let [s, r] = t;
                n[null === (i = a[e.chainId]) || void 0 === i ? void 0 : i[s]] =
                  r;
              });
            }),
            n
          );
        },
        z = async (e, t) => {
          var n;
          let a = null === (n = I[e]) || void 0 === n ? void 0 : n[f(t)];
          if (!a) return {};
          {
            let e = {},
              n = Object.values(await j(a.chainId, a.address))[0];
            return (null == n ? void 0 : n.length) && (e[t] = n), e;
          }
        },
        F = (e) => "".concat(e.address.toLowerCase(), "-").concat(e.chainId),
        R = (e, t) => t.filter((t) => t.chainId === e),
        L = async (e, t, n, a) => {
          let i = {},
            s = await e.getChainId();
          if (n.length > 0) {
            let r = n.map((e) => ({
                functionName: "delegateBalanceOf",
                args: [e, t],
              })),
              l = await k(e, a, m, r);
            n.forEach((e, t) => {
              let n = l[t];
              i[F({ chainId: s, address: e })] = "bigint" == typeof n ? n : 0n;
            });
          }
          return i;
        },
        V = async (e, t, n, a) => {
          let i = {},
            s = await e.getChainId();
          if (n.length > 0) {
            let r = n.map((e) => ({
                functionName: "delegateOf",
                args: [e, t],
              })),
              d = await k(e, a, m, r);
            n.forEach((e, n) => {
              let a = d[n],
                r = "string" == typeof a && (0, l.U)(a) ? a : t;
              i[F({ chainId: s, address: e })] = r;
            });
          }
          return i;
        },
        U = async (e, t) => {
          let n = {},
            a = await e.getChainId(),
            i = a
              ? t.filter((e) => e.chainId === a && void 0 !== e.decimals)
              : [];
          if (i.length > 0) {
            let t = i.map((e) => ({
                address: e.address,
                abi: b,
                functionName: "convertToAssets",
                args: [(0, r.v)("1", e.decimals)],
              })),
              a = await E(e, t);
            i.forEach((e) => {
              var t, i;
              n[F(e)] =
                null !==
                  (i =
                    null === (t = a[e.address]) || void 0 === t
                      ? void 0
                      : t.convertToAssets) && void 0 !== i
                  ? i
                  : 0n;
            });
          }
          return n;
        },
        q = async (e, t) => {
          let n = {},
            a = await e.getChainId(),
            i = a ? t.filter((e) => e.chainId === a) : [];
          if (i.length > 0) {
            let t = i.map((e) => e.address),
              a = await N(e, t, b, [
                { functionName: "totalPreciseAssets" },
                { functionName: "totalAssets" },
              ]);
            i.forEach((e) => {
              var t, i, s, r;
              n[F(e)] =
                null !==
                  (r =
                    null !==
                      (s =
                        null === (t = a[e.address]) || void 0 === t
                          ? void 0
                          : t.totalPreciseAssets) && void 0 !== s
                      ? s
                      : null === (i = a[e.address]) || void 0 === i
                      ? void 0
                      : i.totalAssets) && void 0 !== r
                  ? r
                  : 0n;
            });
          }
          return n;
        },
        H = (e) => {
          let t = {};
          return (
            e.forEach((e) => {
              void 0 === t[e.chainId] && (t[e.chainId] = []),
                t[e.chainId].includes(e.address) ||
                  t[e.chainId].push(e.address);
            }),
            t
          );
        },
        Z = async (e, t) => {
          let n = {},
            a = await e.getChainId(),
            i = a ? t.filter((e) => e.chainId === a) : [];
          if (i.length > 0) {
            let t = new Set();
            if (
              (i.forEach((e) => {
                var a, i;
                (
                  null === (i = e.extensions) || void 0 === i
                    ? void 0
                    : null === (a = i.underlyingAsset) || void 0 === a
                    ? void 0
                    : a.address
                )
                  ? (n[F(e)] = e.extensions.underlyingAsset.address)
                  : t.add(e.address);
              }),
              t.size > 0)
            ) {
              let i = await N(e, Array.from(t), b, [{ functionName: "asset" }]);
              t.forEach((e) => {
                var t;
                n[F({ chainId: a, address: e })] =
                  null === (t = i[e]) || void 0 === t ? void 0 : t.asset;
              });
            }
          }
          return n;
        },
        W = async (e, t, n) => {
          let a = {},
            i = await e.getChainId(),
            s = i
              ? t.filter((e) => e.chainId === i && void 0 !== e.decimals)
              : [];
          if (s.length > 0) {
            let t = s.map((e) => {
                let { address: t } = e;
                return {
                  functionName: "totalSupplyDelegateBalance",
                  args: [t],
                };
              }),
              i = await k(e, n, m, t);
            s.forEach((e, t) => {
              let n = i[t];
              a[F(e)] = n;
            });
          }
          return a;
        },
        Y = (e, t) => "".concat(t.toLowerCase(), "-").concat(e),
        G = async (e, t, n, a, i) => {
          let s = {},
            r = await e.getChainId();
          if (n.length > 0) {
            let l = n.map((e) => ({
                functionName: "getContributedBetween",
                args: [e, a, i],
              })),
              d = await k(e, t, y, l);
            n.forEach((e, t) => {
              let n = d[t];
              s[F({ chainId: r, address: e })] = "bigint" == typeof n ? n : 0n;
            });
          }
          return s;
        },
        K = async (e, t, n, a, i) => {
          let r = {},
            l = await e.getChainId();
          if (n.length > 0) {
            if (i >= a) {
              let d = n.map((e) => ({
                  functionName: "getVaultPortion",
                  args: [e, a, i],
                })),
                u = await k(e, t, y, d);
              n.forEach((e, t) => {
                let n = u[t];
                r[F({ chainId: l, address: e })] = parseFloat(
                  (0, s.b)("bigint" == typeof n ? n : 0n, 18)
                );
              });
            } else
              n.forEach((e) => {
                r[F({ chainId: l, address: e })] = parseFloat((0, s.b)(0n, 18));
              });
          }
          return r;
        },
        X = async (e, t, n, a, i) => {
          let s = {},
            r = await e.getChainId();
          if (n.length > 0 && a <= i) {
            let l = n.map((e) => ({
                functionName: "getVaultUserBalanceAndTotalSupplyTwab",
                args: [e, d.DR, a, i],
              })),
              u = await k(e, t, y, l);
            n.forEach((e, t) => {
              let n = u[t],
                a = n && "bigint" == typeof n[1] ? n[1] : 0n;
              s[F({ chainId: r, address: e })] = a;
            });
          }
          return s;
        },
        $ = async function (e, t, n) {
          var a, i, s;
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 7,
            l = [];
          if (r < 1)
            throw Error("Invalid number of past draws to consider: ".concat(r));
          let d = [
              { functionName: "drawPeriodSeconds" },
              { functionName: "tierShares" },
              { functionName: "getTotalShares" },
              { functionName: "getLastAwardedDrawId" },
              { functionName: "tierLiquidityUtilizationRate" },
              ...n.map((e) => ({
                functionName: "getTierAccrualDurationInDraws",
                args: [e],
              })),
              ...n.map((e) => ({
                functionName: "getTierPrizeSize",
                args: [e],
              })),
            ],
            p = await k(e, t, y, d),
            c = Number(p[3]) || 1,
            m = r > c ? 1 : c - Math.floor(r) + 1,
            b = (0, u.uN)({ address: t, abi: y, client: { public: e } }),
            f = await b.read.getTotalContributedBetween([m, c]),
            h = Number(p[0]),
            T = parseFloat(
              M(
                S(
                  null !== (a = BigInt(p[1])) && void 0 !== a ? a : 0n,
                  null !== (i = p[2]) && void 0 !== i ? i : 0n
                ).toString(),
                4
              )
            ),
            v = parseFloat(
              (0, o.d)(null !== (s = p[4]) && void 0 !== s ? s : 0n)
            ),
            w = _(_(f, T) / BigInt(c - m + 1), v);
          return (
            n.forEach((e) => {
              let t = 4 ** e,
                a = p[e + n.length + 5] || w / BigInt(t),
                i = Number(p[e + 5]),
                s = i * h,
                r = { current: a, estimated: (w * BigInt(i)) / BigInt(t) };
              l.push({ amount: r, dailyFrequency: t / (s / 86400) });
            }),
            l
          );
        },
        J =
          (((i = J || {}).second = "second"),
          (i.minute = "minute"),
          (i.hour = "hour"),
          (i.day = "day"),
          (i.week = "week"),
          (i.month = "month"),
          (i.year = "year"),
          i),
        Q = async (e, t) => {
          let n = {},
            a = t.filter((e) => f(e) !== w && e !== d.DR);
          if ((null == a ? void 0 : a.length) > 0) {
            let t = await N(e, a, c, [
                { functionName: "symbol" },
                { functionName: "name" },
                { functionName: "decimals" },
                { functionName: "totalSupply" },
              ]),
              i = await e.getChainId();
            a.forEach((e) => {
              var a, s, r, l, d, u, o, p;
              let c = null === (a = A[i]) || void 0 === a ? void 0 : a[f(e)],
                y =
                  null !== (u = null == c ? void 0 : c.symbol) && void 0 !== u
                    ? u
                    : null === (s = t[e]) || void 0 === s
                    ? void 0
                    : s.symbol,
                m =
                  null !== (o = null == c ? void 0 : c.name) && void 0 !== o
                    ? o
                    : null === (r = t[e]) || void 0 === r
                    ? void 0
                    : r.name,
                b = Number(
                  null === (l = t[e]) || void 0 === l ? void 0 : l.decimals
                ),
                h =
                  null !==
                    (p =
                      null === (d = t[e]) || void 0 === d
                        ? void 0
                        : d.totalSupply) && void 0 !== p
                    ? p
                    : 0n;
              (!y || Number.isNaN(b)) &&
                console.warn(
                  "Invalid ERC20 token: "
                    .concat(e, " on chain ID ")
                    .concat(i, ".")
                ),
                (n[e] = {
                  chainId: i,
                  address: e,
                  symbol: y,
                  name: m,
                  decimals: b,
                  totalSupply: h,
                });
            });
          }
          if (
            Object.keys(n).length < t.length &&
            t.map((e) => f(e)).includes(w)
          ) {
            var i;
            let t =
              null !== (i = g[await e.getChainId()]) && void 0 !== i ? i : {};
            n[w] = { ...t, totalSupply: 0n };
          }
          return n;
        },
        ee = async (e, t, n, a) => {
          let i = {},
            s = a.filter((e) => f(e) !== w && e !== d.DR);
          if ((null == s ? void 0 : s.length) > 0) {
            let a = await N(e, s, c, [
              { functionName: "allowance", args: [t, n] },
            ]);
            s.forEach((e) => {
              var t, n;
              i[e] =
                null !==
                  (n =
                    null === (t = a[e]) || void 0 === t
                      ? void 0
                      : t.allowance) && void 0 !== n
                  ? n
                  : 0n;
            });
          }
          return (
            Object.keys(i).length < a.length &&
              a.map((e) => f(e)).includes(w) &&
              (i[w] = 0n),
            i
          );
        },
        et = async (e, t, n) => {
          let a = {},
            i = n.filter((e) => f(e) !== w && e !== d.DR);
          if ((null == i ? void 0 : i.length) > 0) {
            let n = await N(e, i, c, [
                { functionName: "symbol" },
                { functionName: "name" },
                { functionName: "decimals" },
                { functionName: "balanceOf", args: [t] },
              ]),
              s = await e.getChainId();
            i.forEach((e) => {
              var t, i, r, l, d;
              let u = null === (t = n[e]) || void 0 === t ? void 0 : t.symbol,
                o = null === (i = n[e]) || void 0 === i ? void 0 : i.name,
                p = Number(
                  null === (r = n[e]) || void 0 === r ? void 0 : r.decimals
                ),
                c =
                  null !==
                    (d =
                      null === (l = n[e]) || void 0 === l
                        ? void 0
                        : l.balanceOf) && void 0 !== d
                    ? d
                    : 0n;
              (!u || Number.isNaN(p)) &&
                console.warn(
                  "Invalid ERC20 token: "
                    .concat(e, " on chain ID ")
                    .concat(s, ".")
                ),
                (a[e] = {
                  chainId: s,
                  address: e,
                  symbol: u,
                  name: o,
                  decimals: p,
                  amount: c,
                });
            });
          }
          if (
            Object.keys(a).length < n.length &&
            n.map((e) => f(e)).includes(w)
          ) {
            var s;
            let n =
                null !== (s = g[await e.getChainId()]) && void 0 !== s ? s : {},
              i = await e.getBalance({ address: t });
            a[w] = { ...n, amount: i };
          }
          return a;
        },
        en = (e, t) => {
          if (!(0, l.U)(e))
            throw Error(
              ""
                .concat(t ? "".concat(t, " | ") : "", "Invalid address: '")
                .concat(e, "'")
            );
        },
        ea = async (e, t, n) => {
          let a = await t.getChainId();
          if (a) {
            if (a !== e)
              throw Error(
                ""
                  .concat(
                    n ? "".concat(n, " | ") : "",
                    "Viem Client is on network "
                  )
                  .concat(a, ". Expected network ")
                  .concat(e)
              );
          } else
            throw Error(
              "".concat(n ? "".concat(n, " | ") : "", "Invalid Viem Client")
            );
        },
        ei = class {
          async getPrizeTokenAddress() {
            if (void 0 !== this.prizeTokenAddress)
              return this.prizeTokenAddress;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getPrizeTokenAddress]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "prizeToken",
            });
            return (this.prizeTokenAddress = e), this.prizeTokenAddress;
          }
          async getDrawManagerAddress() {
            if (void 0 !== this.drawManagerAddress)
              return this.drawManagerAddress;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getDrawManagerAddress]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "drawManager",
            });
            return (this.drawManagerAddress = e), this.drawManagerAddress;
          }
          async getTwabControllerAddress() {
            if (void 0 !== this.twabControllerAddress)
              return this.twabControllerAddress;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getTwabControllerAddress]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "twabController",
            });
            return (this.twabControllerAddress = e), this.twabControllerAddress;
          }
          async getPrizeTokenData() {
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getPrizeTokenData]"
            );
            let e = await this.getPrizeTokenAddress();
            return (await Q(this.publicClient, [e]))[e];
          }
          async getDrawPeriodInSeconds() {
            if (void 0 !== this.drawPeriodInSeconds)
              return this.drawPeriodInSeconds;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getDrawPeriodInSeconds]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "drawPeriodSeconds",
            });
            return (this.drawPeriodInSeconds = e), e;
          }
          async getDrawAuctionDurationInSeconds() {
            if (void 0 !== this.drawAuctionDurationInSeconds)
              return this.drawAuctionDurationInSeconds;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getDrawAuctionDurationInSeconds]"
            );
            let e = await this.getDrawManagerAddress(),
              t = await this.publicClient.readContract({
                address: e,
                abi: p,
                functionName: "auctionDuration",
              });
            return (this.drawAuctionDurationInSeconds = t), t;
          }
          async getTierShares() {
            if (void 0 !== this.tierShares) return this.tierShares;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getTierShares]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "tierShares",
            });
            return (this.tierShares = e), e;
          }
          async getReserveShares() {
            if (void 0 !== this.reserveShares) return this.reserveShares;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getReserveShares]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "reserveShares",
            });
            return (this.reserveShares = e), e;
          }
          async getNumberOfTiers() {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getNumberOfTiers]"
              ),
              await this.publicClient.readContract({
                address: this.address,
                abi: y,
                functionName: "numberOfTiers",
              })
            );
          }
          async getLastAwardedDrawId() {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getLastAwardedDrawId]"
              ),
              Number(
                await this.publicClient.readContract({
                  address: this.address,
                  abi: y,
                  functionName: "getLastAwardedDrawId",
                })
              )
            );
          }
          async getTotalContributedAmount(e, t) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getTotalContributedAmount]"
              ),
              await this.publicClient.readContract({
                address: this.address,
                abi: y,
                functionName: "getTotalContributedBetween",
                args: [e, t],
              })
            );
          }
          async getVaultContributedAmounts(e, t, n) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getVaultContributedAmounts]"
              ),
              await G(this.publicClient, this.address, e, t, n)
            );
          }
          async getVaultContributedPercentages(e, t, n) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getVaultContributedPercentages]"
              ),
              await K(this.publicClient, this.address, e, t, n)
            );
          }
          async getVaultTotalSupplyTwabs(e, t) {
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getVaultTotalSupplyTwab]"
            );
            let n = (await this.getLastAwardedDrawId()) || 1;
            return await X(
              this.publicClient,
              this.address,
              e,
              t > n ? 1 : n - Math.floor(t) + 1,
              n
            );
          }
          async getFirstDrawOpenedAt() {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getFirstDrawOpenedAt]"
              ),
              Number(
                await this.publicClient.readContract({
                  address: this.address,
                  abi: y,
                  functionName: "firstDrawOpensAt",
                })
              )
            );
          }
          async getLastAwardedDrawOpenedAt() {
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getLastAwardedDrawOpenedAt]"
            );
            let e = await this.getLastAwardedDrawId();
            return 0 === e
              ? 0
              : Number(
                  await this.publicClient.readContract({
                    address: this.address,
                    abi: y,
                    functionName: "drawOpensAt",
                    args: [e],
                  })
                );
          }
          async isWinner(e, t, n, a) {
            let i = "Prize Pool [isWinner]";
            return (
              en(e, i),
              en(t, i),
              await ea(this.chainId, this.publicClient, i),
              await this.publicClient.readContract({
                address: this.address,
                abi: y,
                functionName: "isWinner",
                args: [e, t, n, a],
              })
            );
          }
          async getTierPrizeSize(e) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getTierPrizeSize]"
              ),
              await this.publicClient.readContract({
                address: this.address,
                abi: y,
                functionName: "getTierPrizeSize",
                args: [e],
              })
            );
          }
          async getEstimatedTierAwardTime(e) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Prize Pool [getEstimatedTierAwardTime]"
              ),
              (await this.publicClient.readContract({
                address: this.address,
                abi: y,
                functionName: "getTierAccrualDurationInDraws",
                args: [e],
              })) * (await this.getDrawPeriodInSeconds())
            );
          }
          async getEstimatedPrizeCount(e) {
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getEstimatedPrizeCount]"
            );
            let t = await this.getNumberOfTiers();
            return await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "estimatedPrizeCountWithBothCanaries",
              args: [(null == e ? void 0 : e.includeCanary) ? t : t - 2],
            });
          }
          async getAllPrizeInfo(e) {
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getAllPrizeInfo]"
            );
            let t = Array.from(Array(await this.getNumberOfTiers()).keys());
            return await $(
              this.publicClient,
              this.address,
              t,
              null == e ? void 0 : e.considerPastDraws
            );
          }
          async getTierLiquidityUtilizationRate() {
            if (void 0 !== this.tierLiquidityUtilizationRate)
              return this.tierLiquidityUtilizationRate;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getTierLiquidityUtilizationRate]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "tierLiquidityUtilizationRate",
            });
            return (this.tierLiquidityUtilizationRate = e), e;
          }
          async getTotalPrizesAvailable() {
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getTotalPrizesAvailable]"
            );
            let e = await this.getTierLiquidityUtilizationRate(),
              t = 1 / parseFloat((0, o.d)(e)),
              n = await this.getAllPrizeInfo(),
              a = 0n;
            return (
              n.forEach((e, n) => {
                let i = _(e.amount.current, t),
                  s = BigInt(this.getTierPrizeCount(n));
                a += i * s;
              }),
              a
            );
          }
          async getGrandPrizePeriodDraws() {
            if (void 0 !== this.grandPrizePeriodDraws)
              return this.grandPrizePeriodDraws;
            await ea(
              this.chainId,
              this.publicClient,
              "Prize Pool [getGrandPrizePeriodDraws]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: y,
              functionName: "grandPrizePeriodDraws",
            });
            return (this.grandPrizePeriodDraws = e), e;
          }
          async claimPrize(e, t, n, a) {
            var i, s, r, l, d, u;
            if (
              !(null === (i = this.walletClient) || void 0 === i
                ? void 0
                : i.account)
            )
              throw Error(
                "".concat(
                  "Prize Pool [claimPrize]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let { request: o } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: y,
              functionName: "claimPrize",
              args: [
                e,
                t,
                n,
                null !== (l = null == a ? void 0 : a.recipient) && void 0 !== l
                  ? l
                  : e,
                null !==
                  (d =
                    null == a
                      ? void 0
                      : null === (s = a.fee) || void 0 === s
                      ? void 0
                      : s.amount) && void 0 !== d
                  ? d
                  : 0n,
                null !==
                  (u =
                    null == a
                      ? void 0
                      : null === (r = a.fee) || void 0 === r
                      ? void 0
                      : r.recipient) && void 0 !== u
                  ? u
                  : this.walletClient.account.address,
              ],
              chain: this.walletClient.chain,
              ...(null == a ? void 0 : a.overrides),
            });
            return await this.walletClient.writeContract(o);
          }
          async closeDraw(e, t) {
            var n;
            if (
              !(null === (n = this.walletClient) || void 0 === n
                ? void 0
                : n.account)
            )
              throw Error(
                "".concat(
                  "Prize Pool [closeDraw]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let { request: a } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: y,
              functionName: "awardDraw",
              args: [e],
              chain: this.walletClient.chain,
              ...t,
            });
            return await this.walletClient.writeContract(a);
          }
          getTierPrizeCount(e) {
            return 4 ** e;
          }
          constructor(e, t, n, a) {
            (this.chainId = e),
              (this.address = t),
              (this.publicClient = n),
              (this.id = Y(e, t)),
              (this.walletClient = null == a ? void 0 : a.walletClient),
              (this.prizeTokenAddress =
                null == a ? void 0 : a.prizeTokenAddress),
              (this.drawManagerAddress =
                null == a ? void 0 : a.drawManagerAddress),
              (this.twabControllerAddress =
                null == a ? void 0 : a.twabControllerAddress),
              (this.drawPeriodInSeconds =
                null == a ? void 0 : a.drawPeriodInSeconds),
              (this.drawAuctionDurationInSeconds =
                null == a ? void 0 : a.drawAuctionDurationInSeconds),
              (this.tierShares = null == a ? void 0 : a.tierShares),
              (this.reserveShares = null == a ? void 0 : a.reserveShares),
              (this.tierLiquidityUtilizationRate =
                null == a ? void 0 : a.tierLiquidityUtilizationRate),
              (this.grandPrizePeriodDraws =
                null == a ? void 0 : a.grandPrizePeriodDraws);
          }
        },
        es = class {
          async getTokenAddress() {
            if (void 0 !== this.tokenAddress) return this.tokenAddress;
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getTokenAddress]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "asset",
            });
            return (this.tokenAddress = e), this.tokenAddress;
          }
          async getTokenData() {
            if (void 0 !== this.tokenData) return this.tokenData;
            await ea(this.chainId, this.publicClient, "Vault [getTokenData]");
            let e = await this.getTokenAddress(),
              t = (await Q(this.publicClient, [e]))[e];
            return (
              t && !isNaN(t.decimals) && (this.decimals = t.decimals),
              (this.tokenData = t),
              this.tokenData
            );
          }
          async getShareData() {
            if (void 0 !== this.shareData) return this.shareData;
            await ea(this.chainId, this.publicClient, "Vault [getShareData]");
            let e = (await Q(this.publicClient, [this.address]))[this.address];
            return (
              e &&
                (isNaN(e.decimals) || (this.decimals = e.decimals),
                void 0 === this.name && (this.name = e.name)),
              (this.shareData = e),
              this.shareData
            );
          }
          async getUserTokenBalance(e) {
            let t = "Vault [getUserTokenBalance]";
            en(e, t), await ea(this.chainId, this.publicClient, t);
            let n = await this.getTokenAddress();
            return (await et(this.publicClient, e, [n]))[n];
          }
          async getUserShareBalance(e) {
            let t = "Vault [getUserShareBalance]";
            return (
              en(e, t),
              await ea(this.chainId, this.publicClient, t),
              (await et(this.publicClient, e, [this.address]))[this.address]
            );
          }
          async getUserDelegateBalance(e) {
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getUserDelegateBalance]"
            );
            let t = await this.getTWABController();
            return await this.publicClient.readContract({
              address: t,
              abi: m,
              functionName: "delegateBalanceOf",
              args: [this.address, e],
            });
          }
          async getUserDelegate(e) {
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getUserDelegate]"
            );
            let t = await this.getTWABController();
            return await this.publicClient.readContract({
              address: t,
              abi: m,
              functionName: "delegateOf",
              args: [this.address, e],
            });
          }
          async getUserTokenAllowance(e) {
            let t = "Vault [getUserTokenAllowance]";
            en(e, t), await ea(this.chainId, this.publicClient, t);
            let n = await this.getTokenAddress();
            return (await ee(this.publicClient, e, this.address, [n]))[n];
          }
          async getAssetsFromShares(e) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Vault [getAssetsFromShares]"
              ),
              await this.publicClient.readContract({
                address: this.address,
                abi: b,
                functionName: "convertToAssets",
                args: [e],
              })
            );
          }
          async getSharesFromAssets(e) {
            return (
              await ea(
                this.chainId,
                this.publicClient,
                "Vault [getSharesFromAssets]"
              ),
              await this.publicClient.readContract({
                address: this.address,
                abi: b,
                functionName: "convertToShares",
                args: [e],
              })
            );
          }
          async getTotalTokenBalance() {
            let e = "Vault [getTotalTokenBalance]";
            await ea(this.chainId, this.publicClient, e);
            let t = await this.getTokenData(),
              n = await this.publicClient
                .readContract({
                  address: this.address,
                  abi: b,
                  functionName: "totalPreciseAssets",
                })
                .catch(
                  () => (
                    console.warn(
                      ""
                        .concat(
                          e,
                          ' | Could not query "totalPreciseAssets" for '
                        )
                        .concat(this.address, " on network ")
                        .concat(this.chainId, ', falling back to "totalAssets"')
                    ),
                    this.publicClient.readContract({
                      address: this.address,
                      abi: b,
                      functionName: "totalAssets",
                    })
                  )
                );
            return { ...t, amount: n };
          }
          async getExchangeRate() {
            var e;
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getExchangeRate]"
            );
            let t =
                null !== (e = this.decimals) && void 0 !== e
                  ? e
                  : (await this.getTokenData()).decimals,
              n = await this.getAssetsFromShares((0, r.v)("1", t));
            return (this.exchangeRate = n), this.exchangeRate;
          }
          async getLiquidationPair() {
            if (void 0 !== this.liquidationPair) return this.liquidationPair;
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getLiquidationPair]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "liquidationPair",
            });
            return (this.liquidationPair = e), this.liquidationPair;
          }
          async getClaimer() {
            if (void 0 !== this.claimer) return this.claimer;
            await ea(this.chainId, this.publicClient, "Vault [getClaimer]");
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "claimer",
            });
            return (this.claimer = e), this.claimer;
          }
          async getYieldSource() {
            if (void 0 !== this.yieldSource) return this.yieldSource;
            await ea(this.chainId, this.publicClient, "Vault [getYieldSource]");
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "yieldVault",
            });
            return (this.yieldSource = e), this.yieldSource;
          }
          async getTWABController() {
            if (void 0 !== this.twabController) return this.twabController;
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getTWABController]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "twabController",
            });
            return (this.twabController = e), this.twabController;
          }
          async getFeeInfo() {
            if (void 0 !== this.feePercent && void 0 !== this.feeRecipient)
              return { percent: this.feePercent, recipient: this.feeRecipient };
            if (
              (await ea(this.chainId, this.publicClient, "Vault [getFeeInfo]"),
              void 0 === this.feePercent)
            ) {
              let e = await this.publicClient.readContract({
                address: this.address,
                abi: b,
                functionName: "yieldFeePercentage",
              });
              this.feePercent = Number(e);
            }
            if (void 0 === this.feeRecipient) {
              let e = await this.publicClient.readContract({
                address: this.address,
                abi: b,
                functionName: "yieldFeeRecipient",
              });
              this.feeRecipient = e;
            }
            return { percent: this.feePercent, recipient: this.feeRecipient };
          }
          async getFeesAvailable() {
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getFeesAvailable]"
            );
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "yieldFeeBalance",
            });
            return (this.feesAvailable = e), this.feesAvailable;
          }
          async getOwner() {
            if (void 0 !== this.owner) return this.owner;
            await ea(this.chainId, this.publicClient, "Vault [getOwner]");
            let e = await this.publicClient.readContract({
              address: this.address,
              abi: b,
              functionName: "owner",
            });
            return (this.owner = e), this.owner;
          }
          async getTotalDelegateSupply() {
            await ea(
              this.chainId,
              this.publicClient,
              "Vault [getTotalDelegateSupply]"
            );
            let e = await this.getTWABController();
            return await this.publicClient.readContract({
              address: e,
              abi: m,
              functionName: "totalSupplyDelegateBalance",
              args: [this.address],
            });
          }
          async deposit(e, t) {
            var n;
            if (
              !(null === (n = this.walletClient) || void 0 === n
                ? void 0
                : n.account)
            )
              throw Error(
                "".concat(
                  "Vault [deposit]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let { request: a } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "deposit",
              args: [e, this.walletClient.account.address],
              chain: this.walletClient.chain,
              ...t,
            });
            return await this.walletClient.writeContract(a);
          }
          async depositTo(e, t, n) {
            var a;
            let i = "Vault [depositTo]";
            if (
              !(null === (a = this.walletClient) || void 0 === a
                ? void 0
                : a.account)
            )
              throw Error(
                "".concat(i, " | Invalid/Unavailable Viem Wallet Client")
              );
            en(t, i);
            let { request: s } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "deposit",
              args: [e, t],
              chain: this.walletClient.chain,
              ...n,
            });
            return await this.walletClient.writeContract(s);
          }
          async withdraw(e, t) {
            var n;
            if (
              !(null === (n = this.walletClient) || void 0 === n
                ? void 0
                : n.account)
            )
              throw Error(
                "".concat(
                  "Vault [withdraw]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let { request: a } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "withdraw",
              args: (null == t ? void 0 : t.maxShares)
                ? [
                    e,
                    this.walletClient.account.address,
                    this.walletClient.account.address,
                    t.maxShares,
                  ]
                : [
                    e,
                    this.walletClient.account.address,
                    this.walletClient.account.address,
                  ],
              chain: this.walletClient.chain,
              ...(null == t ? void 0 : t.overrides),
            });
            return await this.walletClient.writeContract(a);
          }
          async withdrawTo(e, t, n) {
            var a;
            let i = "Vault [withdrawTo]";
            if (
              !(null === (a = this.walletClient) || void 0 === a
                ? void 0
                : a.account)
            )
              throw Error(
                "".concat(i, " | Invalid/Unavailable Viem Wallet Client")
              );
            en(t, i);
            let { request: s } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "withdraw",
              args: (null == n ? void 0 : n.maxShares)
                ? [e, t, this.walletClient.account.address, n.maxShares]
                : [e, t, this.walletClient.account.address],
              chain: this.walletClient.chain,
              ...(null == n ? void 0 : n.overrides),
            });
            return await this.walletClient.writeContract(s);
          }
          async redeem(e, t) {
            var n;
            if (
              !(null === (n = this.walletClient) || void 0 === n
                ? void 0
                : n.account)
            )
              throw Error(
                "".concat(
                  "Vault [redeem]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let { request: a } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "redeem",
              args: (null == t ? void 0 : t.minAssets)
                ? [
                    e,
                    this.walletClient.account.address,
                    this.walletClient.account.address,
                    t.minAssets,
                  ]
                : [
                    e,
                    this.walletClient.account.address,
                    this.walletClient.account.address,
                  ],
              chain: this.walletClient.chain,
              ...(null == t ? void 0 : t.overrides),
            });
            return await this.walletClient.writeContract(a);
          }
          async redeemTo(e, t, n) {
            var a;
            let i = "Vault [redeemTo]";
            if (
              !(null === (a = this.walletClient) || void 0 === a
                ? void 0
                : a.account)
            )
              throw Error(
                "".concat(i, " | Invalid/Unavailable Viem Wallet Client")
              );
            en(t, i);
            let { request: s } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "redeem",
              args: (null == n ? void 0 : n.minAssets)
                ? [e, t, this.walletClient.account.address, n.minAssets]
                : [e, t, this.walletClient.account.address],
              chain: this.walletClient.chain,
              ...(null == n ? void 0 : n.overrides),
            });
            return await this.walletClient.writeContract(s);
          }
          async approveDeposit(e, t) {
            var n;
            if (
              !(null === (n = this.walletClient) || void 0 === n
                ? void 0
                : n.account)
            )
              throw Error(
                "".concat(
                  "Vault [approveDeposit]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let a = await this.getTokenAddress(),
              { request: i } = await this.publicClient.simulateContract({
                account: this.walletClient.account,
                address: a,
                abi: c,
                functionName: "approve",
                args: [this.address, e],
                chain: this.walletClient.chain,
                ...t,
              });
            return await this.walletClient.writeContract(i);
          }
          async revokeAllowance(e) {
            var t;
            if (
              !(null === (t = this.walletClient) || void 0 === t
                ? void 0
                : t.account)
            )
              throw Error(
                "".concat(
                  "Vault [revokeAllowance]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let n = await this.getTokenAddress(),
              { request: a } = await this.publicClient.simulateContract({
                account: this.walletClient.account,
                address: n,
                abi: c,
                functionName: "approve",
                args: [this.address, 0n],
                chain: this.walletClient.chain,
                ...e,
              });
            return await this.walletClient.writeContract(a);
          }
          async claimFees(e, t) {
            var n;
            if (
              !(null === (n = this.walletClient) || void 0 === n
                ? void 0
                : n.account)
            )
              throw Error(
                "".concat(
                  "Vault [claimFees]",
                  " | Invalid/Unavailable Viem Wallet Client"
                )
              );
            let { request: a } = await this.publicClient.simulateContract({
              account: this.walletClient.account,
              address: this.address,
              abi: b,
              functionName: "claimYieldFeeShares",
              args: [e],
              chain: this.walletClient.chain,
              ...t,
            });
            return await this.walletClient.writeContract(a);
          }
          constructor(e, t, n, a) {
            (this.chainId = e),
              (this.address = t),
              (this.publicClient = n),
              (this.id = F({ address: t, chainId: e })),
              (this.walletClient = null == a ? void 0 : a.walletClient),
              (this.decimals = null == a ? void 0 : a.decimals),
              (this.tokenAddress = null == a ? void 0 : a.tokenAddress),
              (this.name = null == a ? void 0 : a.name),
              (this.logoURI = null == a ? void 0 : a.logoURI),
              (this.tags = null == a ? void 0 : a.tags),
              (this.tokenLogoURI = null == a ? void 0 : a.tokenLogoURI),
              (this.yieldSourceName = null == a ? void 0 : a.yieldSourceName),
              (this.yieldSourceURI = null == a ? void 0 : a.yieldSourceURI);
          }
        },
        er = class {
          async getTokenData() {
            if (void 0 !== this.underlyingTokenData)
              return this.underlyingTokenData;
            let e = {},
              t = await this.getUnderlyingTokenAddresses();
            return (
              await Promise.allSettled(
                this.chainIds.map((n) =>
                  (async () => {
                    let a = this.publicClients[n];
                    if (a) {
                      let i = "Vaults [getTokenData] [".concat(n, "]");
                      await ea(n, a, i);
                      let s = await Q(a, t.byChain[n]);
                      R(n, this.allVaultInfo).forEach((n) => {
                        let a = F(n),
                          i = t.byVault[a];
                        (e[a] = s[i]),
                          s[i] &&
                            (isNaN(s[i].decimals) ||
                              (this.vaults[a].decimals = s[i].decimals),
                            (this.vaults[a].tokenData = s[i]));
                      });
                    }
                  })()
                )
              ),
              (this.underlyingTokenData = e),
              this.underlyingTokenData
            );
          }
          async getShareData(e) {
            let t = {},
              n = null != e ? e : this.chainIds;
            return (
              await Promise.allSettled(
                n.map((e) =>
                  (async () => {
                    let n = this.publicClients[e];
                    if (n) {
                      let a = "Vaults [getShareData] [".concat(e, "]");
                      await ea(e, n, a);
                      let i = await Q(n, this.vaultAddresses[e]);
                      R(e, this.allVaultInfo).forEach((e) => {
                        let n = F(e);
                        (t[n] = i[e.address]),
                          i[e.address] &&
                            (isNaN(i[e.address].decimals) ||
                              (this.vaults[n].decimals = i[e.address].decimals),
                            (this.vaults[n].shareData = i[e.address]),
                            void 0 === this.vaults[n].name &&
                              (this.vaults[n].name = i[e.address].name));
                      });
                    }
                  })()
                )
              ),
              t
            );
          }
          async getUserTokenBalances(e, t) {
            let n = "Vaults [getUserTokenBalances]",
              a = {},
              i = null != t ? t : this.chainIds;
            en(e, n);
            let s = await this.getUnderlyingTokenAddresses();
            return (
              await Promise.allSettled(
                i.map((t) =>
                  (async () => {
                    let i = this.publicClients[t];
                    if (i) {
                      await ea(t, i, n + " [".concat(t, "]"));
                      let r = await et(i, e, s.byChain[t]);
                      R(t, this.allVaultInfo).forEach((e) => {
                        let t = F(e),
                          n = s.byVault[t];
                        a[t] = r[n];
                      });
                    }
                  })()
                )
              ),
              a
            );
          }
          async getUserShareBalances(e, t) {
            let n = "Vaults [getUserShareBalances]",
              a = {},
              i = null != t ? t : this.chainIds;
            return (
              en(e, n),
              await Promise.allSettled(
                i.map((t) =>
                  (async () => {
                    let i = this.vaultAddresses[t];
                    if (i) {
                      let s = this.publicClients[t];
                      if (s) {
                        await ea(t, s, n + " [".concat(t, "]"));
                        let r = await et(s, e, i);
                        R(t, this.allVaultInfo).forEach((e) => {
                          a[F(e)] = r[e.address];
                        });
                      }
                    }
                  })()
                )
              ),
              a
            );
          }
          async getTotalTokenBalances(e) {
            let t = {},
              n = null != e ? e : this.chainIds,
              a = await this.getTokenData();
            return (
              await Promise.allSettled(
                n.map((e) =>
                  (async () => {
                    let n = this.publicClients[e];
                    if (n) {
                      let i = "Vaults [getTotalTokenBalances] [".concat(e, "]");
                      await ea(e, n, i);
                      let s = R(e, this.allVaultInfo),
                        r = await q(n, s);
                      Object.keys(r).forEach((e) => {
                        t[e] = { ...a[e], amount: r[e] };
                      });
                    }
                  })()
                )
              ),
              t
            );
          }
          async getUserDelegateBalances(e, t) {
            let n = "Vaults [getUserDelegateBalances]",
              a = {},
              i = null != t ? t : this.chainIds;
            return (
              en(e, n),
              await Promise.allSettled(
                i.map((t) =>
                  (async () => {
                    let i = this.vaultAddresses[t];
                    if (null == i ? void 0 : i.length) {
                      let s = this.publicClients[t];
                      if (s) {
                        await ea(t, s, n + " [".concat(t, "]"));
                        let r = await this.vaults[
                            F({ chainId: t, address: i[0] })
                          ].getTWABController(),
                          l = await L(s, e, i, r);
                        for (let e in l) a[e] = l[e];
                      }
                    }
                  })()
                )
              ),
              a
            );
          }
          async getUserDelegates(e, t) {
            let n = "Vaults [getUserDelegates]",
              a = {},
              i = null != t ? t : this.chainIds;
            return (
              en(e, n),
              await Promise.allSettled(
                i.map((t) =>
                  (async () => {
                    let i = this.vaultAddresses[t];
                    if (null == i ? void 0 : i.length) {
                      let s = this.publicClients[t];
                      if (s) {
                        await ea(t, s, n + " [".concat(t, "]"));
                        let r = await this.vaults[
                            F({ chainId: t, address: i[0] })
                          ].getTWABController(),
                          l = await V(s, e, i, r);
                        for (let e in l) a[e] = l[e];
                      }
                    }
                  })()
                )
              ),
              a
            );
          }
          async getExchangeRates(e) {
            let t = {},
              n = null != e ? e : this.chainIds,
              a = await this.getShareData(n);
            return (
              await Promise.allSettled(
                n.map((e) =>
                  (async () => {
                    let n = this.publicClients[e];
                    if (n) {
                      let i = "Vaults [getExchangeRates] [".concat(e, "]");
                      await ea(e, n, i);
                      let s = R(e, Object.values(a)),
                        r = await U(n, s);
                      Object.assign(t, r),
                        Object.keys(r).forEach((e) => {
                          this.vaults[e].exchangeRate = r[e];
                        });
                    }
                  })()
                )
              ),
              t
            );
          }
          async getUnderlyingTokenAddresses() {
            if (void 0 !== this.underlyingTokenAddresses)
              return this.underlyingTokenAddresses;
            let e = { byChain: {}, byVault: {} };
            return (
              await Promise.allSettled(
                this.chainIds.map((t) =>
                  (async () => {
                    let n = this.publicClients[t];
                    if (n) {
                      let a = "Vaults [getUnderlyingTokenAddresses] [".concat(
                        t,
                        "]"
                      );
                      await ea(t, n, a);
                      let i = R(t, this.allVaultInfo),
                        s = await Z(n, i);
                      Object.assign(e.byVault, s);
                      let r = Array.from(
                        new Set(Object.values(s).filter((e) => !!e))
                      );
                      (e.byChain[t] = r),
                        Object.keys(s).forEach((e) => {
                          let t = s[e];
                          this.vaults[e].tokenAddress = t;
                        });
                    }
                  })()
                )
              ),
              (this.underlyingTokenAddresses = e),
              this.underlyingTokenAddresses
            );
          }
          async getTotalDelegateSupplies() {
            let e = {};
            return (
              await Promise.allSettled(
                this.chainIds.map((t) =>
                  (async () => {
                    let n = this.vaultAddresses[t];
                    if (null == n ? void 0 : n.length) {
                      let a = this.publicClients[t];
                      if (a) {
                        let i = "Vaults [getTotalDelegateSupplies] [".concat(
                          t,
                          "]"
                        );
                        await ea(t, a, i);
                        let s = R(t, this.allVaultInfo),
                          r = await this.vaults[
                            F({ chainId: t, address: n[0] })
                          ].getTWABController(),
                          l = await W(a, s, r);
                        Object.keys(l).forEach((t) => {
                          e[t] = l[t];
                        });
                      }
                    }
                  })()
                )
              ),
              e
            );
          }
          constructor(e, t) {
            (this.allVaultInfo = e),
              (this.publicClients = t),
              (this.vaults = {}),
              (this.chainIds = Object.keys(t)
                .map((e) => parseInt(e))
                .filter((t) => R(t, e).length > 0)),
              (this.vaultAddresses = H(e)),
              this.chainIds.forEach((n) => {
                R(n, e).forEach((e) => {
                  var a, i, s, r, l, d, u, o;
                  let p = new es(e.chainId, e.address, t[n], {
                    decimals: e.decimals,
                    tokenAddress:
                      null === (i = e.extensions) || void 0 === i
                        ? void 0
                        : null === (a = i.underlyingAsset) || void 0 === a
                        ? void 0
                        : a.address,
                    name: e.name,
                    logoURI: e.logoURI,
                    tags: e.tags,
                    tokenLogoURI:
                      null === (r = e.extensions) || void 0 === r
                        ? void 0
                        : null === (s = r.underlyingAsset) || void 0 === s
                        ? void 0
                        : s.logoURI,
                    yieldSourceName:
                      null === (d = e.extensions) || void 0 === d
                        ? void 0
                        : null === (l = d.yieldSource) || void 0 === l
                        ? void 0
                        : l.name,
                    yieldSourceURI:
                      null === (o = e.extensions) || void 0 === o
                        ? void 0
                        : null === (u = o.yieldSource) || void 0 === u
                        ? void 0
                        : u.appURI,
                  });
                  this.vaults[p.id] = p;
                });
              });
          }
        };
    },
    38637: function (e, t, n) {
      n.d(t, {
        AN: function () {
          return ef;
        },
        Bg: function () {
          return eI;
        },
        CU: function () {
          return ec;
        },
        F3: function () {
          return ei;
        },
        Fm: function () {
          return eP;
        },
        Fx: function () {
          return er;
        },
        K0: function () {
          return eT;
        },
        Nx: function () {
          return ex;
        },
        R4: function () {
          return ee;
        },
        S2: function () {
          return eC;
        },
        U7: function () {
          return G;
        },
        Wh: function () {
          return eu;
        },
        Xr: function () {
          return eA;
        },
        bT: function () {
          return ev;
        },
        dQ: function () {
          return ep;
        },
        gP: function () {
          return ew;
        },
        hK: function () {
          return $;
        },
        lJ: function () {
          return Q;
        },
        mM: function () {
          return ed;
        },
        sc: function () {
          return eb;
        },
        uJ: function () {
          return ea;
        },
        us: function () {
          return Y;
        },
        v2: function () {
          return eg;
        },
        wK: function () {
          return em;
        },
        xt: function () {
          return eM;
        },
        yQ: function () {
          return en;
        },
        zV: function () {
          return ey;
        },
      });
      var a = n(13471),
        i = n(52983),
        s = n(75815),
        r = n(47802),
        l = n(89129),
        d = n(76795),
        u = n(94086),
        o = n(49516),
        p = n(50297),
        c = n(82961),
        y = n(12779),
        m = n(10214),
        b = n(70063),
        f = n(37311),
        h = [
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
        ],
        T = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "contract TpdaLiquidationPair",
                name: "pair",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract ILiquidationSource",
                name: "source",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint64",
                name: "targetAuctionPeriod",
                type: "uint64",
              },
              {
                indexed: !1,
                internalType: "uint192",
                name: "targetAuctionPrice",
                type: "uint192",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "smoothingFactor",
                type: "uint256",
              },
            ],
            name: "PairCreated",
            type: "event",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "allPairs",
            outputs: [
              {
                internalType: "contract TpdaLiquidationPair",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract ILiquidationSource",
                name: "_source",
                type: "address",
              },
              { internalType: "address", name: "_tokenIn", type: "address" },
              { internalType: "address", name: "_tokenOut", type: "address" },
              {
                internalType: "uint64",
                name: "_targetAuctionPeriod",
                type: "uint64",
              },
              {
                internalType: "uint192",
                name: "_targetAuctionPrice",
                type: "uint192",
              },
              {
                internalType: "uint256",
                name: "_smoothingFactor",
                type: "uint256",
              },
            ],
            name: "createPair",
            outputs: [
              {
                internalType: "contract TpdaLiquidationPair",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "pair", type: "address" },
            ],
            name: "deployedPairs",
            outputs: [
              { internalType: "bool", name: "wasDeployed", type: "bool" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalPairs",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        v = [
          {
            inputs: [
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
              {
                internalType: "contract IERC4626",
                name: "yieldVault_",
                type: "address",
              },
              {
                internalType: "contract PrizePool",
                name: "prizePool_",
                type: "address",
              },
              { internalType: "address", name: "claimer_", type: "address" },
              {
                internalType: "address",
                name: "yieldFeeRecipient_",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "yieldFeePercentage_",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "yieldBuffer_",
                type: "uint256",
              },
              { internalType: "address", name: "owner_", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "BurnZeroShares", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              { internalType: "address", name: "claimer", type: "address" },
            ],
            name: "CallerNotClaimer",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              {
                internalType: "address",
                name: "liquidationPair",
                type: "address",
              },
            ],
            name: "CallerNotLP",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              {
                internalType: "address",
                name: "yieldFeeRecipient",
                type: "address",
              },
            ],
            name: "CallerNotYieldFeeRecipient",
            type: "error",
          },
          { inputs: [], name: "ClaimRecipientZeroAddress", type: "error" },
          { inputs: [], name: "ClaimerZeroAddress", type: "error" },
          { inputs: [], name: "DepositZeroAssets", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "asset", type: "address" },
            ],
            name: "FailedToGetAssetDecimals",
            type: "error",
          },
          { inputs: [], name: "InvalidShortString", type: "error" },
          { inputs: [], name: "LPZeroAddress", type: "error" },
          { inputs: [], name: "LiquidationAmountOutZero", type: "error" },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "totalToWithdraw",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "availableYield",
                type: "uint256",
              },
            ],
            name: "LiquidationExceedsAvailable",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenIn", type: "address" },
              { internalType: "address", name: "prizeToken", type: "address" },
            ],
            name: "LiquidationTokenInNotPrizeToken",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenOut", type: "address" },
            ],
            name: "LiquidationTokenOutNotSupported",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "totalAssets", type: "uint256" },
              { internalType: "uint256", name: "totalSupply", type: "uint256" },
            ],
            name: "LossyDeposit",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
              { internalType: "uint256", name: "maxShares", type: "uint256" },
            ],
            name: "MaxSharesExceeded",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "assets", type: "uint256" },
              { internalType: "uint256", name: "minAssets", type: "uint256" },
            ],
            name: "MinAssetsNotReached",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "excess", type: "uint256" },
            ],
            name: "MintLimitExceeded",
            type: "error",
          },
          { inputs: [], name: "MintZeroShares", type: "error" },
          { inputs: [], name: "OwnerZeroAddress", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "PermitCallerNotOwner",
            type: "error",
          },
          { inputs: [], name: "PrizePoolZeroAddress", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
              {
                internalType: "uint256",
                name: "yieldFeeBalance",
                type: "uint256",
              },
            ],
            name: "SharesExceedsYieldFeeBalance",
            type: "error",
          },
          {
            inputs: [{ internalType: "string", name: "str", type: "string" }],
            name: "StringTooLong",
            type: "error",
          },
          { inputs: [], name: "TwabControllerZeroAddress", type: "error" },
          { inputs: [], name: "WithdrawZeroAssets", type: "error" },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "yieldFeePercentage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxYieldFeePercentage",
                type: "uint256",
              },
            ],
            name: "YieldFeePercentageExceedsMax",
            type: "error",
          },
          { inputs: [], name: "YieldVaultZeroAddress", type: "error" },
          { inputs: [], name: "ZeroTotalAssets", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "ClaimYieldFeeShares",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "claimer",
                type: "address",
              },
            ],
            name: "ClaimerSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "assets",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "EIP712DomainChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "liquidationPair",
                type: "address",
              },
            ],
            name: "LiquidationPairSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "pendingOwner",
                type: "address",
              },
            ],
            name: "OwnershipOffered",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "useBeforeClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "useAfterClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "contract IPrizeHooks",
                    name: "implementation",
                    type: "address",
                  },
                ],
                indexed: !1,
                internalType: "struct PrizeHooks",
                name: "hooks",
                type: "tuple",
              },
            ],
            name: "SetHooks",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "caller",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "assets",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "Sponsor",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "liquidationPair",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "yieldFee",
                type: "uint256",
              },
            ],
            name: "TransferYieldOut",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "assets",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
            ],
            name: "Withdraw",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "yieldFeePercentage",
                type: "uint256",
              },
            ],
            name: "YieldFeePercentageSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "yieldFeeRecipient",
                type: "address",
              },
            ],
            name: "YieldFeeRecipientSet",
            type: "event",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "FEE_PRECISION",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "HOOK_GAS",
            outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MAX_YIELD_FEE",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "asset",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "availableYieldBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claimOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_winner", type: "address" },
              { internalType: "uint8", name: "_tier", type: "uint8" },
              { internalType: "uint32", name: "_prizeIndex", type: "uint32" },
              { internalType: "uint96", name: "_reward", type: "uint96" },
              {
                internalType: "address",
                name: "_rewardRecipient",
                type: "address",
              },
            ],
            name: "claimPrize",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "claimYieldFeeShares",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "claimer",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "convertToAssets",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
            ],
            name: "convertToShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "currentYieldBuffer",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
            ],
            name: "deposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_deadline", type: "uint256" },
              { internalType: "uint8", name: "_v", type: "uint8" },
              { internalType: "bytes32", name: "_r", type: "bytes32" },
              { internalType: "bytes32", name: "_s", type: "bytes32" },
            ],
            name: "depositWithPermit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "getHooks",
            outputs: [
              {
                components: [
                  {
                    internalType: "bool",
                    name: "useBeforeClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "useAfterClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "contract IPrizeHooks",
                    name: "implementation",
                    type: "address",
                  },
                ],
                internalType: "struct PrizeHooks",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_tokenOut", type: "address" },
              {
                internalType: "address",
                name: "_liquidationPair",
                type: "address",
              },
            ],
            name: "isLiquidationPair",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_tokenOut", type: "address" },
            ],
            name: "liquidatableBalanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "liquidationPair",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "maxDeposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "maxMint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "maxRedeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "maxWithdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
            ],
            name: "mint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
            ],
            name: "previewDeposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "previewMint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
            ],
            name: "previewRedeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
            ],
            name: "previewWithdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "prizePool",
            outputs: [
              { internalType: "contract PrizePool", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_minAssets", type: "uint256" },
            ],
            name: "redeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_shares", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "redeem",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_claimer", type: "address" },
            ],
            name: "setClaimer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  {
                    internalType: "bool",
                    name: "useBeforeClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "useAfterClaimPrize",
                    type: "bool",
                  },
                  {
                    internalType: "contract IPrizeHooks",
                    name: "implementation",
                    type: "address",
                  },
                ],
                internalType: "struct PrizeHooks",
                name: "hooks",
                type: "tuple",
              },
            ],
            name: "setHooks",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_liquidationPair",
                type: "address",
              },
            ],
            name: "setLiquidationPair",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "_yieldFeePercentage",
                type: "uint32",
              },
            ],
            name: "setYieldFeePercentage",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_yieldFeeRecipient",
                type: "address",
              },
            ],
            name: "setYieldFeeRecipient",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "targetOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalAssets",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalDebt",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalPreciseAssets",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalYieldBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_tokenOut", type: "address" },
              { internalType: "uint256", name: "_amountOut", type: "uint256" },
            ],
            name: "transferTokensOut",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "twabController",
            outputs: [
              {
                internalType: "contract TwabController",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_tokenIn", type: "address" },
              { internalType: "uint256", name: "_amountIn", type: "uint256" },
              { internalType: "bytes", name: "", type: "bytes" },
            ],
            name: "verifyTokensIn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_maxShares", type: "uint256" },
            ],
            name: "withdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_assets", type: "uint256" },
              { internalType: "address", name: "_receiver", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "withdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldBuffer",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldFeeBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldFeePercentage",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldFeeRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "yieldVault",
            outputs: [
              { internalType: "contract IERC4626", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        w = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "contract PrizeVault",
                name: "vault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "contract IERC4626",
                name: "yieldVault",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "contract PrizePool",
                name: "prizePool",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "symbol",
                type: "string",
              },
            ],
            name: "NewPrizeVault",
            type: "event",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "allVaults",
            outputs: [
              {
                internalType: "contract PrizeVault",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "string", name: "_name", type: "string" },
              { internalType: "string", name: "_symbol", type: "string" },
              {
                internalType: "contract IERC4626",
                name: "_yieldVault",
                type: "address",
              },
              {
                internalType: "contract PrizePool",
                name: "_prizePool",
                type: "address",
              },
              { internalType: "address", name: "_claimer", type: "address" },
              {
                internalType: "address",
                name: "_yieldFeeRecipient",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "_yieldFeePercentage",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "_yieldBuffer",
                type: "uint256",
              },
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "deployVault",
            outputs: [
              {
                internalType: "contract PrizeVault",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
            ],
            name: "deployedVaults",
            outputs: [
              { internalType: "bool", name: "deployedByFactory", type: "bool" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "deployer", type: "address" },
            ],
            name: "deployerNonces",
            outputs: [
              { internalType: "uint256", name: "nonce", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalVaults",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        g = (e) => e.toLowerCase(),
        x = {
          1: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
          137: "0x25788a1a171ec66Da6502f9975a15B609fF54CF6",
          10: "0x395ae52bb17aef68c2888d941736a71dc6d4e125",
          42161: "0xCF934E2402A5e072928a39a956964eb8F2B5B79C",
          8453: "0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3",
          534352: "0xF9Af83FC41e0cc2af2fba93644D542Df6eA0F2b7",
          100: "0x216a7d520992eD198593A16e0b17c784c9cdc660",
          11155420: "0x24Ffb8Ca3DeA588B267A15F1d94766dCbA034aE6",
          421614: "0x02A32F041C16158bcC1CaA90e22B230958eD5c4b",
          84532: "0x50Ac98a0CA373a3935069A8755D895663d2F4A16",
          534351: "0x7026b77376547Ba7961C16a4A05edaE070aBeC47",
          10200: "0xa83a315bed18b36308a518c7f77a2464e9f7286c",
        },
        C = {
          1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          137: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          10: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
          42161: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          8453: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          534352: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
          100: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
          11155420: "0xded96a50515f1a4620a3c5244fae15ed7d216d4a",
          421614: "0x7b2e0bd66ef04d26db132391b5600af3887e9f9f",
          84532: "0x034109d90e70b972617e96b33295e724fff5887a",
          534351: "0x6f720053319f89c9670234989a5bd807a37d1792",
          10200: "0xfc535b2407bb2c8b4f4a4faabbb9981ff031b7ca",
        },
        I = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        A = {
          1: {
            chainId: 1,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          11155111: {
            chainId: 11155111,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          56: {
            chainId: 56,
            address: I,
            symbol: "BNB",
            name: "BNB",
            decimals: 18,
          },
          97: {
            chainId: 97,
            address: I,
            symbol: "BNB",
            name: "BNB",
            decimals: 18,
          },
          137: {
            chainId: 137,
            address: I,
            symbol: "MATIC",
            name: "Polygon",
            decimals: 18,
          },
          80001: {
            chainId: 80001,
            address: I,
            symbol: "MATIC",
            name: "Polygon",
            decimals: 18,
          },
          10: {
            chainId: 10,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          11155420: {
            chainId: 11155420,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          43114: {
            chainId: 43114,
            address: I,
            symbol: "AVAX",
            name: "Avalanche",
            decimals: 18,
          },
          43113: {
            chainId: 43113,
            address: I,
            symbol: "AVAX",
            name: "Avalanche",
            decimals: 18,
          },
          42220: {
            chainId: 42220,
            address: I,
            symbol: "CELO",
            name: "Celo",
            decimals: 18,
          },
          44787: {
            chainId: 44787,
            address: I,
            symbol: "CELO",
            name: "Celo",
            decimals: 18,
          },
          42161: {
            chainId: 42161,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          421614: {
            chainId: 421614,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          8453: {
            chainId: 8453,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          84532: {
            chainId: 84532,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          534352: {
            chainId: 534352,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          534351: {
            chainId: 534351,
            address: I,
            symbol: "ETH",
            name: "Ether",
            decimals: 18,
          },
          100: {
            chainId: 100,
            address: I,
            symbol: "XDAI",
            name: "XDAI",
            decimals: 18,
          },
          10200: {
            chainId: 10200,
            address: I,
            symbol: "XDAI",
            name: "XDAI",
            decimals: 18,
          },
        },
        P = {
          1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          11155111: null,
          56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
          97: null,
          137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
          80001: null,
          10: "0x4200000000000000000000000000000000000006",
          11155420: null,
          43114: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
          43113: null,
          42220: null,
          44787: null,
          42161: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          421614: null,
          8453: "0x4200000000000000000000000000000000000006",
          84532: null,
          534352: "0x5300000000000000000000000000000000000004",
          534351: null,
          100: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
          10200: null,
        },
        M = {
          1: "0xd499ccf3e93f4cfb335ac388e3c896d59cdde7c3",
          10: "0xec9f59bD06465b105e719c0b0483A4Ed6A656775",
          8453: "0xa55a74A457D8a24D68DdA0b5d1E0341746d444Bf",
          42161: "0x8020Fb37b21E0eF1707aDa7A914baf44F9045E52",
          534352: "0x3fdd8bfdf2f589c10c58457cdae989c7943a30a5",
          100: "0xc3aE3FE36A2645a93b2Fe350D81E80A14831e2A6",
          11155420: "0x5ecc83b1a0ba255713b69154451826a937702435",
          421614: "0x8895efb4299bce2c7e4a5c434c49534bb357bdbc",
          84532: "0xf0346c7889061b29977e66034f284bfb5c761d29",
          534351: "0x8a37953461696882e728019EF77E3B84E0ece952",
          10200: "0xa056b44398fc07a7207372827d741bb914d08a5c",
        },
        D = {
          1: "0xa99b3a8503260ab32753c382eac297acd4a43908",
          10: "0x80F86691632d9863E6bCaa472e5c34574F77c7D1",
          8453: "0x8557a9a33b573dc4403708c5a8746a52648374ea",
          42161: "0x163402522fc0c0a7863479a069a8470fb22dfd3f",
          534352: "0xf17d29f1c30da928bf98a73904681c12176de152",
          100: "0xbddd23fdd9fe824d58814ca6d898af518676368a",
          11155420: "0x99e05e2346885D1c1Ce714c9e794A7ca6E3634b4",
          421614: "0xe098c4340329f0b0b72eb25e193a70eadb2499f7",
          84532: "0x6e4b2dd17a0b0db73f34a5edabda9ec22c70bce8",
          534351: "0x6d73bfB022B811C98EBEC8e8666273bAED005579",
          10200: "0x9fac7f093daa84bb4af85f8bdcfbd6a01a2ae1e3",
        },
        S = "https://token-prices.api.cabana.fi",
        _ = [1, 10, 137, 42161, 8453, 534352, 100],
        k = {
          1: {
            "0xdc035d45d973e3ec169d2276ddab16f1e407384f": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
          },
          10: {
            [x[10].toLowerCase()]: { chainId: 1, address: g(x[1]) },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
          },
          42161: {
            [x[42161].toLowerCase()]: { chainId: 1, address: g(x[1]) },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0xfa5ed56a203466cbbc2430a43c66b9d8723528e7": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
          },
          8453: {
            [x[8453].toLowerCase()]: { chainId: 1, address: g(x[1]) },
            "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452": {
              chainId: 1,
              address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
            },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0xa61beb4a3d02decb01039e378237032b351125b4": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
            "0x368181499736d0c0cc614dbb145e2ec1ac86b8c6": {
              chainId: 1,
              address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
            },
          },
          137: {
            [I]: {
              chainId: 137,
              address: "0x0000000000000000000000000000000000001010",
            },
            "0x0000206329b97db379d5e1bf586bbdb969c63274": {
              chainId: 1,
              address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
            },
            "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4": {
              chainId: 1,
              address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            },
          },
          534352: {
            [x[534352].toLowerCase()]: { chainId: 1, address: g(x[1]) },
          },
          100: { [x[100].toLowerCase()]: { chainId: 1, address: g(x[1]) } },
          11155420: {
            [I]: { chainId: 1, address: I },
            "0xef38f21ec5477f6e3d4b7e9f0dea44a788c669b0": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            [C[11155420]]: { chainId: 1, address: C[1] },
            "0x68f92539f64e486f2853bb2892933a21b54829e5": {
              chainId: 1,
              address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            },
            "0x6c6a62b0861d8f2b946456ba9dcd0f3baec54147": {
              chainId: 1,
              address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            },
            "0x4a61b6f54157840e80e0c47f1a628c0b3744a739": {
              chainId: 1,
              address: P[1],
            },
            [x[11155420].toLowerCase()]: { chainId: 1, address: g(x[1]) },
          },
          421614: {
            [I]: { chainId: 1, address: I },
            "0xfe045beefda06606fc5f441ccca2fe8c903e9725": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            [C[421614]]: { chainId: 1, address: C[1] },
            "0x060fad1bca90e5b1efca0d93febec96e638fd8a6": {
              chainId: 1,
              address: P[1],
            },
            [x[421614].toLowerCase()]: { chainId: 1, address: g(x[1]) },
          },
          84532: {
            [I]: { chainId: 1, address: I },
            "0xe4b4a71923aecb4b8924bda8c31941a8ab50ff86": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            [C[84532]]: { chainId: 1, address: C[1] },
            "0x019aa44d02715e4042b1ba3b4d2fa9bcef33c002": {
              chainId: 1,
              address: P[1],
            },
            [x[84532].toLowerCase()]: { chainId: 1, address: g(x[1]) },
          },
          534351: {
            [I]: { chainId: 1, address: I },
            "0x6b0877bcb4720f094bc13187f5e16bdbf730693a": {
              chainId: 1,
              address: P[1],
            },
            "0x7026b77376547ba7961c16a4a05edae070abec47": {
              chainId: 1,
              address: g(x[1]),
            },
            "0x6f720053319f89c9670234989a5bd807a37d1792": {
              chainId: 1,
              address: C[1],
            },
            "0xc024e95cf6bb2efc424c9035db4647a12d8dcac9": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            "0x23dbacc4e588fadc2d3eed3d1eddb8daa57714ba": {
              chainId: 1,
              address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            },
            "0xa15316214d52d907712d751987d4593972cf3b8b": {
              chainId: 1,
              address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            },
          },
          10200: {
            [I]: {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            "0x6b629bb304017d3d985d140599d8e6fc9942b9a7": {
              chainId: 1,
              address: P[1],
            },
            "0xa83a315bed18b36308a518c7f77a2464e9f7286c": {
              chainId: 1,
              address: g(x[1]),
            },
            "0xfc535b2407bb2c8b4f4a4faabbb9981ff031b7ca": {
              chainId: 1,
              address: C[1],
            },
            "0xb2d0d7ad1d4b2915390dc7053b9421f735a723e7": {
              chainId: 1,
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
            "0xbe9a62939f82e12f4a48912078a4420f1a5fc2e0": {
              chainId: 1,
              address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            },
            "0x3e9c64afc24c551cc8e11f52fedecdacf7362559": {
              chainId: 1,
              address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            },
          },
        },
        N = {
          10: {
            "0x7f5c764cbc14f9669b88837ca1490cca17c31607": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
          42161: {
            "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
          137: {
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
          43114: {
            "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664": {
              name: "USDC (Bridged from Ethereum)",
              symbol: "USDC.e",
            },
          },
        },
        E = {
          app: "https://app.cabana.fi",
          app_v4: "https://app.pooltogether.com",
          landingPage: "https://cabana.fi",
          protocolLandingPage: "https://pooltogether.com",
          docs: "https://docs.cabana.fi",
          protocolDocs: "https://docs.pooltogether.com",
          protocolDevDocs: "https://dev.pooltogether.com",
          governance: "https://gov.pooltogether.com",
          poolExplorer: "https://poolexplorer.win",
          tools_v4: "https://tools.pooltogether.com",
          notion: "https://pooltogetherdao.notion.site",
          vaultListCreator: "https://lists.cabana.fi",
          vaultFactory: "https://factory.cabana.fi",
          analytics: "https://analytics.cabana.fi",
          swaps: "https://swap.cabana.fi",
          rewardsBuilder: "https://rewards.cabana.fi",
          flashLiquidator: "https://flash.cabana.fi",
          migrations: "https://migrate.cabana.fi",
          builders: "https://builders.cabana.fi",
        };
      ({
        ...E,
        termsOfService: "".concat(E.landingPage, "/terms"),
        privacyPolicy: "".concat(E.landingPage, "/privacy"),
        ecosystem: "".concat(E.protocolLandingPage, "/ecosystem"),
        discord: "".concat(E.protocolLandingPage, "/discord"),
        appDocs: "".concat(E.docs, "/#the-cabana-app"),
        toolDocs: "".concat(E.docs, "/#cabana-tools"),
        protocolBasicsDocs: "".concat(E.docs, "/protocol/the-basics"),
        delegateDocs: "".concat(E.docs, "/cabana-app/delegation"),
        prizeYieldDocs: "".concat(E.docs, "/cabana-app/prize-yield"),
        factoryDocs: "".concat(E.docs, "/cabana-tools/cabana-factory"),
        listDocs: "".concat(E.docs, "/cabana-tools/cabana-lists"),
        analyticsDocs: "".concat(E.docs, "/cabana-tools/cabanalytics"),
        swapDocs: "".concat(E.docs, "/cabana-tools/cabana-swaps"),
        flashDocs: "".concat(E.docs, "/cabana-tools/cabana-flash"),
        appGuides: "".concat(E.docs, "/cabana-app/guides"),
        toolGuides: "".concat(E.docs, "/cabana-tools/guides"),
        protocolFaqs: "".concat(E.docs, "/protocol/faqs"),
        appFaqs: "".concat(E.docs, "/cabana-app/faqs"),
        toolFaqs: "".concat(E.docs, "/cabana-tools/faqs"),
        rewardTokenWhitelist: "".concat(
          E.docs,
          "/cabana-app/bonus-rewards#reward-token-whitelist"
        ),
        risks: "".concat(E.protocolDocs, "/security/risks"),
        audits: "".concat(E.protocolDocs, "/security/audits"),
        devDocs_v4: "".concat(E.protocolDevDocs, "/protocol/V4/introduction"),
        depositDelegator: "".concat(E.tools_v4, "/delegate"),
        prizeTierController: "".concat(E.tools_v4, "/prize-tier-controller"),
        communityCalendar: "".concat(
          E.notion,
          "/Community-Calendar-4ce3024241dd464db96215e6729a78e0"
        ),
      });
      var B = async (e, t, n, a) => {
          let i = t.every((e) => (0, s.U)(e));
          if (0 === t.length || !i || 0 === a.length)
            throw Error("Multicall Error: Invalid parameters");
          if (!(await (null == e ? void 0 : e.getChainId())))
            throw Error("Multicall Error: Could not get chain ID from client");
          let r = [];
          a.forEach((e) => {
            t.forEach((t) => {
              r.push({ address: t, abi: n, ...e });
            });
          });
          let l = await e.multicall({ contracts: r }),
            d = {};
          return (
            r.forEach((e, t) => {
              var n;
              void 0 === d[e.address] && (d[e.address] = {}),
                (d[e.address][e.functionName] =
                  null === (n = l[t]) || void 0 === n ? void 0 : n.result);
            }),
            d
          );
        },
        j = async (e, t) => {
          try {
            if (_.includes(e)) {
              let n = new URL("".concat(S, "/").concat(e)),
                a = {};
              t && t.length > 0 && n.searchParams.set("tokens", t.join(","));
              let i = await fetch(n.toString()),
                s = await i.json();
              if (
                (Object.keys(s).forEach((e) => {
                  var t;
                  let n =
                    null === (t = s[e][0]) || void 0 === t ? void 0 : t.price;
                  void 0 !== n && (a[e] = n);
                }),
                t && t.length > 0 && Object.keys(a).length < t.length)
              ) {
                let n = await z(e, t);
                Object.entries(n).forEach((e) => {
                  let [t, n] = e;
                  a[t] || (a[t] = n);
                });
              }
              return a;
            }
            if (t && t.length > 0) return await z(e, t);
            return {};
          } catch (e) {
            return console.error(e), {};
          }
        },
        O = async (e, t) => {
          if (!isAddress3(t)) return {};
          try {
            if (_.includes(e)) {
              let n = new URL("".concat(S, "/").concat(e, "/").concat(t)),
                a = await fetch(n.toString()),
                i = await a.json(),
                s = Object.values(i)[0];
              if (null == s ? void 0 : s.length) return i;
              return await F(e, t);
            }
            {
              let n = g(t),
                a = (await j(e, [t]))[n],
                i = new Date().toISOString().split("T")[0];
              return { [n]: [{ date: i, price: a }] };
            }
          } catch (e) {
            return console.error(e), {};
          }
        },
        z = async (e, t) => {
          let n = {},
            a = {};
          return (
            t.forEach((t) => {
              var n;
              let i = g(t),
                s = null === (n = k[e]) || void 0 === n ? void 0 : n[i];
              s &&
                (void 0 === a[s.chainId] && (a[s.chainId] = {}),
                (a[s.chainId][s.address] = i));
            }),
            (
              await Promise.all(
                Object.keys(a).map(async (e) => {
                  let t = parseInt(e),
                    n = Object.keys(a[t]);
                  return { chainId: t, tokenPrices: await j(t, n) };
                })
              )
            ).forEach((e) => {
              Object.entries(e.tokenPrices).forEach((t) => {
                var i;
                let [s, r] = t;
                n[null === (i = a[e.chainId]) || void 0 === i ? void 0 : i[s]] =
                  r;
              });
            }),
            n
          );
        },
        F = async (e, t) => {
          var n;
          let a = null === (n = k[e]) || void 0 === n ? void 0 : n[g(t)];
          if (!a) return {};
          {
            let e = {},
              n = Object.values(await O(a.chainId, a.address))[0];
            return (null == n ? void 0 : n.length) && (e[t] = n), e;
          }
        },
        R = async (e, t) => {
          let n = {},
            a = t.filter((e) => g(e) !== I && e !== r.DR);
          if ((null == a ? void 0 : a.length) > 0) {
            let t = await B(e, a, h, [
                { functionName: "symbol" },
                { functionName: "name" },
                { functionName: "decimals" },
                { functionName: "totalSupply" },
              ]),
              i = await e.getChainId();
            a.forEach((e) => {
              var a, s, r, l, d, u, o, p;
              let c = null === (a = N[i]) || void 0 === a ? void 0 : a[g(e)],
                y =
                  null !== (u = null == c ? void 0 : c.symbol) && void 0 !== u
                    ? u
                    : null === (s = t[e]) || void 0 === s
                    ? void 0
                    : s.symbol,
                m =
                  null !== (o = null == c ? void 0 : c.name) && void 0 !== o
                    ? o
                    : null === (r = t[e]) || void 0 === r
                    ? void 0
                    : r.name,
                b = Number(
                  null === (l = t[e]) || void 0 === l ? void 0 : l.decimals
                ),
                f =
                  null !==
                    (p =
                      null === (d = t[e]) || void 0 === d
                        ? void 0
                        : d.totalSupply) && void 0 !== p
                    ? p
                    : 0n;
              (!y || Number.isNaN(b)) &&
                console.warn(
                  "Invalid ERC20 token: "
                    .concat(e, " on chain ID ")
                    .concat(i, ".")
                ),
                (n[e] = {
                  chainId: i,
                  address: e,
                  symbol: y,
                  name: m,
                  decimals: b,
                  totalSupply: f,
                });
            });
          }
          if (
            Object.keys(n).length < t.length &&
            t.map((e) => g(e)).includes(I)
          ) {
            var i;
            let t =
              null !== (i = A[await e.getChainId()]) && void 0 !== i ? i : {};
            n[I] = { ...t, totalSupply: 0n };
          }
          return n;
        },
        L = async (e, t, n, a) => {
          let i = {},
            s = a.filter((e) => g(e) !== I && e !== r.DR);
          if ((null == s ? void 0 : s.length) > 0) {
            let a = await B(e, s, h, [
              { functionName: "allowance", args: [t, n] },
            ]);
            s.forEach((e) => {
              var t, n;
              i[e] =
                null !==
                  (n =
                    null === (t = a[e]) || void 0 === t
                      ? void 0
                      : t.allowance) && void 0 !== n
                  ? n
                  : 0n;
            });
          }
          return (
            Object.keys(i).length < a.length &&
              a.map((e) => g(e)).includes(I) &&
              (i[I] = 0n),
            i
          );
        },
        V = async (e, t, n) => {
          let a = {},
            i = n.filter((e) => g(e) !== I && e !== r.DR);
          if ((null == i ? void 0 : i.length) > 0) {
            let n = await B(e, i, h, [
                { functionName: "symbol" },
                { functionName: "name" },
                { functionName: "decimals" },
                { functionName: "balanceOf", args: [t] },
              ]),
              s = await e.getChainId();
            i.forEach((e) => {
              var t, i, r, l, d;
              let u = null === (t = n[e]) || void 0 === t ? void 0 : t.symbol,
                o = null === (i = n[e]) || void 0 === i ? void 0 : i.name,
                p = Number(
                  null === (r = n[e]) || void 0 === r ? void 0 : r.decimals
                ),
                c =
                  null !==
                    (d =
                      null === (l = n[e]) || void 0 === l
                        ? void 0
                        : l.balanceOf) && void 0 !== d
                    ? d
                    : 0n;
              (!u || Number.isNaN(p)) &&
                console.warn(
                  "Invalid ERC20 token: "
                    .concat(e, " on chain ID ")
                    .concat(s, ".")
                ),
                (a[e] = {
                  chainId: s,
                  address: e,
                  symbol: u,
                  name: o,
                  decimals: p,
                  amount: c,
                });
            });
          }
          if (
            Object.keys(a).length < n.length &&
            n.map((e) => g(e)).includes(I)
          ) {
            var s;
            let n =
                null !== (s = A[await e.getChainId()]) && void 0 !== s ? s : {},
              i = await e.getBalance({ address: t });
            a[I] = { ...n, amount: i };
          }
          return a;
        },
        U = {
          isTestnets: "isTestnets",
          isDismissed: "isDismissed",
          selectedCurrency: "selectedCurrency",
          selectedLanguage: "selectedLanguage",
          customRPCs: "customRPCs",
          miscSettings: "miscSettings",
        };
      (0, a.cn)(
        (() => {
          let e = localStorage.getItem(U.customRPCs);
          return JSON.parse(null != e ? e : "{}");
        })()
      ),
        (0, a.cn)(
          (() => {
            let e = localStorage.getItem(U.isDismissed);
            return JSON.parse(null != e ? e : "{}");
          })()
        ),
        (0, a.cn)({});
      var q = (0, a.cn)(
          (() => {
            let e = localStorage.getItem(U.isTestnets);
            return !!e && "true" === e;
          })()
        ),
        H = () => {
          let [e, t] = (0, a.KO)(q);
          return {
            isTestnets: e,
            setIsTestnets: (e) => {
              e
                ? (localStorage.setItem(U.isTestnets, "true"), t(!0))
                : (localStorage.setItem(U.isTestnets, "false"), t(!1));
            },
          };
        };
      (0, a.cn)(
        (() => {
          let e = localStorage.getItem(U.miscSettings);
          return JSON.parse(null != e ? e : "{}");
        })()
      );
      var Z = {
        aed: { name: "United Arab Emirates Dirham", symbol: "DH" },
        ars: { name: "Argentine Peso", symbol: "$" },
        aud: { name: "Australian Dollar", symbol: "A$" },
        bdt: { name: "Bangladeshi Taka", symbol: "৳" },
        bhd: { name: "Bahraini Dinar", symbol: "BD" },
        btc: { name: "Bitcoin", symbol: "₿" },
        brl: { name: "Brazil Real", symbol: "R$" },
        cad: { name: "Canadian Dollar", symbol: "CA$" },
        chf: { name: "Swiss Franc", symbol: "Fr." },
        clp: { name: "Chilean Peso", symbol: "CLP$" },
        cny: { name: "Chinese Yuan", symbol: "\xa5" },
        czk: { name: "Czech Koruna", symbol: "Kč" },
        dkk: { name: "Danish Krone", symbol: "kr." },
        eth: { name: "Ether", symbol: "Ξ" },
        eur: { name: "Euro", symbol: "€" },
        gbp: { name: "British Pound Sterling", symbol: "\xa3" },
        hkd: { name: "Hong Kong Dollar", symbol: "HK$" },
        huf: { name: "Hungarian Forint", symbol: "Ft" },
        idr: { name: "Indonesian Rupiah", symbol: "Rp" },
        ils: { name: "Israeli New Shekel", symbol: "₪" },
        inr: { name: "Indian Rupee", symbol: "₹" },
        jpy: { name: "Japanese Yen", symbol: "\xa5" },
        krw: { name: "South Korean Won", symbol: "₩" },
        kwd: { name: "Kuwaiti Dinar", symbol: "KD" },
        lkr: { name: "Sri Lankan Rupee", symbol: "Rs" },
        mmk: { name: "Burmese Kyat", symbol: "K" },
        mxn: { name: "Mexican Peso", symbol: "MX$" },
        myr: { name: "Malaysian Ringgit", symbol: "RM" },
        ngn: { name: "Nigerian Naira", symbol: "₦" },
        nok: { name: "Norwegian Krone", symbol: "kr" },
        nzd: { name: "New Zealand Dollar", symbol: "NZ$" },
        php: { name: "Philippine Peso", symbol: "₱" },
        pkr: { name: "Pakistani Rupee", symbol: "₨" },
        pln: { name: "Polish Zloty", symbol: "zł" },
        pool: { name: "POOL Token", symbol: "POOL" },
        rub: { name: "Russian Ruble", symbol: "₽" },
        sar: { name: "Saudi Riyal", symbol: "SR" },
        sek: { name: "Swedish Krona", symbol: "kr" },
        sgd: { name: "Singapore Dollar", symbol: "S$" },
        thb: { name: "Thai Baht", symbol: "฿" },
        try: { name: "Turkish Lira", symbol: "₺" },
        twd: { name: "New Taiwan Dollar", symbol: "NT$" },
        uah: { name: "Ukrainian hryvnia", symbol: "₴" },
        usd: { name: "US Dollar", symbol: "$" },
        vef: { name: "Venezuelan bol\xedvar fuerte", symbol: "Bs.F" },
        vnd: { name: "Vietnamese đồng", symbol: "₫" },
        zar: { name: "South African Rand", symbol: "R" },
      };
      (0, a.cn)(
        (() => {
          let e = localStorage.getItem(U.selectedCurrency);
          return e && e in Z ? e : "usd";
        })()
      );
      var W = {
        en: { name: "English", nativeName: "English" },
        es: { name: "Spanish", nativeName: "Espa\xf1ol" },
        de: { name: "German", nativeName: "Deutsch" },
        fr: { name: "French", nativeName: "Fran\xe7ais" },
        hi: { name: "Hindi", nativeName: "Hindī" },
        it: { name: "Italian", nativeName: "Italiana" },
        ko: { name: "Korean", nativeName: "한국어 (韓國語)" },
        pt: { name: "Portuguese", nativeName: "Portugu\xeas" },
        ru: { name: "Russian", nativeName: "Русский" },
        tr: { name: "Turkish", nativeName: "T\xfcrk\xe7e" },
        zh: { name: "Zhōngw\xe9n", nativeName: "中文" },
        fil: { name: "Filipino", nativeName: "Filipino" },
        uk: { name: "Ukrainian", nativeName: "українську" },
      };
      (0, a.cn)(
        (() => {
          let e = localStorage.getItem(U.selectedLanguage);
          return e && e in W ? e : "en";
        })()
      );
      var Y = {
          refetchInterval: !1,
          refetchIntervalInBackground: !1,
          refetchOnMount: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
        },
        G = {
          block: "block",
          blockAtTimestamp: "blockAtTimestamp",
          clientChainId: "clientChainId",
          depositEvents: "depositEvents",
          drawAuctionDuration: "drawAuctionDuration",
          drawAwardedEvents: "drawAwardedEvents",
          drawFinishedEvents: "drawFinishedEvents",
          drawManagerDrawAwardedEvents: "drawManagerDrawAwardedEvents",
          drawPeriod: "drawPeriod",
          drawStartedEvents: "drawStartedEvents",
          drawTimestamps: "drawTimestamps",
          drawWinners: "drawWinners",
          estimatedPrizeCount: "estimatedPrizeCount",
          firstDrawOpenedAt: "firstDrawOpenedAt",
          gasAmountEstimates: "gasAmountEstimates",
          gasFeeEstimate: "gasFeeEstimate",
          gasPrices: "gasPrices",
          grandPrizePeriodDraws: "grandPrizePeriodDraws",
          historicalTokenPrices: "historicalTokenPrices",
          lastAwardedDrawId: "lastAwardedDrawId",
          lastAwardedDrawTimestamps: "lastAwardedDrawTimestamps",
          lastDrawWinners: "lastDrawWinners",
          liquidationEvents: "liquidationEvents",
          manualContributionEvents: "manualContributionEvents",
          prizeBackstopEvents: "prizeBackstopEvents",
          prizeInfo: "prizeInfo",
          prizeOdds: "prizeOdds",
          prizePoolDrawAwardedEvents: "prizePoolDrawAwardedEvents",
          prizeTokenData: "prizeTokenData",
          promotionCreatedEvents: "promotionCreatedEvents",
          promotionRewardsClaimedEvents: "promotionRewardsClaimedEvents",
          promotionInfo: "promotionInfo",
          selectedVaults: "selectedVaults",
          totalPrizesAvailable: "totalPrizesAvailable",
          tokenAllowances: "tokenAllowances",
          tokenBalances: "tokenBalances",
          tokenDomain: "tokenDomain",
          tokenNonces: "tokenNonces",
          tokenPermitSupport: "tokenPermitSupport",
          tokenPrices: "tokenPrices",
          tokenTransferEvents: "tokenTransferEvents",
          tokens: "tokens",
          txReceipt: "txReceipt",
          userBalanceUpdates: "userBalanceUpdates",
          userClaimableRewards: "userClaimableRewards",
          userEligibleDraws: "userEligibleDraws",
          userVaultBalances: "userVaultBalances",
          userVaultDelegate: "userVaultDelegate",
          userVaultDelegationBalances: "userVaultDelegationBalances",
          userWins: "userWins",
          vaultBalances: "vaultBalances",
          vaultClaimers: "vaultClaimers",
          vaultContributionAmounts: "vaultContributionAmounts",
          vaultContributionEvents: "vaultContributionEvents",
          vaultExchangeRates: "vaultExchangeRates",
          vaultFeeInfo: "vaultFeeInfo",
          vaultFeesAvailable: "vaultFeeInfo",
          vaultLiquidationPairs: "vaultLiquidationPairs",
          vaultList: "vaultList",
          vaultOwner: "vaultOwner",
          vaultPercentageContributions: "vaultPercentageContributions",
          vaultShareData: "vaultShareData",
          vaultTokenAddresses: "vaultTokenAddresses",
          vaultTokenData: "vaultTokenData",
          vaultTotalDelegateSupplies: "vaultTotalDelegateSupplies",
          vaultTotalSupplyTwabs: "vaultTotalSupplyTwabs",
          vaultTwabController: "vaultTwabController",
          vaultYieldSources: "vaultYieldSources",
          walletAddresses: "walletAddresses",
          withdrawEvents: "withdrawEvents",
        },
        K = {
          ...U,
          cachedVaultLists: "cachedVaultLists",
          localVaultListIds: "localVaultListIds",
          importedVaultListIds: "importedVaultListIds",
          lastCheckedPrizesTimestamps: "lastCheckedPrizesTimestamps",
        },
        X = (0, a.cn)(
          (() => {
            let e = localStorage.getItem(K.cachedVaultLists);
            return JSON.parse(null != e ? e : "{}");
          })()
        ),
        $ = () => {
          let [e, t] = (0, a.KO)(X);
          return (
            (0, i.useEffect)(
              () => localStorage.setItem(K.cachedVaultLists, JSON.stringify(e)),
              [e]
            ),
            {
              cachedVaultLists: e,
              set: (e) => {
                t(e);
              },
              cache: (e, n) => {
                t((t) => ({ ...t, [e]: n }));
              },
              remove: (e) => {
                t((t) => ({ ...t, [e]: void 0 }));
              },
              clear: () => {
                t({});
              },
            }
          );
        };
      (0, a.cn)(
        (() => {
          let e = localStorage.getItem(K.lastCheckedPrizesTimestamps);
          return JSON.parse(null != e ? e : "{}");
        })()
      );
      var J = (e) => {
        switch (e) {
          case "local": {
            let e = localStorage.getItem(K.localVaultListIds);
            return JSON.parse(null != e ? e : "[]");
          }
          case "imported": {
            let e = localStorage.getItem(K.importedVaultListIds);
            return JSON.parse(null != e ? e : "[]");
          }
        }
      };
      (0, a.cn)(J("local")), (0, a.cn)(J("imported")), (0, a.cn)(void 0);
      var Q = (e) => {
          let { isTestnets: t } = H(),
            n = {
              mainnets: {
                1: (0, d.t)({ chainId: 1 }),
                10: (0, d.t)({ chainId: 10 }),
                42161: (0, d.t)({ chainId: 42161 }),
                8453: (0, d.t)({ chainId: 8453 }),
                137: (0, d.t)({ chainId: 137 }),
                43114: (0, d.t)({ chainId: 43114 }),
                42220: (0, d.t)({ chainId: 42220 }),
                534352: (0, d.t)({ chainId: 534352 }),
                100: (0, d.t)({ chainId: 100 }),
              },
              testnets: {
                11155111: (0, d.t)({ chainId: 11155111 }),
                11155420: (0, d.t)({ chainId: 11155420 }),
                421614: (0, d.t)({ chainId: 421614 }),
                84532: (0, d.t)({ chainId: 84532 }),
                534351: (0, d.t)({ chainId: 534351 }),
                10200: (0, d.t)({ chainId: 10200 }),
              },
            };
          return ((e) => {
            let t = {};
            return (
              Object.entries(e).forEach((e) => {
                let [n, a] = e;
                a && (t[parseInt(n)] = a);
              }),
              t
            );
          })(
            (null == e ? void 0 : e.useAll)
              ? { ...n.mainnets, ...n.testnets }
              : t
              ? n.testnets
              : n.mainnets
          );
        },
        ee = (e, t, n) => {
          var a, i;
          let s = (0, d.t)({ chainId: e }),
            r =
              !!e &&
              !!s &&
              !!t &&
              !!t.account &&
              ((null == n ? void 0 : n.enabled) ||
                (null == n ? void 0 : n.enabled) === void 0),
            l =
              null !==
                (i =
                  null == t
                    ? void 0
                    : null === (a = t.args) || void 0 === a
                    ? void 0
                    : a
                        .filter(
                          (e) =>
                            "string" == typeof e ||
                            "number" == typeof e ||
                            "bigint" == typeof e
                        )
                        .map((e) =>
                          "string" == typeof e ? e : e.toString()
                        )) && void 0 !== i
                ? i
                : [],
            o = [
              G.gasAmountEstimates,
              e,
              null == t ? void 0 : t.address,
              null == t ? void 0 : t.functionName,
              l,
            ];
          return (0, u.a)({
            queryKey: o,
            queryFn: async () => {
              if (s) return await s.estimateContractGas(t);
            },
            enabled: r,
            ...Y,
          });
        },
        et = (e) => {
          let t = (0, o.h)({
            queries: e.map((e) => ({
              queryKey: [G.prizeInfo, null == e ? void 0 : e.id],
              queryFn: async () =>
                await e.getAllPrizeInfo({ considerPastDraws: 7 }),
              enabled: !!e,
              ...Y,
            })),
          });
          return (0, i.useMemo)(() => {
            let n = null == t ? void 0 : t.every((e) => e.isFetched),
              a = {};
            return (
              t.forEach((t, n) => {
                t.data && (a[e[n].id] = t.data);
              }),
              {
                isFetched: n,
                refetch: () =>
                  null == t ? void 0 : t.forEach((e) => e.refetch()),
                data: a,
              }
            );
          }, [t]);
        },
        en = (e, t) => {
          let { data: n, isFetched: a } = et([e]),
            { data: s, isFetched: r } = ei(e),
            l = a && r;
          return {
            data: (0, i.useMemo)(() => {
              if (l && null != n && n[e.id] && s) {
                let a = n[e.id][0].amount;
                return {
                  ...s,
                  amount: (null == t ? void 0 : t.useCurrentPrizeSizes)
                    ? a.current
                    : a.estimated,
                };
              }
            }, [n, s]),
            isFetched: l,
          };
        },
        ea = (e, t, n) => {
          let a = (0, d.t)({ chainId: e });
          return new l.PmD(e, t, a, n);
        },
        ei = (e) => {
          let t = [G.prizeTokenData, null == e ? void 0 : e.id];
          return (0, u.a)({
            queryKey: t,
            queryFn: async () => await e.getPrizeTokenData(),
            enabled: !!e,
            ...Y,
          });
        },
        es = (e, t, n, a, i) => {
          let r = (0, p.NL)(),
            l = (0, d.t)({ chainId: e }),
            o =
              !!e &&
              !!t &&
              !!n &&
              a.every((e) => !!e && (0, s.U)(e)) &&
              Array.isArray(a) &&
              a.length > 0 &&
              !!l,
            c = (a) => [G.tokenAllowances, e, t, n, a];
          return (0, u.a)({
            queryKey: c(a),
            queryFn: async () => {
              if (l) {
                let e = await L(l, t, n, a);
                return eh(r, c, e), e;
              }
            },
            enabled: o,
            ...Y,
            refetchInterval: null != i && i,
          });
        },
        er = (e, t, n, a, i) => {
          var s;
          let r = es(e, t, n, [a], i);
          return {
            ...r,
            data: null === (s = r.data) || void 0 === s ? void 0 : s[a],
          };
        },
        el = (e, t, n, a) => {
          var i, r;
          let l = (0, p.NL)(),
            o = (0, d.t)({ chainId: e }),
            c =
              !!e &&
              !!t &&
              !!n &&
              n.every((e) => !!e && (0, s.U)(e)) &&
              Array.isArray(n) &&
              n.length > 0 &&
              !!o,
            y = (n) => [G.tokenBalances, e, t, n];
          return (0, u.a)({
            queryKey: y(n),
            queryFn: async () => {
              if (o) {
                let e = await V(o, t, n);
                return eh(l, y, e), e;
              }
            },
            enabled: c,
            ...Y,
            refetchInterval:
              null !== (i = null == a ? void 0 : a.refetchInterval) &&
              void 0 !== i &&
              i,
            refetchOnWindowFocus:
              null !== (r = null == a ? void 0 : a.refetchOnWindowFocus) &&
              void 0 !== r &&
              r,
          });
        },
        ed = (e, t, n, a) => {
          var i;
          let s = el(e, t, [n], a);
          return {
            ...s,
            data: null === (i = s.data) || void 0 === i ? void 0 : i[n],
          };
        },
        eu = (e, t) => {
          let n = !!e && !!t && t.length > 0;
          return (0, u.a)({
            queryKey: [G.tokenPrices, e, t],
            queryFn: async () => await j(e, t),
            staleTime: 1 / 0,
            enabled: n,
            ...Y,
          });
        },
        eo = (e, t) => {
          let n = (0, p.NL)(),
            a = (0, d.t)({ chainId: e }),
            i =
              !!e &&
              t.every((e) => !!e && (0, s.U)(e) && e !== r.DR) &&
              Array.isArray(t) &&
              t.length > 0 &&
              !!a,
            l = (t) => [G.tokens, e, t];
          return (0, u.a)({
            queryKey: l(t),
            queryFn: async () => {
              if (a) {
                let e = await R(a, t);
                return eh(n, l, e), e;
              }
            },
            enabled: i,
            ...Y,
          });
        },
        ep = (e, t) => {
          var n;
          let a = eo(e, [t]);
          return {
            ...a,
            data: null === (n = a.data) || void 0 === n ? void 0 : n[t],
          };
        },
        ec = (e, t) => {
          let { chain: n } = (0, y.m)(),
            {
              chainId: a,
              source: s,
              tokenIn: r,
              tokenOut: l,
              targetAuctionPeriod: d,
              targetAuctionPrice: u,
              smoothingFactor: o,
            } = e,
            p = a ? D[a] : void 0;
          a &&
            void 0 === p &&
            console.warn(
              "No liquidation pair factory address found for chain ID ".concat(
                a,
                "."
              )
            );
          let h =
              !!e &&
              !!a &&
              !!r &&
              !!l &&
              !!d &&
              !!u &&
              void 0 !== o &&
              (null == n ? void 0 : n.id) === a,
            { data: v } = (0, m.G)({
              chainId: a,
              address: p,
              abi: T,
              functionName: "createPair",
              args: [
                s,
                r,
                l,
                BigInt(null != d ? d : 0),
                u,
                (0, c.f)(o.toFixed(6)),
              ],
              query: { enabled: h },
            }),
            {
              data: w,
              isPending: g,
              isError: x,
              isSuccess: C,
              writeContract: I,
            } = (0, b.S)();
          (0, i.useEffect)(() => {
            if (w && C) {
              var e;
              null == t ||
                null === (e = t.onSend) ||
                void 0 === e ||
                e.call(t, w);
            }
          }, [C]);
          let {
            data: A,
            isFetching: P,
            isSuccess: M,
            isError: S,
          } = (0, f.A)({ chainId: a, hash: w });
          (0, i.useEffect)(() => {
            if (A && M) {
              var e;
              null == t ||
                null === (e = t.onSuccess) ||
                void 0 === e ||
                e.call(t, A);
            }
          }, [M]);
          let _ = x || S;
          return (
            (0, i.useEffect)(() => {
              if (_) {
                var e;
                null == t ||
                  null === (e = t.onError) ||
                  void 0 === e ||
                  e.call(t);
              }
            }, [_]),
            {
              isWaiting: g,
              isConfirming: P,
              isSuccess: M,
              isError: _,
              txHash: w,
              txReceipt: A,
              sendDeployLiquidationPairTransaction:
                v && I ? () => I(v.request) : void 0,
            }
          );
        },
        ey = (e, t) => {
          let { address: n, chain: a } = (0, y.m)(),
            {
              chainId: s,
              tokenAddress: r,
              name: l,
              symbol: d,
              yieldSourceAddress: u,
              prizePool: o,
              claimer: p,
              feeRecipient: c,
              feePercentage: h,
              owner: T,
              yieldBuffer: v,
            } = e,
            g = s ? M[s] : void 0;
          s &&
            void 0 === g &&
            console.warn(
              "No vault factory address found for chain ID ".concat(s, ".")
            );
          let { data: x, isFetched: C } = er(s, n, g, r),
            I =
              !!e &&
              !!s &&
              !!l &&
              !!d &&
              !!u &&
              !!o &&
              !!p &&
              !!c &&
              void 0 !== h &&
              !!T &&
              void 0 !== v &&
              !!g &&
              (null == a ? void 0 : a.id) === s &&
              C &&
              !!x &&
              x >= v,
            { data: A } = (0, m.G)({
              chainId: s,
              address: g,
              abi: w,
              functionName: "deployVault",
              args: [l, d, u, o, p, c, h, v, T],
              query: { enabled: I },
            }),
            {
              data: P,
              isPending: D,
              isError: S,
              isSuccess: _,
              writeContract: k,
            } = (0, b.S)();
          (0, i.useEffect)(() => {
            if (P && _) {
              var e;
              null == t ||
                null === (e = t.onSend) ||
                void 0 === e ||
                e.call(t, P);
            }
          }, [_]);
          let {
            data: N,
            isFetching: E,
            isSuccess: B,
            isError: j,
          } = (0, f.A)({ chainId: s, hash: P });
          (0, i.useEffect)(() => {
            if (N && B) {
              var e;
              null == t ||
                null === (e = t.onSuccess) ||
                void 0 === e ||
                e.call(t, N);
            }
          }, [B]);
          let O = S || j;
          return (
            (0, i.useEffect)(() => {
              if (O) {
                var e;
                null == t ||
                  null === (e = t.onError) ||
                  void 0 === e ||
                  e.call(t);
              }
            }, [O]),
            {
              isWaiting: D,
              isConfirming: E,
              isSuccess: B,
              isError: O,
              txHash: P,
              txReceipt: N,
              sendDeployVaultTransaction: A && k ? () => k(A.request) : void 0,
            }
          );
        },
        em = (e, t, n, a, s) => {
          let { chain: r } = (0, y.m)(),
            l = !!e && (null == r ? void 0 : r.id) === e && !!t && !!n && !!a,
            { data: d } = (0, m.G)({
              chainId: e,
              address: t,
              abi: h,
              functionName: "approve",
              args: [n, a],
              query: { enabled: l },
            }),
            {
              data: u,
              isPending: o,
              isError: p,
              writeContract: c,
            } = (0, b.S)(),
            T =
              d && c
                ? () =>
                    c(d.request, {
                      onSuccess: (e) => {
                        var t;
                        return null == s
                          ? void 0
                          : null === (t = s.onSend) || void 0 === t
                          ? void 0
                          : t.call(s, e);
                      },
                    })
                : void 0,
            {
              data: v,
              isFetching: w,
              isSuccess: g,
              isError: x,
            } = (0, f.A)({ chainId: e, hash: u });
          (0, i.useEffect)(() => {
            if (v && g) {
              var e;
              null == s ||
                null === (e = s.onSuccess) ||
                void 0 === e ||
                e.call(s, v);
            }
          }, [g]);
          let C = p || x;
          return (
            (0, i.useEffect)(() => {
              if (C) {
                var e;
                null == s ||
                  null === (e = s.onError) ||
                  void 0 === e ||
                  e.call(s);
              }
            }, [C]),
            {
              isWaiting: o,
              isConfirming: w,
              isSuccess: g,
              isError: C,
              txHash: u,
              txReceipt: v,
              sendApproveTransaction: T,
            }
          );
        },
        eb = (e, t, n) => {
          let { chain: a } = (0, y.m)(),
            s = !!e && !!t && (null == a ? void 0 : a.id) === t.chainId,
            { data: r } = (0, m.G)({
              chainId: null == t ? void 0 : t.chainId,
              address: null == t ? void 0 : t.address,
              abi: v,
              functionName: "setClaimer",
              args: [e],
              query: { enabled: s },
            }),
            {
              data: l,
              isPending: d,
              isError: u,
              isSuccess: o,
              writeContract: p,
            } = (0, b.S)();
          (0, i.useEffect)(() => {
            if (l && o) {
              var e;
              null == n ||
                null === (e = n.onSend) ||
                void 0 === e ||
                e.call(n, l);
            }
          }, [o]);
          let {
            data: c,
            isFetching: h,
            isSuccess: T,
            isError: w,
          } = (0, f.A)({ chainId: null == t ? void 0 : t.chainId, hash: l });
          (0, i.useEffect)(() => {
            if (c && T) {
              var e;
              null == n ||
                null === (e = n.onSuccess) ||
                void 0 === e ||
                e.call(n, c);
            }
          }, [T]);
          let g = u || w;
          return (
            (0, i.useEffect)(() => {
              if (g) {
                var e;
                null == n ||
                  null === (e = n.onError) ||
                  void 0 === e ||
                  e.call(n);
              }
            }, [g]),
            {
              isWaiting: d,
              isConfirming: h,
              isSuccess: T,
              isError: g,
              txHash: l,
              txReceipt: c,
              sendSetClaimerTransaction: r && p ? () => p(r.request) : void 0,
            }
          );
        },
        ef = (e, t, n) => {
          let { chain: a } = (0, y.m)(),
            s = !!e && !!t && (null == a ? void 0 : a.id) === t.chainId,
            { data: r } = (0, m.G)({
              chainId: null == t ? void 0 : t.chainId,
              address: null == t ? void 0 : t.address,
              abi: v,
              functionName: "setLiquidationPair",
              args: [e],
              query: { enabled: s },
            }),
            {
              data: l,
              isPending: d,
              isError: u,
              isSuccess: o,
              writeContract: p,
            } = (0, b.S)();
          (0, i.useEffect)(() => {
            if (l && o) {
              var e;
              null == n ||
                null === (e = n.onSend) ||
                void 0 === e ||
                e.call(n, l);
            }
          }, [o]);
          let {
            data: c,
            isFetching: h,
            isSuccess: T,
            isError: w,
          } = (0, f.A)({ chainId: null == t ? void 0 : t.chainId, hash: l });
          (0, i.useEffect)(() => {
            if (c && T) {
              var e;
              null == n ||
                null === (e = n.onSuccess) ||
                void 0 === e ||
                e.call(n, c);
            }
          }, [T]);
          let g = u || w;
          return (
            (0, i.useEffect)(() => {
              if (g) {
                var e;
                null == n ||
                  null === (e = n.onError) ||
                  void 0 === e ||
                  e.call(n);
              }
            }, [g]),
            {
              isWaiting: d,
              isConfirming: h,
              isSuccess: T,
              isError: g,
              txHash: l,
              txReceipt: c,
              sendSetLiquidationPairTransaction:
                r && p ? () => p(r.request) : void 0,
            }
          );
        };
      (0, a.cn)("totalBalance"), (0, a.cn)("desc");
      var eh = (e, t, n) => {
          Object.keys(n).forEach((a) => {
            let i = t([a]),
              s = n[a];
            e.setQueryData(i, { [a]: s });
          });
        },
        eT = (e) => {
          var t, n, a, i, s, r, u, o;
          let p = (0, d.t)({ chainId: e.chainId });
          return new l.jc0(e.chainId, e.address, p, {
            decimals: e.decimals,
            tokenAddress:
              null === (n = e.extensions) || void 0 === n
                ? void 0
                : null === (t = n.underlyingAsset) || void 0 === t
                ? void 0
                : t.address,
            name: e.name,
            logoURI: e.logoURI,
            tags: e.tags,
            tokenLogoURI:
              null === (i = e.extensions) || void 0 === i
                ? void 0
                : null === (a = i.underlyingAsset) || void 0 === a
                ? void 0
                : a.logoURI,
            yieldSourceName:
              null === (r = e.extensions) || void 0 === r
                ? void 0
                : null === (s = r.yieldSource) || void 0 === s
                ? void 0
                : s.name,
            yieldSourceURI:
              null === (o = e.extensions) || void 0 === o
                ? void 0
                : null === (u = o.yieldSource) || void 0 === u
                ? void 0
                : u.appURI,
          });
        },
        ev = (e) => {
          let t = e ? [e.id] : [],
            n = [G.vaultClaimers, t];
          return (0, u.a)({
            queryKey: n,
            queryFn: async () => await e.getClaimer(),
            enabled: !!e,
            ...Y,
          });
        },
        ew = (e) => {
          let t = e ? [e.id] : [],
            n = [G.vaultFeeInfo, t];
          return (0, u.a)({
            queryKey: n,
            queryFn: async () => await e.getFeeInfo(),
            enabled: !!e,
            ...Y,
          });
        },
        eg = (e) => {
          let t = e ? [e.id] : [],
            n = [G.vaultLiquidationPairs, t];
          return (0, u.a)({
            queryKey: n,
            queryFn: async () => await e.getLiquidationPair(),
            enabled: !!e,
            ...Y,
          });
        },
        ex = (e) => {
          let t = e ? [e.id] : [],
            n = [G.vaultOwner, t];
          return (0, u.a)({
            queryKey: n,
            queryFn: async () => await e.getOwner(),
            enabled: !!e,
            ...Y,
          });
        },
        eC = (e, t) => {
          let n = Q({ useAll: null == t ? void 0 : t.useAllChains });
          return new l.vO5(e, n);
        },
        eI = (e) => {
          let t = [G.vaultShareData, null == e ? void 0 : e.id];
          return (0, u.a)({
            queryKey: t,
            queryFn: async () => await e.getShareData(),
            enabled: !!e,
            ...Y,
          });
        },
        eA = (e) => {
          let t = [G.vaultTokenAddresses, null == e ? void 0 : e.id];
          return (0, u.a)({
            queryKey: t,
            queryFn: async () => await e.getTokenAddress(),
            enabled: !!e,
            ...Y,
          });
        },
        eP = (e) => {
          let t = [G.vaultTokenData, null == e ? void 0 : e.id];
          return (0, u.a)({
            queryKey: t,
            queryFn: async () => await e.getTokenData(),
            enabled: !!e,
            ...Y,
          });
        },
        eM = (e) => {
          let t = e ? [e.id] : [],
            n = [G.vaultYieldSources, t];
          return (0, u.a)({
            queryKey: n,
            queryFn: async () => await e.getYieldSource(),
            enabled: !!e,
            ...Y,
          });
        };
    },
  },
]);
