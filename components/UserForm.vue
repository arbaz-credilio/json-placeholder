<template>
  <UForm :schema="Validation" :state="state" @submit="hanldeForm" >
    <UFormGroup name="name" label="Name">
      <UInput type="text" v-model="state.name"/>
    </UFormGroup>
    <UFormGroup name="email" label="Email">
      <UInput type="email" v-model="state.email"/>
    </UFormGroup>
    <UFormGroup name="phone" label="Phone No.">
      <UInput type="text" v-model="state.phone"/>
    </UFormGroup>
    <UFormGroup name="city" label="City">
      <UInput type="text" v-model="state.address.city"/>
    </UFormGroup>
    <UButton type="submit" class="w-full mt-4 justify-center">Submit</UButton>
  </UForm>
  <NuxtSnackbar />
</template>

<script setup lang="ts">
import type { z } from "zod";
import type { FormSubmitEvent } from "~/node_modules/@nuxt/ui/dist/runtime/types/form";
import { Validation } from "~/schemas/RegisterSchemas";
const snackbar = useSnackbar();

const state = ref({
  id: "",
  name: "",
  email: "",
  phone: "",
  address: { city: "" },
});
const users = getAllUsers();

const hanldeForm = (event: FormSubmitEvent<z.output<typeof Validation>>) => {
  const id: string = Math.floor(Math.random() * 1000).toString();
  event.data.id = id;
  createUser();
  const newUser = ref(event.data);
  users.value.push(newUser.value);
  snackbar.add({
    type: "success",
    text: "User is created ",
  });

  state.value = {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: { city: "" },
  };
  const formOpen = useState("isFormOpen")
  formOpen.value = false;
};
</script>
