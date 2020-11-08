<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input!" @close="confirmError">
        <template #default> <!-- v-slot:default means #default -->
            <p>Unfortunately, at least one input value is invalid!</p>
            <p>Please, check all the inputs and make sure that you entered al least a few characters in each field!</p>
        </template>
        <template #actions><!-- v-slot:action means #actions -->
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label>Title</label>
                <input id="title" name="title" type="text" ref="inputTitle"/>
            </div>
            <div class="form-control">
                <label>Description</label>
                <textarea id="description" name="description" rows="3" type="text" ref="inputDescription"></textarea>
            </div>
            <div class="form-control">
                <label>Link</label>
                <input id="link" name="link" type="url" ref="inputLink"/>
            </div>
            <div class="form-control">
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data(){
        return{
            inputIsInvalid: false,
        }
    },
    methods: {
        submitData(){
            const enteredTitle = this.$refs.inputTitle.value
            const enteredDescription = this.$refs.inputDescription.value
            const enteredLink = this.$refs.inputLink.value

            if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === ''){
                this.inputIsInvalid = true
                return
            }

            this.addResource(enteredTitle, enteredDescription, enteredLink)
        },
        confirmError(){
            this.inputIsInvalid = false 
        }
    }
    
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>