<script setup lang="ts">

const title: string = "¿Estas Seguro?"
const text: string = "¡No podrás revertir esto!"

</script>

<template>

    <div class="bg-slate-600 flex justify-center items-center w-100" style="height: 100vh;">
        <div class="bg-white relative flex justify-center px-20 pb-8 rounded-xl" >
            <div class="text-xl close-icon cursor-pointer absolute right-0 bg-blue-800 hover:bg-blue-700 active:bg-blue-950 ease-in-out duration-300 text-white rounded mr-5 mt-5 px-3 py-1">
                <p class="font-semibold">X</p>
            </div>
            <div class="flex flex-col items-center gap-1 mt-8">
                <div>
                    <svg width="80px" height="80px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#2196F3"></path><path d="M469.333333 469.333333h85.333334v234.666667h-85.333334z" fill="#FFFFFF"></path><path d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" fill="#FFFFFF"></path></g></svg>
                </div>
                <div class="flex flex-col justify-center text-center gap-y-1">
                    <h4 class="text-gray-500 text-2xl font-semibold">{{ title }}</h4>
                    <p class="text-gray-500 text-xl font-semibold">{{ text }}</p>
                </div>
                <div class="flex gap-5 mt-5" >
                    <button class="rounded-md text-xl text-white font-semibold bg-blue-800 hover:bg-blue-700 ease-in-out duration-300 active:bg-blue-950 px-3 py-2">Confirmar</button>
                    <button class="rounded-md text-xl text-blue-800 font-semibold border-2 border-blue-800 ease-in-out duration-300 hover:text-white hover:bg-blue-800 px-3 py-2">Cancelar</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>