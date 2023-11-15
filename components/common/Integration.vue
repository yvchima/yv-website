<template>
  <div ref="code_block" class="">
    <div class="flex gap-1">
      <div
        @click="selectCategory(option)"
        v-for="option in blocks"
        :key="option"
        :style="
          category === option
            ? 'background: #12171f; color: white'
            : 'color: #12171f; background: white'
        "
        class="py-3 px-8 text-xs rounded-t-2xl cursor-pointer"
      >
        {{ option }}
      </div>
    </div>
    <div style="background: #12171f" class="py-8 px-5 w-full">
      <pre
        id="code"
        style="height: 400px"
        class="text-white text-sm overflow-auto w-full"
      ></pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: ["Web SDK", "Business Verification", "ID Data Matching"],
      category: "Web SDK",
    };
  },
  methods: {
    // This runs when I choose a different category
    selectCategory(option) {
      this.category = option;
      if (this.category === "Web SDK") {
        const code = `<span class='codeType'>const</span> <span class='codeName'>vFormModule</span> = <span class='codeType'>new</span> <span class='codeInfo'>YouverifySDK</span>.<span class='codeFunction'>vForm</span>(<span class='codeInfo'>options</span>);

<span class='codeType'>const</span> <span class='codeName'>vFormModule</span> = <span class='codeType'>new</span> <span class='codeInfo'>YouverifySDK</span>.<span class='codeFunction'>vForm</span>({
  <span class='codeInfo'>vFormId:</span> <span class='codeString'>'daDz0fDs32dSCj'</span>,
  <span class='codeInfo'>publicMerchantKey:</span> <span class='codeString'>'1223334444'</span>,

   <span class='codeComment'>// true if environment is in development mode.</span>
   <span class='codeInfo'>dev:</span>  <span class='codeType'>false</span>,

   <span class='codeInfo'>personalInformation:</span> {
     <span class='codeInfo'>firstName:</span>  <span class='codeString'>"John"</span>,
     <span class='codeInfo'>lastName:</span>  <span class='codeString'>"Doe"</span>,
  },
  <span class='codeInfo'>metadata:</span> {},
  <span class='codeFunction'>onSuccess:</span> () => {
    <span class='codeComment'>// vForm has submitted successfully</span>
    <span class='codeInfo'>console</span>.<span class='codeFunction'>log</span>(<span class='codeString'>'Succesful'</span>)
  },
  <span class='codeFunction'>onClose:</span> () => {
    <span class='codeComment'>// close button was clicked</span>
    <span class='codeInfo'>console</span>.<span class='codeFunction'>log</span>(<span class='codeString'>'Closed'</span>)
  },
});

<span class='codePromise'>try</span> {
  <span class='codeName'>vFormModule</span>.<span class='codeFunction'>initialize</span>();
} <span class='codePromise'>catch</span> (<span class='codeInfo'>error</span>) {
  <span class='codeComment'>// handle validation error</span>
}

<span class='codeComment'>// Call start() on the vFormModule object to show the pop-up modal and start the process.</span>
<span class='codeName'>vFormModule</span>.<span class='codeFunction'>start</span>();
`;

        const tw = new Typewriter(document.getElementById("code"), {
          loop: false,
          delay: 5,
          deleteSpeed: 20,
          cursor: "",
        });

        tw.typeString(code).start();
      }
      if (this.category === "Business Verification") {
        const code = `{
    <span class='codeInfo'>registrationNumber:</span>  <span class='codeString'>"RC0000000"</span>,
    <span class='codeInfo'>countryCode:</span>  <span class='codeString'>"NG"</span>,
    <span class='codeInfo'>isConsent:</span>  <span class='codeString'>"true"</span>,
}`;
        const tw = new Typewriter(document.getElementById("code"), {
          loop: false,
          delay: 20,
          deleteSpeed: 20,
          cursor: "",
        });

        tw.typeString(code).start();
      }
      if (this.category === "ID Data Matching") {
        const code = `{
    <span class='codeInfo'>id:</span>  <span class='codeString'>"AK0167656"</span>,
    <span class='codeInfo'>metadata:</span> {
        <span class='codeInfo'>requestId:</span>  <span class='codeString'>"1209348756"</span>,
    },
   <span class='codeInfo'>isSubjectConsent:</span>  <span class='codeType'>true</span>,
}`;
        const tw = new Typewriter(document.getElementById("code"), {
          loop: false,
          delay: 20,
          deleteSpeed: 20,
          cursor: "",
        });

        tw.typeString(code).start();
      }
    },

    // This runs when I scroll to a particular section of the page
    runCode(entries) {
      if (entries[0].isIntersecting) {
        if (this.category === "Web SDK") {
          const code = `<span class='codeType'>const</span> <span class='codeName'>vFormModule</span> = <span class='codeType'>new</span> <span class='codeInfo'>YouverifySDK</span>.<span class='codeFunction'>vForm</span>(<span class='codeInfo'>options</span>);

<span class='codeType'>const</span> <span class='codeName'>vFormModule</span> = <span class='codeType'>new</span> <span class='codeInfo'>YouverifySDK</span>.<span class='codeFunction'>vForm</span>({
  <span class='codeInfo'>vFormId:</span> <span class='codeString'>'daDz0fDs32dSCj'</span>,
  <span class='codeInfo'>publicMerchantKey:</span> <span class='codeString'>'1223334444'</span>,

   <span class='codeComment'>// true if environment is in development mode.</span>
   <span class='codeInfo'>dev:</span>  <span class='codeType'>false</span>,

   <span class='codeInfo'>personalInformation:</span> {
     <span class='codeInfo'>firstName:</span>  <span class='codeString'>"John"</span>,
     <span class='codeInfo'>lastName:</span>  <span class='codeString'>"Doe"</span>,
  },
  <span class='codeInfo'>metadata:</span> {},
  <span class='codeFunction'>onSuccess:</span> () => {
    <span class='codeComment'>// vForm has submitted successfully</span>
    <span class='codeInfo'>console</span>.<span class='codeFunction'>log</span>(<span class='codeString'>'Succesful'</span>)
  },
  <span class='codeFunction'>onClose:</span> () => {
    <span class='codeComment'>// close button was clicked</span>
    <span class='codeInfo'>console</span>.<span class='codeFunction'>log</span>(<span class='codeString'>'Closed'</span>)
  },
});

<span class='codePromise'>try</span> {
  <span class='codeName'>vFormModule</span>.<span class='codeFunction'>initialize</span>();
} <span class='codePromise'>catch</span> (<span class='codeInfo'>error</span>) {
  <span class='codeComment'>// handle validation error</span>
}

<span class='codeComment'>// Call start() on the vFormModule object to show the pop-up modal and start the process.</span>
<span class='codeName'>vFormModule</span>.<span class='codeFunction'>start</span>();
`;

          const tw = new Typewriter(document.getElementById("code"), {
            loop: false,
            delay: 5,
            deleteSpeed: 20,
            cursor: "",
          });

          tw.typeString(code).start();
        }
        if (this.category === "Business Verification") {
          const code = `{
    <span class='codeInfo'>registrationNumber:</span>  <span class='codeString'>"RC0000000"</span>,
    <span class='codeInfo'>countryCode:</span>  <span class='codeString'>"NG"</span>,
    <span class='codeInfo'>isConsent:</span>  <span class='codeString'>"true"</span>,
}`;
          const tw = new Typewriter(document.getElementById("code"), {
            loop: false,
            delay: 20,
            deleteSpeed: 20,
            cursor: "",
          });

          tw.typeString(code).start();
        }
        if (this.category === "ID Data Matching") {
          const code = `{
    <span class='codeInfo'>id:</span>  <span class='codeString'>"AK0167656"</span>,
    <span class='codeInfo'>metadata:</span> {
        <span class='codeInfo'>requestId:</span>  <span class='codeString'>"1209348756"</span>,
    },
   <span class='codeInfo'>isSubjectConsent:</span>  <span class='codeType'>true</span>,
}`;
          const tw = new Typewriter(document.getElementById("code"), {
            loop: false,
            delay: 20,
            deleteSpeed: 20,
            cursor: "",
          });

          tw.typeString(code).start();
        }
      }
    },
  },
  mounted() {
    const observer = new IntersectionObserver(this.runCode);
    observer.observe(this.$refs.code_block);
  },
};
</script>

<style>
.codeType {
  color: rgb(0, 177, 236);
}

.codeName {
  color: rgb(52, 133, 214);
}

.codeInfo {
  color: rgb(122, 194, 250);
}

.codeFunction {
  color: rgb(202, 202, 106);
}

.codeString {
  color: rgb(175, 118, 83);
}

.codeComment {
  color: rgb(99, 168, 137);
}

.codePromise {
  color: rgb(185, 56, 78);
}
</style>
