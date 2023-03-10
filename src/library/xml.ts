const LOGIN_PAGE = `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="119" viewBox="10 0 390 119" fill="none">
<path d="M92.7378 118.946C55.5383 117.406 46.2219 74.8318 9.02314 73.2746C5.50246 73.1272 0 73.2746 0 73.2746V0H390C390 0 364.115 43.327 337.866 59.7238C290.033 89.6039 247.456 43.3626 193.496 59.7238C149.827 72.9649 138.327 120.832 92.7378 118.946Z" fill="url(#paint0_linear_1_55)"/>
<defs>
<linearGradient id="paint0_linear_1_55" x1="0" y1="0" x2="66.4352" y2="217.729" gradientUnits="userSpaceOnUse">
<stop stop-color="#EECE13"/>
<stop offset="1" stop-color="#B210FF"/>
</linearGradient>
</defs>
</svg>`;

const LOADING_SCREEN = `
<svg style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <circle cx="30" cy="50" fill="#e90c59" r="20">
    <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"/>
  </circle>
  <circle cx="70" cy="50" fill="#46dff0" r="20">
    <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"/>
  </circle>
  <circle cx="30" cy="50" fill="#e90c59" r="20">
    <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"/>
    <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"/>
  </circle>
</svg>`;

export const XMLs = {
  LOGIN_PAGE,
  LOADING_SCREEN,
};
