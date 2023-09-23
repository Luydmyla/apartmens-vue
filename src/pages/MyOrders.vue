<template>
    <main class="my-orders-page">
        <SectionWithHeaderSpacer>
            <Container>
                <section class="my-orders-page__content">
                    <MainTitle> Замовлення </MainTitle>
                    <OrdersList :items="orders" />
                </section>
            </Container>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer.vue";
import MainTitle from "../components/shared/MainTitle.vue";
import OrdersList from "../components/my-orders/OrdersList.vue";
import { getOrders } from "../services/orders.service"

export default {
    name: 'MyOrdersPage',
    components: {
        Container,
        SectionWithHeaderSpacer,
        MainTitle,
         OrdersList,
    },
    data() {
        return {
            orders: [],
        }
    },
    async created() {
        try {
            const { data } = await getOrders();
              console.log(data)
            this.orders = data;
        } catch (error) {
            this.$notify({
                type: 'error',
                title: 'Упссс... Щось пішло не так :/',
                text: error.message,
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.my-orders-page {
    &__content {
        max-width: 740px;
        margin: 0 auto;
    }
}
</style>