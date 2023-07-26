var github = "https://github.com/XBEAST1";
var youtube = "https://www.youtube.com/channel/UCKxr9Jv1DpNFPHyXxHU0TTw";
var instagram = "https://www.instagram.com/ig_hamxa91/";
var email = 'xbeast331@proton.me';
var back = 'https://xbeast0.github.io/xbeast/';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am XB3AST, a programmer and cyber security enthusiast. I am in this field since 3 yrs.`,
  `I gathered knowledge in html, css, javascript, python, sql, php. And my vision too gather every software in one place. I like website and software development.`,
  "<br>",
];

links = [
  `<table>
   <tr><td>github</td><td><a href="${github}" target="_blank">github account</a></td></tr>
   <tr><td>youtube</td><td><a href="${youtube}" target="_blank">youtube channel</a></td></tr>
   <tr><td>instagram</td><td><a href="${instagram}" target="_blank">instagram account</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "My Github Projects Are Commonly Getting Updates Day By Day.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is XB3AST?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">back</span></td><td>Go Back To GUI Version Of My Website</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
];

banner = [
  `<br>
  <br>
  ██╗  ██╗██████╗ ██████╗  █████╗ ███████╗████████╗
  <br>
  ╚██╗██╔╝██╔══██╗╚════██╗██╔══██╗██╔════╝╚══██╔══╝
  <br>
   ╚███╔╝ ██████╔╝ █████╔╝███████║███████╗   ██║  
  <br>
   ██╔██╗ ██╔══██╗ ╚═══██╗██╔══██║╚════██║   ██║  
  <br>
  ██╔╝ ██╗██████╔╝██████╔╝██║  ██║███████║   ██║   
  <br>
  ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   
  <br>
  <br>`,
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Founder: XB3AST.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> (and hit 'return') to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "theme", "theme ls", "theme random", "theme set coral", "theme set midnight", "theme set chocolate", "youtube", "github", "instagram", "history", "clear", "banner", "back", "ping"
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];

