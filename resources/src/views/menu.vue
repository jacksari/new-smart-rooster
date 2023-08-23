<script setup lang="ts">
import {} from "vue";

import Modal from "@/components/Modal.vue";
</script>

<template>
    <div>
        <h1>MEnu page</h1>
        <Modal />
        <router-link :to="{ name: 'login' }">To login</router-link>
    </div>
</template>
