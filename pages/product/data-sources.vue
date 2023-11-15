<template>
  <div class="pt-12">
    <HeroSection
      class="mt-28"
      tag="Data Sources"
      title="Data Sources"
      intro="Youverify’s expansive data coverage empowers businesses to make informed decisions and mitigate risks seamlessly on a global scale."
    >
      <!-- <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton text="Get started" href="/product/kyc/pricing" />
      </div> -->
      <div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-data-sources.svg"
        />
      </div>
    </HeroSection>
    <!-- <TrustedClients /> -->
    <div
      v-if="loading"
      class="min-h-screen relative flex items-center justify-start pt-20 pb-32 md:pt-20 md:pb-20"
    >
      <section
        class="w-full flex justify-center items-center max-w-screen-xl mx-auto sm:px-8 px-6"
      >
        <div class="flex justify-center items-center">
          <div
            class="animate-spin rounded-full border-blue h-20 w-20 border-t-4 border-b-4"
          ></div>
        </div>
      </section>
    </div>
    <!-- <div v-else> -->
    <div v-if="false">
      <div class="relative bg-blue-300">
        <div id="chartMaps" class="w-4/5 mx-auto"></div>
        <div class="absolute bottom-7 left-7 bg-white rounded-md flex flex-col">
          <button
            class="flex justify-center items-center border h-10 w-10"
            type="button"
            id="zoom-in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>
          <button
            class="flex justify-center items-center border h-10 w-10"
            type="button"
            id="zoom-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
        <div
          class="absolute bottom-7 right-7 bg-white rounded-lg flex overflow-hidden"
        >
          <div
            @click="selectedRegion = region"
            v-for="region in regions"
            :key="region"
            class="text-sm px-4 py-2.5 text-blue-900 font-semibold border-r border-gray-300 cursor-pointer transition-colors duration-200 ease-in-out"
            :class="{ 'bg-blue': region === selectedRegion }"
          >
            {{ region }}
          </div>
        </div>
      </div>

      <div class="pt-5 pb-12">
        <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
          <div class="flex items-center justify-center flex-col">
            <div class="w-full md:w-3/6 mb-5 md:mb-10">
              <div
                class="inline-flex flex-col justify-center relative text-gray-500 w-full"
              >
                <div class="relative">
                  <input
                    type="text"
                    class="p-2 w-full pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    @focus="handleFocus"
                    placeholder="Search Countries..."
                    v-model="tempCountry"
                  />
                  <svg
                    class="w-4 h-4 absolute left-2.5 top-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <ul class="bg-white border border-gray-100 w-full mt-2">
                  <li
                    v-for="post in filteredList"
                    :key="post.id"
                    @click="selectedCountry(post)"
                    class="pl-8 pr-2 py-3 border-gray-100 relative cursor-pointer hover:bg-gray-100 hover:text-white"
                  >
                    <h4 class="text-xl font-semibold text-gray-500">
                      {{ post.country }}
                    </h4>
                  </li>
                  <li
                    v-if="showDropDownWorldWide"
                    @click="selectedCountry()"
                    class="pl-8 pr-2 py-3 border-gray-100 relative cursor-pointer hover:bg-gray-100 hover:text-white"
                  >
                    <h1 class="text-xl font-semibold text-gray-500">
                      Worldwide
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="border border-gray-400 w-full md:w-3/6 rounded-md mt-3 p-4"
            >
              <div class="flex items-center justify-between mb-4">
                <h3 class="">
                  {{ filteredSelectedList.country || "Worldwide" }}
                </h3>
              </div>
              <div class="py-4 grid grid-cols-2 gap-10">
                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    Identity Data Source
                  </p>
                  <div>
                    <h5
                      class="mt-2 font-bold cursor-default"
                      v-for="item in filteredSelectedList.IdentityDataSources"
                      :key="item.id"
                    >
                      <abbr :title="item.title">{{ item.abbreviation }}</abbr>
                      <!-- {{ item.title }} -->
                    </h5>
                  </div>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    Address verification
                  </p>
                  <div>
                    <h5
                      class="mt-2 font-bold"
                      v-for="item in filteredSelectedList.AddressVerification"
                      :key="item.id"
                    >
                      {{ item.title }}
                    </h5>
                  </div>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    University Certificate
                  </p>
                  <div>
                    <h5
                      class="mt-2 font-bold"
                      v-for="item in filteredSelectedList.UniversityCertificate"
                      :key="item.id"
                    >
                      <abbr :title="item.title">{{ item.abbreviation }}</abbr>
                    </h5>
                  </div>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">PEP/Sanction</p>
                  <div>
                    <h5
                      class="mt-2 font-bold"
                      v-for="item in filteredSelectedList.PEPSanctionList"
                      :key="item.id"
                    >
                      <abbr :title="item.title">{{ item.abbreviation }}</abbr>
                    </h5>

                    <div v-if="!filteredSelectedList.country">
                      <h5
                        class="mt-2 font-bold"
                        v-for="item in worldWideSanctionList"
                        :key="item.name"
                      >
                        <abbr :title="item.abbreviation">{{ item.name }}</abbr>
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    Corporate Registry
                  </p>
                  <h5 class="mt-2 font-bold">
                    {{
                      filteredSelectedList.CorporateRegistry === true
                        ? "Yes"
                        : "No"
                    }}
                  </h5>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">Bank Statement</p>
                  <h5 class="mt-2 font-bold">
                    {{
                      filteredSelectedList.BankStatement === true ? "Yes" : "No"
                    }}
                  </h5>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">Liveness Test</p>
                  <h5 class="mt-2 font-bold">
                    {{
                      filteredSelectedList.LivenessTest === true ? "Yes" : "No"
                    }}
                  </h5>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">ID Capture</p>
                  <h5 class="mt-2 font-bold">
                    {{ filteredSelectedList.IDCapture === true ? "Yes" : "No" }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-14 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-3xl lg:text-5xl font-semibold text-blue-300">
        Our Consortium Of Data Sources
      </h2>
      <p class="mt-8">
        Youverify’s diverse data allows customers to capture as much of their
        consumer base as possible. By harnessing the power of in-country,
        authoritative data sources, Youverify can return the highest match rates
        possible. The YV team works with customers to create custom match rules
        across countries and/or products. Verifiable elements include: Name,
        date of birth, address, mobile, national ID, and more.
      </p>
      <div class="mt-9">
        <div class="w-72">
          <app-select-input
            :options="countries"
            v-model="country"
            :allow-search="true"
            :has-custom-selected-view="true"
            :has-custom-list-item="true"
            class="cursor-pointer"
          >
            <template v-slot:selected-view="{ item }">
              <div
                v-if="item"
                class="text-blue-300 font-semibold text-lg space-x-2"
              >
                <span> {{ item.flag }}</span>
                <span> {{ item.name }}</span>
              </div>
            </template>
            <template v-slot:list-item="{ option }">
              <div
                v-if="option"
                class="text-grey font-medium text-lg space-x-2"
              >
                <span> {{ option.flag }}</span>
                <span> {{ option.name }}</span>
              </div>
            </template>
          </app-select-input>
        </div>
        <div class="mt-9 flex flex-col lg:flex-row gap-6">
          <div class="w-72">
            <h5 class="text-xl md:text-2xl font-semibold text-blue-300">
              Solutions
            </h5>
            <div
              class="mt-4 p-3 border border-grey-200 rounded hidden lg:block"
            >
              <div
                @click="selectedIndex = index"
                v-for="(solution, index) in solutions"
                :key="index"
                class="px-3 py-2 text-lg rounded cursor-pointer truncate"
                :class="
                  selectedSolution.name === solution.name
                    ? 'text-white font-semibold bg-blue'
                    : 'text-grey font-medium'
                "
              >
                {{ solution.name }}
              </div>
            </div>
            <div class="lg:hidden">
              <app-select-input
                :options="solutions"
                v-model="selectedSolution"
                class="text-blue-300 font-semibold cursor-pointer"
                :allow-search="true"
                :has-custom-selected-view="true"
                :has-custom-list-item="true"
              >
                <template v-slot:selected-view="{ item }">
                  <div>{{ item.name }}</div>
                </template>
                <template v-slot:list-item="{ option }">
                  <div>{{ option.name }}</div>
                </template>
              </app-select-input>
            </div>
          </div>
          <div class="flex-1">
            <h5 class="text-xl md:text-2xl font-semibold text-blue-300">
              Data Sources
            </h5>
            <div
              class="flex gap-4 mt-4 items-center font-semibold text-blue-300"
            >
              <div class="text-lg">{{ selectedSolution.name }}</div>
              <NuxtLink
                :to="selectedSolution.link"
                class="text-blue underline text-base"
                >Learn more</NuxtLink
              >
              <a
                href="https://doc.youverify.co/"
                class="text-blue underline text-base"
                >Try API</a
              >
            </div>
            <div style="max-height: 500px" class="mt-3 overflow-scroll shadow">
              <table class="w-full shadow-lg rounded-md font-normal">
                <thead>
                  <tr class="">
                    <th
                      v-if="country === 'Global'"
                      class="bg-blue-150 py-4 px-5 text-left text-blue-300"
                    >
                      Country/Jurisdiction
                    </th>
                    <th class="bg-blue-150 py-4 px-5 text-left text-blue-300">
                      Source Name
                    </th>
                    <th
                      class="bg-blue-150 py-4 px-5 text-left text-blue-300 w-1/3"
                    >
                      Source Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(source, index) in sources" :key="index" class="">
                    <td
                      v-if="country === 'Global'"
                      class="px-5 py-4"
                      :class="{ 'bg-blue-150 bg-opacity-20': index % 2 === 1 }"
                    >
                      {{ source.jurisdiction }}
                    </td>
                    <td
                      class="px-5 py-4"
                      :class="{ 'bg-blue-150 bg-opacity-20': index % 2 === 1 }"
                    >
                      {{ source.name }}
                    </td>
                    <td
                      class="px-5 py-4 w-1/3"
                      :class="{ 'bg-blue-100': index % 2 === 1 }"
                    >
                      {{ source.type }}
                    </td>
                  </tr>
                </tbody>
                <!-- <div v-else class="w-full h-[500px] flex items-center justify-center p-4 md:p-9 text-blue-150 gap-6 md:gap-9">
                  <p class="max-w-xs text-center text-sm font-bold text-blue-300">
                    There is currently no data source information on our eIDV for this country, you can see our <nuxt-link to="/" class="text-blue-150 decoration-dotted">OCR solution.</nuxt-link>
                  </p>
                </div> -->
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Integrate />
    <ContactUs
      id="contact"
      heading="Start Onboarding Legitimate Customers with The Youverify KYC ID Document Verification Solution Today"
      note="Leave us a message! Our team will reach out with the best KYC ID document verification solution that fits your specific needs in no time. Book a demo below."
    />
    <KnowMore />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { sources, regions } from "~/data/data-sources.js";
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Integrate from "~/components/products/Integrate.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
import getFlagEmoji from '@/helpers/flagEmoji'

export default {
  components: {
    HeroSection,
    TrustedClients,
    ContactUs,
    Integrate,
    KnowMore,
  },
  head() {
    return {
      title: "Data Sources",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover Youverify’s connection to over 3000+ data sources to digitally verify identities of customers for businesses globally.",
        },
      ],
    };
  },
  data() {
    return {
      allMarkersData: null,
      tempCountry: null,
      showDropDownWorldWide: false,
      selectDataPoint: null,
      totalStats: {
        BankStatement: true,
        CorporateRegistry: true,
        LivenessTest: true,
        IDCapture: true,
      },
      worldWideSanctionList: [
        {
          name: "UNSC",
          abbreviation: "United Nation Security Council",
        },
        {
          name: "EU",
          abbreviation: "European Union",
        },
        {
          name: "UK",
          abbreviation: "United Kingdom Ministry of Finance",
        },
        {
          name: "SECO",
          abbreviation: "Switzerland State Secretariat for Economic Affairs",
        },
        {
          name: "USSDN",
          abbreviation:
            "Unites State Specially Designated Nationals and Blocked Persons",
        },
        {
          name: "DFAT",
          abbreviation:
            "Department of Foreign Affairs and Trade ) - Australian Sanctions",
        },
        {
          name: "OFAC",
          abbreviation:
            "The Office of Foreign Asset Control) of the US Department of Treasury",
        },
      ],
      country: "United States",
      selectedIndex: 0,
      selectedRegion: "Africa",
    };
  },
  methods: {
    async getAllDataSource() {
      const allDataSource = await this.$store.dispatch(
        "datasource/getDataSource"
      );
      return allDataSource;
    },
    selectedCountry(params) {
      if (params) {
        this.clickedBubble(params);
        this.showDropDownWorldWide = false;
        this.tempCountry = null;
      } else {
        this.clickedBubble(this.totalStats);
        this.showDropDownWorldWide = false;
        this.tempCountry = null;
      }
    },
    clickedBubble(d) {
      this.selectDataPoint = d;
    },
    handleFocus() {
      this.showDropDownWorldWide = true;
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.datasource.loading,
    }),
    filteredSelectedList() {
      let data = this.selectDataPoint ? this.selectDataPoint : [];
      return data;
    },
    filteredList() {
      let data = this.allMarkersData ? this.allMarkersData : [];
      return data.filter((post) => {
        let search = this.tempCountry ? this.tempCountry.toLowerCase() : null;
        return post.country.toLowerCase().includes(search);
      });
    },
    regions() {
      return regions.map((item) => item.name);
    },
    countries() {
      return sources.map((item) => {
        return {
          name: item.name,
          flag: getFlagEmoji(item.flag),
          value: item.name,
        };
      });
    },
    solutions() {
      const source = sources.find((item) => item.name === this.country)
      console.log(source)
      return source.solutions;
    },
    selectedSolution() {
      return this.solutions[this.selectedIndex];
    },
    sources() {
      const solution = this.solutions.find(
        (item) => item.name === this.selectedSolution.name
      )
      return solution.sources;
    },
  },
  async mounted() {
    const markers = await this.getAllDataSource();
    this.allMarkersData = markers;
    const allIdentity = [];
    const allAddress = [];
    const allUniversity = [];
    const allPEP = [];
    markers.map((items) => {
      allIdentity.push(...items.IdentityDataSources);
      allAddress.push(...items.AddressVerification);
      allUniversity.push(...items.UniversityCertificate);
      allPEP.push(...items.PEPSanctionList);
    });

    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }
    this.totalStats.IdentityDataSources = getUniqueListBy(allIdentity, "title");
    this.totalStats.AddressVerification = getUniqueListBy(allAddress, "title");
    this.totalStats.UniversityCertificate = getUniqueListBy(
      allUniversity,
      "title"
    );
    this.totalStats.PEPSanctionList = getUniqueListBy(allPEP, "title");

    this.clickedBubble(this.totalStats);
    let self = this;
    let centered = null;
    const size = {
      height: 600,
      width: d3.select("#chartMaps").node()
        ? d3.select("#chartMaps").node().getBoundingClientRect().width
        : "",
    };
    const svg = d3
      .select("#chartMaps")
      .append("svg")
      .attr("width", size.width)
      .attr("style", "background: #115766")
      .attr("height", size.height);

    const projection = d3
      .geoMercator()
      .scale(180)
      .translate([size.width / 2, size.height / 1.4]);
    const path = d3.geoPath(projection);

    const g = svg.append("g");

    var zoom = d3
      .zoom()
      .scaleExtent([1, 8])
      .on("zoom", function () {
        g.selectAll("circle").attr("transform", d3.event.transform);
        g.selectAll("path").attr("transform", d3.event.transform);
      });

    svg.call(zoom);
    // create a tooltip
    var Tooltip = d3
      .select("#chartMaps")
      .append("div")
      .attr("id", "tooltip")
      .attr(
        "style",
        "position: absolute; left: 64px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); opacity: 0; width: 290px; z-index: 300; background: white; border-radius: 4px; padding: 10px;"
      );

    d3.queue()
      .defer(function foo(url, callback) {
        d3.json(url).then(function (file) {
          callback(null, file);
        });
      }, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .defer(function foo(url, callback) {
        d3.csv(url).then(function (file) {
          callback(null, file);
        });
      }, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_gpsLocSurfer.csv")
      .await(function (error, dataGeo, circleData) {
        const nMinAndMax = d3.extent(circleData, function (d) {
          return +d.n;
        });

        const nToRadius = d3.scaleSqrt().domain(nMinAndMax).range([1, 150]);

        g.selectAll("path")
          .data(dataGeo.features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", path)
          .attr("fill", "#46B2C8")
          .attr("class", "Country")
          .style("opacity", 0.8)
          .attr("stroke-width", 0.5)
          .attr("stroke", "#ffffff")
          .on("mouseover", mouseOver)
          .on("mouseleave", mouseLeave)
          .on("click", clicked);

        g.selectAll("#chartMaps")
          .data(dataGeo.features)
          .enter()
          .append("text")
          .attr("class", "place-label")

          .attr("dy", ".35em")
          .text(function (d) {
            return d.properties.name;
          });

        g.selectAll("circle")
          .data(markers)
          .enter()
          .append("circle")
          .attr("cx", function (eachCircle) {
            return projection([eachCircle.longitude, eachCircle.latitude])[0];
          })
          .attr("cy", function (eachCircle) {
            return projection([eachCircle.longitude, eachCircle.latitude])[1];
          })

          .attr("r", function (eachCircle) {
            return nToRadius(eachCircle.volume);
          })
          .attr("class", function (d) {
            return "circle-data";
          })
          .attr("fill", "red")
          .attr("stroke", "red")
          .attr("stoke-width", 3)
          .attr("fill-opacity", 0.4)
          .style("cursor", "pointer")
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("click", function (eachCircle) {
            self.clickedBubble(eachCircle);
          })
          .on("mouseleave", mouseleave);
      });

    d3.select("#zoom-in").on("click", function () {
      zoom.scaleBy(svg.transition().duration(750), 1.3);
    });

    d3.select("#zoom-out").on("click", function () {
      zoom.scaleBy(svg.transition().duration(750), 1 / 1.3);
    });

    function clicked(d) {
      var x, y, k;
      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 5;
        centered = d;
      } else {
        x = size.width / 2;
        y = size.height / 2;
        k = 1;
        centered = null;
      }
      g.selectAll("path").style("fill", function (d) {
        return centered && d === centered ? "#0B4B58" : "";
      });

      // Zoom
      g.transition()
        .duration(750)
        .attr(
          "transform",
          "translate(" +
            size.width / 2 +
            "," +
            size.height / 2 +
            ")scale(" +
            k +
            ")translate(" +
            -x +
            "," +
            -y +
            ")"
        );
    }

    let mouseOver = function (d) {
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.5);
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "#0B4B58");
    };

    let mouseLeave = function (d) {
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.8);
      d3.select(this).transition().duration(200).style("stroke", "transparent");
    };

    var mouseover = function (d) {
      let Identity = "";
      let Address = "";
      let University = "";
      let PEP = "";

      d.IdentityDataSources.forEach(function (item) {
        Identity += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });
      d.AddressVerification.forEach(function (item) {
        Address += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });
      d.UniversityCertificate.forEach(function (item) {
        University += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });
      d.PEPSanctionList.forEach(function (item) {
        PEP += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });

      Tooltip.style("opacity", 1)
        .html(
          `
          <div class="">
            <h5 class='text-black font-bold'>
              ${d.country}
            </h5>
            <div class="mt-3 grid grid-cols-2 gap-3">
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Identity Data source
                </div>
                ${Identity}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Address Verification
                </div>
                ${Address}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  University Certificate
                </div>
                ${University}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  PEP/Sanction List
                </div>
                ${PEP}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Corporate Registry
                </div>
                <div class='text-xs'>${
                  d.CorporateRegistry === true ? "Yes" : "No"
                }</div>

              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Bank Statement
                </div>
                <div class='text-xs'>${
                  d.BankStatement === true ? "Yes" : "No"
                }</div>

              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Liveness Test
                </div>
                <div class='text-xs'>${
                  d.LivenessTest === true ? "Yes" : "No"
                }</div>

              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-2'>
                  ID Capture
                </div>
                <div class='text-xs'>${
                  d.IDCapture === true ? "Yes" : "No"
                }</div>

              </div>

            </div>
          </div>`
        )
        .transition()
        .duration(200);
    };

    var mousemove = function (d) {
      Tooltip.style("left", d3.event.pageX + 10 + "px").style(
        "top",
        d3.event.pageY + 10 + "px"
      );
    };

    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };
  },
};
</script>

<style scoped>
.Country .background {
  fill: #eff8f9;
  pointer-events: all;
}
.province {
  fill: #000;
  stroke: #fff;
  stroke-width: 1px;
}
.province:hover {
  fill: #666;
}

.Country .circle-data {
  cursor: pointer;
}

thead th {
  position: sticky;
  top: 0;
}
</style>
