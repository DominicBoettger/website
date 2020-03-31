import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg width="164" height="18" viewBox="0 0 164 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.368 17H4.85C8.45 17 11.348 14.138 11.348 10.61C11.348 7.082 8.45 4.22 4.85 4.22H0.368V17ZM3.248 14.372V6.848H4.85C6.992 6.848 8.45 8.558 8.45 10.61C8.45 12.662 6.992 14.372 4.85 14.372H3.248ZM19.2078 17.144C22.8078 17.144 25.7418 14.21 25.7418 10.61C25.7418 7.01 22.8078 4.076 19.2078 4.076C15.6078 4.076 12.6738 7.01 12.6738 10.61C12.6738 14.21 15.6078 17.144 19.2078 17.144ZM19.2078 14.372C17.1378 14.372 15.5718 12.662 15.5718 10.61C15.5718 8.558 17.1378 6.848 19.2078 6.848C21.2778 6.848 22.8438 8.558 22.8438 10.61C22.8438 12.662 21.2778 14.372 19.2078 14.372ZM27.7723 17H30.6523V10.736L34.1443 14.228L37.6363 10.736V17H40.5163V4.076L34.1443 10.466L27.7723 4.076V17ZM43.2586 17H46.1386V4.22H43.2586V17ZM59.81 17.144V4.22H56.93V10.898L48.866 4.076V17H51.746V10.322L59.81 17.144ZM62.5418 17H65.4218V4.22H62.5418V17ZM73.9813 17.144C76.1773 17.144 78.1393 16.046 79.3273 14.372L77.1493 12.59C76.5013 13.634 75.3493 14.372 73.9813 14.372C71.9113 14.372 70.3453 12.662 70.3453 10.61C70.3453 8.558 71.9113 6.848 73.9813 6.848C75.3493 6.848 76.5013 7.586 77.1493 8.63L79.3273 6.848C78.1393 5.174 76.1773 4.076 73.9813 4.076C70.3813 4.076 67.4473 7.01 67.4473 10.61C67.4473 14.21 70.3813 17.144 73.9813 17.144ZM84.9364 17H90.5704C92.7304 17 94.4404 15.308 94.4404 13.202C94.4404 11.834 93.7204 10.79 92.6404 10.214C93.1984 9.656 93.5404 8.918 93.5404 8.018C93.5404 5.93 91.8304 4.22 89.7424 4.22H84.9364V17ZM87.8164 9.386V6.848H89.4184C90.1924 6.848 90.7504 7.424 90.7504 8.126C90.7504 8.828 90.1924 9.386 89.4184 9.386H87.8164ZM87.8164 14.354V11.816H90.3004C91.0744 11.816 91.6324 12.392 91.6324 13.094C91.6324 13.796 91.0744 14.354 90.3004 14.354H87.8164ZM104.371 3.14C105.163 3.14 105.811 2.492 105.811 1.7C105.811 0.872 105.127 0.259999 104.371 0.259999C103.615 0.259999 102.931 0.872 102.931 1.7C102.931 2.492 103.579 3.14 104.371 3.14ZM100.087 3.14C100.879 3.14 101.527 2.492 101.527 1.7C101.527 0.872 100.843 0.259999 100.087 0.259999C99.3313 0.259999 98.6473 0.872 98.6473 1.7C98.6473 2.492 99.2953 3.14 100.087 3.14ZM102.229 17.144C105.829 17.144 108.763 14.21 108.763 10.61C108.763 7.01 105.829 4.076 102.229 4.076C98.6293 4.076 95.6953 7.01 95.6953 10.61C95.6953 14.21 98.6293 17.144 102.229 17.144ZM102.229 14.372C100.159 14.372 98.5933 12.662 98.5933 10.61C98.5933 8.558 100.159 6.848 102.229 6.848C104.299 6.848 105.865 8.558 105.865 10.61C105.865 12.662 104.299 14.372 102.229 14.372ZM112.442 17H115.322V7.064H118.4V4.22H109.382V7.064H112.442V17ZM122.215 17H125.095V7.064H128.173V4.22H119.155V7.064H122.215V17ZM135.329 17.144C137.489 17.144 139.325 16.496 140.585 15.056V9.26H135.941L134.717 11.96H137.795V13.742C137.165 14.192 136.373 14.372 135.329 14.372C133.259 14.372 131.693 12.662 131.693 10.61C131.693 8.558 133.259 6.848 135.329 6.848C136.697 6.848 137.543 7.298 138.317 8.27L140.495 6.488C139.253 4.958 137.525 4.076 135.329 4.076C131.729 4.076 128.795 7.01 128.795 10.61C128.795 14.21 131.729 17.144 135.329 17.144ZM142.891 17H150.811V14.156H145.771V11.996H149.731V9.224H145.771V7.064H150.811V4.22H142.891V17ZM153.052 17H155.932V11.816H155.968L159.928 17H163.366L159.208 11.582C160.648 11.042 161.674 9.638 161.674 8.018C161.674 5.93 159.964 4.22 157.876 4.22H153.052V17ZM155.932 9.386V6.848H157.552C158.326 6.848 158.884 7.424 158.884 8.126C158.884 8.828 158.326 9.386 157.552 9.386H155.932Z" fill={fill}/>
    </svg>      
  );
}