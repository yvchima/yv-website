<template>
  <VueSlickCarousel v-bind="settings" class="py-3">
    <figure v-for="logo in logos" :key="logo" class="gray">
      <div class="w-28 h-36 flex items-center">
        <LazyImage
          :src="require(`~/assets/images/logos/trusted/${logo}.svg`)"
          alt=""
        />
      </div>
    </figure>
  </VueSlickCarousel>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "mtn",
        "workpay",
        "fidelity",
        "chipper",
        // "lipalater",
        "sikafx",
        "mwananchi",
        "pesakit",
        "expedier",
        "leadway",
        "wema",
        "standard_chartered",
        "sterling",
        "pesapeer",
        "swapmoney",
      ],
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.gray {
  filter: grayscale(95%);
}
</style>
