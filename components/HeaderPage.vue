<template>
  <div class="bg-black">
    <header class="bg-[#212529]">
      <div
        class="flex flex-col-reverse lg:flex-row justify-center lg:justify-between text-white text-[12px] align-middle"
      >
        <div class="lg:flex md:flex md:justify-center px-3">
          <div class="flex items-center justify-center p-1">
            &nbsp;
            <img
              src="/assets/images/icon-apk.webp"
              alt=""
              class="h-[30px] sm:[] align-middle"
            />
            &nbsp;
            <a target="_blank" href="https://groupolx.com/olx.apk">
              DOWNLOAD APLIKASI TOGEL |
            </a>
          </div>

          <div class="flex items-center justify-center p-1">
            <div>
              <a target="_blank" href="https://surkale.me/DaftarOlx">
                | DAFTAR JADI MEMBER &nbsp;
              </a>
            </div>
            <div>
              <a target="_blank" href="https://t.me/OLXTOTO1">
                ||
                <Icon
                  name="uil:telegram"
                  style="color: cyan; font-size: 13px"
                  class="align-middle"
                />
                TELEGRAM &nbsp;
              </a>
            </div>
            <div>
              <a target="_blank" href="https://surkale.me/pgBkIO">
                ||
                <Icon
                  name="uil:comments"
                  style="color: yellow"
                  class="align-middle"
                />
                LIVECHAT |
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-[#11A116] text-center font-bold p-2">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=6282114554837"
              class="flex items-center justify-center text-[15px] gap-1"
            >
              <Icon name="uil:whatsapp" style="color: white; font-size: 22px" />
              <h6 class="m-0">WHATSAPP</h6>
            </a>
          </div>
          <p class="hidden lg:block">
            <Icon name="uil:clock" style="color: white" />
            <span id="Date"><span>Selasa</span>, 26 Nov 2024</span>
            ( <span id="hours">23</span><span id="point">:</span
            ><span id="min">00</span><span id="point">:</span
            ><span id="sec">29</span> )
          </p>
        </div>
      </div>
    </header>

    <nav class="bg-black text-white hidden lg:block py-3 mx-auto px-20">
      <div class="flex justify-between items-center mx-auto">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            src="https://imgku.io/download/Fjf6rkzW.png"
            alt="Logo"
            class="h-8 mr-2"
          />
        </div>

        <!-- Navigation Links -->
        <ul class="flex items-center space-x-6">
          <li>
            <a href="#" class="hover:text-yellow-400">HOME</a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">LIVE DRAW</a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">PREDIKSI TOGEL</a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex items-center hover:text-yellow-400"
            >
              SLOT GACOR
              <span
                class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2"
              >
                HOT!
              </span>
            </a>
          </li>
          <li class="relative group">
            <a href="#" class="hover:text-yellow-400">ALAT TOGEL</a>
            <!-- Dropdown -->
            <ul
              class="absolute left-0 mt-2 hidden group-hover:block bg-black text-white shadow-lg rounded"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-800">Tool 1</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-800">Tool 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              class="relative flex items-center hover:text-yellow-400"
            >
              DATA RESULT
              <span
                class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2"
              >
                NEW!
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">BUKTI JACKPOT</a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex items-center hover:text-yellow-400"
            >
              PROMOSI
              <span
                class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2"
              >
                HOT!
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">KELUHAN</a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">PANDUAN</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- nav mobile -->
    <div class="text-white lg:hidden bg-black mb-4">
      <div
        class="w-full h-full justify-center flex items-center align-middle box-content py-5"
      >
        <img src="https://imgku.io/download/Fjf6rkzW.png" alt="" class="" />
      </div>
      <hr class="mb-5 mx-8" />
      <div class="grid grid-cols-2 mx-8 gap-2 text-black text-center">
        <button class="bg-[#ffc107] btn">Home</button>
        <button class="bg-[#ffc107] btn">Livedraw</button>
        <button class="bg-[#ffc107] btn">Prediksi Togel</button>
        <button class="bg-[#ffc107] btn">Promosi</button>
        <button class="bg-[#ffc107] btn">Jadwal Togel</button>
        <button class="bg-[#ffc107] btn">Data Result</button>
        <button class="bg-[#ffc107] btn">Slot Gacor</button>
        <button class="bg-[#ffc107] btn">BB Generator</button>
        <button class="bg-[#ffc107] btn">Paito Warna</button>
        <button class="bg-[#ffc107] btn">Konv.Toto SGP</button>
        <button class="bg-[#ffc107] btn">Buku Mimpi</button>
        <button class="bg-[#ffc107] btn">Bukti Jackpot</button>
        <button class="bg-[#ffc107] btn">Keluhan</button>
        <button class="bg-[#ffc107] btn">Panduan</button>
      </div>
    </div>

    <div class="bg-black box-border">
      <div class="">
        <marquee
          class="text-white text-center border-b-2 border-white"
          scrollamount="3"
          direction="left"
        >
          <p>
            SELAMAT DATANG DI OLXTOTO BANDAR TOGEL, LIVE CASINO & SLOT TERBAIK
            DAN TERPERCAYA DI INDONESIA DENGAN BONUS - BONUS TANPA BATAS SETIAP
            HARI.
          </p>
        </marquee>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 bg-black">
      <div class="mx-auto px-6 col-span-7">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"
        >
          <img :src="item" class="w-full" draggable="false" />
        </UCarousel>

        <div class="grid grid-cols-3 gap-1 my-3">
          <button class="bg-[#ffc107] rounded-lg py-1 sm:py-2">
            <UIcon
              name="fa6-solid:arrow-right-to-bracket"
              class="align-middle"
            />
            Login
          </button>

          <button class="bg-red-600 rounded-lg py-1 sm:py-2 text-white">
            <UIcon name="fa6-solid:hand-holding-dollar" class="align-middle" />
            Promo
          </button>
          <button class="bg-[#ffc107] rounded-lg py-1 sm:py-2">
            <UIcon name="fa6-solid:gamepad" class="align-middle" />
            RTP Slot
          </button>
        </div>
      </div>

      <div class="hidden lg:block mx-auto lg:w-[30vh] 2xl:w-[68vh]">
        <a href="" target="_blank">
          <img
            src="https://photoku.io/images/2024/05/30/xnDhLlc1.jpeg"
            alt="banner blog togel  1"
            class=""
          />
        </a>

        <a href="" target="_blank">
          <img
            src="https://photoku.io/images/2024/05/30/kXPoiJZB.jpeg"
            alt="banner blog togel  2"
          />
        </a>

        <a href="" target="_blank">
          <img
            src="https://photoku.io/images/2024/05/30/EToB2CLm.jpeg"
            alt="banner blog togel  3"
          />
        </a>

        <a href="" target="_blank">
          <img
            src="https://photoku.io/images/2024/10/03/promo-prediksi-tiger4_04.jpeg"
            alt="banner blog togel  4"
          />
        </a>
      </div>
    </div>

    <hr />

    <div
      class="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 bg-black p-6 gap-1"
    >
      <button
        class="bg-[#ffc107] rounded-lg py-2 lg:col-span-1"
        @click="$emit('changeView', 'ResultTogel')"
      >
        <UIcon name="fa6-solid:chart-column" class="align-middle" />
        Result Togel
      </button>
      <button class="bg-[#ffc107] rounded-lg py-2 lg:col-span-1">
        <UIcon name="fa6-solid:bowling-ball" class="align-middle" />
        Prediksi Togel
      </button>
      <button class="bg-[#ffc107] rounded-lg py-2 lg:col-span-1">
        <UIcon name="fa6-solid:fill-drip" class="align-middle" />
        Paito Warna
      </button>
      <button class="bg-[#ffc107] rounded-lg py-2 lg:col-span-1">
        <UIcon name="fa6-solid:book" class="align-middle" />
        Buku Mimpi
      </button>
      <div class="text-white lg:col-span-3 ml-5 text-sm hidden lg:block">
        <div class="mb-3 flex flex-row gap-3 border-2 border-[#ffc107]">
          <div class="bg-[#ffc107] text-black">
            <UIcon name="fa6-solid:trophy" class="align-middle" /> Winner Togel
          </div>
          <div>
            <ul>
              <li>hiday***o Jackpot MARYLAND-MID Sebesar Rp.90.963.500</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden text-white flex mx-5 text-sm border-2 border-[#ffc107]"
    >
      <span class="bg-[#ffc107] text-black">Winner Togel</span>
      <div>
        <ul>
          <li>hiday***o Jackpot MARYLAND-MID Sebesar Rp.90.963.500</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

const currentView = ref("ResultTogel");
</script>

<style lang="css"></style>
