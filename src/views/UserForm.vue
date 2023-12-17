<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import AppForm from "./../components/AppForm.vue";
import swal from 'sweetalert2';

const Router = useRouter();

onMounted(() => {
  window.Swal = swal;
});

const submitForm = (formApp) => {
  Swal.fire({
    title: "Your Application Submit Successfuly",
    html: `
      <h6>Your Name Is: ${formApp.name} </h6>
      <h6>Your Age Is : ${formApp.age} </h6>
      <h6>Your Role Is : ${formApp.role} </h6>
    `,
    icon: "success"
  });
  Router.push(`/success?name=${formApp.name}&age=${formApp.age}&role=${formApp.role}`);
}
</script>

<template>
  <app-form @submitApp="submitForm" />
</template>
