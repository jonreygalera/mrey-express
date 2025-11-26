import { Request, Response } from 'express';
import { app } from '../../core/utils/app.util';

export const landingPage = (req: Request, res: Response) => {
  const projectVersion = app('version');
  const currentYear = new Date().getFullYear();
  const installCommand = 'npm i -g @mreycode/mrey-express-cli';
  const newProjectCommand = 'mrey-express new project-name';
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>mrey-express – Modern TypeScript API Framework</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap" rel="stylesheet">
        <style>
            :root {
                --color-bg: #f6f7fb;
                --color-surface: #ffffff;
                --color-primary: #212648;
                --color-secondary: #4e62e6;
                --color-accent: #64d6ad;
                --color-muted: #7c8693;
                --shadow-1: 0 2px 24px 0 #3756e512;
                --shadow-2: 0 8px 32px #21305510;
            }
            * {
                box-sizing: border-box;
                margin: 0; padding: 0;
            }
            html, body {
                width: 100vw; min-height: 100vh;
                font-family: 'Inter', system-ui, sans-serif;
                background: var(--color-bg);
                color: var(--color-primary);
                -webkit-font-smoothing: antialiased;
            }
            body {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
            }
            .center-wrap {
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                align-items: center; justify-content: center;
            }
            .card {
                background: var(--color-surface);
                border-radius: 1.4rem;
                box-shadow: var(--shadow-1), var(--shadow-2);
                padding: 2.7rem 2.25rem 2rem 2.25rem;
                max-width: 546px;
                width: 92vw;
                display: flex;
                flex-direction: column; align-items: center;
            }
            .version-badge {
                color: var(--color-secondary);
                font-size: 1.02rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                padding: 0.12em 1.25em;
                background-color: #e5ebf7;
                border-radius: 50px;
                margin-bottom: 1.18rem;
                user-select: all;
            }
            .tech-row {
                display: flex;
                align-items: center;
                gap: 0.6rem;
                margin-bottom: 2.2rem;
                flex-wrap: wrap;
                justify-content: center;
            }
            .tech-link {
                display: flex;
                align-items: center;
                margin: 0 3px;
                text-decoration: none;
                border-radius: 7px;
                transition: box-shadow 0.19s;
            }
            .tech-link:focus,
            .tech-link:hover {
                box-shadow: 0 4px 16px #21305522;
                background: #f5f7fa99;
            }
            h1 {
                font-size: 2.6rem;
                font-weight: 700;
                letter-spacing: -0.03em;
                margin-bottom: 1.05rem;
                color: var(--color-primary);
                line-height: 1.18;
                text-align: center;
            }
            .tagline {
                color: var(--color-muted);
                font-weight: 500;
                font-size: 1.217rem;
                line-height: 1.55;
                margin-bottom: 2.5rem;
                text-align: center;
                letter-spacing: 0.01em;
            }
            .install-card {
                background: #eeeeff;
                border: 1px dashed #626bc7;
                color: var(--color-primary);
                border-radius: 1rem;
                padding: 1.22rem 1.2rem 1.2rem 1.4rem;
                margin: 2.2rem 0 1.4rem 0;
                font-size: 1.13rem;
                text-align: center;
                font-family: "Inter", system-ui, sans-serif;
                box-shadow: 0 2px 12px #21305515;
            }
            .install-bash {
                background: #23253b;
                color: #fff;
                border-radius: 5px;
                padding: 0.36rem 0.8rem;
                font-family: "Fira Mono", "Menlo", monospace;
                font-size: 1.16em;
                display: inline-block;
                margin: 0.62rem 0 0.68rem 0;
                letter-spacing: 0.02em;
                position: relative;
                user-select: all;
            }
            .install-bash-secondary {
                background: #343a59;
                color: #fff7aa;
                border-radius: 5px;
                padding: 0.36rem 0.8rem;
                font-family: "Fira Mono", "Menlo", monospace;
                font-size: 1.13em;
                display: inline-block;
                margin: 0.46rem 0 0.46rem 0;
                letter-spacing: 0.01em;
                position: relative;
                user-select: all;
            }
            .copy-btn {
                display: inline-block;
                margin-left: 1em;
                background: var(--color-secondary);
                color: #fff;
                border: none;
                border-radius: 0.39rem;
                font-size: 0.94em;
                padding: 0.28em 0.77em;
                cursor: pointer;
                font-family: 'Inter', system-ui, sans-serif;
                transition: background 0.14s, color 0.13s;
            }
            .copy-btn:hover, .copy-btn:focus {
                background: var(--color-accent);
                color: #23253b;
                outline: none;
            }
            .copy-btn-secondary {
                display: inline-block;
                margin-left: 1em;
                background: var(--color-muted);
                color: #fff;
                border: none;
                border-radius: 0.39rem;
                font-size: 0.93em;
                padding: 0.28em 0.77em;
                cursor: pointer;
                font-family: 'Inter', system-ui, sans-serif;
                transition: background 0.14s, color 0.13s;
            }
            .copy-btn-secondary:hover, .copy-btn-secondary:focus {
                background: var(--color-accent);
                color: #23253b;
                outline: none;
            }
            .cta-row {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1.05rem;
                margin-bottom: 1.4rem;
            }
            .cta-button {
                display: inline-block;
                background: var(--color-primary);
                color: #fff;
                border: none;
                border-radius: 0.8rem;
                font-weight: 600;
                font-size: 1.08rem;
                text-decoration: none;
                letter-spacing: 0.01em;
                padding: 0.88rem 2.2rem;
                box-shadow: 0 2px 12px #21305514;
                transition: background 0.15s, box-shadow 0.18s, color 0.13s;
            }
            .cta-button:hover, .cta-button:focus {
                background: var(--color-secondary);
                color: #fff;
                box-shadow: 0 6px 20px #21305526;
                outline: none;
            }
            .doc-link {
                display: inline-block;
                margin-left: 4px;
                color: var(--color-secondary);
                font-size: 1.01em;
                text-decoration: underline;
                transition: color 0.14s;
            }
            .doc-link:hover, .doc-link:focus {
                color: var(--color-accent);
            }
            .footer {
                text-align: center;
                margin: 2.8rem auto 1.4rem auto;
                color: #adb3c7;
                font-size: 1rem;
                font-weight: 500;
                letter-spacing: 0.02em;
            }
            .footer a {
                color: var(--color-secondary);
                text-decoration: none;
                border-bottom: 1px dotted var(--color-secondary);
                transition: color 0.15s;
            }
            .footer a:hover, .footer a:focus {
                color: var(--color-accent);
            }
            .note {
                margin: 2.2rem auto 0 auto;
                padding: 1rem 1.6rem;
                color: #d45b40;
                background: #fff4ec;
                font-size: 1.03em;
                border-radius: 9px;
                text-align: center;
                max-width: 500px;
                box-shadow: 0 1px 9px #d45b4030;
                font-family: "Inter", system-ui, sans-serif;
            }
            @media (max-width: 700px) {
                .card { padding: 1.6rem 1.2rem 1.1rem 1.2rem; max-width: 97vw; }
                h1 { font-size: 1.65rem;}
                .tagline { font-size: 1.01rem;}
                .footer { font-size: 0.96em;}
                .tech-row { gap: 0.3rem; }
                .note { padding: 0.88rem 0.6rem; font-size: 0.95em;}
                .install-card { padding: 0.82rem .75rem 0.85rem .79rem; font-size: 0.99rem;}
                .install-bash { font-size: 0.97em; }
                .install-bash-secondary { font-size: 0.95em; }
            }
        </style>
        <script>
            function copyToClipboard() {
                var text = "${installCommand}";
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(function() {
                        var btn = document.getElementById('copy-btn');
                        btn.innerText = 'Copied!';
                        setTimeout(function() { btn.innerText = 'Copy'; }, 1900);
                    });
                } else {
                    // fallback
                    var textarea = document.createElement("textarea");
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        var btn = document.getElementById('copy-btn');
                        btn.innerText = 'Copied!';
                        setTimeout(function() { btn.innerText = 'Copy'; }, 1900);
                    } catch(e) {}
                    document.body.removeChild(textarea);
                }
            }
            function copyNewProjectCommand() {
                var text = "${newProjectCommand}";
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(function() {
                        var btn = document.getElementById('copy-btn-new');
                        btn.innerText = 'Copied!';
                        setTimeout(function() { btn.innerText = 'Copy'; }, 1900);
                    });
                } else {
                    // fallback
                    var textarea = document.createElement("textarea");
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        var btn = document.getElementById('copy-btn-new');
                        btn.innerText = 'Copied!';
                        setTimeout(function() { btn.innerText = 'Copy'; }, 1900);
                    } catch(e) {}
                    document.body.removeChild(textarea);
                }
            }
        </script>
    </head>
    <body>
        <div class="center-wrap">
            <div class="card">
                <span class="version-badge">v${projectVersion}</span>
                <h1>mrey-express</h1>
                <div class="tech-row" aria-label="integrations">
                    <a href="https://www.typescriptlang.org/" class="tech-link" target="_blank" rel="noopener" title="TypeScript">
                        <img alt="typescript"
                            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white"
                            height="26" />
                    </a>
                    <a href="https://expressjs.com/" class="tech-link" target="_blank" rel="noopener" title="Express.js">
                        <img alt="express"
                            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=white"
                            height="26" />
                    </a>
                    <a href="https://mongoosejs.com/" class="tech-link" target="_blank" rel="noopener" title="Mongoose">
                        <img alt="mongoose"
                            src="https://img.shields.io/badge/mongoose-%23880000.svg?style=for-the-badge&amp;logo=mongoose&amp;logoColor=white"
                            height="26" />
                    </a>
                    <a href="https://jwt.io/" class="tech-link" target="_blank" rel="noopener" title="JWT">
                        <img alt="jwt"
                            src="https://img.shields.io/badge/jwt-black.svg?style=for-the-badge&amp;logo=JSON%20web%20tokens"
                            height="26" />
                    </a>
                    <a href="https://eslint.org/" class="tech-link" target="_blank" rel="noopener" title="ESLint">
                        <img alt="eslint"
                            src="https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&amp;logo=eslint&amp;logoColor=white"
                            height="26" />
                    </a>
                    <a href="https://jestjs.io/" class="tech-link" target="_blank" rel="noopener" title="Jest">
                        <img alt="jest"
                            src="https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&amp;logo=jest&amp;logoColor=white"
                            height="26" />
                    </a>
                    <a href="https://prettier.io/" class="tech-link" target="_blank" rel="noopener" title="Prettier">
                        <img alt="prettier"
                            src="https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&amp;logo=prettier&amp;logoColor=black"
                            height="26" />
                    </a>
                </div>
                <div class="tagline">
                  Fast, modular, &amp; well-structured Express.js foundation for TypeScript backend projects.
                </div>
                <div class="install-card">
                  <div>Fast install! <span style="font-size:1.36em">👇</span></div>
                  <span class="install-bash" id="install-bash">${installCommand}</span>
                  <button id="copy-btn" class="copy-btn" onclick="copyToClipboard()">Copy</button>
                  <div style="margin-top:1.14em; font-size:0.98em; color:#25253b; font-weight: 500;">
                    Then create your new project:<br>
                    <span class="install-bash-secondary" id="install-bash-new">${newProjectCommand}</span>
                    <button id="copy-btn-new" class="copy-btn-secondary" onclick="copyNewProjectCommand()">Copy</button>
                  </div>
                </div>
                <div class="cta-row">
                    <a href="https://github.com/jonreygalera/mrey-express" class="cta-button" target="_blank" rel="noopener">GitHub</a>
                    <a href="https://www.npmjs.com/package/@mreycode/mrey-express-cli" class="cta-button" target="_blank" rel="noopener">npm</a>
                </div>
            </div>
        </div>
        <div class="note">
          <strong>Note:</strong> This is Jon Rey's personal project template.<br>
          After handcrafting Express setups for ages, Jon finally made this so others don't suffer the same fate.<br>
          Copy, fork, and use responsibly. (Jon needs a vacation 😅)
        </div>
        <div class="footer">
            &copy; ${currentYear} <a href="https://github.com/jonreygalera" target="_blank" rel="noopener">Jon Rey Galera</a>
            &nbsp;&ndash;&nbsp; mrey-express, MIT License.
        </div>
    </body>
    </html>
  `;
  res.send(html);
};
