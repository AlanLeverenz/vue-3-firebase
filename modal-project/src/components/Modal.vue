<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // these are the props his component accepts
    // they can be inserted in the template, passed in from the parent
    // class attributes can be bound with a boolean
    props: ['header', 'text', 'theme'],
    // custom event $emit so parent knows
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
/* these styles will override globals if named the same */
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top:0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: rgb(6, 235, 181);
        border: none;
        padding: 0;
    }
    .modal p {
        font-style: normal;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }

</style>