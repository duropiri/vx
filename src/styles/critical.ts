// Critical CSS can be moved to a separate file and imported
export const criticalStyles = `
  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6.25rem 5rem;
    /* margin: 6.25rem 0; */
    width: 100vw;
    box-sizing: border-box;
    max-width: 100vw;
  }

  .section-container.top {
    padding-top: 10rem;
  }

  @media (max-width: 768px) {
    .section-container {
      padding: 3.125rem 1.5rem;
      /* margin: 3.125rem 0; */
    }

    .section-container.top {
      padding-top: 8rem;
    }
  }

  .hero-container {
    padding-top: 5rem /* 40px */;
    padding-bottom: 2.5rem /* 40px */;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* Base font families */
  [class*="pn-"] {
    font-family: var(--font-proxima-nova);
    line-height: 1.2em;
  }

  /* Mobile Font Utilities (Default) */
  /* Proxima Nova */
  .pn-regular-72, .pn-semibold-72, .pn-bold-72 { font-size: 2.5rem; }  /* 40px */
  .pn-regular-40, .pn-semibold-40, .pn-bold-40 { font-size: 1.75rem; }    /* 28px */
  .pn-regular-32, .pn-semibold-32, .pn-bold-32 { font-size: 1.625rem; }/* 26px */
  .pn-regular-24, .pn-semibold-24, .pn-bold-24 { font-size: 1.5rem; }  /* 24px */
  .pn-regular-20, .pn-semibold-20, .pn-bold-20 { font-size: 1.25rem; } /* 20px */
  .pn-regular-16, .pn-semibold-16, .pn-bold-16 { font-size: 1rem; }    /* 16px */
  .pn-regular-14, .pn-semibold-14, .pn-bold-14 { font-size: 0.875rem; }/* 14px */
  .pn-regular-12, .pn-semibold-12, .pn-bold-12 { font-size: 0.75rem; } /* 12px */

  /* Font weights - Proxima Nova */
  [class*="pn-regular"] { font-family: var(--font-proxima-nova); font-weight: 400; }
  [class*="pn-semibold"] { font-family: var(--font-proxima-nova); font-weight: 600; }
  [class*="pn-bold"] { font-family: var(--font-proxima-nova); font-weight: 700; }

  /* Desktop Font Sizes (768px and up) */
  @media (min-width: 768px) {
    /* Proxima Nova */
    .pn-regular-72, .pn-semibold-72, .pn-bold-72 { font-size: 4.5rem; } /* 72px */
    .pn-regular-40, .pn-semibold-40, .pn-bold-40 { font-size: 2.5rem; } /* 40px */
    .pn-regular-32, .pn-semibold-32, .pn-bold-32 { font-size: 2rem; }   /* 32px */
    .pn-regular-24, .pn-semibold-24, .pn-bold-24 { font-size: 1.5rem; } /* 24px */
    .pn-regular-20, .pn-semibold-20, .pn-bold-20 { font-size: 1.25rem; }/* 20px */
    .pn-regular-16, .pn-semibold-16, .pn-bold-16 { font-size: 1rem; }   /* 16px */
    .pn-regular-14, .pn-semibold-14, .pn-bold-14 { font-size: 0.875rem; }/* 14px */
    .pn-regular-12, .pn-semibold-12, .pn-bold-12 { font-size: 0.75rem; }/* 12px */
  }

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.25rem;
    gap: 0.625rem;
    background-color: var(--white); /* Fill */
    border: 0.125rem solid var(--ash); /* Stroke */
    line-height: 1;
    border-radius: 9999px; /* Rounded corners */
    transition: all 0.3s ease;
    /* cursor: pointer; */
  }

  .button.thin {
    padding: 0.375rem 0.75rem;
  }

  .button.nopadding {
    padding: 0;
  }

  .button.dark {
    background-color: var(--ash); /* Fill */
    color: white;
  }

  .button.gold {
    background: linear-gradient(90deg, #c5a05e, #fdd98a, #c5a05e);
    background-size: 300% 100%;
    // animation: gradientShift 2s linear infinite;

    // @keyframes gradientShift {
    //   0% {
    //     background-position: 0% 50%;
    //   }
    //   50% {
    //     background-position: 100% 50%;
    //   }
    //   100% {
    //     background-position: 0% 50%;
    //   }
    // }
  }

  // .banner {
  //   transition: visibility 0s linear 0.8s;
  // }

  // .banner:not([style*="visibility: visible"]) {
  //   visibility: hidden !important;
  //   opacity: 0 !important;
  //   pointer-events: none !important;
  // }

  // /* When navigation is complete, force hide */
  // [data-navigating="false"] .banner {
  //   visibility: hidden !important;
  //   opacity: 0 !important;
  //   pointer-events: none !important;
  // }
`;