<template>
  <section class="md:flex pb-10 space-between">
    <div class="xl:flex w-full">
      <div class="grid grid-cols-1 gap-16 xl:flex w-full justify-between">
        <div>
          <h4 class="text-2xl text-white">Products</h4>

          <hr class="border-white mb-8 mt-4" />

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-6">
              <div>
                <div class="bg-blue-150 rounded w-fit">
                  <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                    Know Your Customer (KYC)
                  </h5>
                </div>
                <ul class="mt-4 text-white text-xs space-y-2.5">
                  <li>
                    <NuxtLink to="/product/kyc/id-document-verification">
                      ID Document verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/id-data-matching">
                      ID Data Matching</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/adverse-media-screening">
                      Adverse Media Screening</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/address-verification">
                      Address Verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/biometrics-verification">
                      Biometrics verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/liveness-detection">
                      Liveness Detection</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/bank-account-verification">
                      Bank Account Verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/product/kyc/phone-intelligence-and-verification"
                    >
                      Phone Intelligence & Verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/pep-and-sanction-screening">
                      PEP & Sanction Screening</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyc/customer-credit-check">
                      Consumer Credit Report</NuxtLink
                    >
                  </li>
                  <li class="text-blue">
                    <NuxtLink to="/product/kyc/pricing"> See pricing</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="">
                <div class="bg-blue-150 rounded w-fit">
                  <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                    Know Your Business (KYB)
                  </h5>
                </div>
                <ul class="mt-4 text-white text-xs space-y-2.5">
                  <li>
                    <NuxtLink to="/product/kyb/business-verification"
                      >Business Verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyb/business-address-verification"
                      >Address verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyb/business-identity-verification"
                      >Identity verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyb/sanction-list"
                      >Sanction List</NuxtLink
                    >
                  </li>

                  <li class="text-blue">
                    <NuxtLink to="/product/kyb/pricing"> See pricing</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="">
                <div class="bg-blue-150 rounded w-fit">
                  <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                    Risk Intelligence Solution
                  </h5>
                </div>
                <ul class="mt-4 text-white text-xs space-y-2.5">
                  <li>
                    <NuxtLink to="/product/customer-risk-assessment"
                      >Customer Risk Assessment</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <div class="bg-blue-150 rounded w-fit">
                  <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                    Know Your Employee (KYE)
                  </h5>
                </div>
                <ul class="mt-4 text-white text-xs space-y-2.5">
                  <li>
                    <NuxtLink to="/product/kye/address-verification"
                      >Address verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/product/kye/professional-certificate-verification"
                      >Professional Certificate verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kye/education-verification"
                      >Education Verification</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kye/employment-record-check"
                      >Employment Record Check</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kye/reference-check"
                      >Reference Check</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kye/employee-credit-check"
                      >Credit Check</NuxtLink
                    >
                  </li>
                  <li class="text-blue">
                    <NuxtLink to="/product/kye/pricing"> See pricing</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="">
                <div class="bg-blue-150 rounded w-fit">
                  <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                    Know Your Transaction (KYT)
                  </h5>
                </div>
                <ul class="mt-4 text-white text-xs space-y-2.5">
                  <li>
                    <NuxtLink to="/product/kyt/transaction-monitoring-solution"
                      >Transaction monitoring</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyt/transaction-screening-solution"
                      >Transaction screening</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/kyt/crypto-monitoring-solution"
                      >Crypto Monitoring</NuxtLink
                    >
                  </li>

                  <li class="text-blue">
                    <NuxtLink to="/product/kyt/pricing"> See pricing</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="">
                <div class="bg-blue-150 rounded w-fit">
                  <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                    Workflow Automation Tools
                  </h5>
                </div>
                <ul class="mt-4 text-white text-xs space-y-2.5">
                  <li>
                    <NuxtLink to="/product/workflow-builder"
                      >Workflow Builder</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/product/youid">YouID</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/product/youid-for-business"
                      >YouID For Business</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-2xl text-white">Solutions</h4>

          <hr class="border-white mb-8 mt-4" />

          <div class="grid grid-cols-1 gap-6">
            <div>
              <ul class="text-white text-xs space-y-2.5">
                <li>
                  <NuxtLink to="/solutions/customer-verification"
                    >Customer Verification</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/solutions/business-verification"
                    >Business Verification</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/solutions/compliance-management"
                    >Compliance Management</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/solutions/risk-management"
                    >Risk Management</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="">
              <div class="bg-blue-150 rounded w-fit">
                <h5 class="text-blue text-xs font-semibold py-2.5 px-5">
                  Use Cases
                </h5>
              </div>
              <ul class="mt-4 text-white text-xs space-y-2.5">
                <li>
                  <NuxtLink to="/solutions/use-case/banks">Banks</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/fintech">Fintech</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/crypto">Crypto</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/gig-economy"
                    >Gig Economy</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/trading">Trading</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/marketplace-and-community"
                    >Marketplaces</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/gaming-and-casino"
                    >Gaming and Casino</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/solutions/use-case/nbfi">NBFI</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-2xl text-white">Resources</h4>

          <hr class="border-white mb-8 mt-4" />

          <div class="grid grid-cols-1 gap-6">
            <div>
              <ul class="text-white text-xs space-y-2.5">
                <li>
                  <NuxtLink to="/blogs">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/resources/aml-cft-legislation"
                    >Global AML/CFT Legislation</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/industry/reports"> Industry Report </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/resources/case-studies">
                    Compliance Guides & Reports
                  </NuxtLink>
                </li>
                <li><NuxtLink to="/resources/faqs"> FAQs </NuxtLink></li>
                <li>Case Studies</li>
                <li>
                  <NuxtLink to="/resources/developer"
                    >Developer Portal</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/product/data-sources">Data Sources</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="relative">
          <h4 class="text-2xl text-white">Company</h4>

          <hr class="border-white mb-8 mt-4" />

          <div class="grid grid-cols-2 md:grid-cols-1 gap-10">
            <div>
              <ul class="text-white text-xs space-y-2.5">
                <li><NuxtLink to="/company/about-us"> About Us</NuxtLink></li>
                <li>
                  <NuxtLink to="/company/compliance-certifications">
                    Compliance Certifications</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/company/press-room"> Press & Media</NuxtLink>
                </li>
                <li><NuxtLink to="/company/partners"> Partners</NuxtLink></li>
                <li><NuxtLink to="/company/careers"> Careers</NuxtLink></li>
                <li>
                  <NuxtLink to="/company/contact-us"> Contact Us</NuxtLink>
                </li>
                <li>
                  <a href="https://startup.youverify.co/">
                    Startup Accelerator</a
                  >
                </li>
              </ul>
            </div>
            <ul class="text-white text-xs space-y-2.5 md:mt-5">
              <li>
                <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms-of-use">Terms of Use</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cookies">Cookies Policy</NuxtLink>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1JjKOQvCUubv_lR6QyJGonY2-3Nt_kkWZ/view?usp=share_link"
                  target="_blank"
                >
                  PAIA Manual</a
                >
              </li>
              <li>
                <NuxtLink to="/gdpr">GDPR Compliance Statement</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="xl:absolute bottom-0 mt-10">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMTQyIDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTEyNC4yMDggNTAuNjQwMUwxMzkuMDUzIDQwLjc0MzZDMTQwLjg0NSAzOS41MjQ1IDE0MS45MjEgMzcuNTE2NSAxNDEuOTIxIDM1LjM2NTFWNi41MzYyNUMxNDEuOTIxIDIuOTUwNTcgMTM5LjA1MyAwLjA4MjAzMTIgMTM1LjQ2NyAwLjA4MjAzMTJINi40NTQyMkMyLjg2ODU0IDAuMDgyMDMxMiAwIDIuOTUwNTcgMCA2LjUzNjI1VjM1Ljg2NzFWMzguNzM1NlY0NS4xODk5QzAgNDguNzc1NSAyLjg2ODU0IDUxLjY0NDEgNi40NTQyMiA1MS42NDQxSDEyMC42MjJDMTIxLjkxMyA1MS43MTU4IDEyMy4yMDQgNTEuMzU3MiAxMjQuMjA4IDUwLjY0MDFaIiBmaWxsPSIjNDZCMkM4Ii8+CjxwYXRoIGQ9Ik0yNC4yMzkyIDEyLjk5MDdMMTkuMjkxIDI4Ljk4MjhWMzguODA3NkgxNi43ODFWMjguOTgyOEwxMi4xMTk2IDEyLjk5MDdIMTQuNzAxM0wxOC4wMDAxIDI0LjQ2NDlMMjEuNTg1OCAxMi45OTA3SDI0LjIzOTJaIiBmaWxsPSIjQzdFOEVGIi8+CjxwYXRoIGQ9Ik0zNy4zNjI4IDE2LjM2MDhWMzUuNDM2NkMzNy4zNjI4IDM3LjE1NzcgMzYuMDcyIDM4LjU5MiAzNC4zNTA4IDM4LjgwNzFDMzQuMjA3NCAzOC44MDcxIDM0LjEzNTcgMzguODA3MSAzMy45OTIzIDM4LjgwNzFIMjkuNTQ2QzI5LjQwMjYgMzguODA3MSAyOS4yNTkyIDM4LjgwNzEgMjkuMTg3NCAzOC44MDcxQzI3LjQ2NjMgMzguNTkyIDI2LjE3NTUgMzcuMTU3NyAyNi4xNzU1IDM1LjQzNjZWMTYuMzYwOEMyNi4xNzU1IDE0LjQ5NjIgMjcuNjgxNSAxMi45OTAyIDI5LjU0NiAxMi45OTAySDMzLjk5MjNDMzUuODU2OCAxMi45OTAyIDM3LjM2MjggMTQuNDk2MiAzNy4zNjI4IDE2LjM2MDhaTTM0Ljg1MjggMTYuMzYwOEMzNC44NTI4IDE1Ljg1ODggMzQuNDIyNSAxNS41MDAyIDMzLjk5MjMgMTUuNTAwMkgyOS41NDZDMjkuMDQ0IDE1LjUwMDIgMjguNjg1NSAxNS45MzA1IDI4LjY4NTUgMTYuMzYwOFYzNS40MzY2QzI4LjY4NTUgMzUuOTM4NiAyOS4xMTU3IDM2LjI5NzEgMjkuNTQ2IDM2LjI5NzFIMzMuOTkyM0MzNC40OTQzIDM2LjI5NzEgMzQuODUyOCAzNS44NjY5IDM0Ljg1MjggMzUuNDM2NlYxNi4zNjA4WiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNTEuMTMxOCAzNS43OTUxQzUxLjEzMTggMzcuMzAxMSA0OS45ODQ0IDM4LjU5MiA0OC40Nzg0IDM4LjgwNzFDNDguMzM0OSAzOC44MDcxIDQ4LjI2MzIgMzguODA3MSA0OC4xMTk4IDM4LjgwNzFINDIuODg0N0M0Mi43NDEzIDM4LjgwNzEgNDIuNjY5NiAzOC44MDcxIDQyLjUyNjEgMzguODA3MUM0MS4wMjAyIDM4LjU5MiAzOS44NzI3IDM3LjM3MjggMzkuODcyNyAzNS43OTUxVjEyLjk5MDJINDIuMzgyN1YzNS43OTUxQzQyLjM4MjcgMzYuMDgyIDQyLjU5NzkgMzYuMjk3MSA0Mi44ODQ3IDM2LjI5NzFINDguMTE5OEM0OC40MDY3IDM2LjI5NzEgNDguNjIxOCAzNi4wODIgNDguNjIxOCAzNS43OTUxVjEyLjk5MDJINTEuMTMxOFYzNS43OTUxWiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNjEuOTYwNSAzNi4yOTc2QzYxLjY3MzYgMzcuNzMxOSA2MC40NTQ1IDM4LjczNTkgNTkuMDIwMiAzOC43MzU5QzU3LjU4NiAzOC43MzU5IDU2LjM2NjggMzcuNzMxOSA1Ni4wOCAzNi4yOTc2VjM2LjIyNTlMNTMuMjgzMSAxMi45OTA3SDU1Ljc5MzFMNTguNTE4MiAzNS44Njc0QzU4LjU4OTkgMzYuMTU0MiA1OC44MDUxIDM2LjIyNTkgNTkuMDIwMiAzNi4yMjU5QzU5LjIzNTQgMzYuMjI1OSA1OS40NTA1IDM2LjE1NDIgNTkuNTIyMiAzNS44Njc0TDYyLjMxOTEgMTIuOTkwN0g2NC44MjlMNjEuOTYwNSAzNi4yOTc2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY5LjQ5MDQgMTUuNTAwMlYyNy41NDgxSDc0LjA4MDFWMzAuMDU4MUg2OS40OTA0VjM2LjI5NzFINzcuMDIwNFYzOC44MDcxSDY2Ljk4MDVWMTIuOTkwMkg3Ni45NDg3VjE1LjUwMDJINjkuNDkwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05MS45MzY4IDM4LjgwNzFIODguOTI0OEw4Mi45NzI2IDI5Ljg0MjlDODIuNjg1NyAyOS45MTQ2IDgyLjM5ODkgMjkuOTg2NCA4Mi4xMTIgMjkuOTg2NFYzOC44MDcxSDc5LjYwMjFWMTYuMzYwOEM3OS42MDIxIDE0LjQ5NjIgODEuMTA4IDEyLjk5MDIgODIuOTcyNiAxMi45OTAySDg3LjQxODhDODkuMjgzNCAxMi45OTAyIDkwLjc4OTQgMTQuNDk2MiA5MC43ODk0IDE2LjM2MDhWMjAuMDg5OUM5MC43ODk0IDIzLjk2MjQgODguNTY2MiAyNy4zMzI5IDg1LjMzOTEgMjguOTgyNEw5MS45MzY4IDM4LjgwNzFaTTgyLjExMiAyNy40NzY0Qzg1LjYyNiAyNi45MDI3IDg4LjM1MTEgMjMuODE5IDg4LjM1MTEgMjAuMDg5OVYxNi4zNjA4Qzg4LjM1MTEgMTUuODU4OCA4Ny45MjA4IDE1LjUwMDIgODcuNDkwNSAxNS41MDAySDgzLjA0NDNDODIuNTQyMyAxNS41MDAyIDgyLjE4MzcgMTUuOTMwNSA4Mi4xODM3IDE2LjM2MDhMODIuMTEyIDI3LjQ3NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTQuNDQ2OCAxMi45OTAySDk2Ljk1NjhWMzguODA3MUg5NC40NDY4VjEyLjk5MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAyLjQwNyAxNS41MDAyVjI3LjU0ODFIMTA2Ljk5N1YzMC4wNTgxSDEwMi40MDdWMzguODA3MUg5OS44OTcxVjEyLjk5MDJIMTA5Ljg2NVYxNS41MDAySDEwMi40MDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjM0NyAxMi45OTAyTDExOC4zOTkgMjguOTgyNFYzOC44MDcxSDExNS44ODlWMjguOTgyNEwxMTEuMjI4IDEyLjk5MDJIMTEzLjgwOUwxMTcuMTA4IDI0LjQ2NDRMMTIwLjY5NCAxMi45OTAySDEyMy4zNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0MS45OTMiIGhlaWdodD0iNTEuNjMzOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wODIwMzEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
              alt="Youverify"
              class="sm:w-32 w-24"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "@/components/layout/footer/ListItem.vue";

