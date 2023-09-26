<template>
    <div class="orders-item">
        <img :src="order.apartment.imgUrl" alt="фото апартаментів" class="orders-item__photo" />
        <div class="orders-item__details">
            <div class="orders-item__text">
                <h2 class="orders-item__title">{{ order.apartment.title }}</h2>
                <p class="orders-item__location">{{ order.apartment.location.city }}</p>
            </div>
            <div class="orders-item__cost">
                <span class="orders-item__price">UAH {{ order.apartment.price }}</span> за ніч
            </div>
        </div>
            <Button @click="handledeleteOrdersByID" :loading ="loading" > Видалити </Button>
    </div>
</template>

<script>
import { deleteOrdersByID } from "../../services/orders.service"
import Button from '../shared/Button.vue'
export default {
    name: "OrdersItem",
    components: {
        Button,
    },
    props: {
        order: {
            type: Object,
            requared: true,
        }
    },
    data() {
        return {
            loading: false,
        }
    },
    methods: {
        async handledeleteOrdersByID() {
          const   orderId= this.order.id
                 console.log(orderId)
            
            
            try {
                this.loading = true;
                await deleteOrdersByID(orderId);
              
                this.$notify({
                    type: 'success',
                    title: 'Замовлення видалено',

                });

                this.$emit("deleted", this.order );

            } catch (error) {
                this.$notify({
                    type: 'error',
                    title: 'Сталася помилка',
                    text: error.message,
                });
            }
            finally {
                this.loading = false
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.orders-item {
    display: flex;
    margin-bottom: 20px;

    &__title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__photo {
        display: block;
        width: 45%;
        height: 190px;
        object-fit: cover;
    }

    &__details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        padding: 20px;
        border: 2px solid #e1efff;
        border-left: none;
    }

    &__price {
        font-size: 20px;
        font-weight: 700;
    }
}
</style>