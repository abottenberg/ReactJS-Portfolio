import React, { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60)};
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const loopAnimate = () => {
      elementsToAnimate.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visable-animate');
        } else {
          element.classList.remove('is-visable-animate');
        }
      });
      scroll(loopAnimate);
    };
    loopAnimate();

  }, [])

   const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      (rect.left <= 0 && rect.right >= 0)
      ||
      (rect.right >= (window.innerWidth || document
        .documentElement.clientWidth) &&
      rect.left <= (window.innerWidth || document.documentElement
        .clientWidth))
      ||
      (rect.left >=0 &&
        rect.right <= (window.innerWidth || document
          .documentElement.clientWidth))
      );
  }

  return (
    <div className="about-container">
      <div className="links">
        <a className="github" href="https://github.com/abottenberg" target="blank">
          <svg className="animate-on-scroll" width="549px" height="500px" viewBox="0 0 549 486" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <g id="Group-4" transform="translate(11.654607, 10.831123)" stroke="#000000" strokeWidth="20">
                <path d="M67.7828931,270.559502 C56.6240389,270.559502 45.2420997,268.339369 34.3063306,270.559502 C27.8906718,271.861981 22.9281447,277.066138 17.5250806,280.762627 C10.7384602,285.405671 3.38620651,291.993087 1.0641431,300.348564 C-8.5510657,334.946957 49.7830946,354.232631 63.8766431,321.692314 C66.5246777,315.578319 68.4297461,309.05326 69.2594556,302.442314 C71.7552605,282.556281 71.195129,275.158852 66.4703931,258.239189 C66.2259515,257.363824 66.0258393,260.173043 66.4703931,260.965752 C72.4876223,271.695416 80.1360223,281.496438 85.6735181,292.481377 C89.9452752,300.955422 91.9290406,310.423004 95.7750806,319.098564 C99.6903868,327.930369 105.197795,336.013251 108.923518,344.926689 C112.625041,353.782231 115.3192,363.036992 117.993831,372.254814 C120.229704,379.960509 121.921621,387.816401 123.642268,395.653252 C124.331769,398.79365 125.15735,401.954295 125.220393,405.168877 C125.418634,415.277194 125.881321,425.484581 124.423518,435.489189 C123.869693,439.289978 121.460636,442.634921 119.298518,445.809502 C116.132312,450.458358 112.893249,455.246905 108.540706,458.809502 C105.464069,461.327757 101.495463,462.756372 97.6032056,463.567314 C70.7253045,469.16726 56.2895032,421.160053 55.3532056,402.122002 C53.7380329,369.280158 58.8294271,373.182441 80.7516431,346.114189 C94.7744726,328.799632 104.241863,308.968115 112.157893,288.317314 C116.091571,278.055402 119.176492,252.407761 108.189143,243.606377 C106.561888,242.302869 108.69458,247.839506 109.665706,249.684502 C112.271094,254.634355 115.40939,259.312582 118.798518,263.762627 C126.371241,273.705879 134.078219,283.582983 142.509456,292.809502 C144.742939,295.25366 147.541612,297.306759 150.603206,298.567314 C152.418871,299.314881 154.792011,299.546756 156.493831,298.567314 C158.003981,297.698184 158.37846,295.560843 158.775081,293.864189 C169.59527,247.577824 161.157894,205.255213 147.720393,160.754814 C146.660766,157.245691 144.481911,148.094205 142.415706,151.122002 C140.671431,153.678045 142.62566,174.274431 144.048518,179.231377 C152.347852,208.144549 161.208606,245.265481 178.767268,272.004814 C183.489647,279.196323 196.574338,293.974109 206.845393,289.137627 C219.248304,283.297286 222.390051,260.695787 223.923518,249.231377 C229.361613,208.575431 235.081304,164.2288 221.361018,124.700127 C219.875619,120.420635 216.44667,108.677985 214.696956,112.856377 C211.123095,121.390907 213.438831,131.447521 214.696956,140.614189 C220.087325,179.888294 227.853169,230.650233 246.259456,267.418877 C247.021106,268.940359 249.632345,272.713213 249.868831,271.028252 C251.991043,255.907488 246.271327,233.947395 245.361018,219.520439 C244.711286,209.223209 235.35918,191.100761 245.361018,188.567314 L247.532893,185.223564 C279.736277,177.066507 277.469834,204.751648 305.001643,228.731377 C317.589087,239.694822 326.004022,217.152807 326.618831,210.864189 C327.635175,200.46844 327.760454,189.91099 326.618831,179.528252 C325.382718,168.286162 322.234889,157.328979 319.525081,146.348564 C319.125484,144.72936 317.350968,140.188846 317.321956,141.856377 C316.987647,161.071176 326.259693,185.336482 342.181331,196.825127 C345.345446,199.108271 349.252151,200.408571 353.103206,201.036064 C361.485786,202.401928 370.139636,204.09517 378.525081,202.747002 C393.357769,200.362279 392.392171,159.100994 391.564143,153.856377 C389.569826,141.224649 385.624178,128.953524 381.712581,116.778252 C381.058612,114.742703 380.921504,121.206029 381.712581,123.192314 C385.185316,131.911877 389.602676,140.253331 394.298518,148.379814 C397.164481,153.339564 400.668697,157.927328 404.329768,162.332939 C408.420084,167.25509 412.850376,171.905786 417.501643,176.301689 C420.837585,179.454481 424.36273,182.463715 428.236018,184.926689 C430.879399,186.607581 433.809738,187.984075 436.876643,188.622002 C439.854571,189.241421 443.161902,189.711775 446.001643,188.622002 C461.919858,182.51326 457.083196,138.263939 456.486018,132.731377 C453.063302,101.021591 442.507496,69.2139184 436.048518,37.9970019 C434.062607,28.3988876 431.871178,18.8268311 429.095393,9.42668936 C428.312056,6.77393469 427.419251,3.89615757 425.415706,1.98918936 C417.896457,-5.16760658 418.791701,9.18129749 418.751643,10.5907519 C418.366641,24.137366 418.038324,37.7137039 418.751643,51.2470019 C420.267419,80.0047363 431.703545,113.004016 445.868831,137.332939 C447.695114,140.469586 449.748058,143.499767 452.111018,146.254814 C453.902225,148.343237 455.933828,150.287987 458.251643,151.770439 C466.90493,157.304997 475.131479,164.079801 484.907893,167.231377 C491.666937,169.410257 499.304638,168.878349 506.212581,167.231377 C516.334579,164.818118 525.034076,148.838709 525.587581,139.262627 C526.049706,131.267484 526.647888,123.062438 524.900081,115.247002 C520.190231,94.1865969 485.797489,62.0580181 460.923518,72.0360644 C455.434155,74.2380897 451.577469,93.4058028 460.337581,94.9423144 C488.06094,99.8049537 495.951766,72.0256417 503.118831,50.2782519 C505.189667,43.9946058 506.582372,37.5074185 508.314143,31.1220019" id="Path-29"></path>
                <path d="M76.2750806,201.832939 C80.6652269,196.179755 84.0521575,192.711293 85.4000806,184.543877 C86.8194444,175.943584 88.1333788,166.988768 86.5407056,158.418877 C84.4383016,147.106215 52.8008225,152.737732 61.5641431,165.903252 C63.9035472,169.417841 67.9862721,171.435264 71.5641431,173.676689 C78.2070823,177.838285 84.9355969,181.975444 92.1422681,185.059502 C105.772842,190.892636 119.986018,195.257419 133.907893,200.356377" id="Path-30"></path>
                <path d="M134.931331,230.887627 C149.377596,223.099205 167.771825,203.161064 184.454768,203.161064" id="Path-31"></path>
              </g>
            </g>
          </svg>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/alex-bottenberg/" target="blank">
          <svg className="animate-on-scroll" width="867px" height="500px" viewBox="0 0 867 478" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <g id="Group-5" transform="translate(10.851562, 10.648438)" stroke="#000000" strokeWidth="20">
                <path d="M0,456.679688 C30.2716473,402.611391 40.6569182,365.989431 44.1484375,303.429688 C44.4258181,298.459685 52.0832675,268.215749 40.0703125,258.703125 C38.9331449,257.802643 37.3394575,257.562202 35.890625,257.492188 C18.3515582,256.644617 17.471403,289.618897 16.75,300.421875 C13.8696648,343.554766 23.9904989,376.246351 49.4375,412.3125 C53.2017118,417.647534 73.6204287,451.31563 87.9609375,443.265625 C126.147241,421.829849 120.850077,357.366411 119.351563,323.945313 C119.039056,316.975529 118.043861,296.603418 116.023438,303.28125 C107.051865,332.93377 130.890818,412.381193 172.804688,407.328125 C184.125717,405.96328 185.69265,377.299257 185.9375,370.382813 C186.57303,352.430516 186.958571,334.426687 185.9375,316.492188 C185.577215,310.163998 186.243813,302.461712 181.8125,297.929688 C175.473876,291.447004 183.233393,317.540077 183.507813,318.21875 C191.557811,338.127399 200.361983,357.728109 208.265625,377.695313 C210.45613,383.22925 210.784569,389.532898 213.773438,394.679688 C215.028905,396.841585 214.326391,389.617769 213.773438,387.179688 C211.083351,375.318557 206.548587,363.912042 204.09375,352 C201.912475,341.415415 200.553423,330.638703 199.898438,319.851563 C199.15205,307.559097 199.110423,295.196117 199.898438,282.90625 C200.030867,280.84088 201.353968,278.961455 202.625,277.328125 C204.17139,275.340948 205.897334,273.246068 208.203125,272.234375 C210.044129,271.426613 212.324486,271.606603 214.234375,272.234375 C226.878149,276.390328 270.442523,377.536984 309.875,338.953125 C313.095137,335.802288 315.389515,331.800133 317.695313,327.929688 C318.552174,326.491383 319.034147,324.819922 319.28125,323.164063 C320.223699,316.848621 321.182822,310.494397 321.25,304.109375 C321.40719,289.169051 321.766684,274.135365 319.953125,259.304688 C318.159862,244.639981 314.419103,230.245993 310.476563,216.007813 C304.19598,193.325975 297.022432,170.885084 289.3125,148.648438 C285.457797,137.530872 280.879782,126.65112 275.8125,116.03125 C274.800332,113.909977 272.058344,108.506047 271.203125,110.695313 C269.669429,114.621404 271.624218,119.229469 273.007813,123.210938 C280.698214,145.341047 290.591493,166.662183 298.335938,188.773438 C353.843772,347.254517 293.657139,193.662617 356.320313,354.867188 C356.650541,355.71672 356.713656,352.955027 356.320313,352.132813 C349.378795,337.622786 341.033892,323.795145 334.4375,309.125 C330.884464,301.223172 327.821863,293.018984 325.9375,284.5625 C324.298204,277.205807 324.243198,269.570297 323.945313,262.039063 C323.578495,252.765064 322.981975,243.426433 323.945313,234.195313 C324.450301,229.35629 325.918121,224.505371 328.304688,220.265625 C329.697044,217.792097 332.182479,215.786227 334.851562,214.820313 C346.874207,210.469438 350.065582,224.1598 350.742188,232.664063 C351.806435,246.040605 353.015061,268.253772 338.414063,276.726563 C335.355499,278.501411 326.475071,277.003801 328.328125,280.015625 C330.622551,283.744824 337.131292,280.460982 341.375,281.539063 C346.700726,282.892022 351.899222,284.844786 356.835938,287.257813 C368.663578,293.039069 379.761653,300.23456 391.5625,306.070313 C393.830962,307.192112 396.367442,307.860007 398.890625,308.054688 C405.002668,308.526273 411.248487,309.14337 417.28125,308.054688 C420.763305,307.42631 423.858555,305.233116 426.640625,303.046875 C431.790872,298.999644 436.921045,294.724087 440.882812,289.507813 C450.61429,276.69483 450.003096,244.507272 448.6875,232.976563 C448.009393,227.033211 445.122285,221.435488 442.046875,216.304688 C439.298426,211.719366 435.594407,207.64972 431.46875,204.25 C403.776236,181.430171 411.549242,228.669607 412.523438,238.851563 C415.268668,267.543774 450.099308,317.932807 480.898438,321.851563 C511.752592,325.777319 507.144838,283.098433 507.75,263.460938 C508.903252,226.037914 506.023114,188.50399 508.429688,151.140625 C508.59895,148.512734 512.665517,147.683976 515.242188,147.140625 C524.94885,145.093751 527.133424,145.851985 533.101563,151.648438 C533.348151,151.887933 533.444684,152.658911 533.101563,152.679688 C520.648835,153.433706 501.254252,149.973058 499.5,168.84375 C498.212292,182.695776 496.791205,196.78309 498.648438,210.570313 C501.000842,228.033455 529.886997,261.222916 551,254.242188 C554.163031,253.196374 557.520658,240.249709 557.578125,239.921875 C559.266246,230.291603 560.670625,220.576349 561.179688,210.8125 C564.726325,142.787846 540.521582,77.487039 511.429688,16.625 C510.64093,14.9748706 509.371611,13.4966075 507.875,12.4453125 C507.006538,11.8352607 505.746788,11.6034251 504.734375,11.921875 C500.237776,13.3362598 499.24209,27.9131404 503.578125,61.3359375 C510.630872,115.699556 555.417456,162.68255 592.140625,198.210938 C612.261679,217.677356 608.295066,215.295055 626.773438,217.5625" id="Path-33"></path>
                <path d="M94.359375,261.554687 C98.6512731,252.715306 112.785498,225.158345 110.820312,218.90625 C106.998747,206.748217 79.9282529,222.224758 86.6328125,227.015625 C92.4732457,231.189014 99.5956841,233.230771 106.320312,235.742187 C117.221889,239.81355 128.408854,243.075521 139.453125,246.742187" id="Path-34"></path>
                <path d="M596.5,0 C596.5,27.7325296 629.222406,67.9421354 635.484375,80.2265625 C647.940647,104.662675 660.107943,129.280656 670.945312,154.476562 C702.321766,227.423986 672.910629,178.288122 699.539062,219.921875" id="Path-35"></path>
                <path d="M712.679687,96.59375 C715.623473,126.877156 711.751562,96.6029318 743.679687,163.578125 C747.294548,171.160969 755.973273,194.850041 752.921875,187.023438 C748.326214,175.235915 742.781262,163.783329 739.046875,151.695312 C734.874075,138.188177 722.444705,78.2756251 749.15625,74.0859375 C751.543727,73.7114633 754.745199,72.3306059 756.40625,74.0859375 C774.037094,92.7175051 781.548113,122.320546 803.296875,137.585937 C824.532855,152.491409 840.956661,143.422152 844.039062,118.382812 C846.809211,95.8800038 844.763968,89.8896019 841.320312,71.5234375" id="Path-36"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;

