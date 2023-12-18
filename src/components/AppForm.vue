<script setup>
import { reactive, computed } from "vue";
import AppFormInput from './AppFormInput.vue';
import AppFormSelect from './AppFormSelect.vue';
import userRoles from './../data/roles.json';

const formApp = reactive({
  name: '',
  age: null,
  role: -1,
});

// TODO: Define custom events for emitting from child components
// const ????

const submitForm = () => {
  /*
  ** TODO: 
  ***** 1. Create a new object with the form app data: name, age, and role title
  ***** 2. call the 'submitForm' Method which exist in the parent component and pass the new object
  */
};

/*
**** TODO:
***** 1. Define a computed property to check if the form is disabled or not
***** 2. The form submit button is disabled if the name, age is empty and role not selected
***** 3. Add new classes based on the form's state:
         - 'bg-gray-200' if the form is disabled
         - 'hover:bg-blue-600 shadow-lg shadow-blue-600' if the form is enabled
*/
// const isFormDisabled = ???
</script>

<template>
  <div class="bg-gray-700 p-8 rounded-md shadow-lg w-[30rem]">
    <h2 class="text-2xl font-semibold mb-4 text-gray-200">User Registration</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <app-form-input type="text" label="Full Name" input-id="name" v-model="formApp.name" />
      </div>

      <div class="mb-4">
        <app-form-input type="number" label="Age" input-id="age" v-model="formApp.age" />
      </div>

      <div class="mb-4">
        <app-form-select label="Role" select-id="role" v-model="formApp.role" placeholder="Please Select Your Role">
          <template #content>
            <!-- TODO: Loop through userRoles -->
            <option :value="role.id">
              {{ role.title }}
            </option>
          </template>
        </app-form-select>
      </div>

      <!-- TODO: Edit button to match the required result -->
      <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-10">
        Submit
      </button>
    </form>
  </div>
</template>
