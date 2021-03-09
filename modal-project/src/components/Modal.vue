<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
                <slot name="links2"></slot>
            </div>
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // click.self only works on that element (not children)
    // these are the props his component accepts
    // they can be inserted in the template, passed in from the parent
    // class attributes can be bound with a boolean
    // props: ['theme'],
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
    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #333;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }
    .modal.sale .actions {
        color: white;
    }
    .modal.sale .actions a{
        color: white;
    }

</style>