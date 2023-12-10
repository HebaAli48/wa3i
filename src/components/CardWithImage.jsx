import React from "react";
import Tag from "./Tag";
import ImageOnSVG from "./ImageOnShape";
const CardWithImage = ({ title ,image ,tagText,text,color }) => {
  return (
    <div className="w-[1000px] pl-10 pr-10 cursor-pointer  bg-white flex flex-row gap-x-16 items-center justify-center h-[430px] rounded-[4rem]  drop-shadow-lg ">
      <div className=" flex flex-col items-center justify-center bg-transparent  drop-shadow-lg rounded-3xl ">
        <svg
          className=""
          width="120"
          height="50"
          viewBox="0 0 228 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.2057 90.4351L22.2052 90.433L1.07897 73.2707C0.533231 72.8231 0.343901 71.8366 0.656811 71.0707C0.864711 70.5574 1.1808 70.3686 1.35052 70.3007C1.42795 70.271 1.5319 70.2413 1.65282 70.2413C1.85489 70.2413 2.04263 70.3134 2.21076 70.4555L26.2046 89.9472L22.2057 90.433V90.4351ZM203.657 89.9875V89.9854V89.9833L199.665 89.4996L225.11 68.8348C225.329 68.6545 225.537 68.6142 225.673 68.6142C225.791 68.6142 225.887 68.646 225.965 68.6736C226.259 68.7881 226.508 69.0575 226.664 69.4394C226.868 69.9464 226.82 70.4195 226.773 70.6571C226.741 70.8501 226.624 71.3317 226.241 71.6457L203.658 89.9854L203.657 89.9875ZM55.4103 86.4087L55.4098 86.4066L47.7594 73.7141C47.3494 73.0352 47.4078 72.0127 47.8893 71.4314C48.0919 71.1811 48.3529 71.0453 48.6249 71.0453C48.9575 71.0453 49.2789 71.2532 49.5064 71.6181L58.2106 86.0693L55.4109 86.4087H55.4103ZM171.776 86.1202H171.775L168.976 85.7829L177.508 71.6181C177.73 71.2532 178.051 71.0453 178.388 71.0453C178.66 71.0453 178.921 71.1811 179.124 71.4314C179.602 72.0084 179.661 73.0331 179.254 73.7141L171.776 86.118L171.776 86.1202ZM77.7299 83.7039L58.0255 36.0545C57.7115 35.2865 57.8966 34.2916 58.4376 33.8376C58.6174 33.687 58.8104 33.6085 59.0114 33.6085C59.1032 33.6085 59.1976 33.6276 59.292 33.6615C59.4638 33.7252 59.7831 33.9055 59.9963 34.4167L80.2496 83.3984L77.7304 83.7039L77.7299 83.7039ZM149.898 83.4705H149.896L149.896 83.4684L147.377 83.165L167.533 34.4167C167.746 33.9055 168.066 33.7251 168.237 33.6615C168.299 33.6403 168.395 33.6085 168.524 33.6085C168.663 33.6085 168.874 33.6488 169.092 33.8333C169.635 34.2852 169.817 35.2886 169.499 36.0651L149.898 83.4705ZM94.6159 81.6588L89.481 43.4901C89.403 42.9236 89.559 42.4888 89.6581 42.2809C89.7573 42.0708 89.9848 41.7038 90.3932 41.5978C90.4622 41.5744 90.5322 41.5702 90.5969 41.5702C91.1442 41.5702 91.6157 42.1239 91.718 42.8855L96.8975 81.3809L94.617 81.6588L94.6159 81.6588ZM132.438 81.3554H132.436V81.3533L130.157 81.0775L135.296 42.8855C135.398 42.1239 135.869 41.5702 136.417 41.5702C136.482 41.5702 136.551 41.5744 136.62 41.5978C137.031 41.7081 137.257 42.073 137.355 42.2809C137.454 42.4909 137.61 42.9237 137.532 43.4901L132.438 81.3554ZM112.725 79.4652L112.74 2.43409C112.74 1.64492 113.25 1 113.876 1C114.506 1 115.019 1.64491 115.019 2.43409L115.009 79.2446L114.778 79.2149L112.726 79.4653H112.725V79.4652Z"
            fill="#1B60AD"
          />
          <path
            d="M22.2057 90.4351L21.7207 90.5564L22.7057 90.4351H22.2057ZM22.2052 90.433L22.6903 90.3118L22.6499 90.15L22.5205 90.0449L22.2052 90.433ZM1.07897 73.2707L0.76188 73.6573L0.763705 73.6588L1.07897 73.2707ZM0.656811 71.0707L1.11967 71.2599L1.12025 71.2584L0.656811 71.0707ZM1.35052 70.3007L1.17149 69.8338L1.16484 69.8364L1.35052 70.3007ZM2.21076 70.4555L1.88792 70.8375L1.8955 70.8436L2.21076 70.4555ZM26.2046 89.9472L26.2649 90.4436L27.4338 90.3015L26.5199 89.5591L26.2046 89.9472ZM22.2057 90.433L22.1454 89.9367L21.7057 89.9901V90.433H22.2057ZM203.657 89.9875H203.157V91.487L204.057 90.2876L203.657 89.9875ZM203.657 89.9833H204.157V89.5402L203.717 89.4869L203.657 89.9833ZM199.665 89.4996L199.35 89.1115L198.435 89.8543L199.605 89.996L199.665 89.4996ZM225.11 68.8348L225.425 69.2229L225.428 69.2208L225.11 68.8348ZM225.965 68.6736L226.147 68.2076L226.139 68.2046L226.131 68.2018L225.965 68.6736ZM226.664 69.4394L227.128 69.2526L227.127 69.2498L226.664 69.4394ZM226.773 70.6571L226.283 70.5607L226.28 70.5744L226.773 70.6571ZM226.241 71.6457L226.557 72.0338L226.559 72.0323L226.241 71.6457ZM203.658 89.9854L203.343 89.5973L203.295 89.6361L203.258 89.6853L203.658 89.9854ZM55.4103 86.4087L54.9251 86.5294L55.0195 86.9087H55.4103V86.4087ZM55.4098 86.4066L55.895 86.2858L55.8769 86.2129L55.838 86.1484L55.4098 86.4066ZM47.7594 73.7141L48.1876 73.4559L48.1874 73.4556L47.7594 73.7141ZM47.8893 71.4314L48.2744 71.7504L48.278 71.746L47.8893 71.4314ZM49.5064 71.6181L49.9348 71.3601L49.9307 71.3535L49.5064 71.6181ZM58.2106 86.0693L58.2708 86.5656L59.0373 86.4727L58.6389 85.8113L58.2106 86.0693ZM55.4109 86.4087V86.9087H55.4411L55.471 86.905L55.4109 86.4087ZM171.776 86.1202V86.6202H172.163L172.26 86.2457L171.776 86.1202ZM171.775 86.1202L171.716 86.6166L171.745 86.6202H171.775V86.1202ZM168.976 85.7829L168.548 85.5249L168.149 86.1868L168.916 86.2793L168.976 85.7829ZM177.508 71.6181L177.08 71.358L177.079 71.3601L177.508 71.6181ZM179.124 71.4314L178.735 71.746L178.739 71.7507L179.124 71.4314ZM179.254 73.7141L179.682 73.9722L179.683 73.9705L179.254 73.7141ZM171.776 86.118L171.348 85.8599L171.311 85.9221L171.293 85.9925L171.776 86.118ZM77.7299 83.7039L77.2678 83.8949L77.3925 84.1964L77.7187 84.2037L77.7299 83.7039ZM58.0255 36.0545L57.5627 36.2437L57.5635 36.2455L58.0255 36.0545ZM58.4376 33.8376L58.1165 33.4543L58.1162 33.4546L58.4376 33.8376ZM59.292 33.6615L59.4657 33.1926L59.4612 33.191L59.292 33.6615ZM59.9963 34.4167L60.4584 34.2257L60.4578 34.2243L59.9963 34.4167ZM80.2496 83.3984L80.3098 83.8947L80.9631 83.8155L80.7116 83.2073L80.2496 83.3984ZM77.7304 83.7039L77.7192 84.2037L77.755 84.2045L77.7906 84.2002L77.7304 83.7039ZM149.898 83.4705V83.9705H150.232L150.36 83.6616L149.898 83.4705ZM149.896 83.4705L149.41 83.3497L149.256 83.9705H149.896V83.4705ZM149.896 83.4684L150.381 83.5892L150.518 83.0397L149.956 82.972L149.896 83.4684ZM147.377 83.165L146.915 82.974L146.664 83.5827L147.318 83.6614L147.377 83.165ZM167.533 34.4167L167.072 34.2243L167.071 34.2257L167.533 34.4167ZM168.237 33.6615L168.075 33.1882L168.063 33.1928L168.237 33.6615ZM169.092 33.8333L168.768 34.2145L168.772 34.2177L169.092 33.8333ZM169.499 36.0651L169.961 36.2561L169.961 36.2549L169.499 36.0651ZM94.6159 81.6588L94.1204 81.7255L94.1791 82.1619L94.6195 82.1588L94.6159 81.6588ZM89.481 43.4901L89.9765 43.4234L89.9763 43.4219L89.481 43.4901ZM89.6581 42.2809L90.1094 42.4961L90.1103 42.4944L89.6581 42.2809ZM90.3932 41.5978L90.5189 42.0817L90.5364 42.0772L90.5535 42.0714L90.3932 41.5978ZM91.718 42.8855L91.2225 42.9521L91.2225 42.9521L91.718 42.8855ZM96.8975 81.3809L96.958 81.8772L97.4605 81.816L97.393 81.3142L96.8975 81.3809ZM94.617 81.6588L94.6205 82.1588L94.6491 82.1586L94.6775 82.1551L94.617 81.6588ZM132.438 81.3554V81.8554H132.876L132.934 81.4221L132.438 81.3554ZM132.436 81.3554H131.936V81.8554H132.436V81.3554ZM132.436 81.3533H132.936V80.9102L132.496 80.8569L132.436 81.3533ZM130.157 81.0775L129.661 81.0109L129.594 81.513L130.097 81.5739L130.157 81.0775ZM135.296 42.8855L135.791 42.9522L135.791 42.9517L135.296 42.8855ZM136.62 41.5978L136.459 42.0714L136.475 42.0765L136.49 42.0807L136.62 41.5978ZM137.355 42.2809L136.902 42.4933L136.903 42.4953L137.355 42.2809ZM137.532 43.4901L137.037 43.4219L137.037 43.4234L137.532 43.4901ZM112.725 79.4652L112.225 79.4651V79.4652H112.725ZM112.74 2.43409L113.24 2.43419V2.43409H112.74ZM115.019 2.43409L115.519 2.43416V2.43409H115.019ZM115.009 79.2446L114.945 79.7405L115.509 79.8133L115.509 79.2447L115.009 79.2446ZM114.778 79.2149L114.842 78.719L114.78 78.711L114.718 78.7186L114.778 79.2149ZM112.726 79.4653V79.9653H112.756L112.787 79.9616L112.726 79.4653ZM112.725 79.4653H112.225V79.9653H112.725V79.4653ZM22.6908 90.3139L22.6903 90.3118L21.7201 90.5543L21.7207 90.5564L22.6908 90.3139ZM22.5205 90.0449L1.39424 72.8826L0.763705 73.6588L21.8899 90.8211L22.5205 90.0449ZM1.39606 72.8841C1.2368 72.7535 1.09777 72.5128 1.03694 72.1958C0.976919 71.8831 1.00341 71.5444 1.11967 71.2599L0.193955 70.8816C-0.00270036 71.3629 -0.0379965 71.9004 0.0548576 72.3843C0.146902 72.8639 0.375398 73.3403 0.761883 73.6573L1.39606 72.8841ZM1.12025 71.2584C1.2708 70.8867 1.47646 70.7888 1.5362 70.7649L1.16484 69.8364C0.885144 69.9483 0.458625 70.2281 0.19337 70.8831L1.12025 71.2584ZM1.52953 70.7675C1.57246 70.7511 1.61339 70.7413 1.65282 70.7413V69.7413C1.45041 69.7413 1.28344 69.7909 1.17151 69.8338L1.52953 70.7675ZM1.65282 70.7413C1.72572 70.7413 1.80133 70.7641 1.88798 70.8374L2.53354 70.0737C2.28393 69.8627 1.98406 69.7413 1.65282 69.7413V70.7413ZM1.8955 70.8436L25.8894 90.3353L26.5199 89.5591L2.52602 70.0674L1.8955 70.8436ZM26.1443 89.4509L22.1454 89.9367L22.266 90.9294L26.2649 90.4436L26.1443 89.4509ZM21.7057 90.433V90.4351H22.7057V90.433H21.7057ZM204.157 89.9875V89.9854H203.157V89.9875H204.157ZM204.157 89.9854V89.9833H203.157V89.9854H204.157ZM203.717 89.4869L199.725 89.0032L199.605 89.996L203.597 90.4797L203.717 89.4869ZM199.98 89.8877L225.425 69.2229L224.795 68.4467L199.35 89.1115L199.98 89.8877ZM225.428 69.2208C225.548 69.122 225.64 69.1142 225.673 69.1142V68.1142C225.434 68.1142 225.11 68.1869 224.792 68.4488L225.428 69.2208ZM225.673 69.1142C225.7 69.1142 225.727 69.1199 225.799 69.1453L226.131 68.2018C226.046 68.172 225.882 68.1142 225.673 68.1142V69.1142ZM225.784 69.1395C225.917 69.1912 226.081 69.3359 226.201 69.6289L227.127 69.2498C226.934 68.7791 226.602 68.385 226.147 68.2076L225.784 69.1395ZM226.2 69.6262C226.355 70.0095 226.319 70.3744 226.283 70.5607L227.264 70.7534C227.321 70.4646 227.382 69.8834 227.128 69.2526L226.2 69.6262ZM226.28 70.5744C226.253 70.7362 226.162 71.0639 225.924 71.259L226.559 72.0323C227.086 71.5995 227.229 70.9641 227.267 70.7397L226.28 70.5744ZM225.926 71.2575L203.343 89.5973L203.974 90.3735L226.557 72.0338L225.926 71.2575ZM203.258 89.6853L203.257 89.6874L204.057 90.2876L204.058 90.2855L203.258 89.6853ZM55.8955 86.288L55.895 86.2858L54.9246 86.5273L54.9251 86.5294L55.8955 86.288ZM55.838 86.1484L48.1876 73.4559L47.3312 73.9722L54.9816 86.6647L55.838 86.1484ZM48.1874 73.4556C48.0428 73.2162 47.9704 72.8944 47.9892 72.5646C48.0081 72.2334 48.1159 71.9417 48.2744 71.7504L47.5043 71.1124C47.1813 71.5024 47.0191 72.0126 46.9909 72.5077C46.9626 73.0041 47.066 73.5331 47.3314 73.9725L48.1874 73.4556ZM48.278 71.746C48.4036 71.5907 48.5302 71.5453 48.6249 71.5453V70.5453C48.1756 70.5453 47.7803 70.7714 47.5007 71.1168L48.278 71.746ZM48.6249 71.5453C48.7356 71.5453 48.9163 71.6168 49.0821 71.8826L49.9307 71.3535C49.6414 70.8896 49.1794 70.5453 48.6249 70.5453V71.5453ZM49.0781 71.8761L57.7823 86.3272L58.6389 85.8113L49.9347 71.3601L49.0781 71.8761ZM58.1504 85.5729L55.3507 85.9123L55.471 86.905L58.2708 86.5656L58.1504 85.5729ZM55.4109 85.9087H55.4103V86.9087H55.4109V85.9087ZM171.776 85.6202H171.775V86.6202H171.776V85.6202ZM171.835 85.6238L169.036 85.2865L168.916 86.2793L171.716 86.6166L171.835 85.6238ZM169.405 86.0408L177.936 71.8761L177.079 71.3601L168.548 85.5249L169.405 86.0408ZM177.935 71.8782C178.093 71.6181 178.272 71.5453 178.388 71.5453V70.5453C177.831 70.5453 177.367 70.8883 177.08 71.358L177.935 71.8782ZM178.388 71.5453C178.483 71.5453 178.609 71.5906 178.735 71.746L179.512 71.1168C179.233 70.7716 178.837 70.5453 178.388 70.5453V71.5453ZM178.739 71.7507C178.895 71.9392 179.003 72.2298 179.022 72.5622C179.041 72.8931 178.969 73.2167 178.825 73.4577L179.683 73.9705C179.946 73.5304 180.048 73.0012 180.02 72.5053C179.992 72.0108 179.831 71.5006 179.508 71.1121L178.739 71.7507ZM178.826 73.4559L171.348 85.8599L172.205 86.3762L179.682 73.9722L178.826 73.4559ZM171.293 85.9925L171.292 85.9946L172.26 86.2457L172.26 86.2436L171.293 85.9925ZM78.1919 83.5128L58.4876 35.8634L57.5635 36.2455L77.2678 83.8949L78.1919 83.5128ZM58.4883 35.8653C58.3713 35.5791 58.3436 35.2368 58.4025 34.9197C58.4623 34.5981 58.6007 34.3534 58.759 34.2206L58.1162 33.4546C57.7335 33.7757 57.5089 34.2555 57.4194 34.7369C57.329 35.2227 57.3657 35.7619 57.5627 36.2437L58.4883 35.8653ZM58.7587 34.2209C58.8671 34.13 58.9501 34.1085 59.0114 34.1085V33.1085C58.6708 33.1085 58.3677 33.2439 58.1165 33.4543L58.7587 34.2209ZM59.0114 34.1085C59.0343 34.1085 59.071 34.1134 59.1229 34.132L59.4612 33.191C59.3242 33.1418 59.1721 33.1085 59.0114 33.1085V34.1085ZM59.1183 34.1304C59.1774 34.1522 59.3818 34.2421 59.5348 34.6092L60.4578 34.2243C60.1845 33.5688 59.7503 33.2981 59.4657 33.1926L59.1183 34.1304ZM59.5343 34.6078L79.7875 83.5894L80.7116 83.2073L60.4584 34.2257L59.5343 34.6078ZM80.1894 82.902L77.6702 83.2075L77.7906 84.2002L80.3098 83.8947L80.1894 82.902ZM77.7416 83.204L77.7411 83.204L77.7187 84.2037L77.7192 84.2037L77.7416 83.204ZM149.898 82.9705H149.896V83.9705H149.898V82.9705ZM150.381 83.5913L150.381 83.5892L149.411 83.3476L149.41 83.3497L150.381 83.5913ZM149.956 82.972L147.437 82.6686L147.318 83.6614L149.836 83.9648L149.956 82.972ZM147.839 83.3561L167.995 34.6078L167.071 34.2257L146.915 82.974L147.839 83.3561ZM167.995 34.6092C168.148 34.2421 168.352 34.1521 168.411 34.1302L168.063 33.1928C167.779 33.2982 167.345 33.5688 167.072 34.2243L167.995 34.6092ZM168.399 34.1346C168.448 34.1177 168.481 34.1085 168.524 34.1085V33.1085C168.31 33.1085 168.15 33.1628 168.075 33.1884L168.399 34.1346ZM168.524 34.1085C168.562 34.1085 168.654 34.1173 168.768 34.2145L169.415 33.4521C169.095 33.1802 168.764 33.1085 168.524 33.1085V34.1085ZM168.772 34.2177C168.929 34.3483 169.067 34.5924 169.126 34.9171C169.185 35.2369 169.156 35.5839 169.036 35.8752L169.961 36.2549C170.16 35.7698 170.199 35.2269 170.11 34.7379C170.022 34.2537 169.798 33.7702 169.412 33.449L168.772 34.2177ZM169.037 35.874L149.436 83.2795L150.36 83.6616L169.961 36.2561L169.037 35.874ZM95.1114 81.5921L89.9765 43.4234L88.9855 43.5567L94.1204 81.7255L95.1114 81.5921ZM89.9763 43.4219C89.9157 42.9813 90.0376 42.6468 90.1094 42.4961L89.2069 42.0656C89.0804 42.3307 88.8904 42.866 88.9857 43.5582L89.9763 43.4219ZM90.1103 42.4944C90.1465 42.4177 90.2027 42.3207 90.2783 42.2382C90.3527 42.1571 90.4322 42.1042 90.5189 42.0817L90.2675 41.1138C89.6326 41.2787 89.3193 41.8275 89.206 42.0674L90.1103 42.4944ZM90.5535 42.0714C90.548 42.0732 90.5473 42.0727 90.5544 42.0719C90.5621 42.071 90.5747 42.0702 90.5969 42.0702V41.0702C90.5142 41.0702 90.3795 41.0746 90.233 41.1241L90.5535 42.0714ZM90.5969 42.0702C90.7754 42.0702 91.1348 42.2998 91.2225 42.9521L92.2136 42.8189C92.0965 41.9479 91.513 41.0702 90.5969 41.0702V42.0702ZM91.2225 42.9521L96.402 81.4476L97.393 81.3142L92.2136 42.8188L91.2225 42.9521ZM96.837 80.8846L94.5565 81.1625L94.6775 82.1551L96.958 81.8772L96.837 80.8846ZM94.6134 81.1588L94.6123 81.1588L94.6195 82.1588L94.6205 82.1588L94.6134 81.1588ZM132.438 80.8554H132.436V81.8554H132.438V80.8554ZM132.936 81.3554V81.3533H131.936V81.3554H132.936ZM132.496 80.8569L130.217 80.5812L130.097 81.5739L132.376 81.8497L132.496 80.8569ZM130.652 81.1442L135.791 42.9522L134.8 42.8188L129.661 81.0109L130.652 81.1442ZM135.791 42.9517C135.879 42.2998 136.238 42.0702 136.417 42.0702V41.0702C135.5 41.0702 134.917 41.948 134.8 42.8192L135.791 42.9517ZM136.417 42.0702C136.439 42.0702 136.451 42.071 136.459 42.0718C136.465 42.0726 136.464 42.0731 136.459 42.0714L136.78 41.1242C136.634 41.0747 136.5 41.0702 136.417 41.0702V42.0702ZM136.49 42.0807C136.581 42.1051 136.662 42.16 136.736 42.2407C136.812 42.3228 136.867 42.4185 136.902 42.4933L137.807 42.0684C137.694 41.827 137.383 41.2847 136.749 41.1148L136.49 42.0807ZM136.903 42.4953C136.976 42.6494 137.098 42.9819 137.037 43.4219L138.028 43.5583C138.123 42.8654 137.933 42.3324 137.806 42.0665L136.903 42.4953ZM137.037 43.4234L131.943 81.2888L132.934 81.4221L138.028 43.5567L137.037 43.4234ZM113.225 79.4653L113.24 2.43419L112.24 2.43399L112.225 79.4651L113.225 79.4653ZM113.24 2.43409C113.24 1.8058 113.629 1.5 113.876 1.5V0.5C112.871 0.5 112.24 1.48404 112.24 2.43409H113.24ZM113.876 1.5C114.13 1.5 114.519 1.80857 114.519 2.43409H115.519C115.519 1.48125 114.883 0.5 113.876 0.5V1.5ZM114.519 2.43402L114.509 79.2446L115.509 79.2447L115.519 2.43416L114.519 2.43402ZM115.073 78.7487L114.842 78.719L114.714 79.7108L114.945 79.7405L115.073 78.7487ZM114.718 78.7186L112.665 78.9689L112.787 79.9616L114.839 79.7112L114.718 78.7186ZM112.726 78.9653H112.725V79.9653H112.726V78.9653ZM113.225 79.4653V79.4652H112.225V79.4653H113.225Z"
            fill="#1B60AD"
          />
        </svg>

       <ImageOnSVG imageUrl={image} />
      </div>
      <div className=" flex flex-col items-end gap-y-5 justify-end">
        <p className="  font-bold text-[30px]  text-primary">
          {title}
        </p>
        <Tag text={tagText} color={color} />
        <p className=" w-[500px]   font-normal text-right text-[18px]  text-[#666666]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardWithImage;
