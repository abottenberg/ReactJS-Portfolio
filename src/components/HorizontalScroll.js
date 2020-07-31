import React, { useEffect } from 'react';
import About from './About';
import '../styles/_projects.scss';

const HorizontalScroll = ({ projects }) => {

  useEffect(() => {
    const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60)};
    const elementsToShowBottom = document.querySelectorAll('.show-on-scroll');

    const loop = () => {
      elementsToShowBottom.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visable');
        } else {
          element.classList.remove('is-visable');
        }
      });
      scroll(loop);
    };
    loop();

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

  const renderedProjects = projects.map((project, index) => {
    return (
      <div key={index}>
        <div className="video-container">
          <video className="video" loop autoPlay>
              <source src={project.video} type="video/mp4" />
          </video>
        </div>
        <div className="text show-on-scroll">
          <div className="title show-on-scroll">
            <h1>{project.title}</h1>
          </div>
          <div className="description show-on-scroll">
            <p>{project.description}</p>
          </div>
          <div className="link show-on-scroll">
            <a href={project.link} target="blank">{project.link === "" ? "" : "Link"}</a>
          </div>
        </div>

      </div>
    );
  });


  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="slide">
          <svg className="alex-bottenberg" width="1074px" height="870px" viewBox="0 0 1074 870" version="1.1">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Group" transform="translate(10.664062, 10.585546)" stroke="#EDA1FF" strokeWidth="20">
                    <path d="M0,222.523829 C4.27999928,171.459495 5.18571811,191.018166 36.0234375,128.992579 C42.5772596,115.810519 47.294588,101.78332 53.4921875,88.4300787 C56.8197151,81.2606452 61.4425085,60.2137206 64.578125,67.4691412 C89.1145904,124.243424 93.9894026,208.762819 133.1875,265.047266" id="Path"></path>
                    <path d="M44.828125,159.437891 C53.5770448,159.882335 112.828125,161.479917 112.828125,167.430079" id="Path-2"></path>
                    <path d="M205.125,40.6332037 C205.125,116.906918 207.958857,182.580752 242.882812,251.109766 C251.378729,267.780752 262.575722,291.072494 280.523438,299.094141" id="Path-3"></path>
                    <path d="M381.171875,176.617579 C418.618473,125.462347 424.855672,130.712392 422.921875,74.1488287 C422.783826,70.1109006 423.219243,65.7035805 421.328125,62.1332037 C405.046154,31.3933129 353.405991,15.7858477 343.03125,59.0628912 C325.644147,131.591195 327.646081,208.068126 379.195313,265.109766 C390.612391,277.743298 409.528249,286.222409 426.492188,286.945704 C435.676552,287.337299 445.063504,288.785075 454.070313,286.945704 C476.072628,282.45239 486.876283,252.390696 488.328125,233.680079" id="Path-4"></path>
                    <path d="M544.3125,264.836329 C551.494792,246.325911 557.016606,227.082208 565.859375,209.305079 C579.460612,181.961726 611.043373,140.856121 626.515625,114.242579 C640.514295,90.163718 630.201781,96.1048883 642.4375,90.3519537" id="Path-5"></path>
                    <path d="M564.671875,82.4144537 C619.32517,142.523569 677.087915,199.154396 732.171875,259.055079" id="Path-6"></path>
                    <path d="M862.1875,52.1410162 C864.313717,89.7041771 883.055012,123.583889 886.929688,160.883204 C889.698336,187.535428 890.54403,214.359834 893.117188,241.031641 C893.632793,246.376102 895.824518,251.48715 896.1875,256.844141 C897.967678,283.116493 891.966234,282.15156 901.703125,302.383204 C903.571644,306.265677 912.609215,307.898365 914.914062,308.031641 C926.142702,308.68093 938.058143,311.797813 948.65625,308.031641 C978.098864,297.568835 1015.32646,248.268929 1006.3125,214.492579 C1000.50737,192.740069 968.829502,179.490456 949.945312,177.000391 C940.556708,175.762412 924.398975,185.233689 921.546875,176.203516 C918.752029,167.354617 937.484998,166.631565 944.914062,161.070704 C949.470143,157.660351 953.569488,153.629631 957.367188,149.391016 C960.732774,145.634683 963.937456,141.637203 966.3125,137.187891 C985.499673,101.24341 972.971919,45.7137244 944.851562,17.9066412 C940.64824,13.7501459 935.775731,10.1090644 930.429688,7.5863287 C923.487289,4.31029142 916.000982,2.0838524 908.445312,0.726953705 C903.126752,-0.228189782 897.547803,-0.256343804 892.234375,0.726953705 C887.425981,1.61679017 882.137836,2.82468837 878.640625,6.2425787 C854.661258,29.6780641 850.877399,38.5792345 848.070312,66.8988287" id="Path-7"></path>
                    <path d="M149.585938,328.070704 C113.899704,316.922861 81.5538717,308.322538 43.6484375,311.859766 C28.3384194,313.288454 22.838183,345.750087 22.8359375,357.406641 C22.8340199,367.361136 22.0696714,377.434772 23.6796875,387.258204 C27.9407513,413.256868 51.2789971,448.469845 73.0703125,463.781641 C86.5551301,473.256828 104.036176,476.10675 120,477.172266 C154.596273,479.481417 174.089064,460.681549 177.78125,424.961329 C181.095501,392.897457 163.988398,363.51297 149.351562,336.437891 L149.585938,328.070704 Z" id="Path-8"></path>
                    <path d="M231.609375,303.266016 C231.609375,316.4431 229.07991,329.865239 231.609375,342.797266 C238.458636,377.814494 259.979061,511.401464 328.734375,499.914454 C337.809099,498.398332 354.565363,467.362235 352.734375,485.398829" id="Path-9"></path>
                    <path d="M235.070312,406.016016 C315.591606,402.739887 270.51849,406.880781 369.867188,389.633204" id="Path-10"></path>
                    <path d="M501.625,305.547266 C501.625,326.01862 500.849919,346.504652 501.625,366.961329 C508.506421,548.582318 501.018954,65.9096381 507.03125,431.742579 C507.556528,463.704409 505.081892,495.734362 507.03125,527.641016 C507.469057,534.806941 522.07496,540.302378 525.851562,541.625391 C548.190396,549.451097 591.641432,563.903714 600.453125,531.961329" id="Path-11"></path>
                    <path d="M473.796875,403.508204 C528.078034,412.719521 575.594468,415.988093 623.546875,444.930079" id="Path-12"></path>
                    <path d="M725.882813,443.297266 C776.769845,443.297266 815.008365,433.364799 849.359375,395.445704 C861.81893,381.691958 851.596995,371.155961 839.289063,362.555079 C821.688076,350.255368 798.626224,338.686049 776.234375,341.601954 C772.083604,342.142474 768.557799,345.071952 765.148438,347.500391 C757.726825,352.7867 750.71401,358.644452 743.867188,364.656641 C698.688604,404.327918 710.191437,460.170499 734.375,508.609766 C740.609804,521.097973 750.381255,540.209275 764.71875,544.820704 C776.693663,548.672245 800.566925,550.135032 811.632813,548.312891 C839.045776,543.798995 838.086515,542.722906 853.859375,530.859766" id="Path-13"></path>
                    <path d="M955.054688,566.492579 C948.744458,553.455358 930.646307,520.109986 927.265625,501.898829 C924.126597,484.989424 924.084293,467.635808 921.65625,450.609766 C919.828663,437.794274 916.316002,425.256134 914.507812,412.437891 C912.976075,401.579416 913.183623,390.522442 911.648438,379.664454 C911.344639,377.515764 907.723854,375.435531 909.03125,373.703516 C913.612269,367.634665 920.702927,363.933547 926.875,359.492579 C961.818741,334.349638 990.680994,383.351943 1007.10938,406.109766 C1016.18283,418.678992 1024.01251,459.662798 1024.50781,461.945704 C1033.29958,502.468101 1035.72396,540.742365 1052.28906,578.234766" id="Path-14"></path>
                    <path d="M52.078125,549.281641 C52.078125,569.435287 49.7013325,589.729575 52.078125,609.742579 C54.2542764,628.06615 61.6677865,645.393148 65.6328125,663.414454 C67.7695155,673.12591 69.1747142,682.995603 70.3671875,692.867579 C73.2747175,716.937773 74.032936,742.927935 87.4609375,764.219141 C108.017058,796.812568 124.786899,810.467276 163.546875,814.531641 C167.569093,814.95341 171.883728,815.926927 175.679687,814.531641 C179.905573,812.978327 183.33727,809.571944 186.289062,806.172266 C195.351738,795.734482 203.624555,784.607672 211.515625,773.258204 C214.895097,768.397619 218.241852,763.312448 220.015625,757.664454 C225.490739,740.230765 215.537198,721.346472 195.882813,720.328516 C145.080358,717.697313 112.904521,708.32291 92.0546875,758.133204" id="Path-15"></path>
                    <path d="M356.445312,658.305079 C365.830729,657.73737 375.505534,658.983255 384.601562,656.601954 C398.531305,652.955207 411.586874,646.472614 424.664063,640.445704 C441.24857,632.802368 481.254068,591.79729 440.054688,587.992579 C429.736613,587.039717 419.174632,586.200768 408.96875,587.992579 C380.389183,593.010192 360.828851,627.341929 358,653.586329 C351.553902,713.389388 430.541363,753.521244 480.523438,755.531641 C494.736821,756.103337 515.348338,759.410562 527.992188,748.719141 C531.937426,745.383116 535.061528,741.132833 538,736.883204 C540.681587,733.005082 542.643487,728.671705 544.765625,724.461329 C547.536014,718.964805 550.365023,713.480427 552.671875,707.773829 C555.830136,699.96105 558.317708,691.893621 561.140625,683.953516" id="Path-16"></path>
                    <path d="M641.585937,713.758204 C640.84375,704.901433 640.646583,695.981999 639.359375,687.187891 C634.703864,655.381795 616.04442,604.200392 663.132812,595.445704 C675.742117,593.101378 688.500549,591.417907 701.296875,590.555079 C712.726651,589.784394 724.208333,590.555079 735.664062,590.555079" id="Path-17"></path>
                    <path d="M874.34375,593.101954 C849.838542,593.310287 825.184768,591.024621 800.828125,593.726954 C797.336824,594.114308 794.988648,598.544008 794.28125,601.984766 C792.697991,609.685676 792.860368,617.838187 794.28125,625.570704 C801.776868,666.362263 817.993482,689.488023 859.710938,695.062891 C868.70723,696.265101 877.455882,696.926456 884.734375,690.961329 C909.238119,670.879159 913.867144,631.384976 909.382813,602.289454 C907.584938,590.62437 894.328325,577.196752 886.6875,569.969141 C886.180479,569.48954 884.773744,569.294834 884.59375,569.969141 C880.082122,586.87091 921.764702,626.531412 925.78125,631.961329 C954.048578,670.175551 953.064089,723.396964 951.984375,768.016016 C951.403637,792.014957 939.735597,818.908396 916.039062,828.539454 C880.332104,843.051947 822.88045,855.029596 784.671875,845.578516 C768.055196,841.468298 753.007838,832.402146 737.96875,824.226954 C707.398114,807.60887 688.107996,779.313514 692.640625,744.109766 C694.486729,729.771557 714.441525,718.375506 725.359375,711.039454" id="Path-18"></path>
                </g>
            </g>
          </svg>
        </div>
        <div className="slide turning">
          {renderedProjects[0]}
        </div>
        <div className="slide jokester">
          {renderedProjects[1]}
        </div>
        <div className="slide mister">
          {renderedProjects[2]}
        </div>
        <div className="slide about">
          <About />
        </div>
      </div>
    </div>
  );

};

export default HorizontalScroll;