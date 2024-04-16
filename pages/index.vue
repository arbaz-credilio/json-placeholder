<template>
  <div class="lg:w-2/3 mx-auto">
    <UContainer class="mt-6 mb-16 md:w-96 w-full relative">
      <UIcon
        name="heroicons:magnifying-glass"
        class="absolute top-0 transform translate-y-3/4 z-10 mx-4"
      />
      <UInput
        v-model="value"
        placeholder="search"
        class="w-full input-tag"
        size="lg"
      />
    </UContainer>
    <UContainer
      class="grid md:grid-cols-4 grid-cols-2 grid-rows-3 gap-4 w-full my-4 items-end"
    >
      <UCard
        v-for="user in showUsers"
        :key="user.id"
        class="cursor-pointer h-full border-solid border border-sky-300 hover:border-2 hover:border-sky-400 card bg-neutral-100"
        @click="() => navigateTo(`user/${user.id}`)"
      >
        <UAvatar
          :src="`https://avatars.githubusercontent.com/u/${Math.floor(
            Math.random() * 500
          )}?v=4`"
          alt="Avatar"
          size="xl"
          class="mb-8"
        />
        <p class="text-lg">{{ user.name }}</p>
        <p class="text-sm text-gray-600">{{ user.phone }}</p>
      </UCard>

      <UButton
        color="blue"
        class="h-full justify-center text-lg"
        @click="isFormOpen = !isFormOpen"
        >Create User <UIcon name="heroicons:plus-16-solid"
      /></UButton>
    </UContainer>
    <UModal v-model="isFormOpen" prevent-close>
      <div class="p-8">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="relative left-[95%]"
          @click="isFormOpen = false"
        />
        <h1 class="text-center text-2xl font-bold mb-4">Create User</h1>
        <user-form />
      </div>
    </UModal>
    <!-- <UContainer class="ml-0 w-full md:w-1/4 m-auto" v-if="isFormOpen">
      
    </UContainer> -->
  </div>
</template>

<script setup lang="ts">
const users = getAllUsers();
const value: Ref<string> = ref("");
const showUsers = computed(() => {
  return (
    users.value &&
    users?.value.filter((each: any) => {
      return each?.name.toLowerCase().includes(value.value.toLowerCase());
    })
  );
});
let isFormOpen = useState("isFormOpen", () => ref(false));
</script>
<style>
.input-tag > input {
  padding-left: 3rem;
  font-size: 1rem;
}
</style>
