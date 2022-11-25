<script setup>
import Back from "./assets/back.svg";
import Coins from "./assets/coins.svg";
import Share from "./assets/share.svg";
import Favorite from "./assets/favorite.svg";
import Logo from "./assets/logo.png";
import ContentPhoto from "./assets/content-photo.png";
import ProfilePhoto from "./assets/profile-photo.png";
import BrandManager from "./assets/brand-manager.png";
</script>

<template>
  <div class="max-w-md mx-auto text-brand-gray-2 border border-brand-gray-1">
    <div class="flex items-center justify-between px-6 py-3 bg-brand-blue-2">
      <div class="flex items-center space-x-2">
        <div><img :src="Logo" alt="" /></div>
        <div class="flex items-center space-x-1 bg-brand-blue-1 p-1 rounded-md">
          <div class="text-brand-black">
            <img :src="Coins" alt="Coins" />
          </div>
          <p class="text-xs">18900 points</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <p class="text-white">Hello, Samuel</p>
        <div><img :src="ProfilePhoto" alt="Profile photo" /></div>
      </div>
    </div>
    <div
      class="flex items-center justify-between space-x-3 px-6 py-4 border-b border-brand-gray-1 drop-shadow-md"
    >
      <div class=""><img :src="Back" alt="back button" /></div>
      <div class="font-bold">Content</div>
      <div class="font-bold"></div>
    </div>
    <div class="px-6">
      <div class="flex justify-between py-3">
        <div class="flex items-center space-x-2">
          <div><img :src="BrandManager" alt="Brand Manager Photo" /></div>
          <div>
            <p class="font-bold text-brand-black">John Green</p>
            <p class="text-xs">Brand Manager</p>
          </div>
        </div>
        <div class="font-light text-sm">22/10/22 . 5:15 PM</div>
      </div>
      <div class="py-3">
        <h1 class="mb-3 font-bold text-xl text-brand-black">Content Title</h1>
        <div class="mb-3">
          <img class="w-full" :src="ContentPhoto" alt="" />
        </div>
      </div>
      <p class="mb-3">
        Lorem ipsum dolor sit amet. Lorem ipsumLorem ipsum dolor sit amet. Lorem
        ipsumLorem ipsum dolor sit amet. Lorem ipsumLorem ipsum dolor sit amet.
        Lorem ipsumLorem ipsum dolor sit amet. Lorem ipsumLorem ipsum dolor sit
        amet. Lorem ipsum
      </p>
      <div class="flex items-center space-x-3 py-3">
        <div
          class="flex-1 flex items-center justify-center space-x-2 py-2 px-3 border border-brand-gray-3 rounded-md drop-shadow-md"
        >
          <img :src="Favorite" alt="Favorite" />
          <p>Favorite</p>
        </div>
        <div
          class="flex-1 flex items-center justify-center space-x-2 py-2 px-3 border border-brand-gray-3 rounded-md drop-shadow-md"
        >
          <img :src="Share" alt="Share" />
          <p>Share</p>
        </div>
      </div>
    </div>
  </div>
</template>
