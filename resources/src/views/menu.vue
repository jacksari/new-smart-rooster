<script setup lang="ts">
import { ICardMenu } from "@/interfaces/menu.interface.ts";

import Modal from "@/components/Modal.vue";
import { ref } from "vue";

const cards = ref<ICardMenu[]>([
    {
        title: "Usuarios",
        description: "Descripcion amet mi mimin, mlli non desderi ullanco set sit aloqa dolor do amt sint;",
        image: "/images/menu/users.svg",
        icon: "",
        route: "login",
    },
    {
        title: "Usuarios",
        description: "Descripcion amet mi mimin, mlli non desderi ullanco set sit aloqa dolor do amt sint;",
        image: "/images/menu/users.svg",
        icon: "",
        route: "login",
    },
]);
</script>

<template>
    <div class="container mx-auto mt-20">
        <div class="grid grid-cols-5 gap-8">
        <!-- <h1 class="text-red-400 bg-blue-400">MEnu page</h1> -->
        <!-- <Modal /> -->
        <!-- <router-link :to="{ name: 'login' }">To login</router-link> -->

        <div class="shadow p-6 rounded-md" v-for="(card, index) in cards" :key="index">
            <!-- <UsersMenu/> -->
            <div class="flex justify-between ">
                <p class="uppercase">modulo</p>
                <p>ICON</p>
            </div>
            <h6 class="text-2xl font-bold">{{ card.title }}</h6>

            <p class="mt-2 mb-2">{{ card.description }}</p>

            <div class="w-100 flex justify-between items-end">

                <p>ICON</p>

            <img :src="card.image" alt="" />
            </div>
        </div>
    </div>
    </div>
</template>
