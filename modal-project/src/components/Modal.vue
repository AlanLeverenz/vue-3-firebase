<template>
    <div class="backdrop">
        <div class="modal">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // these are the props his component accepts
    // they can be inserted in the template, passed in from the parent
    props: ['header', 'text']
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

</style>