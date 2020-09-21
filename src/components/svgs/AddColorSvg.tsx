import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface Props {
  size: number | string;
}

const AddColorSvg: React.FC<Props> = (props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 922 659" fill="none">
      <G clipPath="url(#clip0)">
        <Path d="M921.466 658.974H347.385V656.793H921.861L921.466 658.974Z" fill="#3F3D56" />
        <Path
          d="M4.70099 -7.62939e-06C3.45465 0.0014427 2.25979 0.497192 1.37849 1.37849C0.4972 2.25978 0.00145033 3.45465 0 4.70099V275.475C0.00146356 276.722 0.497217 277.917 1.37851 278.798C2.2598 279.679 3.45466 280.175 4.70099 280.176H541.549C542.795 280.175 543.99 279.679 544.872 278.798C545.753 277.917 546.249 276.722 546.25 275.475V4.70094C546.249 3.45462 545.753 2.25975 544.872 1.37846C543.99 0.497164 542.795 0.00140517 541.549 -6.10352e-05L4.70099 -7.62939e-06Z"
          fill="#E6E6E6"
        />
        <Path
          d="M12.2224 7.52155C10.9761 7.52301 9.78126 8.01876 8.89998 8.90004C8.0187 9.78132 7.52295 10.9762 7.52148 12.2225V267.954C7.52293 269.2 8.01868 270.395 8.89996 271.276C9.78124 272.158 10.9761 272.654 12.2224 272.655H534.028C535.274 272.654 536.469 272.158 537.35 271.276C538.231 270.395 538.727 269.2 538.729 267.954V12.2225C538.727 10.9762 538.231 9.78129 537.35 8.90001C536.469 8.01873 535.274 7.52299 534.028 7.52155H12.2224Z"
          fill="white"
        />
        <Path
          d="M168.764 172.055H57.8217C56.0768 172.053 54.404 171.359 53.1701 170.125C51.9363 168.891 51.2423 167.218 51.2404 165.473V54.531C51.2423 52.7861 51.9363 51.1133 53.1701 49.8794C54.404 48.6456 56.0768 47.9516 57.8217 47.9496H168.764C170.509 47.9516 172.182 48.6456 173.416 49.8794C174.649 51.1133 175.343 52.7861 175.345 54.531V165.473C175.343 167.218 174.649 168.891 173.416 170.125C172.182 171.359 170.509 172.053 168.764 172.055ZM57.8217 49.83C56.5754 49.8315 55.3805 50.3272 54.4992 51.2085C53.6179 52.0898 53.1221 53.2846 53.1207 54.531V165.473C53.1221 166.72 53.6179 167.915 54.4992 168.796C55.3805 169.677 56.5753 170.173 57.8217 170.174H168.764C170.01 170.173 171.205 169.677 172.086 168.796C172.968 167.915 173.464 166.72 173.465 165.473V54.531C173.464 53.2847 172.968 52.0898 172.086 51.2085C171.205 50.3272 170.01 49.8315 168.764 49.83H57.8217Z"
          fill="#3F3D56"
        />
        <Path
          d="M328.596 172.055H217.654C215.909 172.053 214.236 171.359 213.002 170.125C211.768 168.891 211.074 167.218 211.073 165.473V54.531C211.074 52.7861 211.768 51.1133 213.002 49.8794C214.236 48.6456 215.909 47.9516 217.654 47.9496H328.596C330.341 47.9516 332.014 48.6456 333.248 49.8794C334.482 51.1133 335.176 52.7861 335.177 54.531V165.473C335.176 167.218 334.482 168.891 333.248 170.125C332.014 171.359 330.341 172.053 328.596 172.055V172.055ZM217.654 49.83C216.408 49.8315 215.213 50.3272 214.331 51.2085C213.45 52.0898 212.954 53.2847 212.953 54.531V165.473C212.954 166.72 213.45 167.915 214.331 168.796C215.213 169.677 216.408 170.173 217.654 170.174H328.596C329.842 170.173 331.037 169.677 331.919 168.796C332.8 167.915 333.296 166.72 333.297 165.473V54.531C333.296 53.2847 332.8 52.0898 331.919 51.2085C331.037 50.3272 329.842 49.8315 328.596 49.83H217.654Z"
          fill="#E6E6E6"
        />
        <Path
          d="M226.116 58.2917C224.869 58.2932 223.674 58.7889 222.793 59.6702C221.912 60.5515 221.416 61.7464 221.415 62.9927V157.012C221.416 158.258 221.912 159.453 222.793 160.334C223.674 161.215 224.869 161.711 226.116 161.713H320.134C321.381 161.711 322.576 161.215 323.457 160.334C324.338 159.453 324.834 158.258 324.835 157.012V62.9927C324.834 61.7463 324.338 60.5515 323.457 59.6702C322.576 58.7889 321.381 58.2932 320.134 58.2917L226.116 58.2917Z"
          fill="#E6E6E6"
        />
        <Path
          d="M66.7534 58.2917C65.5071 58.2932 64.3122 58.7889 63.431 59.6702C62.5497 60.5515 62.0539 61.7464 62.0525 62.9927V157.012C62.0539 158.258 62.5497 159.453 63.431 160.334C64.3122 161.215 65.5071 161.711 66.7534 161.713H160.772C162.019 161.711 163.213 161.215 164.095 160.334C164.976 159.453 165.472 158.258 165.473 157.012V62.9927C165.472 61.7463 164.976 60.5515 164.095 59.6702C163.213 58.7889 162.019 58.2932 160.772 58.2917L66.7534 58.2917Z"
          fill="#3F3D56"
        />
        <Path
          d="M385.478 58.2917C384.231 58.2932 383.036 58.7889 382.155 59.6702C381.274 60.5515 380.778 61.7464 380.777 62.9927V157.012C380.778 158.258 381.274 159.453 382.155 160.334C383.036 161.215 384.231 161.711 385.478 161.713H479.497C480.743 161.711 481.938 161.215 482.819 160.334C483.7 159.453 484.196 158.258 484.198 157.012V62.9927C484.196 61.7463 483.7 60.5515 482.819 59.6702C481.938 58.7889 480.743 58.2931 479.497 58.2917L385.478 58.2917Z"
          fill="#6C63FF"
        />
        <Path
          d="M488.428 172.055H377.486C375.741 172.053 374.068 171.359 372.835 170.125C371.601 168.891 370.907 167.218 370.905 165.473V54.531C370.907 52.7861 371.601 51.1133 372.835 49.8795C374.068 48.6457 375.741 47.9517 377.486 47.9496H488.428C490.173 47.9517 491.846 48.6457 493.08 49.8795C494.314 51.1133 495.008 52.7861 495.01 54.531V165.473C495.008 167.218 494.314 168.891 493.08 170.125C491.846 171.359 490.173 172.053 488.428 172.055ZM377.486 49.83C376.24 49.8315 375.045 50.3272 374.164 51.2085C373.282 52.0898 372.786 53.2846 372.785 54.531V165.473C372.786 166.72 373.282 167.915 374.163 168.796C375.045 169.677 376.24 170.173 377.486 170.174H488.428C489.675 170.173 490.87 169.677 491.751 168.796C492.632 167.915 493.128 166.72 493.129 165.473V54.531C493.128 53.2847 492.632 52.0898 491.751 51.2085C490.869 50.3272 489.675 49.8315 488.428 49.83H377.486Z"
          fill="#6C63FF"
        />
        <Path
          opacity="0.8"
          d="M228.466 223.765C237.293 223.765 244.449 216.609 244.449 207.782C244.449 198.955 237.293 191.799 228.466 191.799C219.639 191.799 212.483 198.955 212.483 207.782C212.483 216.609 219.639 223.765 228.466 223.765Z"
          fill="#E6E6E6"
        />
        <Path
          opacity="0.4"
          d="M318.724 223.765C327.551 223.765 334.707 216.609 334.707 207.782C334.707 198.955 327.551 191.799 318.724 191.799C309.897 191.799 302.741 198.955 302.741 207.782C302.741 216.609 309.897 223.765 318.724 223.765Z"
          fill="#E6E6E6"
        />
        <Path
          opacity="0.6"
          d="M273.595 223.765C282.422 223.765 289.578 216.609 289.578 207.782C289.578 198.955 282.422 191.799 273.595 191.799C264.768 191.799 257.612 198.955 257.612 207.782C257.612 216.609 264.768 223.765 273.595 223.765Z"
          fill="#E6E6E6"
        />
        <Path
          opacity="0.8"
          d="M68.6339 223.765C77.4611 223.765 84.6171 216.609 84.6171 207.782C84.6171 198.955 77.4611 191.799 68.6339 191.799C59.8066 191.799 52.6506 198.955 52.6506 207.782C52.6506 216.609 59.8066 223.765 68.6339 223.765Z"
          fill="#3F3D56"
        />
        <Path
          opacity="0.4"
          d="M158.892 223.765C167.719 223.765 174.875 216.609 174.875 207.782C174.875 198.955 167.719 191.799 158.892 191.799C150.065 191.799 142.909 198.955 142.909 207.782C142.909 216.609 150.065 223.765 158.892 223.765Z"
          fill="#3F3D56"
        />
        <Path
          opacity="0.6"
          d="M113.763 223.765C122.59 223.765 129.746 216.609 129.746 207.782C129.746 198.955 122.59 191.799 113.763 191.799C104.936 191.799 97.7797 198.955 97.7797 207.782C97.7797 216.609 104.936 223.765 113.763 223.765Z"
          fill="#3F3D56"
        />
        <Path
          opacity="0.8"
          d="M388.298 223.765C397.125 223.765 404.281 216.609 404.281 207.782C404.281 198.955 397.125 191.799 388.298 191.799C379.471 191.799 372.315 198.955 372.315 207.782C372.315 216.609 379.471 223.765 388.298 223.765Z"
          fill="#6C63FF"
        />
        <Path
          opacity="0.4"
          d="M478.556 223.765C487.384 223.765 494.54 216.609 494.54 207.782C494.54 198.955 487.384 191.799 478.556 191.799C469.729 191.799 462.573 198.955 462.573 207.782C462.573 216.609 469.729 223.765 478.556 223.765Z"
          fill="#6C63FF"
        />
        <Path
          opacity="0.6"
          d="M433.427 223.765C442.255 223.765 449.411 216.609 449.411 207.782C449.411 198.955 442.255 191.799 433.427 191.799C424.6 191.799 417.444 198.955 417.444 207.782C417.444 216.609 424.6 223.765 433.427 223.765Z"
          fill="#6C63FF"
        />
        <Path
          d="M422.908 140.352L400.367 111.371L413.475 101.175L424.148 114.897L460.203 76.838L472.26 88.26L422.908 140.352Z"
          fill="white"
        />
        <Path
          d="M634.551 317.135C634.034 316.625 633.358 316.308 632.635 316.237C631.912 316.166 631.187 316.345 630.58 316.744L606.321 332.545C605.922 332.804 605.587 333.15 605.339 333.556C605.091 333.961 604.937 334.418 604.888 334.891C604.839 335.364 604.897 335.842 605.056 336.29C605.216 336.738 605.474 337.144 605.81 337.48L667.504 398.907C667.804 399.205 668.161 399.441 668.552 399.601C668.944 399.761 669.364 399.841 669.787 399.837C670.21 399.832 670.628 399.744 671.017 399.577C671.405 399.41 671.757 399.167 672.051 398.863L692.269 377.938C692.853 377.33 693.174 376.517 693.162 375.674C693.15 374.831 692.805 374.027 692.204 373.437L634.551 317.135Z"
          fill="#3F3D56"
        />
        <Path
          d="M611.1 334.235L613.61 332.634C613.346 333.105 613.249 333.652 613.335 334.186C613.421 334.719 613.685 335.208 614.084 335.572C614.483 335.936 614.994 336.155 615.533 336.191C616.072 336.228 616.608 336.081 617.053 335.775L633.299 324.606C633.669 324.352 633.959 324 634.138 323.589C634.317 323.179 634.377 322.726 634.311 322.283C634.245 321.84 634.056 321.424 633.766 321.083C633.475 320.743 633.094 320.49 632.667 320.355L633.961 319.531C634.129 319.424 634.328 319.377 634.526 319.399C634.724 319.422 634.908 319.511 635.048 319.653L689.701 373.362C689.783 373.445 689.847 373.543 689.89 373.651C689.933 373.758 689.955 373.874 689.952 373.99C689.95 374.106 689.925 374.22 689.878 374.326C689.831 374.432 689.764 374.528 689.679 374.607L669.83 393.948C669.666 394.103 669.447 394.188 669.221 394.185C668.995 394.182 668.779 394.091 668.619 393.931L610.953 335.585C610.861 335.493 610.79 335.382 610.747 335.259C610.704 335.136 610.688 335.004 610.702 334.875C610.716 334.745 610.759 334.62 610.828 334.51C610.897 334.399 610.99 334.305 611.1 334.235V334.235Z"
          fill="white"
        />
        <Path
          d="M674.178 361.503L657.412 377.311L617.533 337.91L637.772 324.737L674.178 361.503Z"
          fill="#6C63FF"
        />
        <Path
          d="M619.083 347.634C619.192 347.525 619.253 347.378 619.253 347.224C619.253 347.07 619.192 346.922 619.083 346.814L615.596 343.326C615.485 343.221 615.338 343.162 615.185 343.162C615.033 343.162 614.886 343.221 614.775 343.326C614.667 343.435 614.606 343.583 614.606 343.736C614.606 343.89 614.667 344.038 614.775 344.147L618.263 347.634C618.373 347.74 618.52 347.798 618.673 347.798C618.826 347.798 618.973 347.74 619.083 347.634V347.634Z"
          fill="#E6E6E6"
        />
        <Path
          d="M624.958 352.688L621.471 349.201C621.362 349.092 621.214 349.031 621.06 349.031C620.906 349.031 620.759 349.092 620.65 349.201C620.541 349.31 620.48 349.457 620.48 349.611C620.48 349.765 620.541 349.913 620.65 350.022L624.137 353.509C624.191 353.563 624.255 353.606 624.326 353.635C624.396 353.664 624.471 353.679 624.548 353.679C624.624 353.679 624.699 353.664 624.77 353.635C624.84 353.606 624.904 353.563 624.958 353.509C625.012 353.455 625.055 353.391 625.084 353.321C625.113 353.25 625.128 353.175 625.128 353.099C625.128 353.022 625.113 352.947 625.084 352.877C625.055 352.806 625.012 352.742 624.958 352.688V352.688Z"
          fill="#E6E6E6"
        />
        <Path
          d="M673.791 378.988C675.954 378.988 677.708 377.235 677.708 375.072C677.708 372.909 675.954 371.155 673.791 371.155C671.628 371.155 669.875 372.909 669.875 375.072C669.875 377.235 671.628 378.988 673.791 378.988Z"
          fill="#6C63FF"
        />
        <Path
          d="M787.305 383.096L784.286 397.812C783.853 399.924 783.988 402.114 784.679 404.158C785.369 406.201 786.589 408.025 788.215 409.442C789.841 410.859 791.814 411.819 793.933 412.224C796.051 412.628 798.239 412.463 800.273 411.746V411.746C803.217 410.706 805.65 408.576 807.069 405.794C808.488 403.013 808.785 399.793 807.898 396.799L803.837 383.096L840.576 275.635H809.348L787.305 383.096Z"
          fill="#FFB8B8"
        />
        <Path
          d="M754.24 169.093C769.965 169.093 782.713 156.345 782.713 140.621C782.713 124.896 769.965 112.148 754.24 112.148C738.515 112.148 725.768 124.896 725.768 140.621C725.768 156.345 738.515 169.093 754.24 169.093Z"
          fill="#FFB8B8"
        />
        <Path
          d="M749.648 191.136L787.305 186.544C778.666 175.712 775.4 164.403 778.12 152.561L744.137 156.234L749.648 191.136Z"
          fill="#FFB8B8"
        />
        <Path
          d="M702.806 350.031L791.898 329.825C810.94 315.015 823.311 285.638 832.867 250.115C839.831 224.227 827.319 196.666 802.727 185.992C802.139 185.737 801.546 185.492 800.946 185.256L780.876 177.359L747.811 180.115L736.014 183.332C733.512 184.014 731.263 185.409 729.539 187.346C727.815 189.284 726.692 191.68 726.305 194.244C710.445 252.44 699.99 306.415 702.806 350.031Z"
          fill="#6C63FF"
        />
        <Path d="M804.756 293.086H844.25L831.391 215.935L804.756 218.69V293.086Z" fill="#6C63FF" />
        <Path
          d="M671.578 627.408H695.458L745.515 451.521L764.832 627.408H792.816L803.838 345.439C799.631 323.805 799.721 298.022 802.001 270.124C821.696 256.336 814.483 223.604 816.663 190.718C816.684 190.399 816.582 190.083 816.378 189.836L803.686 183.239C803.515 183.042 803.286 182.903 803.032 182.843C802.777 182.783 802.51 182.805 802.269 182.906C802.028 183.007 801.825 183.181 801.689 183.404C801.552 183.627 801.49 183.888 801.51 184.148C801.188 207.142 807.386 234.487 797.408 252.673C786.567 215.615 772.438 184.5 744.932 177.552C744.412 177.424 743.867 177.434 743.352 177.583L738.231 179.047C737.662 179.211 737.154 179.537 736.768 179.985C736.382 180.433 736.135 180.984 736.057 181.571C735.979 182.157 736.074 182.754 736.33 183.287C736.586 183.82 736.992 184.267 737.499 184.574C762.662 200.12 778.926 226.149 779.957 270.124C760.378 297.833 741.311 314.235 706.988 334.407C705.26 335.426 703.795 336.838 702.713 338.528C701.631 340.218 700.962 342.138 700.759 344.135L671.578 627.408Z"
          fill="#2F2E41"
        />
        <Path
          d="M757.93 166.487L778.12 162.664L790.132 142.144C793.046 137.165 794.307 131.39 793.733 125.649C793.16 119.909 790.78 114.497 786.938 110.194V110.194C783.944 106.84 780.167 104.279 775.943 102.737C771.72 101.195 767.181 100.721 762.731 101.357L736.564 105.095C734.307 105.417 732.137 106.183 730.178 107.348C728.219 108.512 726.509 110.053 725.148 111.881C723.787 113.709 722.801 115.789 722.247 118C721.693 120.211 721.582 122.509 721.92 124.763L739.545 127.762L757.93 166.487Z"
          fill="#2F2E41"
        />
        <Path
          d="M643.62 658.176H685.682C687.668 658.176 689.63 657.749 691.436 656.923C693.242 656.097 694.849 654.892 696.148 653.39C697.447 651.888 698.408 650.124 698.964 648.217C699.521 646.311 699.661 644.307 699.374 642.342L696.734 624.237L677.643 622.823L639.705 640.568C637.979 641.376 636.544 642.698 635.598 644.353C634.652 646.008 634.241 647.915 634.422 649.813C634.64 652.101 635.703 654.226 637.404 655.773C639.105 657.319 641.321 658.176 643.62 658.176V658.176Z"
          fill="#2F2E41"
        />
        <Path
          d="M739.141 658.176H781.202C783.188 658.176 785.151 657.749 786.957 656.923C788.763 656.097 790.37 654.892 791.669 653.39C792.968 651.888 793.928 650.124 794.485 648.217C795.042 646.311 795.181 644.307 794.895 642.342L792.255 624.237L773.164 622.823L735.226 640.568C733.499 641.376 732.064 642.698 731.119 644.353C730.173 646.008 729.762 647.915 729.943 649.813V649.813C730.161 652.101 731.224 654.226 732.925 655.773C734.626 657.319 736.842 658.176 739.141 658.176V658.176Z"
          fill="#2F2E41"
        />
        <Path
          d="M659.198 349.294L641.002 355.62C638.82 356.378 636.883 357.709 635.393 359.475C633.903 361.24 632.916 363.373 632.535 365.651C632.154 367.929 632.393 370.268 633.227 372.422C634.062 374.576 635.46 376.465 637.277 377.892V377.892C639.381 379.546 641.948 380.502 644.621 380.628C647.295 380.753 649.94 380.043 652.191 378.595L668.776 367.92L725.408 310.355L734.185 242.695C735.303 234.077 734.223 225.317 731.046 217.229C727.868 209.14 722.697 201.987 716.013 196.435V196.435L697.544 299.502L659.198 349.294Z"
          fill="#FFB9B9"
        />
        <Path
          d="M698.214 279.309H738.626L737.708 182.87C728.113 185.269 719.531 190.659 713.204 198.261C706.877 205.863 703.134 215.281 702.517 225.152L698.214 279.309Z"
          fill="#6C63FF"
        />
        <Path
          d="M745.93 150.487C748.692 150.487 750.93 147.801 750.93 144.487C750.93 141.173 748.692 138.487 745.93 138.487C743.169 138.487 740.93 141.173 740.93 144.487C740.93 147.801 743.169 150.487 745.93 150.487Z"
          fill="#FFB8B8"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="921.861" height="658.974" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default React.memo(AddColorSvg);