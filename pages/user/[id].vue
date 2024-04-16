<template>
  <UContainer
    class="mt-32 border-solid border-2 rounded-xl border-blue-500 p-10 w-96 text-center bg-neutral-100">
    <div class="flex justify-center items-center ">
      <UAvatar
        :src="`https://avatars.githubusercontent.com/u/${Math.floor(
          Math.random() * 500
        )}?v=4`"
        alt="Avatar"
        size="3xl"
        class="mb-8"
      />
    </div>
    <UContainer class="mb-4 text-gray-600"><span class="text-gray-700 font-medium">Name: </span> {{ user?.name }}</UContainer>
    <UContainer class="mb-4 text-gray-600"><span class="text-gray-700 font-medium">Email: </span>{{ user?.email }}</UContainer>
    <UContainer class="mb-4 text-gray-600">
      <span class="text-gray-700 font-medium">Phone No. : </span> {{ user?.phone }}
    </UContainer>
    <UContainer class="mb-8 text-gray-600">
      <span class="text-gray-700 font-medium">City: </span>{{ user?.address?.city }}
    </UContainer>
    <div class="flex gap-4 justify-center">
      <UButton color="red" @click="deleteAndNavigate(id)"><UIcon name="heroicons:trash" class="text-2xl text-white"/></UButton>
      <UButton color="green" @click="updateUser(id)"><UIcon name="heroicons:pencil" class="text-2xl text-white" /></UButton>
    </div>
  </UContainer>
  <NuxtSnackbar />
  <div>
    <UModal v-model="isOpen">
      <div class="p-4">
        <h1 class="mb-8 text-center text-xl font-bold">Update User</h1>
        <UInput type="text" v-model="user.name" class="mb-4" />
        <UInput type="text" v-model="user.email" class="mb-4" />
        <UInput type="text" v-model="user.phone" class="mb-4" />
        <UInput type="text" v-model="user.address.city" />
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
let users = getAllUsers();
const snackbar = useSnackbar();
const isOpen = ref(false);
const route = useRoute();
const id: string | string[] = route.params.id;
const user =
  users.value && users.value.find((each: any) => each.id.toString() === id);

const deleteAndNavigate = (id: string | string[]) => {
  deleteUser(id);
  users.value = users.value.filter((each: any) => {
    return each?.id.toString() !== id;
  });
  snackbar.add({
    type: "error",
    text: "User is deleted ",
  });
  setTimeout(() => {
    navigateTo("/");
  }, 1000);
};

const updateUser = (id: string | string[]) => {
  snackbar.add({
    type: "success",
    text: "User is about to update ",
  });
  isOpen.value = true;
  updateUserCall(id);
};
</script>
