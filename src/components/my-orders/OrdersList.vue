<template>
    <div     class="orders-list">
        <p v-if="!items.length"> Замовлень немає </p>
           <template v-else>
            <OrdersItem v-for="order in items" :key="order.id" :order="order" @deleted="onOrderDeleted"/>
        </template>

    </div>
</template>

<script>
import OrdersItem from "./OrdersItem.vue"
export default {
    name: "OrdersList",
    components: {
        OrdersItem,
    },
    props: {
        items: {
            type: Array,
            requared: true,
        }
    },
    methods: {
        onOrderDeleted(order) {
            this.$emit('orderDeleted', order)
        }
    }
}
</script>

<style lang="scss" scoped>
.orders-list {
    margin-top: 20px;
}
</style>