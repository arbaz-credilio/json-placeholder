<template>
  <UContainer
    class="mt-32 border-solid border-2 rounded-xl border-blue-500 p-10 w-96"
  >
    <UContainer class="mb-8"> <span>Name: </span> {{ user?.name }}</UContainer>
    <UContainer class="mb-8"><span>Email: </span>{{ user?.email }}</UContainer>
    <UContainer class="mb-8"
      ><span>Phone No. : </span> {{ user?.phone }}</UContainer
    >
    <UContainer class="mb-8"
      ><span>City: </span>{{ user?.address?.city }}</UContainer>
    <UButton color="red" class="ml-8" @click="deleteAndNavigate(id)"
      >Delete User</UButton>
    <UButton color="red" class="ml-8" @click="isOpen = true">Edit User</UButton
    >
  </UContainer>
  <div>

    <UModal v-model="isOpen">
      <UInput type="text" v-model="user.name" class="mb-4" />
      <UInput type="text" v-model="user.email" class="mb-4" />
      <UInput type="text" v-model="user.phone" class="mb-4" />
      <UInput type="text" v-model="user.address.city" />
    </UModal>
  </div>
</template>

<script setup lang="ts">
let users = getAllUsers();
const isOpen = ref(false)
const route = useRoute();
const id: string | string[] = route.params.id;
const user = users.value && users.value.find((each: any) => each.id.toString() === id);

const deleteAndNavigate = (id: string | string[]) => {
  deleteUser(id);
  users.value = users.value.filter((each: any) => {
    return each?.id.toString() !== id;
  });
  navigateTo("/");
};
</script>