export default {
  components: {
    "footer-list-item": ListItem,
  },
  data() {
    return {
      industries: [
        {
          name: "Business Account Opening",
          link: "/use-case/business-account-opening",
        },
        {
          name: "Credit Underwriting",
          link: "/use-case/credit-underwriting",
        },
        {
          name: "KYC for Remittance",
          link: "/use-case/kyc-for-remittance",
        },
        {
          name: "KYC for Crypto",
          link: "/use-case/kyc-for-crypto",
        },
        {
          name: "KYC for Drivers",
          link: "/use-case/kyc-for-driver",
        },
        {
          name: "KYC for 3rd Party Agent",
          link: "/use-case/kyc-for-3rd-party-agent",
        },
      ],
      company: [
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "Become an Agent",
          link: "/agent",
        },
        {
          name: "Blog",
          link: "/blogs",
        },
        {
          name: "Careers",
          link: "/about-us#careers",
        },
        {
          name: "Industry Reports",
          link: "/industry/reports",
        },
        {
          name: "GDPR Compliance Statement",
          link: "/gdpr",
        },
        {
          name: "API Documentation",
          link: "https://doc.youverify.co/",
          external: true,
        },
      ],
      countries: [
        {
          name: "California, USA",
          icon: "us",
        },
        {
          name: "Lagos, Nigeria",
          icon: "nigeria",
        },
        {
          name: "Pretoria, South Africa",
          icon: "sa",
        },
        {
          name: "Nairobi, Kenya",
          icon: "kenya",
        },
      ],
      policies: [
        {
          name: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          name: "Terms of Use",
          link: "/terms-of-use",
        },
        {
          name: "Cookie Use",
          link: "/cookies",
        },
      ],
    };
  },

  methods: {
    async getAllIndustries() {
      const allIndustries = await this.$store.dispatch(
        "industries/getIndustries"
      );
    },
  },
  mounted() {
    this.getAllIndustries();
  },
  computed: {
    ...mapState({
      // industries: (state) => state.industries.industries,
      loading: (state) => state.subscriber.loading,
    }),
  },
};
</script>

<style></style>
