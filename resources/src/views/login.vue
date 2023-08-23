<script setup lang="ts">
import {} from "vue";
</script>

<template>
    <div class="sm-page flex items-stretch border border-red-400">
        <div v-if="false"></div>
        <div class="w-full flex flex-col justify-center border border-black">
            <div class="w-11/12 mx-auto py-4">
                <img
                    class="block mx-auto mb-6"
                    src="@/assets/images/logo.png"
                />
                <div class="text-center mb-4">
                    <h1 class="text-xl font-semibold text-blue-900">
                        Bienvenido
                    </h1>
                    <span class="text-gray-600"
                        >Por favor inicia sesion con tu cuenta</span
                    >
                </div>
                <label class="text-sm text-gray-600">Correo</label>
                <input
                    class="block w-full mb-4 px-4 py-2 bg-blue-200 rounded"
                    type="text"
                />
                <label class="text-sm text-gray-600">Contrasena</label>
                <input
                    class="block w-full mb-4 px-4 py-2 bg-blue-200 rounded"
                    type="password"
                />
                <div class="flex justify-between items-center">
                    <div>
                        <label class="flex items-center gap-2">
                            <input class="" type="checkbox" />
                            <span class="text-sm text-gray-600"
                                >Recuerdame</span
                            >
                        </label>
                    </div>
                    <a class="text-sm text-gray-600"
                        >Olvidaste tu contrasena?</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>
