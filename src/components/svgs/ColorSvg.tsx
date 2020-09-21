import React from 'react';
import Svg, { ClipPath, Path, Rect, G, Defs } from 'react-native-svg';

interface Props {
  size: number | string;
}

const ColorSvg: React.FC<Props> = (props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 1106 701" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M53.5465 614.887C63.2498 650.757 96.4859 672.971 96.4859 672.971C96.4859 672.971 113.99 637.031 104.286 601.161C94.5831 565.292 61.3471 543.077 61.3471 543.077C61.3471 543.077 43.8432 579.018 53.5465 614.887Z"
          fill="#3F3D56"
        />
        <Path
          d="M98.9448 674.17L97.6199 674.097C97.2163 674.076 56.9616 671.594 30.3319 645.672C3.70345 619.751 0.140741 579.577 0.107941 579.173L-6.10352e-05 577.852L1.32486 577.924C1.72844 577.945 41.9832 580.427 68.6122 606.349C95.2413 632.272 98.804 672.445 98.8368 672.848L98.9448 674.17ZM2.56393 580.346C3.43723 587.518 8.69453 621.378 31.9474 644.013C55.2003 666.65 89.1876 670.994 96.3809 671.675C95.5076 664.502 90.2503 630.644 66.9969 608.008C43.727 585.355 9.75379 581.024 2.56393 580.346Z"
          fill="#3F3D56"
        />
        <Path
          d="M886.161 656.062C900.261 656.062 911.692 644.632 911.692 630.531C911.692 616.431 900.261 605 886.161 605C872.06 605 860.629 616.431 860.629 630.531C860.629 644.632 872.06 656.062 886.161 656.062Z"
          fill="#3F3D56"
        />
        <Path d="M549.805 378.44H201.525V674.29H549.805V378.44Z" fill="#D0CDE1" />
        <Path
          d="M495.517 634.982H143.463V335.356H495.517V634.982ZM147.243 631.203H491.737V339.136H147.243V631.203Z"
          fill="#3F3D56"
        />
        <Path
          d="M368.575 257.4L361.436 265.836C360.792 266.546 360.006 267.114 359.129 267.503C358.253 267.891 357.304 268.092 356.345 268.092C355.386 268.092 354.437 267.891 353.56 267.503C352.684 267.114 351.898 266.546 351.253 265.836L344.115 257.4V198.788H368.575V257.4Z"
          fill="#536DFE"
        />
        <Path
          d="M395.265 151.227H382.126C385.699 146.03 387.608 139.869 387.6 133.561C387.6 116.3 373.606 86 356.345 86C339.084 86 325.09 116.3 325.09 133.561C325.082 139.869 326.99 146.03 330.564 151.227H317.425C314.775 151.235 312.236 152.291 310.362 154.164C308.489 156.038 307.432 158.577 307.425 161.227V168.405C307.432 171.055 308.489 173.594 310.362 175.467C312.236 177.341 314.775 178.397 317.425 178.405H395.265C397.915 178.397 400.454 177.341 402.328 175.467C404.201 173.594 405.257 171.055 405.265 168.405V161.227C405.257 158.577 404.201 156.038 402.328 154.164C400.454 152.291 397.915 151.235 395.265 151.227V151.227Z"
          fill="#3F3D56"
        />
        <Path
          d="M356.345 276.316C354.707 276.323 353.089 275.945 351.624 275.212C350.159 274.48 348.886 273.413 347.908 272.098L337 257.554V157.021H375.69V257.554L364.781 272.098C363.804 273.413 362.531 274.48 361.066 275.212C359.6 275.945 357.983 276.323 356.345 276.316V276.316ZM339 256.887L349.508 270.898C350.304 271.959 351.336 272.821 352.523 273.414C353.71 274.008 355.018 274.316 356.345 274.316C357.672 274.316 358.98 274.008 360.167 273.414C361.354 272.821 362.386 271.959 363.182 270.898L373.69 256.887V159.021H339V256.887Z"
          fill="#3F3D56"
        />
        <Path
          d="M368.345 309C368.345 312.183 367.081 315.235 364.83 317.485C362.58 319.736 359.528 321 356.345 321C353.162 321 350.11 319.736 347.86 317.485C345.609 315.235 344.345 312.183 344.345 309C344.345 302.373 356.345 289 356.345 289C356.345 289 368.345 302.373 368.345 309Z"
          fill="#536DFE"
        />
        <Path
          opacity="0.2"
          d="M495.345 379C495.205 415.774 480.499 450.994 454.447 476.948C428.394 502.901 393.119 517.474 356.345 517.474C319.571 517.474 284.295 502.901 258.243 476.948C232.191 450.994 217.484 415.774 217.345 379H495.345Z"
          fill="#536DFE"
        />
        <Path
          d="M471.335 378.44C471.221 408.863 459.056 438.001 437.504 459.473C415.951 480.946 386.768 493.002 356.345 493.002C325.922 493.002 296.738 480.946 275.186 459.473C253.633 438.001 241.468 408.863 241.355 378.44H471.335Z"
          fill="#536DFE"
        />
        <Path
          d="M266.345 64C284.018 64 298.345 49.6731 298.345 32C298.345 14.3269 284.018 0 266.345 0C248.672 0 234.345 14.3269 234.345 32C234.345 49.6731 248.672 64 266.345 64Z"
          fill="#3F3D56"
        />
        <Path
          d="M356.345 64C374.018 64 388.345 49.6731 388.345 32C388.345 14.3269 374.018 0 356.345 0C338.672 0 324.345 14.3269 324.345 32C324.345 49.6731 338.672 64 356.345 64Z"
          fill="#536DFE"
        />
        <Path
          d="M446.345 64C464.018 64 478.345 49.6731 478.345 32C478.345 14.3269 464.018 0 446.345 0C428.672 0 414.345 14.3269 414.345 32C414.345 49.6731 428.672 64 446.345 64Z"
          fill="#D0CDE1"
        />
        <Path d="M688.145 672.996H35.2515V675.312H688.145V672.996Z" fill="#3F3D56" />
        <Path
          d="M910.361 675V250H1105.33V675H910.361ZM913.167 252.805V672.195H1102.52V252.805H913.167Z"
          fill="#3F3D56"
        />
        <Path d="M1070.26 620.297V306.106H944.025V620.297H1070.26Z" fill="#D0CDE1" />
        <Path d="M1045.01 412.706V336.964H969.272V412.706H1045.01Z" fill="#536DFE" />
        <Path
          d="M1029.92 542.813L1061.51 524.579L1043.27 492.996L1011.69 511.23L1029.92 542.813Z"
          fill="#FF6584"
        />
        <Path d="M1001.53 586.634V463.201H965.064V586.634H1001.53Z" fill="#3F3D56" />
        <Path
          d="M789.169 400.407L734.439 516.558L772.75 537.842L840.86 421.691L789.169 400.407Z"
          fill="#FFB8B8"
        />
        <Path
          opacity="0.1"
          d="M789.169 400.407L734.439 516.558L772.75 537.842L840.86 421.691L789.169 400.407Z"
          fill="black"
        />
        <Path
          d="M736.871 500.747L671.194 635.749L634.099 672.845C634.099 672.845 583.017 673.453 603.085 692.913C623.153 712.373 685.181 689.264 685.181 689.264L683.356 696.561L723.492 692.913L722.276 678.318L718.628 676.493C718.628 676.493 721.06 648.52 714.979 643.047C708.898 637.574 725.925 630.884 725.925 630.884L795.859 509.26L736.871 500.747Z"
          fill="#2F2E41"
        />
        <Path
          d="M755.723 391.893C755.723 391.893 697.343 425.948 712.546 456.962C727.749 487.976 732.614 490.409 732.614 490.409L763.628 467.908L758.155 455.138L818.967 419.867C818.967 419.867 772.142 383.987 755.723 391.893Z"
          fill="#FFB8B8"
        />
        <Path
          d="M719.236 486.152L802.548 619.33L811.062 656.425C811.062 656.425 780.656 694.737 803.156 697.169C825.657 699.602 851.198 663.723 852.414 647.304C853.63 630.884 855.455 620.546 855.455 620.546L861.536 622.979C861.536 622.979 879.779 593.789 870.658 590.14C865.301 587.984 859.818 586.156 854.238 584.667C854.238 584.667 840.86 576.153 828.089 579.194C828.089 579.194 830.522 569.464 828.089 565.207C825.657 560.95 760.713 453.654 760.713 453.654L719.236 486.152Z"
          fill="#2F2E41"
        />
        <Path
          d="M862.752 127.969C881.224 127.969 896.199 112.994 896.199 94.5221C896.199 76.05 881.224 61.0754 862.752 61.0754C844.28 61.0754 829.305 76.05 829.305 94.5221C829.305 112.994 844.28 127.969 862.752 127.969Z"
          fill="#FFB8B8"
        />
        <Path
          d="M853.63 115.806C853.63 115.806 865.793 150.469 862.752 160.199C859.711 169.929 835.387 215.538 835.387 215.538L838.427 236.822L899.239 143.172C899.239 143.172 884.036 123.104 888.293 109.117L853.63 115.806Z"
          fill="#FFB8B8"
        />
        <Path
          d="M876.131 374.866L858.495 447.232C858.495 447.232 770.926 394.934 746.601 396.758C746.601 396.758 799.507 336.554 819.575 336.554C839.643 336.554 876.131 374.866 876.131 374.866Z"
          fill="#2F2E41"
        />
        <Path
          d="M919.915 148.037C919.915 148.037 905.929 125.536 888.901 144.996C871.874 164.456 840.86 215.538 840.86 215.538L843.032 201C843.032 201 823.832 215.538 822.616 234.39C821.4 253.242 816.535 316.486 816.535 316.486L808.629 343.243L884.036 387.028L896.199 366.352C896.199 366.352 941.808 374.866 946.673 369.393C951.538 363.919 918.345 275 918.345 275L919.915 148.037Z"
          fill="#575A89"
        />
        <Path
          d="M853.63 274.526L817.143 325C817.143 325 773.358 342.027 780.656 356.014C787.953 370.001 825.049 334.73 825.049 334.73L879.779 286.688L853.63 274.526Z"
          fill="#FFB8B8"
        />
        <Path
          opacity="0.1"
          d="M889.509 153.51C889.509 153.51 862.752 196.078 861.536 228.309C860.32 260.539 860.624 257.194 860.624 257.194L847.245 276.046L878.867 293.682L894.982 276.958C894.982 276.958 930.862 266.62 926.605 236.822C922.348 207.025 919.915 151.686 913.834 151.686C907.753 151.686 889.509 153.51 889.509 153.51Z"
          fill="black"
        />
        <Path
          d="M890.726 147.429C890.726 147.429 863.968 189.997 862.752 222.227C861.536 254.458 864.576 255.066 864.576 255.066L848.157 276.958L878.563 293.378L896.199 270.877C896.199 270.877 932.078 260.539 927.821 230.741C923.564 200.943 921.132 145.604 915.05 145.604C908.969 145.604 890.726 147.429 890.726 147.429Z"
          fill="#575A89"
        />
        <Path
          d="M823.809 87.9128C823.809 87.9128 813.51 38.1574 867.453 50.6066C867.453 50.6066 904.551 40.8255 920.489 86.9466L936.756 135.327L930.414 132.478L928.049 138.9L918.373 142.154L913.51 134.096L912.246 144.429L832.045 158.666C832.045 158.666 866.604 134.492 864.245 96.0831L857.907 103.896L823.809 87.9128Z"
          fill="#2F2E41"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="1105.33" height="700.707" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default React.memo(ColorSvg);