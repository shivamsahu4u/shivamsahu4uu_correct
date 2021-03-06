(this["webpackJsonpmy-portfolio-project"] = this["webpackJsonpmy-portfolio-project"] || []).push([
    [0],
    {
        47: function (e, t, s) { },
        50: function (e, t, s) { },
        51: function (e, t, s) { },
        60: function (e, t, s) { },
        61: function (e, t, s) { },
        62: function (e, t, s) { },
        64: function (e, t, s) {
            "use strict";
            s.r(t);
            var a = s(1),
                i = s(0),
                c = s.n(i),
                n = s(9),
                r = s.n(n),
                l = (s(47), s(48), s(28)),
                o = s(29),
                h = s(39),
                j = s(37),
                d = s(27),
                m = s.n(d),
                b =
                    (s(49),
                        s(50),
                        (function (e) {
                            Object(h.a)(s, e);
                            var t = Object(j.a)(s);
                            function s() {
                                return Object(l.a)(this, s), t.apply(this, arguments);
                            }
                            return (
                                Object(o.a)(s, [
                                    {
                                        key: "render",
                                        value: function () {
                                            return Object(a.jsx)(m.a, { projectId: "6028a50ea0752f0004fb743a" });
                                        },
                                    },
                                ]),
                                s
                            );
                        })(i.Component));
            m.a.defaultProps = {
                email: !0,
                emailRequired: !0,
                emailDefaultValue: "",
                projectName: "",
                subProject: "",
                primaryColor: "white",
                textColor: "black",
                hoverBorderColor: "#000000",
                postSubmitButtonMsg: "Thanks!",
                submitButtonMsg: "Send Feedback",
                feedbackTypes: ["general", "bug", "idea"],
                zIndex: "100000000",
            };
            var g = b,
                p = s(80),
                x = s(81),
                u = (s(51), s(20)),
                O = s.n(u),
                f = s(21),
                k = s.n(f),
                v = function () {
                    return Object(a.jsx)("div", {
                        className: "fixed ",
                        children: Object(a.jsx)("div", {
                            className: window.innerWidth > 767 ? "px-5" : "px-2",
                            children: Object(a.jsxs)(p.a, {
                                collapseOnSelect: !0,
                                expand: "lg",
                                className: " p-0",
                                children: [
                                    Object(a.jsx)(p.a.Brand, { href: "/", className: "logo p-0", children: "RichA" }),
                                    Object(a.jsx)(p.a.Toggle, { "aria-controls": "responsive-navbar-nav" }),
                                    Object(a.jsxs)(p.a.Collapse, {
                                        id: "responsive-navbar-nav",
                                        children: [
                                            Object(a.jsxs)(x.a, {
                                                className: "mr-auto ml-4 nav-left-side",
                                                children: [
                                                    Object(a.jsx)(x.a.Link, { href: "#home", className: "nav-item", children: "Home" }),
                                                    Object(a.jsx)(x.a.Link, { href: "#about", className: "nav-item", children: "About" }),
                                                    Object(a.jsx)(x.a.Link, { href: "#skills", className: "nav-item", children: "Skills" }),
                                                    Object(a.jsx)(x.a.Link, { href: "#projects", className: "nav-item", children: "Projects" }),
                                                    Object(a.jsx)(x.a.Link, { href: "#contact", className: "nav-item", children: "Contact" }),
                                                ],
                                            }),
                                            Object(a.jsx)(x.a, {
                                                className: "ml-auto ".concat(window.innerWidth > 767 ? "w-25" : "mt-5 w-100"),
                                                children: Object(a.jsxs)("div", {
                                                    className: "d-flex justify-content-between w-100",
                                                    children: [
                                                        Object(a.jsx)(x.a.Link, { href: "https://www.linkedin.com/in/shivamsahu4u/", className: "nav-item cursor-pointer", target: "_blank", children: Object(a.jsx)(O.a, {}) }),
                                                        Object(a.jsx)(x.a.Link, { href: "https://github.com/shivamsahu4u", className: "nav-item cursor-pointer", target: "_blank", children: Object(a.jsx)(k.a, {}) }),
                                                        Object(a.jsx)(x.a.Link, {
                                                            href: "https://www.hackerrank.com/shivamsahu4u",
                                                            className: "nav-item cursor-pointer",
                                                            target: "_blank",
                                                            children: Object(a.jsx)("img", { height: "25px", src: "images/hr.jpeg", alt: "icon" }),
                                                        }),
                                                        Object(a.jsx)(x.a.Link, {
                                                            href: "https://codepen.io/shivamsahu4u",
                                                            className: "nav-item cursor-pointer",
                                                            target: "_blank",
                                                            children: Object(a.jsx)("img", { height: "25px", src: "images/cp2.png", alt: "icon" }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                w = (s(60), s(7)),
                N = s(78),
                y = s(79),
                L = { hidden: { opacity: 0 }, show: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.25 } }, exit: { opacity: 0, y: 300 } },
                S = { hidden: { y: 100 }, show: { y: 0, transition: { duration: 1, ease: "easeOut" } } },
                P = { hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5, ease: "easeOut" } }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } },
                C = s(33),
                T = s(6),
                _ = function () {
                    var e = Object(T.b)(),
                        t = Object(C.a)({ threshold: 0.3 }),
                        s = Object(w.a)(t, 2),
                        a = s[0];
                    return s[1] ? e.start("show") : e.start("hidden"), [a, e];
                },
                I = function () {
                    return "</ Changing the world one commit at a Time >";
                },
                H = function () {
                    var e = _(),
                        t = Object(w.a)(e, 2),
                        s = t[0],
                        i = t[1];
                    return Object(a.jsx)("div", {
                        id: "home",
                        className: "fix  ",
                        children: Object(a.jsx)("div", {
                            className: "bg-image",
                            children: Object(a.jsx)(T.a.div, {
                                variants: L,
                                ref: s,
                                animate: i,
                                className: "container home-page-intro ",
                                children: Object(a.jsx)(N.a, {
                                    className: "home-row",
                                    children: Object(a.jsx)(y.a, {
                                        md: 8,
                                        xs: 12,
                                        children: Object(a.jsxs)(T.a.div, {
                                            className: "intro-section",
                                            children: [
                                                Object(a.jsx)(T.a.h5, { variants: S, className: "mb-5", children: Object(a.jsx)(I, {}) }),
                                                Object(a.jsxs)(T.a.h1, { variants: S, className: "mb-4", children: ["Hi, I'm ", Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Shivam Sahu " }), ""] }),
                                                Object(a.jsxs)(T.a.h2, {
                                                    variants: S,
                                                    className: "mb-4",
                                                    children: [Object(a.jsx)("span", "Software Engineer At", " ", { className: "chonburi-font green-text", children: "DXC Technology" }],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                },
                M = s(34),
                R = s.n(M),
                A = s(35),
                E = s.n(A),
                D = s.p + "static/media/about-shape.1935a6be.svg",
                B = s(13),
                F = function () {
                    var e = Object(i.useState)("experience"),
                        t = Object(w.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        n = _(),
                        r = Object(w.a)(n, 2),
                        l = r[0],
                        o = r[1];
                    return Object(a.jsxs)(T.a.div, {
                        id: "about",
                        className: "about pb-6 pt-6",
                        children: [
                            Object(a.jsx)("img", { className: "skills-img", src: D, alt: "" }),
                            Object(a.jsx)(T.a.div, {
                                variants: window.innerWidth > 767 ? P : null,
                                ref: l,
                                animate: o,
                                className: "container",
                                children: Object(a.jsxs)(N.a, {
                                    className: "",
                                    children: [
                                        Object(a.jsx)(y.a, {
                                            className: "p-0 text-center",
                                            md: 5,
                                            children: Object(a.jsx)(B.a, {
                                                placeholder: "/images/skills/lod.jpeg",
                                                src: "/images/me1.png",
                                                error: "/images/skills/error.png",
                                                alt: "React Cool Img",
                                                onClick: function (e) {
                                                    throw new Error("this is a sentry error");
                                                },
                                                height: "50%",
                                            }),
                                        }),
                                        Object(a.jsx)(y.a, {
                                            className: "",
                                            md: 7,
                                            children: Object(a.jsxs)("div", {
                                                className: "about-info",
                                                children: [
                                                    Object(a.jsxs)("h1", { className: "pb-4", children: [Object(a.jsx)("span", { className: "chonburi-font green-text ", children: "About" }), " Me"] }),
                                                    Object(a.jsx)("p", {
                                                        className: "details",
                                                        children:
                                                            "I've been trained on .NET Full stack development at DXC Technology. Working with development + support project and logging, prioritizing & resolving production incidents reported by users & tracking them against various SLAs.",
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "d-flex align-items-center resume-section ",
                                                        children: [Object(a.jsx)("h6", { children: "Resume :" }), Object(a.jsx)("a", { href: "/my-resume.pdf", target: "_blank", children: "View" })],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "mt-5",
                                                        children: [
                                                            Object(a.jsxs)(N.a, {
                                                                className: "tabs mb-2",
                                                                children: [
                                                                    Object(a.jsxs)(y.a, {
                                                                        className: "\n                      ".concat("experience" === s ? "active-tab custom-mr-3" : "inactive-tab", " tab"),
                                                                        onClick: function () {
                                                                            return c("experience");
                                                                        },
                                                                        children: [Object(a.jsx)(R.a, {}), Object(a.jsx)("h5", { children: "Experiences" })],
                                                                    }),
                                                                    Object(a.jsxs)(y.a, {
                                                                        className: "\n                      ".concat("education" === s ? "active-tab custom-ml-3" : "inactive-tab", " tab"),
                                                                        onClick: function () {
                                                                            return c("education");
                                                                        },
                                                                        children: [Object(a.jsx)(E.a, {}), Object(a.jsx)("h5", { children: "Educations" })],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "about-sub-data",
                                                                children: [
                                                                    "experience" === s
                                                                        ? Object(a.jsxs)("div", {
                                                                            className: "work-experiences",
                                                                            children: [
                                                                                Object(a.jsx)("h5", { children: "DXC Technology" }),
                                                                                Object(a.jsx)("ul", { children: Object(a.jsx)("li", { children: "Full Stack Developer (Tech - .NET, SQL Server)" }) }),
                                                                            ],
                                                                        })
                                                                        : null,
                                                                    "education" === s
                                                                        ? Object(a.jsx)("div", {
                                                                            className: "education",
                                                                            children: Object(a.jsxs)("div", {
                                                                                children: [
                                                                                    Object(a.jsx)("h5", { children: "B.E." }),
                                                                                    Object(a.jsx)("ul", {
                                                                                        children: Object(a.jsx)("li", {
                                                                                            className: "text-justify",
                                                                                            children: "Graduated in Computer Science & Engineering from Bansal Institute of Research and Technology Bhopal in 2020.",
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        })
                                                                        : null,
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                G = s(22),
                J = [
                    {
                        image: "/images/technovani.png",
                        title: "Website: TechnoVani",
                        description: "This website is made on Laravel framework on PHP language with the help of phpmyadmin (MySQL) database.",
                        source: "",
                        demoLink: "https://technovani.com/",
                        badge: "PHP, MySQL",
                        liveweb: "",
                    },
                    {
                        image: "/images/nib.png",
                        title: "Website: NIB",
                        description: "This website is made on Laravel framework on PHP language. It is made to secure database for insurance. Used MySQL for Database",
                        source: "",
                        demoLink: "https://newportal.notioninsurance.com/",
                        badge: "PHP, JavaScript ",
                    },
                    {
                        image: "/images/foodshala.png",
                        title: "FoodShala",
                        description: "This project is designed using Laravel, PHP, phpMyAdmin, MySQL, HTML and CSS. It is a prototype for a real-life system, that will be used by real users.",
                        source: "https://github.com/richasinghthakur40/Foodshala/",
                        demoLink: "https://richasinghthakur40.github.io/Foodshala/",
                        badge: "Laravel, PHP ",
                    },
                    {
                        image: "/images/portfolio.png",
                        title: "Portfolio",
                        description: "This is a personal portfolio that is made to make resources organized at one place. If you really like it, leave a message, will be Happy to hear from you",
                        source: "https://github.com/richasinghthakur40.github.io/",
                        badge: "ReactJS",
                        demoLink: "https://richasinghthakur40.github.io/",
                        liveweb: "",
                    },
                    {
                        image: "/images/endecryptor.png",
                        title: "En-Decryptor",
                        description: "This project is developed using C++ and is able to encrypt any raw file of any format. This project implements various algorithms to encrypt the file according to the users convenience as well.",
                        source: "",
                        demoLink: "https://github.com/richasinghthakur40/En-Decryptor",
                        badge: "C++",
                        liveweb: "",
                    },
                ],
                V = function () {
                    var e = _(),
                        t = Object(w.a)(e, 2),
                        s = t[0],
                        i = t[1];
                    return Object(a.jsx)("div", {
                        className: "projects",
                        id: "projects",
                        children: Object(a.jsxs)(T.a.div, {
                            variants: window.innerWidth > 767 ? P : null,
                            ref: s,
                            animate: i,
                            className: "container pt-6 pb-6",
                            children: [
                                Object(a.jsx)("div", { className: "heading-section", children: Object(a.jsxs)("h1", { children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Pro" }), "jects"] }) }),
                                Object(a.jsx)("div", {
                                    className: "projects-cards",
                                    children: Object(a.jsx)(N.a, {
                                        className: "justify-content-center",
                                        children: J.map(function (e, t) {
                                            return Object(a.jsxs)(
                                                y.a,
                                                {
                                                    md: 4,
                                                    className: "mb-5",
                                                    children: [
                                                        Object(a.jsx)(G.a, { className: "lmckdncd", pill: !0, variant: "warning", children: e.badge }),
                                                        e.liveweb &&
                                                        Object(a.jsx)(G.a, {
                                                            className: "jdnkcjd",
                                                            pill: !0,
                                                            variant: "danger",
                                                            children: Object(a.jsx)("a", { href: e.liveweb, target: "_blank", rel: "noreferrer", style: { textDecoration: "none", color: "white" }, children: "Youtube" }),
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: "project-card",
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: "img-section",
                                                                    children: [
                                                                        Object(a.jsx)(B.a, { placeholder: "/images/loading.gif", src: e.image, error: "/images/download.png", alt: "React Cool Img" }),
                                                                        Object(a.jsx)("div", { className: "imageCardEffect" }),
                                                                    ],
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "project-info",
                                                                    children: [
                                                                        Object(a.jsx)("h5", { className: "color-white font-weight-bold", children: e.title }),
                                                                        Object(a.jsx)("p", { className: "color-white", children: e.description }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "d-flex justify-content-between mr-4",
                                                                            children: [
                                                                                Object(a.jsx)("a", { href: e.source, className: "project-card-btn", target: "_blank", rel: "noreferrer", children: "Source Code" }),
                                                                                Object(a.jsx)("a", { href: e.demoLink, className: "project-card-btn", target: "_blank", rel: "noreferrer", children: "Live Demo" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                t + 1
                                            );
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                W = function () {
                    var e = _(),
                        t = Object(w.a)(e, 2),
                        s = t[0],
                        i = t[1];
                    return Object(a.jsx)("div", {
                        className: "contact-section-bg",
                        id: "contact",
                        children: Object(a.jsx)(T.a.div, {
                            variants: P,
                            ref: s,
                            animate: i,
                            className: "container pt-6 pb-6 ",
                            children: Object(a.jsx)(N.a, {
                                className: "justify-content-between",
                                children: Object(a.jsxs)(y.a, {
                                    md: 6,
                                    children: [
                                        Object(a.jsxs)("h1", { children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Get" }), " in Touch"] }),
                                        Object(a.jsx)("p", { className: "mb-5", children: "For any information regarding my work kindly, contact me though the following phone number or email address." }),
                                        Object(a.jsxs)("h5", { className: "mb-4", children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "PhoneNo:" }), " +91 789840****"] }),
                                        Object(a.jsxs)("h5", { className: "mb-4", children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Email:" }), " ", "richasinghthakur40@gmail.com"] }),
                                    ],
                                }),
                            }),
                        }),
                    });
                },
                Q =
                    (s(61),
                        function () {
                            return Object(a.jsx)("div", {
                                className: "footer pb-5 pt-5 ",
                                children: Object(a.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        Object(a.jsxs)(N.a, {
                                            className: "justify-content-between align-items-center",
                                            children: [
                                                Object(a.jsx)(y.a, {
                                                    md: 3,
                                                    xs: 12,
                                                    children: Object(a.jsxs)("div", {
                                                        className: "d-flex justify-content-between footer-info mt-4",
                                                        children: [
                                                            Object(a.jsx)(x.a.Link, { href: "https://www.linkedin.com/in/richasinghthakur40/", className: "nav-item cursor-pointer", target: "_blank", children: Object(a.jsx)(O.a, {}) }),
                                                            Object(a.jsx)(x.a.Link, { href: "https://github.com/richasinghthakur40", className: "nav-item cursor-pointer", target: "_blank", children: Object(a.jsx)(k.a, {}) }),
                                                            Object(a.jsx)(x.a.Link, {
                                                                href: "https://www.hackerrank.com/richasinghthakur",
                                                                className: "nav-item cursor-pointer",
                                                                target: "_blank",
                                                                children: Object(a.jsx)("img", { height: "25px", src: "images/hr.jpeg", alt: "icon" }),
                                                            }),
                                                            Object(a.jsx)(x.a.Link, {
                                                                href: "https://codepen.io/richasinghthakur40",
                                                                className: "nav-item cursor-pointer",
                                                                target: "_blank",
                                                                children: Object(a.jsx)("img", { height: "25px", src: "images/cp2.png", alt: "icon" }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                Object(a.jsx)(y.a, {
                                                    md: 5,
                                                    xs: 12,
                                                    children: Object(a.jsxs)("ul", {
                                                        className: "d-flex justify-content-between p-0 w-100 footer-info mt-4 ",
                                                        children: [
                                                            Object(a.jsx)("li", { className: "p-1", children: Object(a.jsx)("a", { href: "#home", children: "Home" }) }),
                                                            Object(a.jsx)("li", { className: "p-1", children: Object(a.jsx)("a", { href: "#about", children: "About" }) }),
                                                            Object(a.jsx)("li", { className: "p-1", children: Object(a.jsx)("a", { href: "#skills", children: "Skills" }) }),
                                                            Object(a.jsx)("li", { className: "p-1", children: Object(a.jsx)("a", { href: "#projects", children: "Projects" }) }),
                                                            Object(a.jsx)("li", { className: "p-1", children: Object(a.jsx)("a", { href: "#contact", children: "Contact" }) }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        Object(a.jsx)("div", {
                                            className: "text-center mt-4  footer-end",
                                            children: Object(a.jsxs)("p", { children: ["Designed & Developed by", " ", Object(a.jsx)("span", { className: "chonburi-font green-text", children: " Richa Singh" })] }),
                                        }),
                                    ],
                                }),
                            });
                        }),
                q = [
                    { logo: "/images/skills/laravel.png", name: "Laravel", link: "https://www.laravel.com/" },
                    { logo: "/images/skills/php.png", name: "PHP", link: "https://www.w3schools.com/php/" },
                    { logo: "/images/skills/mysql.png", name: "MySQL", link: "https://www.w3schools.com/html/" },
                    { logo: "/images/skills/phpmyadmin.png", name: "phpMyAdmin", link: "https://www.phpmyadmin.net/" },
                    { logo: "/images/skills/html.png", name: "HTML", link: "https://www.w3schools.com/html/" },
                    { logo: "/images/skills/css-3.png", name: "CSS", link: "https://www.w3schools.com/css/" },
                    { logo: "/images/skills/js.png", name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                    { logo: "/images/skills/jquery.png", name: "jQuery", link: "https://www.w3schools.com/jquERy/" },
                    { logo: "/images/skills/ajax.png", name: "AJAX", link: "https://www.w3schools.com/xml/ajax_intro.asp" },
                    { logo: "/images/skills/json.png", name: "JSON", link: "https://www.json.org/" },
                    { logo: "/images/skills/git-logo.png", name: "Git", link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" },
                    { logo: "/images/skills/bootstrap.png", name: "Bootstrap", link: "https://react-bootstrap.github.io/getting-started/introduction/" },
                    { logo: "/images/skills/logo.png", name: "Material UI", link: "https://material-ui.com/" },
                    { logo: "/images/skills/react.png", name: "ReactJS", link: "https://reactjs.org/" },
                    { logo: "/images/skills/nodejs.png", name: "NodeJS", link: "https://nodejs.org/en/docs/" },
                    { logo: "/images/skills/c.png", name: "C", link: "https://www.w3schools.in/c-tutorial/" },
                    { logo: "/images/skills/c++.png", name: "C++", link: "https://www.w3schools.com/CPP/default.asp/" },
                    { logo: "/images/skills/cs.png", name: "C#", link: "https://www.w3schools.com/cs/index.php/" },
                    { logo: "/images/skills/python.png", name: "Python", link: "https://www.w3schools.com/PYTHON/" },
                    { logo: "/images/skills/dj.png", name: "Django", link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/" },
                    { logo: "/images/skills/vs.png", name: "Visual-Studio", link: "https://en.wikipedia.org/wiki/Microsoft_Visual_Studio/" },
                ],
                z = function () {
                    var e = _(),
                        t = Object(w.a)(e, 2),
                        s = t[0],
                        i = t[1];
                    return Object(a.jsx)("div", {
                        id: "skills",
                        className: "skills-section",
                        children: Object(a.jsxs)(T.a.div, {
                            variants: P,
                            ref: s,
                            animate: i,
                            className: "container",
                            children: [
                                Object(a.jsx)("div", { className: "heading-section", children: Object(a.jsxs)("h1", { children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Ski" }), "lls"] }) }),
                                Object(a.jsx)(N.a, {
                                    children: q.map(function (e, t) {
                                        return Object(a.jsx)(
                                            y.a,
                                            {
                                                children: Object(a.jsxs)("div", {
                                                    className: "skills",
                                                    children: [
                                                        Object(a.jsx)(B.a, { placeholder: "/images/skills/lod.jpeg", src: e.logo, error: "/images/skills/error.png", alt: "React Cool Img" }),
                                                        Object(a.jsxs)("a", { href: e.link, target: "_blank", rel: "noreferrer", children: [" ", Object(a.jsx)("h6", { children: e.name }), " "] }),
                                                    ],
                                                }),
                                            },
                                            t + 1
                                        );
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                U = s(36);
            window.customElements.define("codersrank-activity", U.a);
            var Y = function () {
                var e = _(),
                    t = Object(w.a)(e, 2),
                    s = t[0],
                    i = t[1];
                return Object(a.jsx)("div", {
                    id: "skills",
                    className: "skills-section",
                    children: Object(a.jsxs)(T.a.div, {
                        variants: P,
                        ref: s,
                        animate: i,
                        className: "container",
                        children: [
                            Object(a.jsx)("div", { className: "heading-section", children: Object(a.jsxs)("h1", { children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Social" }), "Profiles"] }) }),
                            Object(a.jsxs)(N.a, {
                                children: [
                                    Object(a.jsx)("codersrank-activity", { username: "amananku26" }),
                                    Object(a.jsx)("br", {}),
                                    Object(a.jsx)("img", {
                                        align: "center",
                                        src: "https://github-readme-stats.vercel.app/api?username=richasinghthakur40&bg_color=30,e96443,904e95&title_color=fff&text_color=fff",
                                        alt: "Richa's github stats",
                                        width: "55%",
                                    }),
                                    Object(a.jsx)("img", { align: "center", src: "https://github-readme-stats.vercel.app/api/top-langs/?username=richasinghthakur40&layout=compact", alt: "Richa's github stats", width: "45%" }),
                                    Object(a.jsx)("img", { align: "center", src: "https://activity-graph.herokuapp.com/graph?username=richasinghthakur40&theme=github", alt: "GitHub Activity Graph", width: "100%" }),
                                ],
                            }),
                            Object(a.jsx)(N.a, {}),
                        ],
                    }),
                });
            },
                X = [
                    {
                        image: "https://assets.kpmg/content/dam/kpmg/gh/images/gh-award.jpg/jcr:content/renditions/original",
                        title: "Award of Puctuality",
                        dLink: "Got the Spot award and Certificate of Punctuality by Bansal Group of Institutions",
                    },
                    {
                        image: "https://mediaprocessor.websimages.com/width/431/technicalshivam.webs.com/IMG_20200108_161132_290_01.jpg",
                        title: "HacktoberFest 2019",
                        dLink: "Got T-shirt and goodies from DigitalOcean For my successful contribution in HacktoberFest 2019.",
                        demoLink: "",
                    },
                ],
                K = function () {
                    var e = _(),
                        t = Object(w.a)(e, 2),
                        s = t[0],
                        i = t[1];
                    return Object(a.jsx)("div", {
                        className: "projects1",
                        id: "projects",
                        children: Object(a.jsxs)(T.a.div, {
                            variants: window.innerWidth > 767 ? P : null,
                            ref: s,
                            animate: i,
                            className: "container pt-6 pb-6",
                            children: [
                                Object(a.jsx)("div", { className: "heading-section", children: Object(a.jsxs)("h1", { children: [Object(a.jsx)("span", { className: "chonburi-font green-text", children: "Achieve" }), "ment"] }) }),
                                Object(a.jsx)("div", {
                                    className: "projects-cards",
                                    children: Object(a.jsx)(N.a, {
                                        className: "justify-content-center",
                                        children: X.map(function (e, t) {
                                            return Object(a.jsx)(
                                                y.a,
                                                {
                                                    md: 4,
                                                    className: "mb-5",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "project-card1",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "img-section",
                                                                children: [
                                                                    Object(a.jsx)(B.a, { placeholder: "/images/loading.gif", src: e.image, error: "/images/download.png", alt: "React Cool Img" }),
                                                                    Object(a.jsx)("div", { className: "imageCardEffect" }),
                                                                ],
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "project-info1",
                                                                children: [
                                                                    Object(a.jsx)("h5", { className: "color-white font-weight-bold", children: e.title }),
                                                                    Object(a.jsx)("p", { className: "color-white", children: e.dLink }),
                                                                    e.demoLink &&
                                                                    Object(a.jsx)("div", {
                                                                        className: "d-flex justify-content-between mr-4",
                                                                        children: Object(a.jsx)("a", { href: e.demoLink, className: "project-card-btn", target: "_blank", rel: "noreferrer", children: "Read ..." }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                t + 1
                                            );
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                Z = function () {
                    return Object(a.jsxs)("div", {
                        children: [Object(a.jsx)(v, {}), Object(a.jsx)(H, {}), Object(a.jsx)(F, {}), Object(a.jsx)(z, {}), Object(a.jsx)(V, {}), Object(a.jsx)(Y, {}), Object(a.jsx)(K, {}), Object(a.jsx)(W, {}), Object(a.jsx)(Q, {})],
                    });
                },
                $ = s(38),
                ee =
                    (s(62),
                        function () {
                            var e = Object(i.useState)(!1),
                                t = Object(w.a)(e, 2),
                                s = t[0],
                                c = t[1];
                            return (
                                window.addEventListener("scroll", function () {
                                    !s && window.pageYOffset > 400 ? c(!0) : s && window.pageYOffset <= 400 && c(!1);
                                }),
                                Object(a.jsx)($.a, {
                                    className: "scrollTop",
                                    onClick: function () {
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    },
                                    style: { height: 40, display: s ? "flex" : "none" },
                                })
                            );
                        });
            var te = function () {
                return Object(a.jsxs)("div", { className: "App", children: [Object(a.jsx)(Z, {}), Object(a.jsx)(g, {}), Object(a.jsx)(ee, {})] });
            },
                se = function (e) {
                    e &&
                        e instanceof Function &&
                        s
                            .e(3)
                            .then(s.bind(null, 82))
                            .then(function (t) {
                                var s = t.getCLS,
                                    a = t.getFID,
                                    i = t.getFCP,
                                    c = t.getLCP,
                                    n = t.getTTFB;
                                s(e), a(e), i(e), c(e), n(e);
                            });
                };
            r.a.render(Object(a.jsx)(c.a.StrictMode, { children: Object(a.jsx)(te, {}) }), document.getElementById("root")), se();
        },
    },
    [[64, 1, 2]],
]);
