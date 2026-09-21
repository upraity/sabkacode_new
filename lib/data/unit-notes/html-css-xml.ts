import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Introduction to HTML, CSS-XML (C-104)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 1, syllabus
// effective from session 2025-26.
//
// HTML / CSS / JavaScript examples were run in a real browser (Chromium) and
// the XML / DTD / XSD / XSLT examples were checked with libxml2 and lxml; the
// printed `output` is the real tool output. Code blocks use `kind: "code"` —
// see README-INTEGRATION.md in the zip.

export const htmlCssXmlUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Basics of Internet and Web",
    hours: 10,
    headings: [
      {
        id: "internet-www",
        title: "1. Internet, World Wide Web, Web Page, Home Page and Web Site",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "The Internet is a worldwide network of interconnected computer networks that communicate with each other using a common set of rules called TCP/IP (Transmission Control Protocol / Internet Protocol). It began as ARPANET in the USA in 1969 and today connects billions of devices. The Internet is the infrastructure (the 'roads'); services such as e-mail, file transfer and the World Wide Web run on it.",
          },
          {
            kind: "paragraph",
            text: "The World Wide Web (WWW or the Web) is a system of interlinked hypertext documents and resources that are accessed through the Internet using a web browser. It was invented by Tim Berners-Lee at CERN, Switzerland, in 1989–91. The Web is built on three basic technologies: HTML (to write documents), URL (to give every resource an address) and HTTP (to transfer them).",
          },
          {
            kind: "table",
            headers: ["Internet", "World Wide Web"],
            rows: [
              [
                "A global network of networks (hardware + protocols)",
                "A collection of web pages/documents (software service) available over the Internet",
              ],
              ["Older — started in 1969 (ARPANET)", "Newer — started in 1989–91"],
              ["Uses TCP/IP and many protocols", "Uses mainly HTTP/HTTPS"],
              ["Supports e-mail, FTP, chat, VoIP and the Web", "Only one of the services on the Internet"],
            ],
          },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              [
                "Web page",
                "A single document (usually an HTML file) that can be displayed in a browser. It may contain text, images, audio, video and links.",
              ],
              [
                "Home page",
                "The first, main page of a web site — the 'front door' — which introduces the site and links to other pages (normally index.html or default.htm). It is also the page that a browser opens when it starts.",
              ],
              [
                "Web site",
                "A collection of related web pages, stored on a web server and reached through a common domain name, e.g., www.example.com.",
              ],
              [
                "Web server",
                "A computer (and software) that stores web sites and delivers pages to browsers on request.",
              ],
              ["URL (Uniform Resource Locator)", "The unique address of a resource on the Web."],
            ],
          },
          { kind: "diagram", diagramId: "url-anatomy", caption: "Fig 1.1 — Parts of a URL" },
          {
            kind: "table",
            headers: ["Static web page", "Dynamic web page", "Active web page"],
            rows: [
              [
                "Content is fixed and stored in the HTML file; every visitor sees the same page.",
                "Content is generated on the server when it is requested, often from a database, and can differ for each user or time.",
                "Contains a small program that runs on the client's browser (Java applet, ActiveX control, JavaScript) after the page arrives, making it interactive.",
              ],
              [
                "Written in HTML/CSS only",
                "Uses server-side scripts: PHP, ASP, JSP, Python, Node.js",
                "Uses client-side technologies: JavaScript, Java applets, ActiveX, Flash (obsolete)",
              ],
              [
                "Changing content means editing the file",
                "Content changes automatically when data changes",
                "Content changes in response to the user's actions",
              ],
              [
                "Fast and simple. Example: a college 'About us' page",
                "Example: online result, shopping cart, news site",
                "Example: interactive map, animation, form validation",
              ],
            ],
          },
        ],
      },
      {
        id: "protocols",
        title: "2. Overview of Protocols",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A protocol is a set of rules that decide how data is formatted, sent and received between computers. Without common protocols, computers of different makes could not talk to each other. Protocols work in layers: for example, HTTP (application layer) sits on top of TCP (transport layer), which sits on top of IP (network layer).",
          },
          {
            kind: "table",
            headers: ["Protocol", "Full form", "Purpose", "Default port"],
            rows: [
              [
                "TCP/IP",
                "Transmission Control Protocol / Internet Protocol",
                "Basic rules of the Internet. IP addresses and routes packets; TCP breaks data into packets, ensures reliable delivery and re-assembles them.",
                "—",
              ],
              [
                "HTTP",
                "HyperText Transfer Protocol",
                "Transfers web pages between the web server and browser (request–response).",
                "80",
              ],
              [
                "HTTPS",
                "HTTP Secure",
                "HTTP with encryption (SSL/TLS) for secure transfer, e.g., banking sites.",
                "443",
              ],
              ["FTP", "File Transfer Protocol", "Upload and download of files between computers.", "21"],
              ["SMTP", "Simple Mail Transfer Protocol", "Sending e-mail.", "25"],
              [
                "POP3 / IMAP",
                "Post Office Protocol v3 / Internet Message Access Protocol",
                "Receiving/reading e-mail from the mail server.",
                "110 / 143",
              ],
              [
                "DNS",
                "Domain Name System",
                "Converts domain names (www.example.com) into IP addresses.",
                "53",
              ],
              [
                "Telnet / SSH",
                "Telecommunication Network / Secure Shell",
                "Remote login to another computer (SSH is the secure version).",
                "23 / 22",
              ],
              [
                "DHCP",
                "Dynamic Host Configuration Protocol",
                "Automatically gives IP addresses to devices on a network.",
                "67/68",
              ],
            ],
          },
        ],
      },
      {
        id: "client-server",
        title: "3. Client–Server Computing, Web Client and Web Server",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Client–server computing is a model in which work is divided between two kinds of computers: the SERVER, which stores data and provides services, and the CLIENT, which requests those services. On the Web, the web client is the browser (running on the user's computer, phone or tablet) and the web server is a computer running server software such as Apache, Nginx or Microsoft IIS.",
          },
          { kind: "diagram", diagramId: "client-server-model", caption: "Fig 1.2 — Client–server model of the Web: request and response" },
          {
            kind: "bullets",
            items: [
              "Step 1: The user types a URL (or clicks a link) in the browser. Step 2: DNS converts the domain name to an IP address. Step 3: The browser opens a TCP connection and sends an HTTP REQUEST to the web server. Step 4: The server finds the file (or runs a script/queries the database) and sends back an HTTP RESPONSE with a status code and the content. Step 5: The browser reads the HTML and displays the page, requesting images, CSS and scripts as needed.",
            ],
          },
          {
            kind: "code",
            language: "http",
            title: "An HTTP request and the server's response",
            code: String.raw`GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html

HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1256

<!DOCTYPE html>
<html> ... the page ... </html>`,
          },
          {
            kind: "table",
            headers: ["HTTP method", "Use"],
            rows: [
              ["GET", "Ask for a resource (open a page). Data goes in the URL."],
              ["POST", "Send data to the server (submit a form). Data goes in the body of the request."],
              ["PUT / DELETE", "Create/replace or delete a resource (used in APIs)."],
              ["HEAD", "Get only the headers of a response."],
            ],
          },
          {
            kind: "table",
            headers: ["Status code", "Meaning"],
            rows: [
              ["200 OK", "Request succeeded."],
              ["301 / 302", "Page moved permanently / temporarily (redirect)."],
              ["400 Bad Request", "The server could not understand the request."],
              ["401 / 403", "Authentication required / access forbidden."],
              ["404 Not Found", "The requested page does not exist."],
              ["500 Internal Server Error", "The server failed while processing the request."],
              ["503 Service Unavailable", "Server is overloaded or down."],
            ],
          },
        ],
      },
      {
        id: "browsers",
        title: "4. Web Browsers",
        icon: "AppWindow",
        blocks: [
          {
            kind: "paragraph",
            text: "A web browser is application software used to request, retrieve, interpret and display web pages and other resources. It acts as the web client: it sends HTTP requests, receives HTML, CSS and JavaScript, and renders them on the screen as the page that the user sees.",
          },
          {
            kind: "table",
            headers: ["Browser", "Remark"],
            rows: [
              [
                "Netscape Navigator",
                "First widely used commercial browser (1994); introduced JavaScript and cookies; discontinued in 2008. Mozilla Firefox descends from it.",
              ],
              [
                "Internet Explorer (IE)",
                "Microsoft's browser, bundled with Windows from 1995 and very popular in the 2000s; support ended in 2022 and it was replaced by Microsoft Edge.",
              ],
              [
                "Mozilla Firefox",
                "Free, open-source browser from the Mozilla Foundation (2004); good privacy and add-on support.",
              ],
              [
                "Google Chrome, Microsoft Edge, Safari, Opera",
                "Modern browsers with fast engines and support for the latest HTML5/CSS3/JavaScript.",
              ],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Main components of a browser: User interface (address bar, buttons, tabs); Browser engine; Rendering (layout) engine that converts HTML+CSS to the screen; Networking module for HTTP requests; JavaScript interpreter; Data storage (cache, cookies, bookmarks).",
              "Browser vs search engine: a browser is software to view web pages; a search engine (Google, Bing) is a web site/service that finds pages for keywords.",
            ],
          },
        ],
      },
      {
        id: "scripting",
        title: "5. Client-Side and Server-Side Scripting: VBScript and JavaScript",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "A script is a small program written in a scripting language that is embedded in or linked to a web page. Depending on where the script is executed, it is called client-side or server-side scripting.",
          },
          {
            kind: "table",
            headers: ["Client-side scripting", "Server-side scripting"],
            rows: [
              [
                "Script runs in the user's browser after the page is downloaded",
                "Script runs on the web server before the page is sent",
              ],
              [
                "Languages: JavaScript, VBScript (Internet Explorer only)",
                "Languages: PHP, ASP.NET, JSP, Python, Node.js, Perl",
              ],
              [
                "Used for validation, animation, interactivity, changing the page without reloading",
                "Used for database access, login, processing forms, generating dynamic pages",
              ],
              [
                "User can see the script (view source); less secure for secret data",
                "User sees only the output; source code and database stay hidden",
              ],
              [
                "Reduces load on the server and gives instant response",
                "Increases server load but is secure and can access server resources",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["JavaScript", "VBScript"],
            rows: [
              [
                "Developed by Netscape (Brendan Eich, 1995)",
                "Developed by Microsoft (Visual Basic Scripting Edition)",
              ],
              [
                "Supported by all modern browsers",
                "Supported only by old Internet Explorer; now discontinued",
              ],
              [
                "Syntax similar to C/Java; case-sensitive",
                "Syntax similar to Visual Basic; not case-sensitive",
              ],
              ["Also runs on the server (Node.js)", "Also used in Classic ASP and Windows scripting"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "JavaScript in a web page (client-side)",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <p id="msg">Loading...</p>
  <script>
    document.getElementById("msg").innerHTML = "Hello from JavaScript (runs in the browser)";
  </script>
</body>
</html>`,
          },
          {
            kind: "code",
            language: "html",
            title: "The same idea in VBScript (works only in old Internet Explorer)",
            code: String.raw`<html>
<body>
  <script language="VBScript">
    MsgBox "Hello from VBScript"
  </script>
</body>
</html>`,
          },
        ],
      },
      {
        id: "web-architecture",
        title: "6. Web Server Architecture, Image Maps, CGI, API and Database Connectivity",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Web applications are commonly built in a three-tier architecture, which separates the presentation, the logic and the data so that each can be developed and changed independently.",
          },
          { kind: "diagram", diagramId: "web-architecture", caption: "Fig 1.3 — Three-tier web architecture" },
          {
            kind: "table",
            headers: ["Tier", "Function", "Examples"],
            rows: [
              [
                "1. Presentation (client) tier",
                "The user interface shown in the browser; takes input and shows output.",
                "HTML, CSS, JavaScript, browser",
              ],
              [
                "2. Application (logic) tier",
                "The web server and the application programs that process requests, apply the business rules and talk to the database.",
                "Apache/IIS + PHP, ASP.NET, JSP, CGI programs",
              ],
              ["3. Data tier", "Stores and manages the data.", "MySQL, Oracle, SQL Server"],
            ],
          },
          {
            kind: "paragraph",
            text: "Image maps: an image map is an image with several clickable areas (hot spots), each linking to a different page. In a client-side image map the browser itself decides which area was clicked, using the <map> and <area> tags with the shape (rect, circle, poly) and coordinates. In a server-side image map (ismap attribute) the click coordinates are sent to the server which decides the target.",
          },
          {
            kind: "code",
            language: "html",
            title: "Client-side image map",
            code: String.raw`<img src="planets.png" width="300" height="100" alt="Planets" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect"   coords="0,0,100,100"   href="sun.html"     alt="Sun">
  <area shape="circle" coords="150,50,40"     href="mercury.html" alt="Mercury">
  <area shape="poly"   coords="220,10,290,10,255,90" href="venus.html" alt="Venus">
</map>`,
          },
          {
            kind: "paragraph",
            text: "CGI (Common Gateway Interface) is a standard that lets a web server run an external program (a CGI script, written in C, Perl, Python etc.) when a certain URL is requested. The server passes the request information to the program through environment variables (REQUEST_METHOD, QUERY_STRING, ...) and standard input; the program writes an HTTP header, a blank line and then the content (usually HTML) to standard output, and the server sends this to the browser. This is how the first dynamic pages were created. Disadvantage: a new process is started for every request, so CGI is slow for busy sites (later replaced by PHP, ASP, servlets, FastCGI).",
          },
          {
            kind: "code",
            language: "python",
            title: "A simple CGI script (hello.cgi) and what it sends to the server",
            code: String.raw`#!/usr/bin/env python3
import os

print("Content-Type: text/html")    # 1. HTTP header
print()                             # 2. blank line ends the header
print("<html><body>")               # 3. the content
print("<h1>Hello from CGI</h1>")
print("<p>Request method: " + os.environ.get("REQUEST_METHOD", "unknown") + "</p>")
print("</body></html>")`,
            output: String.raw`Content-Type: text/html

<html><body>
<h1>Hello from CGI</h1>
<p>Request method: GET</p>
</body></html>`,
          },
          {
            kind: "paragraph",
            text: "API (Application Programming Interface): a set of rules through which one program requests services or data from another. A Web API is called using HTTP and usually returns data in JSON or XML instead of a full web page — for example a weather service or a payment gateway. REST is the most common style of web API (URLs for resources and the HTTP methods GET, POST, PUT and DELETE).",
          },
          {
            kind: "code",
            language: "json",
            title: "Response of a web API (JSON)",
            code: String.raw`{
  "city": "Saharanpur",
  "temperature": 31,
  "unit": "C",
  "forecast": ["sunny", "cloudy"]
}`,
          },
          {
            kind: "paragraph",
            text: "Database connectivity (DBC): dynamic web sites store their data in a database. A program (PHP, ASP, Java, CGI) must connect to the database, send SQL commands and read the results. ODBC (Open Database Connectivity) is a standard interface developed by Microsoft that lets an application talk to almost any database through a driver, without changing the program when the database product changes. Java has a similar interface called JDBC.",
          },
          {
            kind: "table",
            headers: ["Step in database connectivity", "Explanation"],
            rows: [
              ["1. Application makes a request", "The web program calls the ODBC/JDBC functions."],
              [
                "2. Driver manager",
                "Loads the correct driver for the chosen data source (DSN — Data Source Name).",
              ],
              [
                "3. Database driver",
                "Translates the standard calls into the commands of the actual database (MySQL, Oracle, Access...).",
              ],
              ["4. Database", "Executes the SQL query and sends the result back through the same path."],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Internet", definition: "A worldwide network of networks that use TCP/IP." },
      { term: "WWW", definition: "A system of interlinked hypertext documents accessed through the Internet." },
      { term: "URL", definition: "Uniform Resource Locator — the address of a resource on the Web." },
      { term: "HTTP", definition: "HyperText Transfer Protocol — the protocol used to transfer web pages." },
      { term: "Web client / Web server", definition: "The browser that requests pages / the computer software that stores and serves pages." },
      {
        term: "Static / Dynamic / Active page",
        definition: "Fixed content / content generated by the server / content with a program running in the browser.",
      },
      { term: "Image map", definition: "An image with clickable regions that link to different resources." },
      { term: "CGI", definition: "Common Gateway Interface — a standard for running external programs from a web server." },
      { term: "ODBC", definition: "Open Database Connectivity — a standard interface for accessing databases." },
    ],
    examQuestions: [
      "What is the Internet? Differentiate between the Internet and the World Wide Web. (Medium)",
      "Define web page, home page and web site. (Short)",
      "Differentiate between static, dynamic and active web pages. (Medium)",
      "Explain the important protocols of the Internet (HTTP, FTP, SMTP, TCP/IP). (Long)",
      "Explain the client–server computing model with a diagram. What are a web client and a web server? (Long)",
      "What is a web browser? Write a note on any three browsers. (Medium)",
      "Differentiate between client-side and server-side scripting. Compare VBScript and JavaScript. (Long)",
      "Explain the web server architecture (three-tier). (Medium)",
      "What is an image map? Write the HTML for a client-side image map. (Medium)",
      "What is CGI? Explain how it works. (Medium)",
      "Write short notes on API, DBC and ODBC. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Dynamic HTML",
    hours: 8,
    headings: [
      {
        id: "dhtml-intro",
        title: "1. Dynamic HTML (DHTML): Concept and Features",
        icon: "Sparkles",
        blocks: [
          {
            kind: "paragraph",
            text: "Dynamic HTML (DHTML) is not a new language. It is a combination of technologies — HTML (structure), CSS (presentation), JavaScript or another client-side script (behaviour) and the Document Object Model (DOM) — that together make a web page change and respond to the user WITHOUT going back to the server. With DHTML a page can change colours, move objects, show and hide content, or validate a form instantly on the client's machine.",
          },
          { kind: "diagram", diagramId: "dhtml-components", caption: "Fig 2.1 — Components of DHTML" },
          {
            kind: "table",
            headers: ["Static HTML", "Dynamic HTML"],
            rows: [
              ["Page does not change after loading", "Page can change after loading, in response to events"],
              [
                "Every change requires a new request to the server",
                "Changes take place in the browser at once",
              ],
              ["Only HTML (+ CSS)", "HTML + CSS + scripting + DOM"],
              [
                "No user interaction except links and forms",
                "Rich interaction: animation, drag and drop, menus",
              ],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Features of DHTML: (1) Dynamic content — text and HTML can be changed after the page is loaded; (2) Dynamic style — colours, fonts, size and visibility can be changed with scripts; (3) Dynamic positioning — elements can be moved anywhere on the page (CSSP); (4) Event handling — the page responds to mouse clicks, key presses etc.; (5) Data binding and filters/transitions in old IE; (6) Faster pages, because less data is exchanged with the server; (7) Better user experience and reduced server load.",
            ],
          },
        ],
      },
      {
        id: "dom",
        title: "2. Document Object Model (DOM)",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The Document Object Model (DOM) is a W3C standard programming interface that represents an HTML (or XML) document as a TREE of objects called nodes. Every element, attribute and piece of text becomes a node. A script can use the DOM to find any node and read or change its content, attributes and style — this is what makes a page dynamic.",
          },
          { kind: "diagram", diagramId: "dom-tree", caption: "Fig 2.2 — DOM tree of a small HTML document" },
          {
            kind: "table",
            headers: ["Node type", "Meaning", "Example"],
            rows: [
              ["Document node", "The root of the tree; the whole page.", "document"],
              ["Element node", "An HTML tag.", "<body>, <p>, <ul>"],
              ["Attribute node", "An attribute of an element.", "id='title', class='note'"],
              ["Text node", "The text inside an element.", "'Hello'"],
              ["Comment node", "An HTML comment.", "<!-- note -->"],
            ],
          },
          {
            kind: "table",
            headers: ["DOM method / property", "Purpose"],
            rows: [
              ["document.getElementById('id')", "Finds the single element with the given id."],
              ["document.getElementsByTagName('p')", "Returns all elements with the given tag name."],
              ["document.getElementsByClassName('note')", "Returns all elements of a class."],
              [
                "document.querySelector('css selector')",
                "Returns the first element that matches a CSS selector (querySelectorAll returns all).",
              ],
              ["element.innerHTML / textContent", "Reads or changes the content of an element."],
              ["element.style.property", "Changes CSS style, e.g., element.style.color = 'red'."],
              ["element.getAttribute() / setAttribute()", "Reads / changes an attribute."],
              [
                "document.createElement('li'), appendChild(), removeChild()",
                "Creates a new element and adds it to or removes it from the tree.",
              ],
              ["parentNode, childNodes, firstChild, nextSibling", "Moves around the tree."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Changing a page with the DOM",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <h2 id="title">Original heading</h2>
  <ul id="list"><li>HTML</li></ul>
  <button id="btn" onclick="changeIt()">Click me</button>

  <script>
    function changeIt() {
      var h = document.getElementById("title");
      h.innerHTML = "Heading changed by the DOM";      // change content
      h.style.color = "red";                            // change style

      var li = document.createElement("li");            // create a new node
      li.appendChild(document.createTextNode("CSS"));
      document.getElementById("list").appendChild(li);  // add it to the tree
    }
  </script>
</body>
</html>`,
          },
        ],
      },
      {
        id: "cssp-jsss",
        title: "3. CSSP, JSSS and Layers of Netscape",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "paragraph",
            text: "CSSP — Cascading Style Sheet Positioning — is the part of CSS that lets the author place any element at an exact position on the page, and overlap or stack elements. The properties are position (static, relative, absolute, fixed, sticky), top, left, right, bottom and z-index (stacking order). When combined with scripts these properties can be changed continuously, which makes animation possible.",
          },
          {
            kind: "table",
            headers: ["position value", "Behaviour"],
            rows: [
              ["static (default)", "Element is placed in the normal flow; top/left have no effect."],
              [
                "relative",
                "Placed in normal flow, then moved relative to its normal position. It also becomes the reference box for absolute children.",
              ],
              [
                "absolute",
                "Removed from the flow and placed at top/left/right/bottom relative to the nearest positioned ancestor (or the page).",
              ],
              [
                "fixed",
                "Positioned relative to the browser window; does not move when the page is scrolled.",
              ],
              [
                "sticky",
                "Behaves like relative until a scroll threshold is reached and then sticks like fixed.",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "CSSP with a script: an object moving across a box",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <div id="stage" style="position:relative; width:300px; height:60px; border:1px solid #333;">
    <div id="ball" style="position:absolute; left:0; top:10px; width:40px; height:40px;
                          background:tomato; border-radius:50%;"></div>
  </div>

  <script>
    var x = 0;
    var ball = document.getElementById("ball");
    var timer = setInterval(function () {
      x += 10;
      ball.style.left = x + "px";          // change the position again and again
      if (x >= 250) clearInterval(timer);  // stop at the right end
    }, 20);
  </script>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "JSSS — JavaScript-assisted Style Sheets — was a style sheet language proposed by Netscape in 1996 as a rival to CSS. Styles were written as JavaScript statements using the objects tags, classes and ids. It was supported only by Netscape Navigator 4 and was never accepted as a standard; CSS won. It is now obsolete and is studied for its historical importance.",
          },
          {
            kind: "code",
            language: "html",
            title: "JSSS (obsolete — Netscape 4 only)",
            code: String.raw`<style type="text/javascript">
  tags.H1.color = "blue";               // all <h1> elements
  tags.P.fontSize = "14pt";             // all <p> elements
  classes.warning.all.color = "red";    // class="warning"
  ids.intro.color = "green";            // id="intro"
</style>`,
          },
          {
            kind: "paragraph",
            text: "Layers of Netscape: Netscape Navigator 4 introduced the <layer> and <ilayer> tags. A layer is a container which can be positioned anywhere on the page, made visible or hidden, and stacked over other layers (top, left, z-index, visibility) — like transparent sheets placed one over another. Internet Explorer never supported them, and they were dropped after Netscape 4. The same effect is now achieved with the <div> tag and CSS positioning (position, z-index, visibility).",
          },
          {
            kind: "table",
            headers: ["Netscape <layer>", "Modern replacement"],
            rows: [
              [
                "<layer left=50 top=80 z-index=2> ... </layer>",
                "<div style='position:absolute; left:50px; top:80px; z-index:2'> ... </div>",
              ],
              ["visibility='hide' / 'show'", "visibility: hidden / visible  (or display: none)"],
              ["Supported only by Netscape 4", "Supported by all browsers and standardised by W3C"],
            ],
          },
        ],
      },
      {
        id: "id-attribute",
        title: "4. The ID Attribute",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "The id attribute gives an element a unique identifier. The value must be unique in the whole page, must not contain spaces and should begin with a letter. Once an element has an id, it can be (1) styled with the CSS selector #id, (2) found by JavaScript with document.getElementById('id'), and (3) used as the target of a link (href='#id') to jump to that part of the page.",
          },
          {
            kind: "table",
            headers: ["id", "class"],
            rows: [
              [
                "Unique — only one element per page may have a given id",
                "Can be used by many elements, and an element can have several classes",
              ],
              ["CSS selector: #menu", "CSS selector: .menu"],
              ["JavaScript: getElementById('menu')", "JavaScript: getElementsByClassName('menu')"],
              ["Can be a link target: <a href='#menu'>", "Cannot be a link target"],
              ["Higher priority (specificity) in CSS", "Lower priority than id"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "One id used by CSS, JavaScript and a link",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    #notice { color: white; background: green; padding: 6px; }   /* CSS uses #id */
  </style>
</head>
<body>
  <a href="#notice">Jump to the notice</a>
  <p id="notice">Exams start on Monday.</p>
  <script>
    document.getElementById("notice").innerHTML += " Best of luck!";   // JS uses the id
  </script>
</body>
</html>`,
          },
        ],
      },
      {
        id: "dhtml-events",
        title: "5. DHTML Events",
        icon: "MonitorPlay",
        blocks: [
          {
            kind: "paragraph",
            text: "An event is an action or occurrence that the browser can detect — a click, a key press, the page finishing loading, the mouse moving over an element. DHTML pages respond to events by running a piece of script called an event handler. Events make web pages interactive.",
          },
          {
            kind: "table",
            headers: ["Event", "Occurs when", "Category"],
            rows: [
              ["onclick / ondblclick", "The user clicks / double-clicks an element", "Mouse"],
              ["onmouseover / onmouseout", "The pointer moves onto / leaves an element", "Mouse"],
              [
                "onmousedown / onmouseup / onmousemove",
                "A mouse button is pressed / released / the mouse moves",
                "Mouse",
              ],
              ["onkeydown / onkeyup", "A key is pressed / released", "Keyboard"],
              ["onload / onunload", "The page (or image) has finished loading / is being closed", "Document"],
              ["onfocus / onblur", "An element gets / loses the focus", "Form"],
              ["onchange", "The value of an input, select or textarea has been changed", "Form"],
              ["onsubmit / onreset", "A form is submitted / reset", "Form"],
              ["onresize / onscroll", "The window is resized / scrolled", "Window"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Three ways to attach an event handler: (1) As an HTML attribute: <button onclick='hello()'>; (2) As a DOM property: element.onclick = function() {...}; (3) With addEventListener('click', function, false) — the modern way, which allows several handlers on one event.",
              "Event object: the browser passes an event object (e) to the handler which gives details such as e.type, e.target, e.key (which key), e.clientX/e.clientY (mouse position).",
              "Event bubbling: after an event is handled on an element it 'bubbles up' to its parents (child → parent → document). Capturing is the opposite order. e.stopPropagation() stops the bubbling.",
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Mouse events: rollover colour change and click counter",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <div id="box"
       style="width:140px; height:60px; background:lightblue; text-align:center; line-height:60px;"
       onmouseover="this.style.background='orange'"
       onmouseout="this.style.background='lightblue'"
       onclick="count++; this.innerHTML = 'Clicks: ' + count">
    Hover or click me
  </div>
  <script> var count = 0; </script>
</body>
</html>`,
          },
          {
            kind: "code",
            language: "html",
            title: "Keyboard event with addEventListener and the event object",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <input id="t" type="text" placeholder="type here">
  <p id="out"></p>
  <script>
    var t = document.getElementById("t");
    t.addEventListener("keyup", function (e) {
      document.getElementById("out").innerHTML =
        "Key: " + e.key + ", length = " + this.value.length;
    });
  </script>
</body>
</html>`,
          },
          {
            kind: "code",
            language: "html",
            title: "Show / hide content (dynamic style)",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <button id="b" onclick="toggle()">Show / Hide</button>
  <p id="secret">This text can be hidden.</p>
  <script>
    function toggle() {
      var p = document.getElementById("secret");
      p.style.display = (p.style.display === "none") ? "block" : "none";
    }
  </script>
</body>
</html>`,
          },
          {
            kind: "code",
            language: "html",
            title: "Form validation using the onsubmit event",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <form onsubmit="return check()">
    Age: <input id="age" type="text">
    <input id="go" type="submit" value="Send">
  </form>
  <p id="msg"></p>
  <script>
    function check() {
      var a = document.getElementById("age").value;
      if (a === "" || isNaN(a)) {
        document.getElementById("msg").innerHTML = "Please enter a number";
        return false;            // stop the form from being submitted
      }
      return true;
    }
  </script>
</body>
</html>`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "DHTML", definition: "A combination of HTML, CSS, scripting and DOM that makes a page change dynamically on the client." },
      { term: "DOM", definition: "Document Object Model — the tree representation of a document that scripts can read and change." },
      { term: "CSSP", definition: "CSS Positioning — placing and stacking elements at exact positions using position, top, left and z-index." },
      { term: "JSSS", definition: "JavaScript-assisted Style Sheets — Netscape's obsolete style sheet language written as JavaScript." },
      { term: "Layer", definition: "A Netscape 4 container (<layer>) that could be positioned, hidden and stacked; replaced by <div> with CSS." },
      { term: "id attribute", definition: "A unique identifier for one element in a page." },
      { term: "Event", definition: "An action detected by the browser (click, key press, load) that can trigger a script." },
      { term: "Event handler", definition: "The script that runs when an event occurs." },
    ],
    examQuestions: [
      "What is DHTML? Explain its features and components. (Long)",
      "Differentiate between static HTML and DHTML. (Medium)",
      "What is the DOM? Explain the DOM tree and important methods with an example. (Long)",
      "Explain CSSP and the values of the position property. (Medium)",
      "Write short notes on JSSS and the layers of Netscape. (Medium)",
      "What is the id attribute? Differentiate between id and class. (Medium)",
      "What are DHTML events? Explain any eight events with examples. (Long)",
      "Write a program using events to change the colour of a box on mouse over. (Medium)",
      "Write a JavaScript function to validate a form using the onsubmit event. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Introduction to HTML",
    hours: 12,
    headings: [
      {
        id: "html-intro",
        title: "1. Introduction to HTML: Editors, Basics and Document Structure",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It is not a programming language: it describes the STRUCTURE and meaning of content (headings, paragraphs, links, images, tables, forms) using tags, and the browser decides how to display it. HTML documents are plain text files saved with the extension .html or .htm. It was created by Tim Berners-Lee (1991) and is maintained by the W3C and WHATWG.",
          },
          {
            kind: "table",
            headers: ["Version", "Year", "Remark"],
            rows: [
              ["HTML 2.0", "1995", "First standard version (RFC 1866)."],
              ["HTML 3.2", "1997", "Tables, applets, text flow around images."],
              ["HTML 4.01", "1999", "Style sheets, frames, scripting support, better forms."],
              ["XHTML 1.0", "2000", "HTML rewritten in the stricter XML syntax."],
              [
                "HTML5",
                "2014 (W3C recommendation)",
                "Semantic tags (header, nav, section...), audio, video, canvas, better forms, local storage; simple <!DOCTYPE html>.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Editor", "Type", "Remark"],
            rows: [
              ["Notepad, gedit", "Plain text editor", "Comes with the OS; best for learning."],
              [
                "Notepad++, Sublime Text, VS Code, Atom, Brackets",
                "Code editors",
                "Colour the code (syntax highlighting), auto-complete, live preview.",
              ],
              [
                "Adobe Dreamweaver, Microsoft FrontPage (old)",
                "WYSIWYG editors",
                "Design the page visually; the editor writes the HTML.",
              ],
            ],
          },
          {
            kind: "bullets",
            items: [
              "To create a web page: (1) open an editor; (2) type the HTML code; (3) save the file with the .html extension (e.g., index.html), choosing 'All files' and UTF-8 encoding; (4) double-click the file or open it in a browser to view it. After every change, save and refresh the browser (F5).",
            ],
          },
          { kind: "diagram", diagramId: "html-structure", caption: "Fig 3.1 — Basic structure of an HTML document" },
          {
            kind: "code",
            language: "html",
            title: "The skeleton of every HTML page",
            code: String.raw`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
          },
          {
            kind: "table",
            headers: ["Part", "Purpose"],
            rows: [
              ["<!DOCTYPE html>", "Tells the browser that the document is HTML5. It is not a tag."],
              ["<html>", "Root element; contains the whole page. lang='en' gives the language."],
              [
                "<head>",
                "Information ABOUT the page (not displayed): title, character set, styles, scripts, meta tags.",
              ],
              ["<title>", "Title shown on the browser tab and used by search engines."],
              ["<meta charset='UTF-8'>", "Sets the character encoding."],
              ["<body>", "Everything that is visible on the page."],
            ],
          },
        ],
      },
      {
        id: "elements-attributes",
        title: "2. Element, Tag, Attribute and Comments",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "An HTML ELEMENT is made of a start tag, the content and an end tag: <p>Hello</p>. Tags are written in angle brackets, and the end tag has a forward slash. Some elements are EMPTY (void) — they have no content and no end tag: <br>, <hr>, <img>, <input>, <meta>, <link>. Elements can be nested inside each other but must be closed in the reverse order (properly nested).",
          },
          {
            kind: "paragraph",
            text: "An ATTRIBUTE gives extra information about an element. It is written inside the start tag as name='value' — e.g., <a href='page.html' target='_blank'>. Attribute values should always be in quotes; names are written in lower case. Common global attributes: id, class, style, title, lang, hidden.",
          },
          {
            kind: "table",
            headers: ["Block-level elements", "Inline elements"],
            rows: [
              [
                "Start on a new line and take the full available width",
                "Stay in the line; take only as much width as needed",
              ],
              ["Can contain block and inline elements", "Should contain only text and other inline elements"],
              [
                "<h1>–<h6>, <p>, <div>, <ul>, <ol>, <li>, <table>, <form>, <header>, <footer>, <section>",
                "<span>, <a>, <b>, <i>, <strong>, <em>, <img>, <input>, <code>",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Comments are notes for the programmer which the browser does not display: <!-- this is a comment -->. They are used to explain code or to temporarily hide some lines.",
          },
        ],
      },
      {
        id: "text-formatting",
        title: "3. Headings, Paragraphs, Formatting, Quotations and Computer Code",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "table",
            headers: ["Tag", "Use"],
            rows: [
              ["<h1> … <h6>", "Headings: h1 is the most important and largest; h6 the least important."],
              [
                "<p>",
                "Paragraph — a block of text with space before and after. Extra spaces and line breaks in the source are ignored by the browser.",
              ],
              ["<br>", "Line break (empty tag)."],
              ["<hr>", "Horizontal rule — a line that separates content."],
              ["<pre>", "Preformatted text: spaces and line breaks are kept, shown in a fixed-width font."],
              ["<b> / <strong>", "Bold text / strong importance (also bold)."],
              ["<i> / <em>", "Italic text / emphasised text (also italic)."],
              ["<u>, <mark>, <small>", "Underlined, highlighted, smaller text."],
              ["<del> / <ins>", "Deleted (struck through) / inserted (underlined) text."],
              ["<sub> / <sup>", "Subscript (H₂O) / superscript (x²)."],
              ["<q>", "Short inline quotation; the browser adds quotation marks."],
              [
                "<blockquote>",
                "Long quotation; shown as an indented block. The cite attribute gives the source.",
              ],
              [
                "<cite>, <abbr>, <address>",
                "Title of a work; abbreviation (title shows the full form); contact information.",
              ],
              [
                "<code>, <kbd>, <samp>, <var>",
                "Computer code elements: program code, keyboard input, sample output, variable.",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Headings, paragraphs, text formatting, quotations and computer code",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <h1>Heading 1</h1>  <h2>Heading 2</h2>  <h3>Heading 3</h3>
  <h4>Heading 4</h4>  <h5>Heading 5</h5>  <h6>Heading 6</h6>

  <p>First paragraph.<br>This line starts after a line break.</p>
  <hr>
  <p><b>Bold</b>, <strong>strong</strong>, <i>italic</i>, <em>emphasised</em>,
     <u>underlined</u>, <mark>marked</mark>, <small>small</small>,
     <del>deleted</del>, <ins>inserted</ins>, H<sub>2</sub>O, x<sup>2</sup></p>

  <p>He said, <q>Practice makes perfect.</q></p>
  <blockquote cite="https://www.example.com">
    A longer quotation is displayed as a separate, indented block.
  </blockquote>
  <address>Department of Computer Science<br>DBRAU, Agra</address>
  <p><abbr title="HyperText Markup Language">HTML</abbr> is described in the book <cite>Web Design</cite>.</p>

  <pre>
  Spaces      and
       line breaks are preserved here.
  </pre>
  <p>Use <code>printf()</code>. Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.
     Output: <samp>Hello</samp>. The variable is <var>x</var>.</p>
</body>
</html>`,
          },
        ],
      },
      {
        id: "entities-charset",
        title: "4. Entities, Symbols and Character Sets",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "Some characters have a special meaning in HTML (< and > begin and end tags) and some are not on the keyboard (©, ₹). They are written with character ENTITIES: &name; or &#number;. Entities are also used to show reserved characters and extra spaces (&nbsp; is a non-breaking space).",
          },
          {
            kind: "table",
            headers: ["Symbol", "Entity name", "Entity number", "Symbol", "Entity name", "Entity number"],
            rows: [
              ["<", "&lt;", "&#60;", "©", "&copy;", "&#169;"],
              [">", "&gt;", "&#62;", "®", "&reg;", "&#174;"],
              ["&", "&amp;", "&#38;", "™", "&trade;", "&#8482;"],
              ["\"", "&quot;", "&#34;", "€", "&euro;", "&#8364;"],
              ["(space)", "&nbsp;", "&#160;", "₹", "—", "&#8377;"],
              ["♥", "&hearts;", "&#9829;", "°", "&deg;", "&#176;"],
            ],
          },
          {
            kind: "paragraph",
            text: "Charset: a character set is the table that maps characters to numbers. ASCII has 128 characters (English only); ISO-8859-1 (Latin-1) has 256 characters (Western European); UTF-8 is the universal encoding that can represent all the characters of all languages, including Hindi (देवनागरी), symbols and emoji. It is declared in the head as <meta charset='UTF-8'> and is the standard for HTML5.",
          },
          {
            kind: "code",
            language: "html",
            title: "Entities and symbols",
            code: String.raw`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
  <p id="e">&lt;p&gt; is the paragraph tag &amp; &copy; 2026 DBRAU &nbsp;&nbsp; Price: &#8377;500, &euro;10 &hearts;</p>
  <p id="h">हिन्दी text also works with UTF-8</p>
</body>
</html>`,
          },
        ],
      },
      {
        id: "styles-colors",
        title: "5. Styles, Colours and Backgrounds of Web Pages",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "CSS (Cascading Style Sheets) controls the look of a page. There are three ways of adding styles to HTML: (1) INLINE — the style attribute on one element; (2) INTERNAL — a <style> element in the <head>; (3) EXTERNAL — a separate .css file linked with <link rel='stylesheet' href='style.css'>. The more specific/nearer style wins (inline > internal > external, if the selectors have the same weight).",
          },
          {
            kind: "table",
            headers: ["Method", "Where written", "Best used for"],
            rows: [
              ["Inline", "style='...' attribute of one tag", "A quick change to one element"],
              ["Internal", "<style> ... </style> in <head>", "One single page with its own styles"],
              [
                "External",
                "Separate .css file linked from every page",
                "Whole web site — change once, applies everywhere (best practice)",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Inline, internal and external styles together",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">      <!-- external: h1 { color: blue; } -->
  <style>                                        /* internal */
    h2 { color: green; }
  </style>
</head>
<body>
  <h1>External style (blue)</h1>
  <h2>Internal style (green)</h2>
  <p style="color: red;">Inline style (red)</p>
</body>
</html>`,
          },
          {
            kind: "table",
            headers: ["Colour format", "Example", "Note"],
            rows: [
              ["Colour name", "red, green, navy, orange", "140 standard names"],
              [
                "Hexadecimal (#RRGGBB)",
                "#FF0000 (red), #00FF00 (green), #0000FF (blue), #FFFFFF (white), #000000 (black)",
                "Two hex digits for each of Red, Green, Blue (00–FF)",
              ],
              ["RGB", "rgb(255, 165, 0) — orange", "Each value 0–255; rgba() adds transparency 0–1"],
              ["HSL", "hsl(120, 100%, 25%) — dark green", "Hue (0–360°), Saturation, Lightness"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Colour and background of a page",
            code: String.raw`<!DOCTYPE html>
<html>
<body style="background-color: #f0f8ff; color: #222;">
  <p id="a" style="color: red;">Colour by name</p>
  <p id="b" style="color: #0000ff;">Colour by hex code</p>
  <p id="c" style="color: rgb(0, 128, 0);">Colour by RGB</p>
  <p id="d" style="background-color: yellow;">Background colour of a paragraph</p>
  <div id="e" style="height: 60px; background-image: url('pattern.png'); background-repeat: repeat-x;">
    Background image
  </div>
</body>
</html>`,
          },
          {
            kind: "callout",
            tone: "info",
            title: "Old attributes (HTML 4)",
            text: "In old HTML the page colours were set with the attributes bgcolor, text, link, vlink and alink of the <body> tag and background='image.jpg'. These attributes are deprecated (not recommended) — use CSS instead. Exam answers may still mention them.",
          },
        ],
      },
      {
        id: "links",
        title: "6. Hypertext, Hyperlinks, Hypermedia, Links, Anchors and URLs",
        icon: "Network",
        blocks: [
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              [
                "Hypertext",
                "Text that contains links to other text; the reader can jump from one document to another instead of reading linearly.",
              ],
              [
                "Hyperlink (link)",
                "A clickable element (text or image) that takes the user to another resource or to another place on the same page.",
              ],
              [
                "Hypermedia",
                "Extension of hypertext to all media — links between text, images, audio, video and animation.",
              ],
              [
                "Anchor",
                "The <a> element: the source of a link (href) or the destination inside a page (id).",
              ],
              ["URL", "The address of the resource: protocol://host/path (see Unit I)."],
            ],
          },
          {
            kind: "paragraph",
            text: "Links are created with the anchor tag: <a href='url'>link text</a>. The href attribute gives the destination; the text between the tags is what the user clicks. By default an unvisited link is blue and underlined, a visited link is purple, and an active link is red.",
          },
          {
            kind: "table",
            headers: ["Kind of path", "Example", "Meaning"],
            rows: [
              [
                "Absolute URL",
                "https://www.example.com/pages/about.html",
                "Full address, including protocol and domain — for other web sites.",
              ],
              ["Relative — same folder", "about.html", "File in the same folder as the current page."],
              ["Relative — sub-folder", "pages/about.html", "File inside the folder 'pages'."],
              ["Relative — parent folder", "../index.html", "'../' moves one folder up."],
              ["Root-relative", "/images/logo.png", "Starts from the root of the web site."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Different kinds of links: external, sections, e-mail and footnote",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <h2 id="top">Links demo</h2>
  <p><a href="https://www.example.com">Absolute URL (another web site)</a></p>
  <p><a href="pages/about.html">Relative: file in a sub-folder</a></p>
  <p><a href="notes.pdf" target="_blank" rel="noopener">Link to an external document (PDF) in a new tab</a></p>
  <p><a href="#sec2">Jump to Section 2 on this page</a></p>
  <p><a href="contact.html#map">Jump to a section of another page</a></p>
  <p><a href="mailto:info@example.com?subject=Enquiry">E-mail us</a></p>

  <div style="height: 900px;">(a long page)</div>

  <h3 id="sec2">Section 2</h3>
  <p>This sentence has a footnote<sup><a href="#fn1" id="ref1">[1]</a></sup>.</p>
  <p><a href="#top">Back to top</a></p>
  <hr>
  <p id="fn1">[1] Footnote text. <a href="#ref1">Return to the sentence</a></p>
</body>
</html>`,
          },
          {
            kind: "bullets",
            items: [
              "Anchor to a section of the same page: give the target an id (<h3 id='sec2'>) and link to it with href='#sec2'. To link to a section of another page: href='contact.html#map'.",
              "target attribute: _self (same window, default), _blank (new tab), _parent, _top or a frame name.",
              "Link to e-mail: href='mailto:name@domain.com' opens the mail program; ?subject=... pre-fills the subject.",
              "An image can also be a link: put the <img> tag between <a> and </a>.",
              "Footnote: a superscript number links to a note at the end of the page and the note links back.",
            ],
          },
        ],
      },
      {
        id: "images",
        title: "7. Images and Graphics",
        icon: "Presentation",
        blocks: [
          {
            kind: "paragraph",
            text: "Images are inserted with the empty tag <img>. Its important attributes are src (the file path), alt (alternate text shown if the image cannot load and read by screen readers — always give it), width and height (in pixels), and title (tooltip). Image maps (clickable regions) were shown in Unit I.",
          },
          {
            kind: "table",
            headers: ["Format", "Best for", "Features"],
            rows: [
              [
                "JPEG (.jpg)",
                "Photographs",
                "Millions of colours, small size (lossy compression), no transparency",
              ],
              ["PNG (.png)", "Logos, screenshots", "Lossless, supports transparency"],
              [
                "GIF (.gif)",
                "Simple graphics, animation",
                "Only 256 colours, supports simple animation and transparency",
              ],
              ["SVG (.svg)", "Icons, diagrams", "Vector — never gets blurred when enlarged; small size"],
              ["WebP", "Web images", "Modern format with smaller size than JPEG/PNG"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Images: size, image as a link and a captioned figure",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <img src="logo.png" alt="College logo" width="120" height="80" title="DBRAU">

  <a href="https://www.example.com"><img src="button.png" alt="Visit our site"></a>

  <figure>
    <img src="campus.jpg" alt="The campus" width="200">
    <figcaption>Fig 1: The university campus</figcaption>
  </figure>
</body>
</html>`,
          },
        ],
      },
      {
        id: "lists",
        title: "8. Lists",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "table",
            headers: ["List", "Tags", "Notes"],
            rows: [
              [
                "Unordered list",
                "<ul> with <li> items",
                "Bullets. type: disc (default), circle, square (or CSS list-style-type).",
              ],
              [
                "Ordered list",
                "<ol> with <li> items",
                "Numbers. type: 1, A, a, I, i; start='5' begins from 5; reversed counts down.",
              ],
              [
                "Description (definition) list",
                "<dl>, <dt> (term), <dd> (description)",
                "Term–description pairs, like a glossary.",
              ],
              ["Nested list", "A <ul>/<ol> placed inside an <li>", "Gives sub-points."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Unordered, ordered, description and nested lists",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <h3>Subjects</h3>
  <ul>
    <li>C Programming</li>
    <li>HTML and CSS
      <ol type="a">                     <!-- nested ordered list -->
        <li>Basics</li>
        <li>Forms</li>
      </ol>
    </li>
  </ul>

  <h3>Steps</h3>
  <ol start="3">
    <li>Write the code</li>
    <li>Save the file</li>
  </ol>

  <dl>
    <dt>HTML</dt><dd>Language for the structure of web pages</dd>
    <dt>CSS</dt><dd>Language for the style of web pages</dd>
  </dl>
</body>
</html>`,
          },
        ],
      },
      {
        id: "tables",
        title: "9. Tables",
        icon: "Table",
        blocks: [
          {
            kind: "table",
            headers: ["Tag / attribute", "Meaning"],
            rows: [
              ["<table>", "Defines the table."],
              ["<tr>", "Table row."],
              ["<th>", "Table header cell — bold and centred by default."],
              ["<td>", "Table data cell."],
              ["<caption>", "Title of the table."],
              ["<thead>, <tbody>, <tfoot>", "Group the header, body and footer rows."],
              ["colspan='n'", "A cell stretches across n columns."],
              ["rowspan='n'", "A cell stretches across n rows."],
              [
                "border, cellpadding, cellspacing, width, align, bgcolor",
                "Old HTML attributes; use CSS (border, padding, border-collapse, width) instead.",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Creating a table with colspan and rowspan",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <table border="1" cellpadding="6">
    <caption>Class Timetable</caption>
    <thead>
      <tr><th>Day</th><th colspan="2">Lectures</th></tr>
    </thead>
    <tbody>
      <tr><td>Monday</td>   <td>C</td>              <td>HTML</td></tr>
      <tr><td>Tuesday</td>  <td rowspan="2">Lab</td><td>Maths</td></tr>
      <tr><td>Wednesday</td>                        <td>English</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="3">End of timetable</td></tr>
    </tfoot>
  </table>
</body>
</html>`,
          },
        ],
      },
      {
        id: "blocks-layout",
        title: "10. Blocks, Classes, ID and Page Layout",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "paragraph",
            text: "The <div> element is a generic BLOCK container used to group other elements so they can be styled or positioned together; <span> is its INLINE counterpart used to style a part of a line of text. Both are given a class (for a group of elements) or an id (for one unique element) to attach CSS or JavaScript. HTML5 also has SEMANTIC elements that describe the role of each block of the page.",
          },
          { kind: "diagram", diagramId: "page-layout", caption: "Fig 3.2 — Typical layout of a web page using semantic elements" },
          {
            kind: "table",
            headers: ["Semantic element", "Purpose"],
            rows: [
              ["<header>", "Introductory content: logo, site title, main heading."],
              ["<nav>", "Block of navigation links."],
              ["<main>", "The main, unique content of the page."],
              ["<section>", "A thematic group of content, usually with a heading."],
              ["<article>", "Independent, self-contained content such as a news item or blog post."],
              ["<aside>", "Side content: related links, advertisements, a sidebar."],
              ["<footer>", "Footer: copyright, contact, links."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Page layout with semantic blocks, class and id",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    .box   { border: 1px solid #999; padding: 8px; margin: 6px 0; }
    #notice { background: yellow; }
    .imp   { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <header class="box"><h1>My College</h1></header>
  <nav class="box"><a href="#">Home</a> | <a href="#">Courses</a> | <a href="#">Contact</a></nav>
  <main>
    <section class="box"><h2>Courses</h2><p>BCA, BBA, BCom</p></section>
    <article class="box"><h2>News</h2><p>Admissions open. <span class="imp">Last date: 30 June.</span></p></article>
    <aside id="notice" class="box">Notice: Exams from Monday.</aside>
  </main>
  <footer class="box">&copy; 2026 My College</footer>
</body>
</html>`,
          },
        ],
      },
      {
        id: "frames",
        title: "11. Frames",
        icon: "AppWindow",
        blocks: [
          {
            kind: "paragraph",
            text: "Frames divide the browser window into several independent parts, each showing a different HTML document. In HTML 4, this was done with <frameset> (which replaces the <body>), <frame> and <noframes>. <frameset> and <frame> are OBSOLETE in HTML5 because they harm usability, printing, bookmarking and search engines. The modern way of placing one page inside another is the <iframe> (inline frame), used for maps, videos and advertisements.",
          },
          {
            kind: "table",
            headers: ["Tag / attribute", "Meaning"],
            rows: [
              [
                "<frameset cols='25%,75%'>",
                "Divides the window into vertical columns (rows='..' makes horizontal rows). Sizes in % or pixels; * takes the remaining space.",
              ],
              ["<frame src='page.html' name='main'>", "One frame: the document to show and its name."],
              ["<a href='a.html' target='main'>", "A link that opens its page in the frame named 'main'."],
              ["<iframe src='page.html' width height>", "A frame inside a normal page (HTML5)."],
              ["<noframes>", "Content for browsers that do not support frames."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Frames in HTML 4 (obsolete): a menu on the left and content on the right",
            code: String.raw`<html>
<frameset cols="25%,75%">
  <frame src="menu.html"    name="menu">
  <frame src="content.html" name="content">
  <noframes><body>Your browser does not support frames.</body></noframes>
</frameset>
</html>

<!-- inside menu.html a link opens its page in the right-hand frame: -->
<a href="notes.html" target="content">Notes</a>`,
          },
          {
            kind: "code",
            language: "html",
            title: "The HTML5 way: an inline frame (iframe)",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <h3>A page inside a page</h3>
  <iframe src="inner.html" width="300" height="80" title="Embedded page"></iframe>
</body>
</html>`,
          },
        ],
      },
      {
        id: "forms",
        title: "12. Forms",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "An HTML form collects input from the user (registration, login, feedback, search) and sends it to a server. The <form> element has two main attributes: action (the URL of the server program that processes the data) and method (GET — data added to the URL, visible and limited in size, suitable for searching; POST — data sent inside the request body, invisible, suitable for passwords and large data).",
          },
          {
            kind: "table",
            headers: ["Form element", "Description"],
            rows: [
              ["<input type='text'>", "Single-line text box."],
              ["<input type='password'>", "Text box that hides the characters."],
              ["<input type='radio'>", "Choose only one option of a group (same name attribute)."],
              ["<input type='checkbox'>", "Choose zero or more options."],
              [
                "<input type='submit'> / 'reset' / 'button'",
                "Send the form / clear all fields / a general button.",
              ],
              [
                "<input type='email' | 'number' | 'date' | 'file' | 'color' | 'range' | 'hidden'>",
                "HTML5 and special inputs with built-in validation or pickers.",
              ],
              ["<select> with <option>", "Drop-down list."],
              ["<textarea rows cols>", "Multi-line text box."],
              ["<label for='id'>", "Caption connected to a control; clicking it selects the control."],
              ["<fieldset> and <legend>", "Group related controls in a box with a title."],
              ["<button>", "Clickable button that can contain text or images."],
            ],
          },
          {
            kind: "table",
            headers: ["Attribute", "Purpose"],
            rows: [
              ["name", "Name under which the value is sent to the server (compulsory to be sent)."],
              ["value", "Initial value / value sent when chosen."],
              ["placeholder", "Hint text shown in an empty field."],
              ["required", "Field must be filled before submission."],
              ["maxlength / minlength", "Maximum / minimum number of characters."],
              ["checked / selected / disabled / readonly", "Pre-select an option / disable or lock a field."],
              ["pattern", "Regular expression that the value must match."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "A student registration form",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
  <form action="/register" method="post">
    <fieldset>
      <legend>Student Registration</legend>

      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Full name" required maxlength="40"><br><br>

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required><br><br>

      <label for="pw">Password:</label>
      <input type="password" id="pw" name="pw" minlength="6"><br><br>

      Gender:
      <input type="radio" id="m" name="gender" value="male"><label for="m">Male</label>
      <input type="radio" id="f" name="gender" value="female"><label for="f">Female</label><br><br>

      Interests:
      <input type="checkbox" name="interest" value="web"> Web design
      <input type="checkbox" name="interest" value="c"> C language<br><br>

      <label for="course">Course:</label>
      <select id="course" name="course">
        <option value="bca">BCA</option>
        <option value="bba">BBA</option>
      </select><br><br>

      <label for="dob">Date of birth:</label>
      <input type="date" id="dob" name="dob"><br><br>

      <label for="addr">Address:</label><br>
      <textarea id="addr" name="address" rows="3" cols="30"></textarea><br><br>

      <input type="hidden" name="source" value="web">
      <input type="submit" value="Register">
      <input type="reset" value="Clear">
    </fieldset>
  </form>
</body>
</html>`,
          },
        ],
      },
      {
        id: "stylesheet-creation",
        title: "13. Creating a Style Sheet and a Complete Web Page",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "To create an external style sheet: (1) write the CSS rules in a plain text file and save it with the extension .css (for example style.css) — it must NOT contain any HTML tags; (2) link it from the <head> of every page with <link rel='stylesheet' href='style.css'>. All linked pages will follow the same design.",
          },
          {
            kind: "code",
            language: "css",
            title: "style.css — an external style sheet",
            code: String.raw`body  { font-family: Arial, sans-serif; background-color: #f5f5f5; }
h1    { color: #003366; text-align: center; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #999; padding: 6px; }
th    { background-color: #003366; color: white; }
.highlight { background-color: yellow; }`,
          },
          {
            kind: "code",
            language: "html",
            title: "A complete page combining links, table, list and form",
            code: String.raw`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BCA Department</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; }
    header { background: #003366; color: white; padding: 12px; text-align: center; }
    nav { background: #dde; padding: 8px; }
    main { padding: 12px; }
    table { border-collapse: collapse; }
    th, td { border: 1px solid #888; padding: 4px 8px; }
  </style>
</head>
<body>
  <header><h1>BCA Department</h1></header>
  <nav><a href="#courses">Courses</a> | <a href="#contact">Contact</a></nav>
  <main>
    <h2 id="courses">First Semester Papers</h2>
    <table>
      <tr><th>Paper code</th><th>Subject</th></tr>
      <tr><td>C-101</td><td>Computer Fundamentals and MS-Office</td></tr>
      <tr><td>C-102</td><td>Introduction to Programming using C</td></tr>
      <tr><td>C-104</td><td>Introduction to HTML, CSS-XML</td></tr>
    </table>
    <h2>Why join?</h2>
    <ul><li>Practical training</li><li>Placement support</li></ul>
    <h2 id="contact">Contact us</h2>
    <form action="/contact" method="post">
      <input type="text" name="name" placeholder="Your name" required>
      <input type="submit" value="Send">
    </form>
  </main>
</body>
</html>`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "HTML", definition: "HyperText Markup Language — the markup language used to structure web pages." },
      {
        term: "Tag / Element / Attribute",
        definition: "The markup command in < > / start tag + content + end tag / extra information inside the start tag.",
      },
      { term: "Entity", definition: "A code such as &lt; or &copy; used to display reserved or special characters." },
      { term: "Hyperlink", definition: "A clickable link to another resource or to another place in the same page." },
      { term: "Anchor (<a>)", definition: "The element used to create links and link targets." },
      { term: "Block vs inline element", definition: "Block elements start on a new line; inline elements stay within the line." },
      { term: "Frame / iframe", definition: "Part of the window showing a separate document; iframe embeds a page inside a page." },
      { term: "Form", definition: "A group of controls that collects user input and sends it to a server." },
      { term: "UTF-8", definition: "A universal character encoding that can represent the characters of all languages." },
    ],
    examQuestions: [
      "What is HTML? Explain the basic structure of an HTML document. (Long)",
      "What are elements and attributes? Differentiate between block and inline elements. (Medium)",
      "Explain heading, paragraph and text formatting tags with an example. (Long)",
      "What are entities? Write the entities for <, >, &, ©, space. What is a charset? (Medium)",
      "Explain the three ways of using CSS in HTML. (Medium)",
      "How are colours and background set in a web page? (Medium)",
      "What are hypertext, hyperlink and hypermedia? Explain the <a> tag with all kinds of links. (Long)",
      "How do you create a link to a section of a page, an e-mail address and an external document? (Medium)",
      "Explain the img tag and its attributes. (Short)",
      "Write HTML code to create ordered, unordered and nested lists. (Medium)",
      "Create a table using colspan and rowspan. (Long)",
      "What is a frame? Write the code to create frames. What is an iframe? (Medium)",
      "Create a student registration form using text box, radio button, checkbox, drop-down list and buttons. (Long)",
      "How do you create and link an external style sheet? (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "CSS: Cascading Style Sheets",
    hours: 12,
    headings: [
      {
        id: "css-intro",
        title: "1. Introduction, Syntax and Selectors",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "CSS (Cascading Style Sheets) is the language that describes the PRESENTATION of an HTML document — colours, fonts, spacing, layout — separating the content (HTML) from its design (CSS). One style sheet can control the look of a whole web site; changing one rule changes every page. 'Cascading' means that when several rules apply to one element, the browser decides which one wins by a fixed order of priority: browser default < external/internal style sheet < inline style, and, inside these, by specificity and by the order of writing (the later rule wins).",
          },
          { kind: "diagram", diagramId: "css-rule-anatomy", caption: "Fig 4.1 — Anatomy of a CSS rule" },
          {
            kind: "bullets",
            items: [
              "A CSS rule = selector + declaration block. The selector chooses the HTML element; the declaration block { } holds one or more declarations; each declaration is property: value; and ends with a semicolon.",
              "Comments are written as /* comment */. CSS is not case-sensitive for properties but class and id names in selectors are.",
              "Advantages of CSS: separation of content and design, consistent look, less code and faster pages (one cached file), easy maintenance, different styles for different devices (responsive design, printing).",
            ],
          },
          {
            kind: "table",
            headers: ["Selector", "Syntax", "Selects"],
            rows: [
              ["Element (type)", "p { ... }", "All <p> elements"],
              ["Class", ".note { ... }", "Elements with class='note' (many elements)"],
              ["ID", "#main { ... }", "The element with id='main' (only one)"],
              ["Universal", "* { ... }", "Every element"],
              ["Grouping", "h2, h3 { ... }", "Both h2 and h3 — the same style for several selectors"],
              ["Descendant", "div p { ... }", "Every <p> inside a <div> (at any depth)"],
              ["Element + class", "p.note { ... }", "<p> elements that have class='note'"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Selectors in action",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    h1        { color: navy; font-size: 28px; }         /* element selector    */
    .note     { background: #ffffcc; }                  /* class selector      */
    #main     { border: 1px solid black; }              /* id selector         */
    h2, h3    { color: green; }                         /* grouping            */
    div p     { margin: 0; }                            /* descendant selector */
  </style>
</head>
<body>
  <h1 id="t1">Heading</h1>
  <div id="main"><p class="note" id="p1">A note inside the div</p></div>
  <h2 id="t2">Second heading</h2>
</body>
</html>`,
          },
        ],
      },
      {
        id: "colors-backgrounds",
        title: "2. Colours and Backgrounds",
        icon: "Sparkles",
        blocks: [
          {
            kind: "table",
            headers: ["Background property", "Meaning", "Values / Example"],
            rows: [
              [
                "background-color",
                "Colour behind an element",
                "yellow, #3366cc, rgb(51,102,204), rgba(0,0,0,0.5)",
              ],
              [
                "background-image",
                "Image or gradient behind an element",
                "url('bg.png'), linear-gradient(to right, red, yellow)",
              ],
              [
                "background-repeat",
                "Whether the image repeats",
                "repeat (default), repeat-x, repeat-y, no-repeat",
              ],
              ["background-position", "Where the image starts", "center, top right, 20px 10px"],
              ["background-size", "Size of the image", "auto, cover (fill), contain (fit), 100px 50px"],
              ["background-attachment", "Scrolls with the page or stays fixed", "scroll, fixed"],
              [
                "background (shorthand)",
                "All in one declaration",
                "background: #eee url('bg.png') no-repeat center / cover;",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Colour values can be names (red), hexadecimal (#ff0000 or the short form #f00), rgb(255,0,0), rgba(255,0,0,0.5) with an alpha (transparency) value from 0 to 1, or hsl(0,100%,50%). Text colour is set with the color property.",
          },
          {
            kind: "code",
            language: "html",
            title: "Colours, gradients, transparency and background images",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    .a { background-color: #3366cc; color: white; padding: 8px; }
    .b { background-image: linear-gradient(to right, red, yellow); padding: 8px; }
    .c { background-color: rgba(0, 0, 0, 0.5); color: white; padding: 8px; }
    .d { height: 60px; background: lightgray url('pattern.png') no-repeat center / cover; }
  </style>
</head>
<body>
  <div class="a" id="a">Solid colour</div>
  <div class="b" id="b">Gradient</div>
  <div class="c" id="c">Half-transparent black</div>
  <div class="d" id="d">Background image (shorthand)</div>
</body>
</html>`,
          },
        ],
      },
      {
        id: "box-model",
        title: "3. Borders, Margins, Padding, Height/Width, Box Model and Outline",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Every HTML element is treated by CSS as a rectangular BOX. The box has four layers, from the inside to the outside: CONTENT (text or image), PADDING (space between content and border, takes the element's background), BORDER (line around the padding) and MARGIN (transparent space outside the border that separates the element from its neighbours). This is the CSS box model.",
          },
          { kind: "diagram", diagramId: "css-box-model", caption: "Fig 4.2 — The CSS box model" },
          {
            kind: "table",
            headers: ["Property", "Details"],
            rows: [
              [
                "width, height",
                "Size of the CONTENT box (default box-sizing: content-box). min-width, max-width, min-height, max-height set limits.",
              ],
              [
                "padding",
                "Padding on all sides. padding: 10px (all); padding: 10px 20px (top-bottom, left-right); padding: 5px 10px 15px 20px (top, right, bottom, left — clockwise). Also padding-top/right/bottom/left.",
              ],
              [
                "border",
                "Shorthand for border-width, border-style and border-color: border: 2px solid red; Styles: solid, dashed, dotted, double, groove, none. border-radius rounds the corners.",
              ],
              [
                "margin",
                "Same shorthand rules as padding. margin: 0 auto; centres a block element with a fixed width horizontally. Negative values are allowed.",
              ],
              [
                "box-sizing",
                "content-box (default): width = content only; border-box: width includes padding and border — easier to calculate.",
              ],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Total space taken by a box (content-box)",
            text: "Total width = left margin + left border + left padding + content width + right padding + right border + right margin. For width: 200px; padding: 20px; border: 5px; margin: 10px → 10 + 5 + 20 + 200 + 20 + 5 + 10 = 270 px. The visible box (border edge to border edge) is 200 + 40 + 10 = 250 px. With box-sizing: border-box the same 200px width already includes padding and border, so the visible box is exactly 200 px.",
          },
          {
            kind: "code",
            language: "html",
            title: "The box model with content-box and border-box; outline",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    .box  { width: 200px; padding: 20px; border: 5px solid navy; margin: 10px; background: #eef; }
    .box2 { box-sizing: border-box; }               /* width now includes padding + border */
    .out  { outline: 3px dashed red; outline-offset: 4px; }
  </style>
</head>
<body>
  <div class="box" id="b1">content-box</div>
  <div class="box box2" id="b2">border-box</div>
  <p class="out" id="o">This paragraph has an outline, not a border.</p>
</body>
</html>`,
          },
          {
            kind: "table",
            headers: ["Border", "Outline"],
            rows: [
              [
                "Part of the box model — adds to the size of the element",
                "Drawn outside the border; takes no space and does not change the layout",
              ],
              ["Can be set separately on each side", "Same on all sides (cannot be set per side)"],
              [
                "Can have rounded corners (border-radius)",
                "Usually follows the shape; used for focus highlighting (:focus)",
              ],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Margin collapsing",
            text: "When the vertical margins of two adjacent block elements meet, they do not add up — the larger margin is used. If one paragraph has margin-bottom: 20px and the next has margin-top: 30px, the gap between them is 30px, not 50px. This happens only vertically, never horizontally.",
          },
        ],
      },
      {
        id: "text-fonts-icons",
        title: "4. Text, Fonts and Icons",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "table",
            headers: ["Text property", "Effect", "Example"],
            rows: [
              ["color", "Text colour", "color: #333;"],
              ["text-align", "Horizontal alignment", "left, right, center, justify"],
              [
                "text-decoration",
                "Underline, overline, line-through, none (removes link underline)",
                "text-decoration: none;",
              ],
              ["text-transform", "Case of letters", "uppercase, lowercase, capitalize"],
              ["text-indent", "Indent of the first line", "text-indent: 30px;"],
              ["letter-spacing / word-spacing", "Space between letters / words", "letter-spacing: 2px;"],
              ["line-height", "Height of a line (spacing between lines)", "line-height: 1.6;"],
              ["text-shadow", "Shadow behind the text", "text-shadow: 2px 2px 4px gray;"],
            ],
          },
          {
            kind: "table",
            headers: ["Font property", "Effect", "Example"],
            rows: [
              [
                "font-family",
                "Typeface — a list of fonts; the browser uses the first available. Always end with a generic family: serif, sans-serif, monospace, cursive, fantasy.",
                "font-family: 'Times New Roman', Georgia, serif;",
              ],
              ["font-size", "Size of the text (px, em, rem, %)", "font-size: 16px;"],
              ["font-weight", "Boldness", "normal, bold, 100–900"],
              ["font-style", "Italic or oblique", "font-style: italic;"],
              ["font-variant", "Small capitals", "font-variant: small-caps;"],
              [
                "font (shorthand)",
                "style, variant, weight, size/line-height, family",
                "font: italic bold 16px/1.5 Arial, sans-serif;",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Text and font properties",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { font-family: "Times New Roman", Georgia, serif; font-size: 2em;
         font-style: italic; font-variant: small-caps; text-shadow: 2px 2px 4px gray; }
    p  { color: #333; text-align: justify; text-indent: 30px; line-height: 1.6;
         letter-spacing: 1px; word-spacing: 4px; text-transform: uppercase; text-decoration: underline; }
    .short { font: italic bold 16px/1.5 Arial, sans-serif; }
  </style>
</head>
<body>
  <h1 id="h">Web Design</h1>
  <p id="p">CSS controls the appearance of text.</p>
  <p id="s" class="short">Shorthand font property</p>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "Icons: small pictures used on buttons and menus. They can be added as (1) icon fonts such as Font Awesome, Bootstrap Icons or Google Material Icons — the icon is a font character shown by a class name in an <i> or <span> tag and coloured/sized with normal CSS (color, font-size); (2) inline SVG images; or (3) Unicode symbols/emoji. Icon libraries are loaded with a <link> to their style sheet and therefore need an Internet connection or a local copy.",
          },
          {
            kind: "code",
            language: "html",
            title: "Using an icon library (Font Awesome) — needs the library file",
            code: String.raw`<head>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style> .fa { color: teal; font-size: 24px; } </style>
</head>
<body>
  <i class="fa fa-home"></i> Home
  <i class="fa fa-envelope"></i> Mail
</body>`,
          },
        ],
      },
      {
        id: "links-lists-tables",
        title: "5. Styling Links, Lists and Tables",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "Links have four states, styled with pseudo-classes: a:link (unvisited), a:visited, a:hover (mouse over) and a:active (being clicked). They must be written in this order (remember: LoVe HAte) or the later ones will override the earlier ones. Lists are controlled by list-style-type (disc, circle, square, decimal, lower-alpha, upper-roman, none), list-style-position (inside, outside) and list-style-image. Tables use border-collapse, border, padding, text-align, and pseudo-classes such as :nth-child() for striped rows.",
          },
          {
            kind: "code",
            language: "html",
            title: "Styled links, lists and a striped table with hover effect",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    a:link    { color: blue; }
    a:visited { color: purple; }
    a:hover   { color: red; text-decoration: none; }
    a:active  { color: orange; }

    ul.plain  { list-style-type: none; margin: 0; padding: 0; }
    ol.roman  { list-style-type: upper-roman; list-style-position: inside; }

    table     { border-collapse: collapse; width: 100%; }
    th, td    { border: 1px solid #999; padding: 8px; text-align: left; }
    th        { background: #04aa6d; color: white; }
    tr:nth-child(even) { background-color: #f2f2f2; }   /* striped rows */
    tr:hover           { background-color: #ddd; }      /* highlight on hover */
  </style>
</head>
<body>
  <a href="#">A link</a>
  <ul class="plain" id="u"><li>No bullets</li><li>Second item</li></ul>
  <ol class="roman" id="o"><li>Roman numerals</li><li>Second</li></ol>
  <table>
    <tr id="r1"><th>Name</th><th>Marks</th></tr>
    <tr id="r2"><td>Amit</td><td>80</td></tr>
    <tr id="r3"><td>Neha</td><td>72</td></tr>
    <tr id="r4"><td>Ravi</td><td>65</td></tr>
  </table>
</body>
</html>`,
          },
        ],
      },
      {
        id: "display-position",
        title: "6. Display, Max-Width, Position, Overflow, Float, Inline-Block and Align",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "table",
            headers: ["display value", "Effect"],
            rows: [
              ["block", "Starts on a new line and takes the whole width (div, p, h1)."],
              ["inline", "Stays in the line; width and height cannot be set (span, a)."],
              [
                "inline-block",
                "Stays in the line like inline, but width, height, margin and padding work like a block — used for horizontal menus.",
              ],
              [
                "none",
                "The element is removed completely (takes no space). visibility: hidden hides it but keeps its space.",
              ],
              [
                "flex / grid",
                "Modern layout systems for arranging items in rows/columns (see website layout).",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Property", "Details"],
            rows: [
              [
                "width / max-width",
                "width fixes the width; max-width sets an upper limit, so a box shrinks on small screens instead of overflowing. Use max-width with margin: 0 auto; to centre a block.",
              ],
              [
                "position",
                "static, relative, absolute, fixed, sticky (see Unit II); use top/right/bottom/left and z-index.",
              ],
              [
                "overflow",
                "What happens when content is bigger than its box: visible (default), hidden (cut off), scroll (always scroll bars), auto (scroll bars only if needed).",
              ],
              [
                "float",
                "Moves an element to the left or right so that text wraps around it (used for images and old-style layouts). clear: both stops the wrapping. A parent that contains only floated children collapses; the 'clearfix' trick fixes it.",
              ],
              [
                "text-align",
                "Aligns inline content (text, inline-block) inside a block: left, center, right, justify.",
              ],
              [
                "vertical-align",
                "Aligns inline/table-cell content vertically: top, middle, bottom, baseline.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["To centre...", "Method"],
            rows: [
              ["Text inside a block", "text-align: center;"],
              ["A block element horizontally", "width or max-width + margin: 0 auto;"],
              [
                "Something both horizontally and vertically",
                "display: flex; justify-content: center; align-items: center; on the parent",
              ],
              [
                "An absolutely positioned box",
                "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "display, max-width, position, overflow, float and clearfix",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    .center { width: 60%; max-width: 400px; margin: 0 auto; background: #eee; }
    .hide   { display: none; }
    .tabs li { display: inline-block; padding: 6px 12px; background: #ddd; }
    .parent { position: relative; height: 100px; background: #cde; }
    .abs    { position: absolute; right: 0; bottom: 0; width: 50px; height: 20px; background: tomato; }
    .scroll { width: 100px; height: 50px; overflow: auto; border: 1px solid #333; }
    .clearfix::after { content: ""; display: table; clear: both; }   /* clearfix */
    .left   { float: left; width: 100px; height: 40px; background: gold; }
  </style>
</head>
<body>
  <div class="center" id="c">Centred block with max-width</div>
  <p class="hide" id="hd">Hidden paragraph</p>
  <ul class="tabs"><li id="li1">Home</li><li>About</li></ul>
  <div class="parent" id="par"><div class="abs" id="ab">abs</div></div>
  <div class="scroll" id="sc"><p style="height:200px">Tall content</p></div>
  <div class="clearfix" id="cf"><div class="left" id="fl">float</div></div>
</body>
</html>`,
          },
        ],
      },
      {
        id: "selectors-advanced",
        title: "7. Combinators, Pseudo-classes, Pseudo-elements, Attribute Selectors and Opacity",
        icon: "Crosshair",
        blocks: [
          {
            kind: "table",
            headers: ["Combinator", "Syntax", "Selects"],
            rows: [
              ["Descendant", "div p", "All <p> anywhere inside a <div>"],
              ["Child", "div > p", "Only <p> that are direct children of the <div>"],
              ["Adjacent sibling", "h2 + p", "The <p> immediately after an <h2> (same parent)"],
              ["General sibling", "h2 ~ p", "All <p> that follow an <h2> (same parent)"],
            ],
          },
          {
            kind: "table",
            headers: ["Pseudo-class (:)", "Selects an element that is..."],
            rows: [
              [":hover / :active / :focus", "under the mouse / being clicked / has keyboard focus"],
              [":link / :visited", "an unvisited / visited link"],
              [
                ":first-child / :last-child / :nth-child(n)",
                "the first / last / n-th child of its parent (n can be even, odd, 2n+1)",
              ],
              [":not(selector)", "not matched by the selector"],
              [":checked / :disabled / :required", "a checked / disabled / required form control"],
            ],
          },
          {
            kind: "table",
            headers: ["Pseudo-element (::)", "Selects / creates"],
            rows: [
              ["::first-letter / ::first-line", "the first letter / first line of a block of text"],
              [
                "::before / ::after",
                "generated content inserted before / after an element's content, using the content property",
              ],
              ["::selection", "the part of text selected by the user"],
              ["::placeholder", "the placeholder text of an input"],
            ],
          },
          {
            kind: "table",
            headers: ["Attribute selector", "Selects"],
            rows: [
              ["[target]", "elements that have a target attribute"],
              ["[type='text']", "elements whose type is exactly 'text'"],
              ["[href^='https']", "href value BEGINS with https"],
              ["[href$='.pdf']", "href value ENDS with .pdf"],
              ["[href*='example']", "href value CONTAINS 'example'"],
              ["[class~='box']", "class list contains the word 'box'"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Combinators, pseudo-classes, pseudo-elements, attribute selectors and opacity",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    div p          { color: blue; }                 /* descendant */
    div > p        { font-weight: bold; }           /* child      */
    h2 + p         { color: green; }                /* adjacent sibling */
    h2 ~ p         { font-style: italic; }          /* general sibling  */
    li:first-child { color: red; }
    li:nth-child(2){ color: orange; }
    a[href^="https"] { color: green; }              /* attribute selectors */
    a[href$=".pdf"]  { color: red; }
    .q::before     { content: "\201C"; }            /* opening quote mark */
    .q::after      { content: "\201D"; }            /* closing quote mark */
    .faded         { opacity: 0.5; }
  </style>
</head>
<body>
  <div><p id="p1">Direct child</p><section><p id="p2">Nested</p></section></div>
  <h2>Heading</h2>
  <p id="p3">Right after h2</p>
  <p id="p4">Later sibling</p>
  <ul><li id="l1">One</li><li id="l2">Two</li><li>Three</li></ul>
  <a id="a1" href="https://example.com/a">secure link</a>
  <a id="a2" href="notes.pdf">pdf link</a>
  <span class="q" id="q">quoted</span>
  <div class="faded" id="f">faded</div>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "Opacity: the opacity property (0 = fully transparent, 1 = fully opaque) makes the WHOLE element, including its text and children, transparent. To make only the background transparent use rgba() in background-color.",
          },
        ],
      },
      {
        id: "css-components",
        title: "8. Navigation Bar, Dropdown, Image Gallery, Image Sprites and Forms",
        icon: "AppWindow",
        blocks: [
          {
            kind: "paragraph",
            text: "Navigation bar: a menu of links, built as an unordered list which is restyled — bullets removed, items laid out in a row (float, inline-block or flexbox), links turned into blocks with padding so that the whole button is clickable, and a :hover effect. A dropdown menu is a hidden box (display: none; position: absolute) inside a list item that becomes visible (display: block) when the parent is hovered.",
          },
          {
            kind: "code",
            language: "html",
            title: "Horizontal navigation bar with a dropdown menu",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    ul.nav { display: flex; list-style: none; margin: 0; padding: 0; background: #333; }
    ul.nav li { position: relative; }                 /* reference for the dropdown */
    ul.nav a  { display: block; color: white; padding: 14px 16px; text-decoration: none; }
    ul.nav a:hover { background: #111; }

    .dropdown-content { display: none; position: absolute; top: 100%; left: 0;
                        background: #f9f9f9; min-width: 140px; z-index: 1; }
    .dropdown-content a { color: black; }
    .dropdown:hover .dropdown-content { display: block; }   /* show on hover */
  </style>
</head>
<body>
  <ul class="nav">
    <li><a href="#">Home</a></li>
    <li class="dropdown" id="course"><a href="#">Courses</a>
      <div class="dropdown-content" id="dd">
        <a href="#">BCA</a>
        <a href="#">BBA</a>
      </div>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "Image gallery: a group of pictures (or thumbnails) arranged in a grid, usually with captions. It is built with a container using display: flex; flex-wrap: wrap; gap: ... (or CSS grid, or floated/inline-block items). Image sprite: a single image that contains many small images (icons); it reduces the number of server requests and makes pages load faster. Each icon is shown by giving an element the size of one icon and moving the big image with background-position (negative values).",
          },
          {
            kind: "code",
            language: "html",
            title: "Image gallery (flexbox) and image sprite (background-position)",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    .gallery { display: flex; flex-wrap: wrap; gap: 10px; }
    .item    { width: 120px; border: 1px solid #ccc; padding: 4px; text-align: center; }
    .item .photo { height: 80px; background: #9bc; }          /* stands for an <img> */

    .icon    { display: inline-block; width: 32px; height: 32px;
               background-image: url('sprite.png'); }          /* one big image */
    .home    { background-position: 0 0; }
    .mail    { background-position: -32px 0; }                 /* shift left by one icon */
    .user    { background-position: -64px 0; }
  </style>
</head>
<body>
  <div class="gallery" id="g">
    <div class="item"><div class="photo"></div>Photo 1</div>
    <div class="item"><div class="photo"></div>Photo 2</div>
    <div class="item"><div class="photo"></div>Photo 3</div>
  </div>
  <span class="icon home"></span> <span class="icon mail" id="m"></span> <span class="icon user"></span>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "Forms: form controls are styled like other elements — width, padding, border, border-radius, background — with pseudo-classes such as :focus (highlight the field being typed in) and :hover for buttons, and attribute selectors such as input[type=text] to target a kind of control.",
          },
          {
            kind: "code",
            language: "html",
            title: "Styling a form",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    input[type=text], select { width: 100%; padding: 10px; margin: 6px 0;
                               border: 2px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    input[type=text]:focus   { border-color: #04aa6d; outline: none; background: #f6fff9; }
    input[type=submit]       { background: #04aa6d; color: white; padding: 10px 20px; border: 0;
                               border-radius: 4px; cursor: pointer; }
    input[type=submit]:hover { background: #038a58; }
  </style>
</head>
<body>
  <form>
    <input type="text" id="n" placeholder="Your name">
    <select><option>BCA</option><option>BBA</option></select>
    <input type="submit" value="Send">
  </form>
</body>
</html>`,
          },
        ],
      },
      {
        id: "counters-layout",
        title: "9. CSS Counters and Website Layout",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "CSS counters are variables kept by CSS that can be increased to number headings or list items automatically. counter-reset creates/resets a counter (usually on the parent), counter-increment increases it on every matching element, and the counter() function displays its value inside the content property of ::before or ::after.",
          },
          {
            kind: "code",
            language: "html",
            title: "Automatic numbering of headings with CSS counters",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    body { counter-reset: chapter; }                       /* create the counter */
    h2::before { counter-increment: chapter;               /* add 1 for every h2 */
                 content: "Chapter " counter(chapter) ". "; }
  </style>
</head>
<body>
  <h2 id="c1">Introduction</h2>
  <h2 id="c2">HTML</h2>
  <h2 id="c3">CSS</h2>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "Website layout: most sites use the same structure — header, navigation bar, main content, side column and footer (see Fig 3.2). Today the layout is created with CSS Grid or Flexbox (older sites used floats and tables). Responsive design uses relative units and media queries (@media (max-width: 600px) { ... }) so that the same page fits desktop, tablet and phone.",
          },
          {
            kind: "code",
            language: "html",
            title: "A two-column website layout using CSS Grid",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Arial, sans-serif; }
    .page { display: grid; grid-template-columns: 3fr 1fr; gap: 10px; padding: 10px; }
    header, nav, footer { grid-column: 1 / -1; padding: 12px; background: #003366; color: white; }
    nav    { background: #446; }
    main   { background: #eef; padding: 12px; }
    aside  { background: #fee; padding: 12px; }
    @media (max-width: 600px) { .page { grid-template-columns: 1fr; } }   /* phones: one column */
  </style>
</head>
<body>
  <div class="page">
    <header id="h">Header</header>
    <nav>Home | Courses | Contact</nav>
    <main id="m">Main content</main>
    <aside id="a">Side column</aside>
    <footer id="f">Footer</footer>
  </div>
</body>
</html>`,
          },
        ],
      },
      {
        id: "units-specificity",
        title: "10. CSS Units and Specificity",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Unit", "Type", "Meaning"],
            rows: [
              ["px", "Absolute (screen)", "Pixel — one dot on the screen."],
              [
                "pt, pc, cm, mm, in",
                "Absolute (print)",
                "Point (1/72 inch), pica, centimetre, millimetre, inch.",
              ],
              ["%", "Relative", "Percentage of the parent element's value."],
              [
                "em",
                "Relative",
                "Relative to the font size of the element (or its parent). 2em = twice the current font size.",
              ],
              ["rem", "Relative", "Relative to the font size of the root <html> element."],
              ["vw / vh", "Relative to viewport", "1% of the browser window width / height."],
              ["ch, ex", "Relative", "Width of the character '0' / height of letter 'x'."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "CSS units",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    html      { font-size: 16px; }
    .parent   { font-size: 20px; width: 400px; }
    .em       { font-size: 2em; }          /* 2 x 20px = 40px (relative to parent) */
    .rem      { font-size: 2rem; }         /* 2 x 16px = 32px (relative to <html>) */
    .half     { width: 50%; }              /* 50% of 400px = 200px */
    .vw       { width: 10vw; }             /* 10% of the window width */
  </style>
</head>
<body>
  <div class="parent">
    <p class="em" id="e">em</p>
    <p class="rem" id="r">rem</p>
    <div class="half" id="h">50%</div>
    <div class="vw" id="v">10vw</div>
  </div>
</body>
</html>`,
          },
          {
            kind: "paragraph",
            text: "Specificity decides which rule wins when several rules set the same property on the same element. Each selector gets a score; the higher score wins, and if the scores are equal the rule written LATER wins. An inline style beats any selector, and a declaration marked !important beats everything (use it rarely).",
          },
          {
            kind: "table",
            headers: ["Selector type", "Score", "Example"],
            rows: [
              ["Inline style", "1000", "<p style='color:red'>"],
              ["ID selector", "100", "#menu"],
              ["Class, attribute, pseudo-class", "10", ".note, [type='text'], :hover"],
              ["Element, pseudo-element", "1", "p, h1, ::before"],
              ["Universal (*), combinators", "0", "*, >, +, ~"],
            ],
          },
          {
            kind: "table",
            headers: ["Selector", "Calculation", "Specificity"],
            rows: [
              ["p", "1 element", "0-0-0-1  (1)"],
              ["p.note", "1 class + 1 element", "0-0-1-1  (11)"],
              [".menu li.active", "2 classes + 1 element", "0-0-2-1  (21)"],
              ["#nav ul li a:hover", "1 id + 1 pseudo-class + 3 elements", "0-1-1-3  (113)"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Specificity: which colour wins?",
            code: String.raw`<!DOCTYPE html>
<html>
<head>
  <style>
    p        { color: red; }        /* specificity  1 */
    .c       { color: green; }      /* specificity 10 */
    p.c      { color: orange; }     /* specificity 11 */
    #i       { color: blue; }       /* specificity 100 */
  </style>
</head>
<body>
  <p id="one">A plain paragraph -> red</p>
  <p id="two" class="c">p.c beats .c -> orange</p>
  <p id="three" class="c" style="color:purple;">inline style beats #i and p.c -> purple</p>
  <p id="four" class="c" id="i">(a repeated id attribute is ignored)</p>
  <p id="i" class="c">#i beats p.c -> blue</p>
</body>
</html>`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "CSS", definition: "Cascading Style Sheets — the language that describes the appearance of HTML documents." },
      { term: "Selector", definition: "The part of a CSS rule that chooses the HTML elements to style." },
      { term: "Box model", definition: "The model in which every element is a box made of content, padding, border and margin." },
      { term: "box-sizing", definition: "Property that decides whether width includes padding and border (border-box) or not (content-box)." },
      { term: "Pseudo-class / pseudo-element", definition: "A selector for a state of an element (:hover) / for a part of an element (::before)." },
      { term: "Specificity", definition: "The weight of a selector, used to decide which conflicting rule wins." },
      { term: "float", definition: "Property that moves an element left or right so that text wraps around it." },
      { term: "Image sprite", definition: "A single image containing many icons, shown one at a time using background-position." },
      { term: "em / rem", definition: "Relative units based on the element's font size / the root element's font size." },
    ],
    examQuestions: [
      "What is CSS? Explain the syntax of a CSS rule and the types of selectors. (Long)",
      "Explain the CSS box model with a diagram. (Long)",
      "Differentiate between border and outline. Differentiate between content-box and border-box. (Medium)",
      "Explain the properties used for backgrounds and colours in CSS. (Medium)",
      "Explain the text and font properties of CSS with examples. (Long)",
      "How are links, lists and tables styled with CSS? Write the code for a striped table. (Medium)",
      "Explain the display property and its values. Differentiate between inline and inline-block. (Medium)",
      "Explain the position, overflow and float properties. (Long)",
      "What are combinators? Explain the four types with examples. (Medium)",
      "Explain pseudo-classes and pseudo-elements with examples. (Medium)",
      "Write the CSS and HTML for a horizontal navigation bar with a dropdown menu. (Long)",
      "What is an image sprite? What are the advantages? Explain the image gallery. (Medium)",
      "Explain CSS counters and website layout. (Medium)",
      "Explain the units used in CSS. (Medium)",
      "What is specificity? Explain how it is calculated. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "XML: Extensible Markup Language",
    hours: 10,
    headings: [
      {
        id: "xml-intro",
        title: "1. Introduction to XML",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "XML (eXtensible Markup Language) is a markup language, recommended by the W3C in 1998, designed to STORE and TRANSPORT data. Unlike HTML, XML has no predefined tags — the author invents tags that describe the data (<title>, <price>, <student>), which makes the document self-descriptive and readable by both humans and programs. XML is platform-independent and is the basis of many technologies: RSS feeds, SVG graphics, Microsoft Office file formats (.docx, .xlsx are zipped XML), Android layouts, configuration files and web services (SOAP).",
          },
          {
            kind: "table",
            headers: ["HTML", "XML"],
            rows: [
              [
                "Designed to DISPLAY data and to decide how it looks",
                "Designed to DESCRIBE, store and transport data",
              ],
              [
                "Predefined tags (<p>, <h1>, <table>)",
                "No predefined tags; the author defines tags (extensible)",
              ],
              ["Not case-sensitive (<P> = <p>)", "Case-sensitive (<Book> and <book> are different)"],
              ["Closing tags may be omitted for some elements", "Every element must be closed"],
              ["Attribute values may be unquoted", "Attribute values must be quoted"],
              ["Browsers forgive small errors", "Parsers stop at the first error (strict syntax)"],
              ["Whitespace is collapsed", "Whitespace can be preserved"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Advantages of XML: simple and readable text; separates data from presentation; platform, hardware and software independent; supports Unicode (all languages); extensible; data can be shared between different systems; free open standards; many tools and parsers.",
              "Disadvantages: larger files than binary formats (verbose tags); slower to process than plain text or JSON; no built-in data types unless a Schema is used; not suitable for presentation without CSS/XSLT.",
            ],
          },
        ],
      },
      {
        id: "xml-tree-syntax",
        title: "2. XML Tree, Syntax, Elements and Attributes",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "An XML document forms a TREE structure. It starts with the root element and branches to child elements, which can have their own children. Elements on the same level under one parent are called siblings. The text inside the leaf elements is the actual data.",
          },
          { kind: "diagram", diagramId: "xml-tree", caption: "Fig 5.1 — Tree structure of the XML document books.xml" },
          {
            kind: "code",
            language: "xml",
            title: "books.xml — a well-formed XML document",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="b1" category="programming">
    <title>Learn C Step by Step</title>
    <author>A. Verma</author>
    <year>2019</year>
    <price>399</price>
  </book>
  <book id="b2" category="web">
    <title>HTML and CSS Made Easy</title>
    <author>S. Khan</author>
    <year>2021</year>
    <price>450</price>
  </book>
  <book id="b3" category="web">
    <title>XML for Beginners</title>
    <author>P. Iyer</author>
    <year>2017</year>
    <price>325</price>
  </book>
</library>
`,
          },
          {
            kind: "table",
            headers: ["Part of the document", "Explanation"],
            rows: [
              [
                "<?xml version='1.0' encoding='UTF-8'?>",
                "XML declaration (prolog). Optional but recommended; must be the very first line. Gives the version and the character encoding.",
              ],
              ["<library> ... </library>", "The ROOT element — every XML document has exactly one."],
              ["<book> ... </book>", "A child element of library (three siblings)."],
              ["id='b1' category='programming'", "Attributes of the book element (name='value')."],
              [
                "<title>Learn C Step by Step</title>",
                "An element with text content; <title> is the start tag and </title> the end tag.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Syntax rule (well-formed XML)", "Example"],
            rows: [
              ["There must be one root element.", "<library> ... </library>"],
              [
                "Every start tag must have a matching end tag (empty elements use <tag/>).",
                "<title>C</title>   <br/>",
              ],
              ["Elements must be properly nested.", "<b><i>text</i></b>  ✔   <b><i>text</b></i>  ✘"],
              ["Tags are case-sensitive.", "<Title>...</title> is an error"],
              ["Attribute values must be quoted (single or double quotes).", "<book id=\"b1\">"],
              [
                "Element names: start with a letter or underscore, no spaces, cannot start with 'xml'.",
                "<first_name>  ✔   <first name>  ✘   <1name>  ✘",
              ],
              ["Special characters must be replaced by entity references.", "&lt; &gt; &amp; &apos; &quot;"],
              [
                "Comments: <!-- ... -->; the CDATA section <![CDATA[ ... ]]> holds text that the parser must not interpret.",
                "<![CDATA[ if (a < b) ]]>",
              ],
            ],
          },
          {
            kind: "code",
            language: "xml",
            title: "Entities, comments and a CDATA section",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<notes>
  <!-- this is a comment -->
  <note>Price &lt; 500 &amp; quantity &gt; 10</note>
  <code><![CDATA[ if (a < b && b > c) { printf("ok"); } ]]></code>
</notes>`,
          },
          {
            kind: "paragraph",
            text: "A document that breaks these rules is NOT well-formed and an XML parser will refuse to process it. The example below has a mismatched tag and a missing end tag; the messages are the real output of the libxml2 parser (xmllint).",
          },
          {
            kind: "code",
            language: "xml",
            title: "A document that is not well-formed, and the parser's error report",
            code: String.raw`<?xml version="1.0"?>
<note>
  <to>Amit</to>
  <from>Neha</to>
  <body>Meeting at 11 am
</note>`,
            output: String.raw`note.xml:4: parser error : Opening and ending tag mismatch: from line 4 and to
  <from>Neha</to>
                 ^
note.xml:6: parser error : Opening and ending tag mismatch: body line 5 and note
</note>
       ^
note.xml:6: parser error : Premature end of data in tag note line 2
</note>
       ^`,
          },
          {
            kind: "table",
            headers: ["Elements", "Attributes"],
            rows: [
              [
                "Hold data or other elements; can contain many children and repeat",
                "Give extra information (metadata) about an element; only one value per name",
              ],
              [
                "<price currency='INR'>399</price>: price is an element",
                "currency is an attribute of the price element",
              ],
              [
                "Can have structure (sub-elements) and order",
                "Cannot have structure or sub-attributes; no order",
              ],
              ["Preferred for data", "Preferred for metadata such as ids"],
            ],
          },
        ],
      },
      {
        id: "xml-namespaces",
        title: "3. XML Namespaces",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Because authors invent their own tag names, two XML documents may use the same name for different things — <table> can be an HTML table or a piece of furniture. A namespace solves this NAME CONFLICT: each element name is qualified by a prefix that is bound to a unique identifier (usually a URI, which is used only as a name and need not exist as a web page) through the xmlns attribute.",
          },
          {
            kind: "code",
            language: "xml",
            title: "Namespaces with prefixes h: and f:",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:h="http://www.w3.org/TR/html4/"
      xmlns:f="https://example.com/furniture">

  <h:table>
    <h:tr><h:td>Apples</h:td><h:td>Bananas</h:td></h:tr>
  </h:table>

  <f:table>
    <f:name>Coffee Table</f:name>
    <f:width>80</f:width>
  </f:table>
</root>`,
          },
          {
            kind: "table",
            headers: ["Point", "Explanation"],
            rows: [
              [
                "Syntax",
                "xmlns:prefix='namespace-URI' — declared in the start tag of an element; valid for that element and its children.",
              ],
              [
                "Prefix",
                "A short name (h, f, xsl, xs) placed before the element name with a colon: <h:table>.",
              ],
              [
                "Default namespace",
                "xmlns='URI' without a prefix — all unprefixed elements inside belong to it: <table xmlns='http://www.w3.org/TR/html4/'>.",
              ],
              [
                "Well-known namespaces",
                "XSLT: http://www.w3.org/1999/XSL/Transform; XML Schema: http://www.w3.org/2001/XMLSchema; XLink: http://www.w3.org/1999/xlink.",
              ],
            ],
          },
        ],
      },
      {
        id: "xml-display",
        title: "4. Displaying XML",
        icon: "Tv",
        blocks: [
          {
            kind: "paragraph",
            text: "An XML file only holds data; it has no built-in way of looking good. Without any style information a browser shows it as a plain tree of tags. XML can be displayed in a nicer form in three ways: (1) with CSS, linked using the processing instruction <?xml-stylesheet type='text/css' href='books.css'?>; (2) by transforming it into HTML with XSLT (see below); (3) by reading it with JavaScript and the XML DOM and writing HTML.",
          },
          {
            kind: "code",
            language: "xml",
            title: "books.xml linked to a CSS file",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="books.css"?>
<library>
  <book id="b1">
    <title>Learn C Step by Step</title>
    <author>A. Verma</author>
    <year>2019</year>
    <price>399</price>
  </book>
  <book id="b2">
    <title>HTML and CSS Made Easy</title>
    <author>S. Khan</author>
    <year>2021</year>
    <price>450</price>
  </book>
</library>`,
          },
          {
            kind: "code",
            language: "css",
            title: "books.css — every XML element must be given a display type",
            code: String.raw`library { display: block; font-family: Arial, sans-serif; }
book    { display: block; margin: 8px; padding: 6px; border: 1px solid #999; }
title   { display: block; font-weight: bold; font-size: 18px; }
author  { display: block; color: gray; }
year    { display: none; }            /* hide the element */
price   { display: block; color: green; }`,
          },
        ],
      },
      {
        id: "xml-http-parser-dom",
        title: "5. HTTP Request, XML Parser and the XML DOM",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "HTTP request: a web page can fetch an XML file from the server, without reloading the page, by sending an HTTP request with the XMLHttpRequest object (or the newer fetch() API). The server responds with the XML, which the browser makes available as an XML DOM document (responseXML). This technique — AJAX (Asynchronous JavaScript and XML) — is the basis of modern dynamic pages. The example below loads books.xml and lists the titles; it was run on a local web server.",
          },
          {
            kind: "code",
            language: "html",
            title: "Reading an XML file with XMLHttpRequest (AJAX)",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
<script>
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {          // 4 = done, 200 = OK
      var titles = xhr.responseXML.getElementsByTagName("title");
      for (var i = 0; i < titles.length; i++) {
        console.log((i + 1) + ". " + titles[i].textContent);
      }
    }
  };
  xhr.open("GET", "books.xml", true);                          // true = asynchronous
  xhr.send();
</script>
</body>
</html>`,
            output: String.raw`1. Learn C Step by Step
2. HTML and CSS Made Easy
3. XML for Beginners`,
          },
          {
            kind: "paragraph",
            text: "An XML PARSER is a program (library) that reads an XML document, checks that it is well-formed (and optionally valid) and makes its content available to an application. All modern browsers have a built-in XML parser; other languages have their own (Java: JAXP, Python: ElementTree/lxml, PHP: SimpleXML).",
          },
          {
            kind: "table",
            headers: ["Parser type", "How it works", "Suited for"],
            rows: [
              [
                "DOM parser",
                "Reads the whole document and builds a tree in memory; the program can move around freely and change it.",
                "Small/medium documents, random access, editing",
              ],
              [
                "SAX parser (event based)",
                "Reads the document from start to end and fires events (start element, text, end element); nothing is stored.",
                "Very large documents, low memory, read-only",
              ],
              [
                "Pull parser (StAX)",
                "The application pulls the next event from the parser when it wants.",
                "Streaming with more control",
              ],
              [
                "Non-validating / validating",
                "Non-validating checks only well-formedness; validating also checks against a DTD or Schema.",
                "—",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["XML DOM property / method", "Meaning"],
            rows: [
              [
                "nodeName / nodeValue / nodeType",
                "Name, value and type of a node (1 = element, 2 = attribute, 3 = text, 9 = document).",
              ],
              ["documentElement", "The root element."],
              [
                "childNodes, firstChild, lastChild, parentNode, nextSibling",
                "Move around the tree. Note that white space between tags forms text nodes.",
              ],
              ["getElementsByTagName('name')", "All elements with that name."],
              ["getAttribute('id') / setAttribute()", "Read / change an attribute."],
              ["textContent", "The text inside an element (all descendants)."],
              ["createElement(), appendChild(), removeChild()", "Modify the tree."],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Parsing an XML string with DOMParser and walking the DOM",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
<script>
  var xmlText = "<library><book id='b1'><title>Learn C</title><price>399</price></book></library>";
  var doc  = new DOMParser().parseFromString(xmlText, "text/xml");   // the parser builds the DOM
  var book = doc.getElementsByTagName("book")[0];

  console.log("Root element      : " + doc.documentElement.nodeName);
  console.log("Book id           : " + book.getAttribute("id"));
  console.log("Title             : " + book.getElementsByTagName("title")[0].childNodes[0].nodeValue);
  console.log("Number of children: " + book.childNodes.length);
  console.log("First child       : " + book.firstChild.nodeName + " (nodeType " + book.firstChild.nodeType + ")");
</script>
</body>
</html>`,
            output: String.raw`Root element      : library
Book id           : b1
Title             : Learn C
Number of children: 2
First child       : title (nodeType 1)`,
          },
        ],
      },
      {
        id: "xpath",
        title: "6. XPath",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "XPath (XML Path Language) is a W3C language for selecting nodes from an XML document by describing a PATH through its tree, like a file path on a disk. XPath is used by XSLT, XQuery and XLink/XPointer, and is also available in browsers, Java, Python and many other tools.",
          },
          {
            kind: "table",
            headers: ["Expression", "Meaning"],
            rows: [
              ["nodename", "Selects all child nodes with that name."],
              ["/", "Starts at the root (absolute path) or steps into a child: /library/book"],
              ["//", "Selects nodes anywhere in the document, at any depth: //title"],
              [".  and  ..", "The current node / its parent."],
              ["@", "Selects an attribute: //book/@id"],
              ["[n], [last()], [position()<3]", "Predicates in square brackets filter nodes by position."],
              [
                "[price>350], [@category='web']",
                "Predicates that test the value of a child element or an attribute.",
              ],
              ["*", "Wildcard: any element (@* any attribute)."],
              ["|", "Union of two paths: //title | //author"],
              ["text(), count(), sum(), contains(), position(), last()", "Functions."],
            ],
          },
          {
            kind: "paragraph",
            text: "The results below are for the document books.xml shown earlier (three books with prices 399, 450 and 325). They were computed with a real XPath engine.",
          },
          {
            kind: "table",
            headers: ["XPath expression", "What it selects", "Result"],
            rows: [
              [
                "/library/book/title",
                "The title element of every book",
                "3 elements: <title>Learn C Step by Step</title>, <title>HTML and CSS Made Easy</title>, <title>XML for Beginners</title>",
              ],
              [
                "//title/text()",
                "Text of every title",
                "Learn C Step by Step, HTML and CSS Made Easy, XML for Beginners",
              ],
              ["/library/book[1]/title/text()", "Title of the first book", "Learn C Step by Step"],
              ["/library/book[last()]/title/text()", "Title of the last book", "XML for Beginners"],
              [
                "//book[position()<3]/title/text()",
                "Titles of the first two books",
                "Learn C Step by Step, HTML and CSS Made Easy",
              ],
              [
                "//book[price>350]/title/text()",
                "Titles of books costing more than 350",
                "Learn C Step by Step, HTML and CSS Made Easy",
              ],
              [
                "//book[@category='web']/author/text()",
                "Authors of the books of category 'web'",
                "S. Khan, P. Iyer",
              ],
              ["//book/@id", "All id attributes", "b1, b2, b3"],
              ["//book[contains(title,'XML')]/@id", "id of the book whose title contains 'XML'", "b3"],
              ["//book[year>2018]/@id", "ids of the books published after 2018", "b1, b2"],
              ["count(//book)", "Number of books", "3"],
              ["sum(//price)", "Total of all prices", "1174"],
              ["count(//title | //author)", "Number of nodes in the union", "6"],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "Running XPath in the browser with document.evaluate()",
            code: String.raw`<!DOCTYPE html>
<html>
<body>
<script>
  var xml = "<library><book><title>Learn C</title><price>399</price></book>" +
            "<book><title>Web Design</title><price>250</price></book></library>";
  var doc = new DOMParser().parseFromString(xml, "text/xml");

  var r = doc.evaluate("//book[price>300]/title", doc, null,
                       XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < r.snapshotLength; i++)
    console.log("Costly book: " + r.snapshotItem(i).textContent);

  var total = doc.evaluate("sum(//price)", doc, null, XPathResult.NUMBER_TYPE, null);
  console.log("Total price: " + total.numberValue);
</script>
</body>
</html>`,
            output: String.raw`Costly book: Learn C
Total price: 649`,
          },
        ],
      },
      {
        id: "xslt",
        title: "7. XSLT",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "XSLT (Extensible Stylesheet Language Transformations) is a language for TRANSFORMING an XML document into another document — usually HTML for display, but also plain text or another XML. An XSLT processor takes the source XML and an XSLT style sheet (itself an XML document) and produces the result. XSLT uses XPath to select the parts of the source. (XSL-FO, the other part of XSL, describes page formatting for print/PDF.)",
          },
          { kind: "diagram", diagramId: "xslt-flow", caption: "Fig 5.2 — XSLT transformation" },
          {
            kind: "table",
            headers: ["XSLT element", "Purpose"],
            rows: [
              [
                "<xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>",
                "Root element of the style sheet; declares the XSLT namespace.",
              ],
              ["<xsl:output method='html'/>", "Type of the result: xml, html or text."],
              [
                "<xsl:template match='/'>",
                "A template rule: says what to output when the node matched by the XPath pattern is found ('/' is the root).",
              ],
              ["<xsl:value-of select='title'/>", "Writes the value (text) of the selected node."],
              ["<xsl:for-each select='library/book'>", "Loops over every selected node."],
              ["<xsl:sort select='price' data-type='number'/>", "Sorts the nodes inside for-each."],
              ["<xsl:if test='price &gt; 350'>", "Conditional (no else)."],
              ["<xsl:choose> <xsl:when> <xsl:otherwise>", "Multi-way condition (like if-else / switch)."],
              ["<xsl:apply-templates/>", "Applies other templates to the children."],
            ],
          },
          {
            kind: "code",
            language: "xml",
            title: "books.xsl — transforms books.xml into an HTML table sorted by price",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <body>
        <h2>Book List</h2>
        <table border="1">
          <tr><th>Title</th><th>Author</th><th>Price</th></tr>
          <xsl:for-each select="library/book">
            <xsl:sort select="price" data-type="number"/>
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="author"/></td>
              <td>
                <xsl:value-of select="price"/>
                <xsl:if test="price &gt; 350"> (costly)</xsl:if>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`,
            output: String.raw`<html><body>
<h2>Book List</h2>
<table border="1">
<tr>
<th>Title</th>
<th>Author</th>
<th>Price</th>
</tr>
<tr>
<td>XML for Beginners</td>
<td>P. Iyer</td>
<td>325</td>
</tr>
<tr>
<td>Learn C Step by Step</td>
<td>A. Verma</td>
<td>399 (costly)</td>
</tr>
<tr>
<td>HTML and CSS Made Easy</td>
<td>S. Khan</td>
<td>450 (costly)</td>
</tr>
</table>
</body></html>`,
          },
          {
            kind: "paragraph",
            text: "To make a browser apply the transformation, the XML file links the style sheet with the line <?xml-stylesheet type='text/xsl' href='books.xsl'?> placed after the XML declaration. The output panel below the style sheet shows the real result produced by an XSLT processor for books.xml.",
          },
        ],
      },
      {
        id: "xquery",
        title: "8. XQuery",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "XQuery is a W3C query language for XML — it is to XML what SQL is to relational databases. It uses XPath to locate nodes and adds FLWOR expressions to filter, sort, join and build new XML. XQuery is used with XML databases and processors such as BaseX, eXist-db and Saxon.",
          },
          {
            kind: "table",
            headers: ["FLWOR clause", "Purpose", "SQL similarity"],
            rows: [
              ["for", "Loops over a sequence of nodes and binds each to a variable ($b)", "FROM"],
              ["let", "Binds a variable to a whole sequence or value", "—"],
              ["where", "Filters the nodes with a condition", "WHERE"],
              ["order by", "Sorts the result", "ORDER BY"],
              ["return", "Says what to produce for each result", "SELECT"],
            ],
          },
          {
            kind: "paragraph",
            text: "Query 1 lists the titles of the books costing more than 350 in alphabetical order; Query 2 uses let and aggregate functions. The results were worked out on books.xml (prices 399, 450, 325) and cross-checked with the equivalent XPath expressions.",
          },
          {
            kind: "code",
            language: "xquery",
            title: "XQuery 1 — FLWOR expression",
            code: String.raw`for $b in doc("books.xml")/library/book
where $b/price > 350
order by $b/title
return <costly>{ data($b/title) }</costly>`,
            output: String.raw`<costly>HTML and CSS Made Easy</costly>
<costly>Learn C Step by Step</costly>`,
          },
          {
            kind: "code",
            language: "xquery",
            title: "XQuery 2 — let with functions",
            code: String.raw`let $p := doc("books.xml")//price
return <summary>
         <books>{ count($p) }</books>
         <total>{ sum($p) }</total>
       </summary>`,
            output: String.raw`<summary>
  <books>3</books>
  <total>1174</total>
</summary>`,
          },
          {
            kind: "table",
            headers: ["XPath", "XQuery", "XSLT"],
            rows: [
              [
                "Selects nodes; a building block for the others",
                "Queries and builds new XML/text; supports joins, sorting and functions",
                "Transforms XML into another format; template based",
              ],
              ["No loops or variables", "FLWOR loops and variables", "for-each, variables, templates"],
              [
                "Example: //book[price>350]",
                "for $b in //book where $b/price>350 return $b/title",
                "<xsl:for-each select='//book[price&gt;350]'>",
              ],
            ],
          },
        ],
      },
      {
        id: "xlink",
        title: "9. XLink",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "XLink (XML Linking Language) is a W3C standard that lets any XML element become a hyperlink — in HTML only the <a> tag can. It uses attributes from the XLink namespace (http://www.w3.org/1999/xlink). XLink supports simple links (like an HTML link) and extended links (links between several resources, with links stored outside the documents). XPointer is the companion language used to point to a part of the target document.",
          },
          {
            kind: "code",
            language: "xml",
            title: "A simple XLink",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<library xmlns:xlink="http://www.w3.org/1999/xlink">
  <book id="b1">
    <title>Learn C Step by Step</title>
    <details xlink:type="simple"
             xlink:href="https://www.example.com/books/b1"
             xlink:show="new"
             xlink:actuate="onRequest">More details</details>
  </book>
</library>`,
          },
          {
            kind: "table",
            headers: ["XLink attribute", "Meaning"],
            rows: [
              ["xlink:type", "Kind of link: simple, extended, locator, arc, resource, title."],
              ["xlink:href", "The address (URL) of the target resource."],
              [
                "xlink:show",
                "How to show the target: new (new window), replace (same window), embed (inside the page).",
              ],
              [
                "xlink:actuate",
                "When to follow the link: onRequest (when the user clicks) or onLoad (automatically).",
              ],
              ["xlink:title / xlink:label", "Title of the link / label of a resource for extended links."],
            ],
          },
        ],
      },
      {
        id: "validation-dtd-schema",
        title: "10. Validator, DTD and XML Schema",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "There are two levels of correctness for an XML document. WELL-FORMED means it obeys the general syntax rules of XML (Section 2). VALID means it is well-formed AND it follows the rules of a specific vocabulary defined in a DTD or an XML Schema — which elements and attributes are allowed, in what order, how many times and of what data type. A VALIDATOR (validating parser) checks this and reports errors. Examples: xmllint (libxml2), the W3C validation services, and XML editors such as Oxygen or Visual Studio.",
          },
          {
            kind: "table",
            headers: ["Well-formed", "Valid"],
            rows: [
              ["Follows the XML syntax rules", "Well-formed AND follows a DTD or Schema"],
              ["Required for every XML document", "Optional; needed when the structure must be guaranteed"],
              ["Checked by every XML parser", "Checked only by a validating parser"],
            ],
          },
          {
            kind: "paragraph",
            text: "DTD (Document Type Definition) is the older way of defining the structure of an XML document. It can be written inside the document (internal DTD, in a <!DOCTYPE root [ ... ]> block) or in a separate .dtd file (external DTD, referenced with <!DOCTYPE root SYSTEM 'file.dtd'>).",
          },
          {
            kind: "code",
            language: "xml",
            title: "An XML document with an internal DTD — it is valid",
            code: String.raw`<?xml version="1.0"?>
<!DOCTYPE library [
  <!ELEMENT library (book+)>
  <!ELEMENT book    (title, author, price)>
  <!ATTLIST book    id ID #REQUIRED
                    category (programming|web) "web">
  <!ELEMENT title   (#PCDATA)>
  <!ELEMENT author  (#PCDATA)>
  <!ELEMENT price   (#PCDATA)>
]>
<library>
  <book id="b1" category="programming">
    <title>Learn C Step by Step</title>
    <author>A. Verma</author>
    <price>399</price>
  </book>
</library>`,
            output: "(xmllint --valid reports no error: the document is valid)",
          },
          {
            kind: "paragraph",
            text: "If the <author> element is missing, the document is still well-formed but no longer valid; the validator reports it (real xmllint output):",
          },
          {
            kind: "code",
            language: "xml",
            title: "The same document without <author> — not valid",
            code: String.raw`<?xml version="1.0"?>
<!DOCTYPE library [
  <!ELEMENT library (book+)>
  <!ELEMENT book    (title, author, price)>
  <!ATTLIST book    id ID #REQUIRED
                    category (programming|web) "web">
  <!ELEMENT title   (#PCDATA)>
  <!ELEMENT author  (#PCDATA)>
  <!ELEMENT price   (#PCDATA)>
]>
<library>
  <book id="b1" category="programming">
    <title>Learn C Step by Step</title>
    <price>399</price>
  </book>
</library>`,
            output: String.raw`library.xml:15: element book: validity error : Element book content does not follow the DTD, expecting (title , author , price), got (title price )
  </book>
         ^`,
          },
          {
            kind: "table",
            headers: ["DTD declaration", "Meaning", "Example"],
            rows: [
              [
                "<!ELEMENT name (content)>",
                "Declares an element and what it may contain.",
                "<!ELEMENT book (title, author, price)>",
              ],
              [
                "(#PCDATA)",
                "The element contains only parsed character data (text).",
                "<!ELEMENT title (#PCDATA)>",
              ],
              ["EMPTY / ANY", "No content (like <br/>) / any content.", "<!ELEMENT br EMPTY>"],
              [
                ", (sequence)   | (choice)",
                "Children in this order / one of the alternatives.",
                "(title, author)   (email | phone)",
              ],
              [
                "+   *   ?",
                "Occurrence: one or more / zero or more / zero or one.",
                "<!ELEMENT library (book+)>",
              ],
              [
                "<!ATTLIST element attr TYPE default>",
                "Declares attributes. Types: CDATA (text), ID (unique), enumeration (a|b). Defaults: #REQUIRED, #IMPLIED (optional), #FIXED 'value' or a default value.",
                "<!ATTLIST book id ID #REQUIRED>",
              ],
              [
                "<!ENTITY name 'text'>",
                "Defines a reusable text (entity).",
                "<!ENTITY dept 'Department of Computer Science'>",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "XML Schema (XSD — XML Schema Definition) is the newer W3C alternative to DTD. A schema is itself an XML document (so it is described with the same tools), supports data types (string, integer, decimal, date, gYear), restrictions (ranges, patterns, enumerations), namespaces and more precise control. The schema below defines books.xml, and the document was validated against it with xmllint.",
          },
          {
            kind: "code",
            language: "xml",
            title: "books.xsd — an XML Schema for books.xml",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
  <xs:element name="library">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="book" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="title"  type="xs:string"/>
              <xs:element name="author" type="xs:string"/>
              <xs:element name="year"   type="xs:gYear"/>
              <xs:element name="price"  type="xs:decimal"/>
            </xs:sequence>
            <xs:attribute name="id"       type="xs:ID" use="required"/>
            <xs:attribute name="category" type="xs:string"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
`,
            output: "books.xml validates",
          },
          {
            kind: "paragraph",
            text: "A price that is not a number breaks the data type rule of the schema; the validator's message is shown below.",
          },
          {
            kind: "code",
            language: "xml",
            title: "books.xml with price 'free' — not valid against books.xsd",
            code: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="b1" category="programming">
    <title>Learn C Step by Step</title>
    <author>A. Verma</author>
    <year>2019</year>
    <price>free</price>
  </book>
</library>`,
            output: String.raw`books.xml:7: element price: Schemas validity error : Element 'price': 'free' is not a valid value of the atomic type 'xs:decimal'.
books.xml fails to validate`,
          },
          {
            kind: "table",
            headers: ["DTD", "XML Schema (XSD)"],
            rows: [
              ["Not written in XML (special syntax)", "Written in XML"],
              [
                "Few data types: everything is text (#PCDATA, CDATA)",
                "Many built-in data types (string, integer, decimal, date...) and user-defined types",
              ],
              ["No support for namespaces", "Supports namespaces"],
              [
                "Limited control over the number of occurrences (+ * ?)",
                "Exact control: minOccurs / maxOccurs",
              ],
              ["Simple and compact", "More powerful, but longer and more complex"],
              ["Stored in <!DOCTYPE> or a .dtd file", "Stored in a .xsd file"],
            ],
          },
        ],
      },
      {
        id: "xml-server",
        title: "11. XML and the Server",
        icon: "Wifi",
        blocks: [
          {
            kind: "paragraph",
            text: "On the Web, XML files are stored on and delivered by a web server. The server must tell the browser what kind of data it is sending through the HTTP header Content-Type: application/xml (or text/xml). Server-side programs (PHP, ASP, JSP, Python) can also read XML from files and databases, transform it with XSLT before sending it, or generate XML dynamically for other programs.",
          },
          {
            kind: "table",
            headers: ["Role of the server", "Explanation"],
            rows: [
              [
                "Storing and delivering XML",
                "Serves .xml, .xsl, .css, .dtd and .xsd files to browsers and applications, with the correct MIME type.",
              ],
              [
                "Server-side processing",
                "Parses, validates and transforms XML (XSLT) on the server, sending ready HTML to the browser — this also works for old browsers.",
              ],
              [
                "Generating XML dynamically",
                "A script reads the database and outputs XML (feeds, data exchange).",
              ],
              [
                "Web services",
                "Programs talk to each other over HTTP using XML: SOAP (XML messages), WSDL (describes the service), UDDI (directory); RESTful services may use XML or JSON.",
              ],
              [
                "XML databases and configuration",
                "Servers keep configuration in XML (web.xml, pom.xml) and XML databases (eXist, BaseX) store documents.",
              ],
            ],
          },
          {
            kind: "code",
            language: "php",
            title: "A server-side script that sends XML to the client",
            code: String.raw`<?php
header("Content-Type: application/xml; charset=UTF-8");   // tell the client it is XML
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<message><text>Hello from the server</text></message>';
?>`,
          },
          {
            kind: "bullets",
            items: [
              "Common uses of XML on the Internet: RSS/Atom news feeds, sitemaps for search engines, SOAP web services, configuration files, SVG graphics, Office documents, and data exchange between organisations (banks, railways, government).",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "XML", definition: "eXtensible Markup Language — a language for storing and transporting data using self-defined tags." },
      {
        term: "Well-formed",
        definition: "An XML document that obeys the syntax rules (one root, matching tags, quoted attributes, proper nesting).",
      },
      { term: "Valid", definition: "A well-formed document that also follows the rules of a DTD or an XML Schema." },
      { term: "Namespace", definition: "A unique name (URI) used with a prefix to avoid element name conflicts." },
      { term: "XML parser", definition: "A program that reads an XML document, checks it and gives access to its content." },
      { term: "XPath", definition: "A language for selecting nodes of an XML document by path expressions." },
      { term: "XSLT", definition: "A language that transforms an XML document into another document such as HTML." },
      { term: "XQuery", definition: "A query language for XML using FLWOR expressions." },
      { term: "XLink", definition: "A standard that makes any XML element a hyperlink." },
      { term: "DTD / XSD", definition: "Two ways of defining the legal structure of an XML document; XSD is written in XML and has data types." },
    ],
    examQuestions: [
      "What is XML? Differentiate between HTML and XML. (Medium)",
      "Explain the syntax rules of XML. What is a well-formed document? (Long)",
      "Explain the XML tree, elements and attributes with an example. (Medium)",
      "What are XML namespaces? Why are they needed? Explain with an example. (Medium)",
      "How can an XML document be displayed? Explain with CSS. (Medium)",
      "Explain the XML HTTP request and the working of XML parsers. (Medium)",
      "What is the XML DOM? Write a JavaScript program to read an XML file. (Long)",
      "What is XPath? Explain its syntax with five examples. (Long)",
      "What is XSLT? Write an XSLT style sheet to display an XML file as an HTML table. (Long)",
      "What is XQuery? Explain the FLWOR expression. (Medium)",
      "What is XLink? Explain its attributes. (Short)",
      "Differentiate between well-formed and valid documents. What is a validator? (Medium)",
      "What is a DTD? Explain the declarations of a DTD with an example. (Long)",
      "What is an XML Schema? Differentiate between DTD and XML Schema. (Long)",
      "Explain the role of the server in XML. (Short)",
    ],
  },
];
